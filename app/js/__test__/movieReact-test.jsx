const React = require('react-addons'),
      TestUtils = require('react-addons-test-utils'),
      expect = require('expect'),
      movieReact = require('../movieReact');

describe('render the movies', function() {
  it('renders something', function() {
    var movieApp = TestUtils.renderIntoDocument(
      <App movies={movies}></App>,
      document.getElementById('hello')
    );

    var h3s = TestUtils.scryRenderedDOMComponentsWithTag(
      movieApp, 'h3'
    );

    console.log(h3s);
  });
})
