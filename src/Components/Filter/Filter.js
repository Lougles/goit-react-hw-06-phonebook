import React from 'react';
import { connect } from 'react-redux';
import { changeFilter } from '../../redux/todos/todos-actions';

const Filter = ({ filter, changeFilter }) => {
  const onHandleChange = (e) => {
    changeFilter(e.target.value)
  }

  return (
    <label className="Searchbar">
      Поиск:
          <br/> 
      <input
        className="SearchForm-input"
        name="filter"
        type="text"
        onChange={onHandleChange}
        value={filter}
      />
    </label>
  );
};

const mapStateToProps = state => ({
  filter: state.contact.filter,
});

const mapDispatchToProps = dispatch => ({
  changeFilter: value => dispatch(changeFilter(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);