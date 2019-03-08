import React, { Component } from 'react';
import axios from 'axios'

//Components
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import Feed from './components/Feed'

class App extends Component {
	render() {
		return (
			<div className="App">
				<Header/>
				<div className="main-content">
					<Sidebar/>
					<Feed/>
				</div>
			</div>
		);
	}
}



export default App;
