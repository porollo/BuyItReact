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
			this.createPurchaseItem('Beer'),
			this.createPurchaseItem('Bread'),
			this.createPurchaseItem('Milk'),
			this.createPurchaseItem('Other'),
		],
		searchFilter: '',
		purchaseFilter: 'all'
	};

	createPurchaseItem(label) {
		return {
			label,
			important: false,
			done: false,
			id: this.maxId++
		}
	}

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
		const newItem = this.createPurchaseItem(text);

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

	toggleProperty(arr, id, propName) {

		const idx = arr.findIndex((el) => el.id === id );
		const oldItem = arr[idx];
		const newItem = {...oldItem, [propName]: !oldItem[propName]};

		return [
			...arr.slice(0, idx),
			newItem,
			...arr.slice(idx + 1),
		];
	}

	onToggleImportant = (id) => {
		this.setState(({ purchaseData }) => {

			return {
				purchaseData: this.toggleProperty(purchaseData, id, 'important')
			};
		});
	};

	onToggleDone = (id) => {
		this.setState(({ purchaseData }) => {

			return {
				purchaseData: this.toggleProperty(purchaseData, id, 'done')
			};
		});
	};

	onSearchChange = (searchFilter) => {
		this.setState({ searchFilter });
	};

	search (items, searchFilter) {

		if (searchFilter.length === 0) {
			return items;
		}

		return items.filter((item) => {
			return item.label.toLowerCase().indexOf(searchFilter.toLowerCase()) > -1;
		});
	}

	static purchaseFilter (items, purchaseFilter) {
		switch (purchaseFilter) {
			case 'all':
				return items;
			case 'active':
				return items.filter((item) => !item.done);
			case  'done':
				return items.filter((item) => item.done);
			default:
				return items;
		}
	};


	onPurchaseFilterChange = (purchaseFilter) => {
		this.setState({ purchaseFilter });

	};




	render() {
		const { purchaseData, searchFilter, purchaseFilter } = this.state;

		const visibleItems = App.purchaseFilter(this.search(purchaseData, searchFilter), purchaseFilter );

		const doneCount = purchaseData.filter((el) => el.done).length;
		const importantCount = purchaseData.length - doneCount;

		return (
			<div className="buyit-app">
				<DateTime/>
				<AppHeader toBuy={ importantCount } done={ doneCount }/>
				<div className="top-panel d-flex">
					<SearchPanel onSearchChange = { this.onSearchChange }/>
					<ItemStatusFilter purchaseFilter={ purchaseFilter } onPurchaseFilterChange={ this.onPurchaseFilterChange }/>
				</div>
				<PurchaseList
					purchases={ visibleItems }
					onDeleted={ this.deleteItem }
					onToggleImportant={ this.onToggleImportant }
					onToggleDone={ this.onToggleDone } />

				<PurchaseListItemAdd onItemAdded = { this.addItem } />
			</div>
		);
	}
}