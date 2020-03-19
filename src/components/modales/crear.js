import React from 'react';
import styled from 'styled-components';

const Blackout = styled.div`
  display: flex;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  justify-content: center;
  margin: 0;
  padding: 0;
  width: 100vw;
  height: 100vh;
  background-color: #17202A;
`;

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: auto;
  padding: 0;
  border: 1px solid #eee;
  box-shadow: 0 2px 2px #ccc;
  width: 400px;
  height: 700px;
  background-color: #EAECEE;
  font-family: 'Lato', 'Arial', sans-serif;
`;

const CardTitle = styled.div`
  display: flex;
  justify-content: center;
  flex: 1;
  background-color: #48C9B0;
  max-height: 70px;
`;

const AddButton = styled.input`
  height: 25px;
  width: 100%;
`;

const Body = styled.div`
  flex: 2;
  padding: 10px;
  display: flex;
  flex-direction: column;
  font-size: 0.5em;
`;

const ButtonWrapper = styled.div`
  display: flex;
  height: 70px;
  width: 100%;
  margin-bottom: 0px;
  margin-top: auto;
`;

const Message = styled.label`
  height: auto;
  font-family: 'Lato', 'Arial', sans-serif;
  font-size: 30px;
  font-weight: bold;
  margin: auto;
  text-justify: center;
`;

const OptionsWrapper = styled.div`
  flex: 3;
  padding: 10px;
  display: flex;
  flex-direction: column;
  font-size: 5em;
`;

const CheckboxWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 25px;
  margin-top: 10px;
  margin-bottom: 10px;
`;

const ConfirmButton = styled.input`
  height: 100%;
  width: 100%;
`;

const ModalCrear = ({ children, show, setShow }) => {
  const content = show && (
    <Blackout>
      <CardWrapper>
        <CardTitle>
          <Message>Agregar al equipo</Message>
        </CardTitle>
        <Body>
          <AddButton type='button' value='Crear equipo' />
          <OptionsWrapper>
            <CheckboxWrapper>
              <input type='checkbox' id='Op1' name='Op1' />
              <label>Equipo Rocket</label>
            </CheckboxWrapper>
            <CheckboxWrapper>
              <input type='checkbox' id='Op2' name='Op2' />
              <label>Equipo del Caribe</label>
            </CheckboxWrapper>
            <CheckboxWrapper>
              <input type='checkbox' id='Op3' name='Op3' />
              <label>Linces</label>
            </CheckboxWrapper>
          </OptionsWrapper>
        </Body>
        <div className='modal-body'>{children}</div>
        <ButtonWrapper>
          <ConfirmButton type='button' value='Aceptar' onClick={() => setShow(false)} />
        </ButtonWrapper>
      </CardWrapper>
    </Blackout>
  );

  return content;
};

export default ModalCrear;
