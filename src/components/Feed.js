import React, { Component } from 'react';
import moment from 'moment'

class Feed extends Component {
    render() {
        return (
            <div className='feed'>
                <div className="feed__settings">
                    <a href="https://www.youtube.com/feed/channels" className="c-blue s-17 w-medium">Manage Subscriptions</a>
                    <div className="format-flow">
                        <div className="flow-option active"><span className="mdi mdi-view-list"></span></div>
                        <div className="flow-option"><span className="mdi mdi-view-module"></span></div>
                    </div>
                </div>
                <div className="feed__container">
                    {this.drawVideos()}
                </div>
            </div>
        );
    }

    state = {}

    componentDidMount = () => {
        var urlQuery = window.location.search === '' ? null : JSON.parse('{"'+ window.location.search.substring(1).replace(/&/g, '","').replace(/=/g, '":"') +'"}')
        var apiKey = 'AIzaSyC_Irupn3NpxFrGkxymqSJ63LTy4OAhSug'
        var requestType = ['id', 'snippet', 'brandingSettings', 'contentDetails', 'invideoPromotion', 'statistics', 'topicDetails']
        var channelID = urlQuery === null ? 'UCK8sQmJBp8GCxrOtXWBpyEA' : urlQuery.channel
        var requestURL = `https://www.googleapis.com/youtube/v3/search?key=${apiKey}&channelId=${channelID}&part=${requestType[0]},${requestType[1]}&order=date&maxResults=50`

        console.log(urlQuery)
        fetch(requestURL).then(res => res.json()).then(res => this.setState({feedVideos: res.items}))
    }

    drawVideos = () => {
        if(this.state.feedVideos){
            return this.state.feedVideos.map(video => {
                var videoID = video.id.videoId
                var { channelTitle, description, publishedAt, title, thumbnails } = video.snippet
                var thumb = thumbnails.medium.url
                var ytURL = 'https://www.youtube.com/watch?v='

                return (
                    <a key={videoID} className="video-item sd-div mar-v-12 bg-white" href={ytURL + videoID}>
                        <img src={thumb} alt=""/>
                        <div className="video-details mar-h-16">
                            <div className="channel-views mar-v-8">
                                <div className="imgs-small bg-gray"></div>
                                <span className="c-medium w-medium s-14 mar-h-16">{channelTitle}</span>
                                <div>
                                    <p className="c-medium w-regular s-14">{}&bull;{moment(publishedAt, "YYYYMMDD").fromNow()}</p>
                                </div>
                            </div>

                            <div className="ln-light"></div>
                            <div className="mar-v-8">

                                <h1 className="c-strong w-medium s-17">{title}</h1>
                                <p className="c-light w-regular s-14 mar-v-8 lh-mid">{description}</p>
                            </div>
                        </div>
                    </a>
                )
            })
        }
    }
}

export default Feed;