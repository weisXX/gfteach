class Alert extends React.Component {
	constructor(props) {
	  super(props);
	
	  this.state = {};
	}
	render() {
		return (
			<div className='gui'>{this.props.name}</div>
		);
	}
}