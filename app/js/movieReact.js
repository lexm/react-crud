module.exports = (React, ReactDOM) => {
  // var React = require('react');
  // var ReactDOM = require('react-dom');

  var movies = [
    { "name": "The Shining", "release_date": "May 23, 1980" },
    { "name": "A Clockwork Orange", "release_date": "2 February 1972" },
    { "name": "Spartacus", "release_date": "October 6, 1960" },
    { "name": "Psycho", "release_date": "September 8, 1960" },
    { "name": "Vertigo", "release_date": "May 9, 1958" }
  ];

  var Hello = React.createClass({
    render: function() {
      return (
        <h1>Hello, world</h1>
      )
    }
  });

  var Movie = React.createClass({
    render: function() {
      return (
        <div>
          <h3>Movie name: {this.props.name}</h3>
          <p>Release Date: {this.props.date}</p>
          <div></div>
          <button onClick={this.props.onClick}>Delete</button>
        </div>
      )
    }
  })

  var App = React.createClass({

    deletePerson: function(movie) {
      this.state.movies.splice(this.state.movies.indexOf(movie), 1);
      this.setState({movies: this.state.movies});
    },
    getInitialState: function() {
      return {
        movies: this.props.movies.splice(0)
      }
    },
    render: function() {
      var that = this;
      return (
        <div>
          {this.state.movies.map(function(movie, index) {
            return (
              <Movie onClick={that.deletePerson.bind(null, movie)} key={index} name={movie.name} date={movie.release_date}></Movie>
            )
          })}
        </div>
      )
    }
  })



  ReactDOM.render(
    <App movies={movies}></App>,
    document.getElementById('hello')
  );
}
