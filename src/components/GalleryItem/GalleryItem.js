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
      hovering: false,
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
      <div className="col-xs-6 col-sm-4">
        <div className="thumbnail">
          <div className="image-preview"
            onMouseEnter={this.handleMouseEnter}
            onMouseLeave={this.handleMouseLeave}>

            {this.state.hovering ? this.icons() : null}
            <img src={this.props.image} alt={this.props.title} />
          </div>
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
  },
  icons: function () {
    return <div className="overlay"><span className="glyphicon glyphicon-zoom-in"></span></div>;
  },
  handleMouseEnter: function () {
    this.setState({hovering: true});
  },
  handleMouseLeave: function () {
    this.setState({hovering: false});
  }
});
