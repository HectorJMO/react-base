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
  border: 1px solid #eee;
  box-shadow: 0 2px 2px #ccc;
  width: 300px;
  height: 150px;
  background-color: #EAECEE;
  font-family: 'Lato', 'Arial', sans-serif;
`;

const CardTitle = styled.div`
  display: flex;
  justify-content: center;
  flex: 1;
  min-height: 75px;
  background-color: #48C9B0;
`;

const Body = styled.div`
  flex: 2;
  padding: 10px;
  display: flex;
 justify-content: center;
  font-size: 0.5em;
`;

const Message = styled.label`
  height: auto;
  font-family: 'Lato', 'Arial', sans-serif;
  font-weight: bold;
  margin: auto;
  text-justify: center;
`;

const ConfirmButton = styled.input`
  display: flex;
  width: 70px;
  height: 30px;
  justify-content: center;
  margin: auto 10px auto 10px;
`;

const Confirm = ({ children, show, setShow }) => {
  const content = show && (
    <Blackout>
      <CardWrapper>
        <CardTitle>
          <Message>¿Estas seguro?</Message>
        </CardTitle>
        <Body>
          <ConfirmButton type='button' value='Si' />
          <ConfirmButton type='button' value='Cancelar' onClick={() => setShow(false)} />
        </Body>
        <div className='modal-body'>{children}</div>
      </CardWrapper>
    </Blackout>
  );

  return content;
};

export default Confirm;
