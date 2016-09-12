import React from 'react'

import NavLink from './navLink';

class VideoList extends React.Component {
	/*static propTypes = {
		name: React.PropTypes.string,
		list: React.PropTypes.array
	};
	*/
	constructor(props) {
		super(props);
		//let list = ['0', '1'];
		this.state = {
			list: ['0', '1']
		};
		//console.log(this.context)
		//console.log(this.props.history)
	}
	render() {
		return (
			<div>
				<header>商品列表</header>
				<ul>
					{
						this.state.list.map((k,i)=>{
							//let tourl = `/videolist/${i}`;
							//return <li key={k}><NavLink to={tourl}>我的商品{i}</NavLink></li>
							return <li key={k}><NavLink to={'/videolist/'+i}>我的商品{i}</NavLink></li>
						})
					}
				</ul>
				<div>
					{this.props.children}
				</div>
			</div>
		);
	}
}
VideoList.propTypes = {
	name: React.PropTypes.string,
	list: React.PropTypes.array
}
VideoList.defaultProps = {
	name: 'VideoList',
	list: ['0', '1']
}
export default VideoList