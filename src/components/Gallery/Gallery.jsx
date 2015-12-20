import React, { Component } from 'react';
import GalleryItem from '../GalleryItem/GalleryItem';
import s from './Gallery.scss';

class Gallery extends Component {

  constructor(props) {
    super(props);
    // Manually bind this method to the component instance...
    this.renderItems = this.renderItems.bind(this);
  }

  componentDidMount() {
    let links = document.getElementsByClassName('gallery');
    $('.gallery').unbind('click').bind('click', event => {
      blueimp.Gallery(links, {
        index: event.currentTarget,
        event: event
      });
    });
  }

  render() {
    return (
      <div className="row">
        {this.renderItems()}
      </div>
    );
  }

  renderItems() {
    return this.props.items.map(function(item){
      return <GalleryItem key={item.id} {...item} />;
    });
  }

};

export default Gallery;
