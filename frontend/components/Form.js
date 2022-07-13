import React from 'react'

export default class Form extends React.Component {
  state ={
    inputValue: ''
  }

  handleChange = (e) => {
    this.setState({
      inputValue: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    // call submit function in App
    this.props.addItem(this.state.inputValue)
    this.setState({
      inputValue: ''
    });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input onChange={this.handleChange} type='text' value={this.state.inputValue} />
          <button>Add Item</button>
        </form>
      </div>
    )
  }
}
