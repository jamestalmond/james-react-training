import React, { Component } from 'react';
import './App.css';

import Movie from './Movie';

const movies = [
	{
		id: 1,
		title: 'Star Wars'
	},
	{
		id: 2,
		title: 'Spider-Man'
	},
	{
		id: 3,
		title: 'Lord of the Rings'
	},
	{
		id: 4,
		title: 'Iron Man'
	}
]

class App extends Component {
	render() {
		return (
			<div className="App">
				<header className="App-header">
					Logo
				</header>
				{ movies.map(movie => <Movie key={ movie.id } movie={ movie } />) }
			</div>
		);
	}
}

export default App;
