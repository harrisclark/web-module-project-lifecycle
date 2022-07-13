import React from 'react'
import axios from 'axios'

import Form from './Form'
import TodoList from './TodoList'

const URL = 'http://localhost:9000/api/todos'

export default class App extends React.Component {

  state = {
    listItems: []
  }

  componentDidMount() {
    axios.get(URL)
      .then(res => {
        console.log(res.data.data);
        this.setState({
          listItems: res.data.data
        })
      })
  }

  addItem = (itemName) => {
    const newItem = {
      name: itemName,
      id: Date.now(),
      completed: false
    }
    axios.post(URL, newItem)
      .then(res => {
        console.log(res.data.data);
        this.setState({
          listItems: [...this.state.listItems, res.data.data]
        })
      })
  }

  toggleComp = (itemId) => {
    this.setState({
      listItems: this.state.listItems.map(item => {
        if (itemId === item.id) {
          return {
            ...item,
            completed: !item.completed
          }
        } else { return item }
      })
    })
    console.log(this.state.listItems)
    axios.patch(`${URL}/${itemId}`)
      .then(res => console.log(res.data.data))
      .catch(err => console.error(err))
    
  }

  removeCompleted = () => {
    this.setState({
      listItems: this.state.listItems.filter(item => !item.completed)
    })
  }



  render() {
    return (
      <div>
        <Form addItem={this.addItem} />
        <TodoList listItems={this.state.listItems} toggleComp={this.toggleComp} hidden={this.state.hidden} />
        <button onClick={this.removeCompleted}>Clear Completed Tasks</button>
      </div>
    )
  }
}
