import React, { Component } from 'react';
import Container from '../Components/Container/Container';
import ContactForm from '../Components/ContactForm/ContactForm';
import Filter from '../Components/Filter/Filter';
import ContactList from '../Components/ContactList/ContactList';


class TodosView extends Component {
  state = {
  };

  render() {
    return (
      <Container>
        <ContactForm />
        <Filter />
        <ContactList />
      </Container>
    );
  }
}

export default TodosView;
