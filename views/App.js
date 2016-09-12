import React from 'react'
import {
	Link,
	IndexLink
} from 'react-router'
/*
如果链接到根路由/，不要使用Link组件，而要使用IndexLink组件。
这是因为对于根路由来说，activeStyle和activeClassName会失效，或者说总是生效，因为/会匹配任何子路由。而IndexLink组件会使用路径的精确匹配。
*/
export default React.createClass({
	render() {
		return (
			<div>
				<h1>路由学习</h1>
				<ul role="nav">
					<li><IndexLink  to="/" activeStyle={{color:'red'}}>首页</IndexLink ></li>
					<li><Link to="/about" activeStyle={{color:'red'}}>About</Link></li>
					<li><Link to="/videolist" activeStyle={{color:'red'}}>视频类型列表</Link></li>
					<li><Link to="/login" activeStyle={{color:'red'}}>登录</Link></li>
					<li><Link to="/todo" activeStyle={{color:'red'}}>todo</Link></li>
				</ul>
				<div>
					{this.props.children}
				</div>
			</div>
		)
	}
})