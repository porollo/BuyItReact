import React from 'react';

import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import PurchaseList from '../purchase-list';
import ItemStatusFilter from '../item-status-filter';
import PurchaseListItemAdd from  '../purchase-list-item-add';

import './app.css';
import DateTime from "../date-time";


export default class App extends React.PureComponent {

	maxId = 100;

	state = {
		purchaseData: [
			{label: 'Beer', important: false, id: 1},
			{label: 'Bread', important: true, id: 2},
			{label: 'Milk', important: false, id: 3},
			{label: 'Other', important: false, id: 4},
		]
	};

	deleteItem = (id) => {
		this.setState(({ purchaseData }) => {
			const idx = purchaseData.findIndex((el) => el.id === id );

			const arrayBefore = purchaseData.slice(0, idx);
			const arrayAfter = purchaseData.slice(idx + 1);
			const newArray = [...arrayBefore, ...arrayAfter];

			return {
				purchaseData: newArray
			}

		});
	};

	addItem = (text) => {
		const newItem = {
			label: text,
			important: false,
			id: this.maxId++
		};

		this.setState(({ purchaseData }) => {
			const newArray = [
				...purchaseData,
				newItem
			];

			return {
				purchaseData: newArray
			};

		});
	};

	onToggleImportant = (id) => {
		console.log('On Important Work' , id);
	};

	onToggleDone = (id) => {
		console.log('On Done Work' , id);
	};

	render() {
		return (
			<div className="buyit-app">

				<DateTime/>
				<AppHeader toBuy={1} done={3}/>

				<div className="top-panel d-flex">
					<SearchPanel/>
					<ItemStatusFilter/>
				</div>

				<PurchaseList
					purchases={this.state.purchaseData}
					onDeleted={ this.deleteItem}
					onToggleImportant={this.onToggleImportant}
					onToggleDone={this.onToggleDone} />

				<PurchaseListItemAdd onItemAdded = { this.addItem } />
			</div>
		);
	}
}