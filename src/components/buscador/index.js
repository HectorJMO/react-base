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
    this.setState({ name: '' });
  }

  render() {
    const { name } = this.state;

    return (
      <Container>
        <SearchBar type='text' name='name' size='50' value={name} onChange={this.handleChange} />
        <Type>
          <select name='type' id='type' onChange={this.handleChange}>
            <option value='acero'>Acero</option>
            <option value='agua'>Agua</option>
            <option value='insecto'>Insecto</option>
            <option value='dragon'>Dragon</option>
            <option value='electrico'>Eléctrico</option>
            <option value='fantasma'>Fantasma</option>
            <option value='fuego'>Fuego</option>
            <option value='hada'>Hada</option>
            <option value='hielo'>Hielo</option>
            <option value='lucha'>Lucha</option>
            <option value='normal'>Normal</option>
            <option value='planta'>Planta</option>
            <option value='psiquico'>Psíquico</option>
            <option value='roca'>Roca</option>
            <option value='oscuridad'>Oscuridad</option>
            <option value='tierra'>Tierra</option>
            <option value='veneno'>Veneno</option>
            <option value='volador'>Volador</option>
            <option value='???'>???</option>
          </select>
        </Type>
        <button type='submit' onClick={this.submitForm}>Buscar</button>
      </Container>
    );
  }
}

export default Buscador;
