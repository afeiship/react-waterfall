import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import noop from '@feizheng/noop';
import objectAssign from 'object-assign';

const CLASS_NAME = 'react-waterfall';

export default class extends Component {
  static displayName = CLASS_NAME;
  static propTypes = {
    className: PropTypes.string,
    items: PropTypes.array,
    template: PropTypes.func,
    column: PropTypes.number
  };

  static defaultProps = {
    items: [],
    template: noop,
    column: 3
  };

  get justify() {
    const { column, items } = this.props;
    return items.length >= column;
  }

  get items() {
    const { column, items } = this.props;
    const result = [];
    items.forEach((item, index) => {
      const idx = index % column;
      result[idx] = result[idx] || [];
      result[idx].push(item);
    });
    return result;
  }

  get children() {
    const { template, column, items } = this.props;
    const children = [];
    const count = !this.justify ? items.length : column;
    for (let i = 0; i < count; i++) {
      children.push(
        <div key={i} className={`${CLASS_NAME}__column is-column`}>
          {this.items[i].map((item, index) => {
            return template({ item, index, column: i });
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
        className={classNames(
          { 'is-justify': this.justify },
          { 'is-aside': !this.justify },
          CLASS_NAME,
          className
        )}
        {...props}>
        {this.children}
      </div>
    );
  }
}
