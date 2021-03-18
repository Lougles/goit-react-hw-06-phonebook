  
import React from 'react';
import { connect } from 'react-redux';
import { deleteContact } from '../../redux/todos/todos-actions';

const ContactList = ({ contacts, deleteContact }) => {
  const onHandleChange = e => {
    deleteContact(e.target.id);
  };
  return (
    <ul>
      {contacts.map(({ name, id, number }) => (
        <li key={id}>
          <p>
            {`Имя: ${name} | Номер: ${number}`}
            <button className="Button" id={id} type="button" onClick={onHandleChange}>
              Удалить
            </button>
          </p>
        </li>
      ))}
    </ul>
  );
};

const mapDispatchToProps = dispatch => ({
  deleteContact: id => dispatch(deleteContact(id)),
});

const mapStateToProps = state => ({
  contacts: state.contact.contacts.filter(contact =>
    contact.name.toLowerCase().includes(state.contact.filter.toLowerCase()),
  ),
});
export default connect(mapStateToProps, mapDispatchToProps)(ContactList);