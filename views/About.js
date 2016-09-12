import React from 'react'
import {
	Link,
	IndexLink
} from 'react-router'
export default React.createClass({
	render() {
		return <div className="about">Hi~,关于我的想法。
			<Link to="/videolist/yui" activeStyle={{color:'red'}}>About</Link>
		</div>
	}
})