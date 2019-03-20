import React from 'react';

import './purchase-list-item-add.css';

export default class PurchaseListItemAdd extends React.Component {

	render() {
	return (
		<div className="purchase-list-item-add">
			<button
				className="btn btn-primary"
				onClick={() => this.props.onItemAdded('Hello')}>
				Add Product
			</button>
		</div>
		)
	}
}