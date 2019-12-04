import ReactWaterfall from '../src/main';
import ReactDOM from 'react-dom';
import React from 'react';
import './assets/style.scss';

const items = [
  { src: 'https://picsum.photos/id/658/200/300', id: '111' },
  { src: 'https://picsum.photos/id/653/200/100', id: '222' },
  { src: 'https://picsum.photos/id/112/300/200', id: '333' },
  { src: 'https://picsum.photos/id/656/500/200', id: '444' },
  { src: 'https://picsum.photos/id/115/100/120', id: '555' },
  { src: 'https://picsum.photos/id/621/100/180', id: '666' },
  { src: 'https://picsum.photos/id/634/160/120', id: '777' },
  { src: 'https://picsum.photos/id/101/160/120', id: '888' },
  { src: 'https://picsum.photos/id/102/160/120', id: '999' },
  { src: 'https://picsum.photos/id/103/160/120', id: '100' }
];

class App extends React.Component {
  constructor(inProps) {
    super(inProps);
    this.state = {
      column: 3,
      items
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

  onChange = (inEvent) => {
    const { value } = inEvent.target;
    const _items = items.slice(0, parseInt(value, 10));
    this.setState({
      items: _items
    });
  };

  render() {
    const { items, column } = this.state;
    console.log('items:', items);
    return (
      <div className="app-container">
        <p>
          <input type="range" max={10} onChange={this.onChange} />
        </p>
        <ReactWaterfall
          column={column}
          items={items}
          template={this.template}
        />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
