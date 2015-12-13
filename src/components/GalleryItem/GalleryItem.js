var React = require('react');

var s = require('./GalleryItem.scss');

module.exports = React.createClass({
  getDefaultProps: function () {
    return {
      title: "Thumbnail label",
      subtitle: "Lorem ipsum",
      image: "https://facebook.github.io/react/img/logo_og.png"
    };
  },
  getInitialState: function () {
    return {
      liked: this.props.liked || false,
      counts: (Math.round(Math.random() * 20) + 4)
    }
  },
  handleIncrement: function () {
    if(this.state.liked) return;
    this.setState({
      liked: true,
      counts: this.state.counts+1
    });
  },
  render: function () {
    return (
      <div className="col-sm-6 col-md-4">
        <div className="thumbnail">
          <img src={this.props.image} alt={this.props.title} />
          <div className="caption text-center">
            <h4>{this.props.title}</h4>
            <h5>{this.props.subtitle}</h5>
            <a className={"btn btn-primary" + (this.state.liked ? " liked" : "")} onClick={this.handleIncrement}>
              <span className="glyphicon glyphicon-heart"></span> {this.state.counts}
            </a>
          </div>
        </div>
      </div>
    );
  }
});
