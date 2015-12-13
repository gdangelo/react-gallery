var React = require('react');
var GalleryItem = require('../GalleryItem/GalleryItem');

var s = require('./Gallery.scss');

module.exports = React.createClass({
  componentDidMount() {
    var links = document.getElementsByClassName('gallery');
    $('.gallery').unbind('click').bind('click', function(event) {
      blueimp.Gallery(links, {
        index: $(this).get(0),
        event: event
      });
    });
  },
  render: function () {
    return (
      <div className="row">
        {this.renderItems()}
      </div>
    );
  },
  renderItems: function () {
    return this.props.items.map(function(item){
      return <GalleryItem key={item.id} {...item} />;
    });
  }
});
