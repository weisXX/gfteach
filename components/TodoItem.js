import React from 'react';

class TodoItem extends React.Component {
		//export default React.createClass({
		constructor(props) {
				super(props);
				this.displayName = 'List';
			}
			/*getInitialState() {
				return {
					items: [],
					text: ''
				}
			},
			propTypes: {
				items: React.PropTypes.array,
				deleteFun: React.PropTypes.func
			},*/
		render() {
			return <ul>
			{
				this.props.items.map((k,v)=>{
					return <li key={k.id}>{k.val}<input type="button" onClick={this.props.deleteFun.bind(null,k)} value="[x]"/></li>
				})
			}
		</ul>
		}
	} //);
export default TodoItem;