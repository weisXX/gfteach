import React from 'react';

class Login extends React.Component {
	constructor(props) {
		super(props);
		this.displayName = 'Login';
		console.log(this.props.location)
	}
	render() {
		return <div>
			<header>登录</header>
			<div>{}</div>
		</div>;
	}
}

export default Login;