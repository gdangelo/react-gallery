var React = require('react');
var Gallery = require('../Gallery/Gallery');

var s = require('./App.scss');

module.exports = React.createClass({
  render: function () {
    return <Gallery items={this.props.galleryItems} />;
  }
});
