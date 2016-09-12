import React from 'react';
import TodoItem from '../components/TodoItem'

class Todo extends React.Component {
	//export default React.createClass({
	constructor(props) {
			super(props);
			this.displayName = 'Todo';
			this.state = {
				items: [],
				text: ''
			};
			console.log(this)
		}
		/*getInitialState() {
			return {
				items: [],
				text: ''
			}
		},*/
	deleteFun(delItem, e) {
			//let idex = 0;
			//let vitems = [];
			console.log(delItem)
			let [idex, vitems, tparr] = [0, '', []];
			for (var i = 0; i < this.state.items.length; i++) {
				if (this.state.items[i].id == delItem.id) {
					idex = i;
				} else {
					tparr.push(this.state.items[i]);
				}
			}
			this.setState({
				items: tparr
			});
			/*if (idex > 0) {
				vitems = this.state.items.splice(idex, 1);
				console.log(vitems)
				this.setState({
					items: vitems
				});
			}*/
		} //,
	changeFun(e) {
			//console.log(this)
			this.setState({
				text: e.target.value
			});
		} //,
	addFun(e) {
			e.preventDefault();
			console.log(this.state.length)
			let nItem = this.state.items.concat([{
				val: this.state.text,
				id: this.state.items.length + 1
			}]);
			this.setState({
				items: nItem,
				text: ''
			});
		} //,
	render() {
		return <div>
		 	<h3>TODO</h3>
			<TodoItem items={this.state.items} deleteFun={this.deleteFun.bind(this)} />
			<input type="text" onChange={this.changeFun.bind(this)} value={this.state.text}/>
			<button onClick={this.addFun.bind(this)}>{'Add #'+(this.state.items.length + 1)}</button>
		</div>;
	}
}; //);

export default Todo;