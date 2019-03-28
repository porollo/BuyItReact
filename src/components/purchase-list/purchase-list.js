import React from 'react';

import PurchaseListItem from '../purchase-list-item/purchase-list-item';
import './purchase-list.css';


const PurchaseList = ({ purchases, onDeleted, onToggleImportant, onToggleDone }) => {

    const elements = purchases.map((item) => {
      const { id, ...itemProps} = item;

        return (
            <li key={id} className="list-group-item">
              <PurchaseListItem { ...itemProps }
                onDeleted={() => onDeleted(id) }
                onToggleImportant={() => onToggleImportant(id) }
                onToggleDone={() => onToggleDone(id) }
              />
            </li> )
    });

    return (
        <ul className="list-group purchase-list">
          { elements }
        </ul>
    );
};

export default PurchaseList;