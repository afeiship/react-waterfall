# react-waterfall
> Waterfall component for react.

[![version][version-image]][version-url]
[![license][license-image]][license-url]
[![size][size-image]][size-url]
[![download][download-image]][download-url]

## installation
```shell
npm install -S @jswork/react-waterfall
```

## properties
| Name      | Type   | Required | Default | Description |
| --------- | ------ | -------- | ------- | ----------- |
| className | string | false    | -       |
| items     | array  | false    | []      |
| template  | func   | false    | noop    |
| column    | number | false    | 3       |             |


## usage
1. import css
  ```scss
  @import "~@jswork/react-waterfall/dist/style.css";

  // or use sass
  @import "~@jswork/react-waterfall/dist/style.scss";

  // customize your styles:
  $react-waterfall-options: ()
  ```
2. import js
  ```js
  import ReactDemokit from '@jswork/react-demokit';
  import React from 'react';
  import ReactDOM from 'react-dom';
  import ReactWaterfall from '@jswork/react-waterfall';
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
        <ReactDemokit
          className="p-3 app-container"
          url="https://github.com/afeiship/react-waterfall">
          <p>
            <input type="range" max={10} onChange={this.onChange} />
          </p>
          <ReactWaterfall
            column={column}
            items={items}
            template={this.template}
          />
        </ReactDemokit>
      );
    }
  }

  ReactDOM.render(<App />, document.getElementById('app'));

  ```

## documentation
- https://afeiship.github.io/react-waterfall/


## license
Code released under [the MIT license](https://github.com/afeiship/react-waterfall/blob/master/LICENSE.txt).

[version-image]: https://img.shields.io/npm/v/@jswork/react-waterfall
[version-url]: https://npmjs.org/package/@jswork/react-waterfall

[license-image]: https://img.shields.io/npm/l/@jswork/react-waterfall
[license-url]: https://github.com/afeiship/react-waterfall/blob/master/LICENSE.txt

[size-image]: https://img.shields.io/bundlephobia/minzip/@jswork/react-waterfall
[size-url]: https://github.com/afeiship/react-waterfall/blob/master/dist/react-waterfall.min.js

[download-image]: https://img.shields.io/npm/dm/@jswork/react-waterfall
[download-url]: https://www.npmjs.com/package/@jswork/react-waterfall
