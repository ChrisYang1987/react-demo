import React from 'react'

//class Example extends React.Component {
//
//	getInitialState() {
//		return {names: ['zhangshan', 'lisi', 'wangwu']};
//	}
//
//
//	render() {
//		let names = this.state.names.map(name => {
//			return (<li>{name}</li>);
//		});
//
//		return (
//			<ul>{names}</ul>
//		)
//	}
//}
const Example = React.createClass({
	//getInitialState  : function() {
	//	return {names : ['zhangsan', 'lisi', 'wangwu']};
	//},
    componentWillMount : function() {
        console.log('componentWillMount');
    },
    componentDidMount : function() {
        console.log('componentDidMount');
    },
    componentWillReceiveProps : function(nextProps) {
        console.log('componentWillReceiveProps')
        console.log(this.props)
        console.log(nextProps)
    },
    shouldComponentUpdate : function() {
        console.log('shouldComponentUpdate')
        return true
    },
    componentWillUpdate : function() {
        console.log('componentWillUpdate')
    },
    componentDidUpdate : function() {
        console.log('componentDidUpdate')
    },
    componentWillUnmount : function() {
        console.log('componentWillUnmount')
    },
	render : function() {
		let names = this.props.names.map(name => {
			return (<li key={'_id'+name}>{name}</li>);
		});

		return (<ul>{names}</ul>)
	}
})
export default Example;