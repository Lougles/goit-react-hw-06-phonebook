  
import React, { Component } from 'react';
import { connect } from 'react-redux';
import {addTodo} from '../../redux/todos/todos-actions';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleInput = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.addTodo(this.state);
    this.setState({ name: '', number: '' });
  };

  render() {
    const { name, number } = this.state;
    return (
      <form className="Searchbar" onSubmit={this.handleSubmit}>
        <label>
          Имя:
          <input
            className="SearchForm"
            name="name"
            type="text"
            onChange={this.handleInput}
            value={name}
          />
        </label>
        <label>
          Номер:
          <input
            className="SearchForm"
            name="number"
            type="number"
            onChange={this.handleInput}
            value={number}
          />
        </label>
        <button className="Button" type="submit">Сохранить</button>
      </form>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  addTodo: ({ name, number }) =>
    dispatch(addTodo({ name, number })),
});

export default connect(null, mapDispatchToProps)(ContactForm);