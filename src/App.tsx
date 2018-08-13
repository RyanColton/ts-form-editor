import * as React from 'react';
import styled from 'styled-components';
import FormEditor from './viewWrapper/formEditor';
import { sampleFormData } from './data';
import './App.css';

const Container = styled.div`
  display: flex;
  justify-content: center;
`

class App extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      data: sampleFormData,
    }
  }
  public render() {
    return (
      <Container>
       <FormEditor
        data={this.state.data}
       />
      </Container>
    );
  }
}

export default App;
