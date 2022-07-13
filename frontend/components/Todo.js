import React from 'react'

export default class Todo extends React.Component {
  render() {
    return (
      <div className='todo' onClick={() => this.props.toggleComp(this.props.item.id)}>
        <p>{this.props.item.name}{this.props.item.completed ? '\u2713' : ''}</p>
      </div>
    )
  }
}
