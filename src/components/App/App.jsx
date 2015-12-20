import React, { Component } from 'react';
import Gallery from '../Gallery/Gallery';
import s from './App.scss';

class App extends Component {

  render() {
    return <Gallery items={this.props.galleryItems} />;
  }

}

export default App;
