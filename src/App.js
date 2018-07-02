import React, { Component } from 'react';
import './App.css';

import Movie from './Movie';

class App extends Component {

	state = {
		movies: []
	}
	
	async componentDidMount() {
		try {
			const res = await fetch('https://api.themoviedb.org/3/discover/movie?api_key=0eaff50778a0b2bf2c375f3d8e8755b7&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1');
			const movies = await res.json();
			this.setState({
				movies: movies.results
			});
		} catch(e) {
			console.log(e);
		}
	}

	render() {
		return (
			<div className="App">
				<header className="App-header">
					<h1>Movie DB</h1>
				</header>
				{ this.state.movies.map(movie => <Movie key={ movie.id } movie={ movie } />) }
			</div>
		);
	}

}

export default App;