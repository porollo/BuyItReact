import React from 'react';

import './purchase-list-item.css';

export default class PurchaseListItem extends React.Component {

  state = {
    done: false,
    important: false
  };

  onLabelClick = () => {
    this.setState(({done}) => {
      return {
        done: !done
      };
    });
  };

  onImportant = () => {
    this.setState(({important}) => {
      return {
        important: !important
      };
    });
  };

  render() {
    const { label,onDeleted } = this.props;
    const { done, important } = this.state;

    let classNames = 'purchase-list-item';
    if (done) {
      classNames += ' done';
    }

    if (important) {
      classNames += ' important';
    }

    return (
      <span className={classNames}>
        <span
          className="purchase-list-item-label"
          onClick={ this.onLabelClick }>
          {label}
        </span>

        <button type="button"
                className="btn btn-outline-danger btn-sm float-right"
        onClick={onDeleted}>
          <i className="fa fa-trash-o" />
        </button>

        <button type="button"
                className="btn btn-outline-success btn-sm float-right"
                onClick={this.onImportant}>
          <i className="fa fa-exclamation" />
        </button>


      </span>
    );
  };
}