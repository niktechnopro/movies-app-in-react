// thie very first thing in most component, is to import react
import React, { Component } from 'react';
// every component has to have render
// poster job is to change the movies
// I am a presentational component- I am here to make code cleaner

class Poster extends Component{
	render(){
		var imagePath =  `http://image.tmdb.org/t/p/w300${this.props.movie.poster_path}`;
		var title = this.props.movie.title
		var movieId = this.props.movie.id;
		var moviePath = `http://themoviedb.org/movie/${this.props.movie.id}`
		return(
			<div className="col-sm-3">
				<h4>{title}</h4>
				<a href={moviePath}><img src={imagePath}/></a>
			</div>
		)
	}
}

export default Poster;