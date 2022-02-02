import React from 'react';
import ReactDOM from 'react-dom';

const newElement = React.createElement(
  'h1',
  null,
  'Hello, React!'
);

ReactDOM.render(newElement, document.getElementById('root'));
