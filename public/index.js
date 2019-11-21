import ReactWaterfall from '../src/main';
import ReactDOM from 'react-dom';
import React from 'react';
import './assets/style.scss';

class App extends React.Component {
  constructor(inProps) {
    super(inProps);
    this.state = {
      items: [
        { src: 'https://via.placeholder.com/150x200', id: '111' },
        { src: 'https://via.placeholder.com/150x300', id: '222' },
        { src: 'https://via.placeholder.com/150x80', id: '333' },
        { src: 'https://via.placeholder.com/150x20', id: '444' },
        { src: 'https://via.placeholder.com/150x180', id: '555' }
      ]
    };
  }

  template = ({ item }) => {
    return (
      <div key={item.id} className={`is-item`}>
        <img width="100%" src={item.src} />
        <p>Cap = {item.id}</p>
      </div>
    );
  };

  render() {
    return (
      <div className="app-container">
        <ReactWaterfall items={this.state.items} template={this.template} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
