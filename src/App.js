import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import $ from 'jquery';
import Poster from './Poster';

class App extends Component {
  // we call constructor because we need access to 'this'
  constructor(props){
    //App is a subclass. A subclass of Component
    //Therefore, we MUST include a super
    //component only cares about render(), componentWillMount(),componenetDidMount() here
    super(props)
    this.state = {
      movies:[]
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // I am special too, I will run before render() method
  componentWillMount(){
    console.log('The component is about mount')
  }

  // I am cpecial. I am not a normal method
  // react cares about methodI will run one time, after the first render
  componentDidMount(){
    console.log("The component mounted");
    var url = 'http://api.themoviedb.org/3/movie/now_playing?api_key=fec8b5ab27b292a68294261bb21b04a5'
    $.getJSON(url,(movieData)=>{
    console.log(movieData)
    // this.state = do note ever do this. do not fight the irs
    this.setState({//setState built into react
      movies: movieData.results
    })
  })
}

  handleSubmit(event){
      event.preventDefault();
      console.log('form submitted');
      var value = document.getElementById('searchTerm').value;
      var url = 'https://api.themoviedb.org/3/search/movie?api_key=fec8b5ab27b292a68294261bb21b04a5&query='+value;
      $.getJSON(url,(movieSearchData)=>{
        // we have the new movies. update state
        this.setState({
          //this will cause to rerender
          movies : movieSearchData.results
        })
      })
    }

  render() {
    var postersArray = [];
    // First time through (when the coponent mounts), this.state.movies
    // will be an empty array
    // After the component mounts, this.state.movies
    this.state.movies.map((movie, index)=>{
      postersArray.push(<Poster key={index} movie={movie}/>)
      return null //to get linter to shut up
    });

    // another way
    // var postersArray = this.state.movies.map((movie, index)=>{
    //   return (<Poster key={index} poster={movie}/>)
    // });

    return (
      <div className = "App">
        <h1>this is the movie app... again</h1>
        <form onSubmit={this.handleSubmit}>
          <input id="searchTerm" type="text" placeholder="Movie Title" />
          <button type="submit" className="btn btn-primary">Search</button>
        </form>
        {postersArray} 
      </div>
    )
  }
}

export default App;

//this is the Class - rather object that we invoke when we create Class
