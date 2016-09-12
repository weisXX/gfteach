import React from 'react'
import {
	render
} from 'react-dom'
import {
	Router,
	Route,
	IndexRoute,
	hashHistory,
	browserHistory
} from 'react-router'

import App from './views/App'
import Login from './views/Login'
import About from './views/About'
import Todo from './views/Todo'
import VideoList from './views/videoList'
import VideoItem from './views/videoItem'

// 路由基本用法
/*render((
		<Router history={browserHistory}>
		<Route path='/' component={App} />
		<IndexRoute component={About} />
		<Route path='/about' component={About} />
		<Route path='/videolist(/:type)' component={VideoList} />
	</Router>
	), document.getElementById('app'))
*/
// 嵌套路由
render((
	<Router history={hashHistory}>
			<Route path='/' component={App}>
				<IndexRoute component={About} />
				<Route path='/videolist' component={VideoList}>
					<Route path='/videolist/:type' component={VideoItem}></Route>
				</Route>
			</Route>
			<Route path='/login' component={Login} />
			<Route path='/about' component={About} />
			<Route path='/todo' component={Todo} />
		</Router>
), document.getElementById('app'))

/*let routes = <Route path='/' component={App}>
			 	<Route path='/about' component={About} />
				<Route path='/videolist' component={VideoList} /></Route>;
render(<Router routes={routes} history={hashHistory}/>, document.getElementById('app'))
*/