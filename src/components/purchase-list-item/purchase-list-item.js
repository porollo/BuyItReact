import React from 'react';

import './purchase-list-item.css';

export default class PurchaseListItem extends React.Component {

  render() {
    const { label,onDeleted, onToggleImportant, onToggleDone, done, important } = this.props;

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
          onClick={ onToggleDone }>
          {label}
        </span>

        <button type="button"
                className="btn btn-outline-danger btn-sm float-right"
                onClick={onDeleted}>
          <i className="fa fa-trash-o" />
        </button>

        <button type="button"
                className="btn btn-outline-success btn-sm float-right"
                onClick={ onToggleImportant }>
          <i className="fa fa-exclamation" />
        </button>


      </span>
    );
  };
}