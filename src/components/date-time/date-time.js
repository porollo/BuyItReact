import React from 'react';

import './date-time.css';

export default class DateTime extends React.Component {

	render() {
		return (
			<div className="date-time">
				<span>{(new Date()).toString()}</span>
			</div>
		)
	}
}