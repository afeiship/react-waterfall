import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import noop from '@feizheng/noop';
import objectAssign from 'object-assign';

const CLASS_NAME = 'react-waterfall';

export default class extends Component {
  static displayName = CLASS_NAME;

  /*===properties start===*/
  static propTypes = {
    className: PropTypes.string,
    items: PropTypes.array,
    template: PropTypes.func,
    column: PropTypes.shape({
      size: PropTypes.number,
      width: PropTypes.number
    })
  };

  static defaultProps = {
    items: [],
    template: noop,
    column: {
      size: 3,
      width: 200
    }
  };
  /*===properties end===*/

  get items() {
    const { column, items } = this.props;
    const result = [];
    items.forEach((item, index) => {
      const idx = index % column.size;
      result[idx] = result[idx] || [];
      result[idx].push(item);
    });
    return result;
  }

  get children() {
    const { template, column } = this.props;
    const children = [];
    for (let i = 0; i < column.size; i++) {
      children.push(
        <div
          key={i}
          className={`${CLASS_NAME}__column`}
          style={{ width: column.width }}>
          {this.items[i].map((item, index) => {
            return template({
              item,
              index,
              column: i
            });
          })}
        </div>,
        '\n'
      );
    }
    return children;
  }

  render() {
    const {
      className,
      children,
      items,
      template,
      column,
      ...props
    } = this.props;
    return (
      <div
        data-component={CLASS_NAME}
        className={classNames(CLASS_NAME, className)}
        {...props}>
        {this.children}
      </div>
    );
  }
}
