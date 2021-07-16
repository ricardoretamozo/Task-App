import React, {Component} from 'react';

export default class TaskForm extends Component {
    //redux para manejar estados de un componente a otro.
    state = {
        title: '',
        description: ''
    }

    onSubmit = event => {
        console.log(this.state)
        console.log("Enviado")
        this.props.addTask(this.state.title , this.state.description);
        event.preventDefault();
    }

    onChange = eventinput => {
        this.setState({
            [eventinput.target.name] : eventinput.target.value,
            [eventinput.target.name] : eventinput.target.value
        })
        //console.log(this.state)
    }

    render() {
        //console.log(this.props)
        
        return (
            <form onSubmit={this.onSubmit}>
                <input 
                type="text" 
                placeholder="Write a Task" 
                name="title"
                onChange={this.onChange} 
                value={this.state.title}>

                </input>
                <br/>
                <br/>
                <textarea 
                placeholder="Write a Description" 
                onChange={this.onChange}
                value={this.state.description}
                name="description">
                
                </textarea>
                <input type="submit"></input>
            </form>
        )
    }

}
 
