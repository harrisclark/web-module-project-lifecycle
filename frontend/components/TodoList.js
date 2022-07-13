import React from 'react'
import Todo from './Todo'

export default class TodoList extends React.Component {
  render() {
    return (
      <div>
        <h2>Todos:</h2>
        {this.props.listItems.map(item => {
          return (<Todo item={item} key={item.id} toggleComp={this.props.toggleComp} />)
        })}
      </div>
    )
  }
}
