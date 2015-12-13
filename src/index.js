var React = require('react');
var ReactDOM = require('react-dom');
var App = require('./components/App/App');

options = {
  galleryItems: [
    { id: 1, title: "Machu Pichu", subtitle: "5th Jan - 12th Jan", image: "http://img0.mxstatic.com/wallpapers/e0d9ab5f55240726b2f614fb33d5efc8_large.jpeg", liked: true },
    { id: 2, title: "Machu Pichu", subtitle: "13th Feb - 5th Aug", image: "http://img0.mxstatic.com/wallpapers/e0d9ab5f55240726b2f614fb33d5efc8_large.jpeg" },
    { id: 3, title: "Machu Pichu", subtitle: "13th Dec - 14th Dec", image: "http://img0.mxstatic.com/wallpapers/e0d9ab5f55240726b2f614fb33d5efc8_large.jpeg" }
  ]
}

var element = React.createElement(App, options);
ReactDOM.render(element, document.querySelector('.container'));
