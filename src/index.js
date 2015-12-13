var React = require('react');
var ReactDOM = require('react-dom');
var App = require('./components/App/App');

options = {
  galleryItems: [
    { id: 1, title: "Machu Pichu", subtitle: "5th Jan - 12th Jan", image: "http://img0.mxstatic.com/wallpapers/e0d9ab5f55240726b2f614fb33d5efc8_large.jpeg", liked: true },
    { id: 2, title: "Shanghai", subtitle: "13th Feb - 5th Aug", image: "https://upload.wikimedia.org/wikipedia/commons/c/c8/Shanghai_-_Bund_at_Night.jpg" },
    { id: 3, title: "Vintage cameras", subtitle: "13th Dec - 14th Dec", image: "http://digitalimagesmadeeasy.com/wp-content/uploads/2011/08/camera_vintage.jpg" }
  ]
}

var element = React.createElement(App, options);
ReactDOM.render(element, document.querySelector('.container'));
