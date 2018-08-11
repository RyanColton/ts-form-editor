import * as React from 'react';
import styled from 'styled-components';
import FormEditor from './viewWrapper/formEditor';
import './App.css';

const Container = styled.div`
  display: flex;
  justify-content: center;
`

class App extends React.Component {
  public render() {
    return (
      <Container>
       <FormEditor />
      </Container>
    );
  }
}

export default App;
