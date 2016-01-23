import React from 'react'
import Example from './Example'

const App = React.createClass({
    getInitialState : function() {
        return {names : ['zhangsan', 'lisi', 'wangwu'], flag : true}
    },
    changeNames : function() {
        this.setState({names : ['xiaoming', 'xiaohua']})
    },

    changeFlag : function() {
      this.setState({flag : !this.state.flag})
    },
    render : function() {
        return (<div>
            { this.state.flag ? <Example names={this.state.names}/> : <div>销毁</div> }
                     <button onClick={this.changeNames}>changeNames</button>
                     <button onClick={this.changeFlag}>changeFlag</button>
                </div>)
    }
})

export default App