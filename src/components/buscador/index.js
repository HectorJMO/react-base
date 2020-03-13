import React, { Component } from 'react';
import styled from 'styled-components';

const Container = styled.form`
  display: flex;
  flex: 1;
  padding: 10px;
  height: 45px;
  width: auto;
`;

const SearchBar = styled.input`
    font-size: 20px;
`;

const Type = styled.div`
  display: flex;
  flex: 2;
  height: 45px;
  max-width: 83px;
`;

class Buscador extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      type: '',
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
    const { name, type } = this.state;
    // eslint-disable-next-line no-console
    console.log('Name: ', name, ' Type: ', type);
    this.setState({ name: '', type: '' });
  }

  render() {
    const { name } = this.state;

    return (
      <Container>
        <SearchBar type='text' name='name' size='50' value={name} onChange={this.handleChange} />
        <Type>
          <select name='type' id='type' onChange={this.handleChange}>
            <option value='Acero'>Acero</option>
            <option value='Agua'>Agua</option>
            <option value='Insecto'>Insecto</option>
            <option value='Dragon'>Dragon</option>
            <option value='Eléctrico'>Eléctrico</option>
            <option value='Fantasma'>Fantasma</option>
            <option value='Fuego'>Fuego</option>
            <option value='Hada'>Hada</option>
            <option value='Hielo'>Hielo</option>
            <option value='Lucha'>Lucha</option>
            <option value='Normal'>Normal</option>
            <option value='Planta'>Planta</option>
            <option value='Psíquico'>Psíquico</option>
            <option value='Roca'>Roca</option>
            <option value='Oscuridad'>Oscuridad</option>
            <option value='Tierra'>Tierra</option>
            <option value='Veneno'>Veneno</option>
            <option value='Volador'>Volador</option>
            <option value='???'>???</option>
          </select>
        </Type>
        <button type='submit' onClick={this.submitForm}>Buscar</button>
      </Container>
    );
  }
}

export default Buscador;
