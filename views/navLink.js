import React from 'react'
import {
	Link
} from 'react-router'

export default class NavLink extends React.Component {
	/*static propTypes = {
		name: React.PropTypes.string,
	};
*/
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<Link {...this.props} activeStyle={{color:'green'}}></Link>
		);
	}
}

NavLink.propTypes = {
	name: React.PropTypes.string,
}