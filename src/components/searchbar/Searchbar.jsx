import React, { Component } from 'react';

export default class Searchbar extends Component {
  state = {
    search: '',
  };

  handleInput = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.onSubmit(this.state); // todo: need more practice here
    // this.resetForm();
  };

  // resetForm = () => {
  //   this.setState({ search: '' });
  // };

  // ---------------------------- MARKUP ----------------------------
  render() {
    const { search } = this.state;
    return (
      <header className="Searchbar">
        <form className="SearchForm" onSubmit={this.handleSubmit}>
          <button type="submit" className="SearchForm-button">
            <span className="SearchForm-button-label">Search</span>
          </button>

          <input
            className="SearchForm-input"
            name="search"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={this.handleInput}
            value={search}
          />
        </form>
      </header>
    );
  }
}
