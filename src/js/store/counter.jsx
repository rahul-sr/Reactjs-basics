import { createStore } from 'redux';
import React from 'react';
import ReactDOM from 'react-dom';
const counter = (state = 0, action) => {
  switch (action.type) {
  case 'INCREMENT':
    return state + 1
  case 'DECREMENT':
    return state - 1
  default:
    return state
  }
}


class ShoppingList extends React.Component {
	constructor() {
	    super();
	    this.state = {
	      squares: Array(9).fill(null),
	    };
	}
	render(props){
		console.log(props);
		return(
			<button className="square" onClick={() => this.setState({value: 'X'})}>
			  {this.state.value}
			</button>
			);
	}
}


let store = createStore(counter);
// You can use subscribe() to update the UI in response to state changes.
// Normally you'd use a view binding library (e.g. React Redux) rather than subscribe() directly.
// However it can also be handy to persist the current state in the localStorage.

// The only way to mutate the internal state is to dispatch an action.
// The actions can be serialized, logged or stored and later replayed.
store.dispatch({ type: 'INCREMENT' });
// 1
store.dispatch({ type: 'INCREMENT' });
// 2
store.dispatch({ type: 'INCREMENT' });
// 1

const Counter = ({
	value,
	onIncrement,
	onDecrement
}) => (
	<div>
		<h1>{value}</h1>
		<button onClick={onIncrement}>+</button>
		<button onClick={onDecrement}>-</button>
	</div>
);

const render = () => {
	ReactDOM.render(
		<div>
		<Counter value={store.getState()}
		onIncrement={() => store.dispatch({ type: 'INCREMENT' }) }
		onDecrement={() => store.dispatch({ type: 'DECREMENT' }) } />
		</div>,
		document.getElementById('abc')
		)
}
render();
store.subscribe(render);