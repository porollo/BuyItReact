import React from 'react';

export default class ItemStatusFilter extends React.Component {

	buttons =[
		{ name: 'all', label: 'All'},
		{ name: 'active', label: 'Active'},
		{ name: 'done', label: 'Done'}
	];

	render() {

		const { purchaseFilter, onPurchaseFilterChange } = this.props;

		const buttons = this.buttons.map(({name, label}) => {

			const isActive = purchaseFilter === name;
			const claxx =  isActive ? 'btn-info' : 'btn-outline-secondary';
			return (
				<button type="button"
						className={`btn ${claxx}`}
						key={ name }
						onClick={() => onPurchaseFilterChange(name)}>

					{ label }</button>
			);
		});

		return (
			<div className="btn-group">
				{buttons}
			</div>
		);
	}
}