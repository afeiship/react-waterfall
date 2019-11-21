import ReactWaterfall from '../src/main';
import ReactDOM from 'react-dom';
import React from 'react';
import './assets/style.scss';

class App extends React.Component {
  constructor(inProps) {
    super(inProps);
    this.state = {
      items: [
        { src: 'https://picsum.photos/id/658/200/300', id: '111' },
        { src: 'https://picsum.photos/id/653/200/100', id: '222' },
        { src: 'https://picsum.photos/id/112/300/200', id: '333' },
        { src: 'https://picsum.photos/id/656/500/200', id: '444' },
        { src: 'https://picsum.photos/id/115/100/120', id: '555' },
        { src: 'https://picsum.photos/id/621/100/180', id: '666' },
        { src: 'https://picsum.photos/id/634/160/120', id: '777' },
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
