import React from 'react';
import Moment from 'moment';


import './date-time.css';

export default class DateTime extends React.Component {

	render() {

		return (
			<div className="date-time">
				<span>{Moment().format('dddd MMMM YYYY hh:mm')}</span>
			</div>
		)
	}
}