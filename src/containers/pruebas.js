import React, { Component } from 'react';
import styled from 'styled-components';

const Container = styled.form`
  width: 100vw;
`;

class Buscador extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: ' ',
    };

    this.submitForm = this.submitForm.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  submitForm(e) {
    e.preventDefault();
    const { name } = this.state;
    // eslint-disable-next-line no-console
    console.log('Name this: ', name);
    this.setState({ name: ' ' });
  }

  render() {
    const { name } = this.state;

    return (
      <Container>
        <input type='text' name='name' value={name} onChange={this.handleChange} />
        <button type='submit' onClick={this.submitForm}>Buscar</button>
      </Container>
    );
  }
}

export default Buscador;
