import React from 'react';
import { render } from 'react-dom';
import App from './components/App/App';

let options = {
  galleryItems: [
    { id: 1, title: "Camera", subtitle: "5th Jan - 12th Jan", image: "https://cloud.githubusercontent.com/assets/4352286/11920432/f0aaff34-a76f-11e5-8456-a5d78b089233.jpg", liked: true },
    { id: 2, title: "Notebook", subtitle: "13th Feb - 5th Aug", image: "https://cloud.githubusercontent.com/assets/4352286/11920434/f0ac4d44-a76f-11e5-9190-b93bc72688ed.jpg" },
    { id: 3, title: "Thinking", subtitle: "13th Dec - 14th Dec", image: "https://cloud.githubusercontent.com/assets/4352286/11920433/f0ab6a28-a76f-11e5-8ee9-525dc22ca8a8.jpg" }
  ]
};

let element = React.createElement(App, options);
render(element, document.querySelector('.container'));
