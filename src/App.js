import React from 'react';
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";
import "../src/components/Todo.css"
const list = [
  {
    task: "Go to the mall",
    id:Date.now(),
    completed:false
  }
]

class App extends React.Component {
  constructor(){
    super();
    this.state={
      list
    }
  }

  toggleListCompleted = entryId =>{
    console.log(entryId)
    this.setState({
      list: this.state.list.map(entry =>{
        if(entryId === entry.id) {
          return{
            ...entry,
            completed: !list.completed
          }
        }
        return entry;
      })
    })
  };

  addNewTask = taskName =>{
    this.setState({
      list:[
        ...this.state.list,
        {task: taskName, id:Date.now(), completed:false}
      ]
    })
  }

  clearList = () => {
    this.setState({
      list: this.state.list.filter(entry => {
        return !entry.completed;
      })
    });
  };
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  render() {
    return (
      <div className="App">
        <div className="header">
          <h2 className="heading">Todo List</h2>
         <TodoForm addNewTask={this.addNewTask} />  
        </div>
        
        <TodoList 
        toggle={this.toggleListCompleted} 
        list={this.state.list} 
        clearList={this.clearList}
        />
      </div>
    );
  }
}

export default App;
