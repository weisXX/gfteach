import React from 'react'

class VideoItem extends React.Component {
	/*static propTypes = {
		yid: React.PropTypes.string,
		ylist: React.PropTypes.string
	};
	*/
	constructor(props) {
			super(props);
			//let yid = this.props.params.type;
			//let ylist = '';
			//let loading = true;
			//console.log('constructor')
			let [yid = 0, ylist, loading = false] = [this.props.params.type, '', true];
			this.state = {
				yid,
				ylist,
				loading
			};
			this.ajaxData = this.loaddate();
			//console.log(this.props.params.type)
			//this.getItemInfo();
		}
		/*componentWillMount() {
			console.log('componentWillMount')
		}*/
		// 比render晚执行
	componentDidMount() {
		//console.log(this.props)
		//this.ajaxData = this.loaddate();
		//this.getItemInfo();
		//console.log('componentDidMount')
		setTimeout(() => {
			console.log(this.state.loading)
				// this.state.loading = false;
			this.setState({
				loading: false,
				ylist: this.ajaxData[this.props.params.type]
			});
		}, 1000);
	}
	componentWillReceiveProps(nprops, nstate) {
			this.setState({
				loading: true
			});
			setTimeout(() => {
				console.log(this.state.loading)
					// this.state.loading = false;
				this.setState({
					loading: false,
					ylist: this.ajaxData[this.props.params.type]
				});
			}, 1000);
			return true;
		}
		/*shouldComponentUpdate(nprops, nstate) {
			//console.log(nprops);
			//console.log(nstate);

			return true;
		}*/
	loaddate() {
		return ['初级视频', '终极视频教学'];
	}
	getItemInfo() {
		//let parr = ['第一项视频', '终极视频教学'];
		/*this.setState({
			loading: true
		});*/
		/*this.state.loading = true;
		this.state.ylist = this.ajaxData[this.props.params.type];
		console.log('getItemInfo')*/
	}

	render() {
		//console.log(this.ajaxData);
		//this.state.ylist = parr[this.state.yid];
		//this.getItemInfo();
		//console.log(this.props.params.type)
		//this.props.history.pushState(null,'/login')
		return (
			<div>this is videos lists
				<div style={{display:this.state.loading?'block':'none'}}>加载中……</div>
				<span>你的参数是{this.state.ylist}</span>
				<input type="button" value="跳转到登录" onClick={()=>this.context.router.push('/login?id=1000')} />
			</div>
		);
	}
}

VideoItem.propTypes = {
	yid: React.PropTypes.string,
	ylist: React.PropTypes.string
}

// 必须配置这样的router，
VideoItem.contextTypes = {
	router: React.PropTypes.object
}

export default VideoItem