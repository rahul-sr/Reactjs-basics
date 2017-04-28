
// Create Component
var HelloWorld = React.createClass({

	// properties in React
	propTypes: {
		name: React.PropTypes.string,
		isPerson: React.PropTypes.bool
	},

	// default value before going to render component
	getDefaultProps: function() {
		return {
			name: 'React'
		}
	},

	getInitailState: function() {
		return {
			value: 1
		}
	},

	componentDidMount: function() {

	},

	_addByOne: function() {
		// this.setState({
		// 	value: this.state.value + 1
		// });
		console.log('click');
	},

	render: function() {
		var greeting = "World";

		if (this.props.isPerson) {
			greeting = (<Person name={this.props.name} />)
		}
		return (
			<div>
				<h1>Hello {greeting}</h1>
				<button onClick={this._addByOne}>Click Me</button>
			</div>
		)
	}
});

var Person = React.createClass({

	// properties in React
	propTypes: {
		name: React.PropTypes.string.isRequired
	},

	// default value before going to render component
	getDefaultProps: function() {
		return {
			name: "React"
		}
	},

	render: function() {
		return (
			<span> {this.props.name}</span>
		)
	}
});


// Render the Component
ReactDOM.render(
	<HelloWorld name="React" isPerson={true} />,
    document.getElementById('area')
);
