import React from 'react';

import './purchase-list-item-add.css';

export default class PurchaseListItemAdd extends React.Component {

	state = {
		label: ''
	};

	onLabelChange = (e) => {
		this.setState({
			label: e.target.value
		});
	};

	onSubmit = (e) => {
		e.preventDefault();
		this.props.onItemAdded(this.state.label);
		this.setState({
			label:''
		});


	};


	render() {
		return (
			<form className="purchase-list-item-add d-flex" onSubmit={this.onSubmit}>
				<input type="text"
					   className="form-control"
					   onChange={this.onLabelChange}
					   placeholder="To Buy"
					   value={this.state.label}/>

				<button className="btn btn-primary"> Add</button>
			</form>
		)
	};
}