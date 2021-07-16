import React, { Component } from "react";

import { BrowserRouter as Router, Route , Link} from 'react-router-dom';

import "./App.css";
import Tasks from "./componets/Tasks";
import tasks from "./sample/tasks.json";
import Posts from './componets/Posts'
import TaskForm from './componets/TaskForm';
console.log(tasks);
class App extends Component {
  state = {
    tasks: tasks
  }

  addTask = (title, description) => {
    //console.log(title , discription)
    const newTask = {
      title: title,
      description: description,
      done:false,
      id: this.state.tasks.length
    }
    //console.log(newTask)
    this.setState({
      tasks: [...this.state.tasks,newTask]
    })
  }

  deleteTask = (id) => {
    const newtasks = this.state.tasks.filter(task => task.id !== id);
    this.setState({
      tasks: newtasks
    })
  }

  checkDone = (id) => {
    const newtasks = this.state.tasks.map(task => {
      if (task.id === id) {
        task.done = !task.done
      }
      return task;
    })
    this.setState({tasks: newtasks})
  }

  render() {
    return (
      <div>
        <Router>
          <Link to="/">home</Link>
          <br/>
          <Link to="/posts">posts</Link>

          <Route exact path="/" render={() => {
            return <div>
              <TaskForm addTask={this.addTask}></TaskForm>
              <Tasks tasks={this.state.tasks} deleteTask={this.deleteTask} checkDone={this.checkDone}/>
            </div>
          }}></Route>
          <Route path="/posts" component={Posts}/>
        </Router>
      </div>
    );
  }
}

export default App;
