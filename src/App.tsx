import * as React from 'react';
import styled from 'styled-components';
import FormEditor from './formEditor/formEditor';
import { sampleFormData, IDataFormat } from './data';
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

  public formSave = (values: any) => {
    this.setState((previousState: any) => {
      const newData = JSON.parse(JSON.stringify(previousState.data));
      newData.map((item: IDataFormat) => {
        if (item.value !== values[item.title]) {
          return Object.assign(item, { value: values[item.title] })
        } else {
          return Object.assign(item, {})
        }
      })
      return { data: newData }
    });
  }
  
  public formError = (error: any) => {
    console.log(error)
  }
  public render() {
    return (
      <Container>
       <FormEditor
        data={this.state.data}
        onSave={this.formSave}
        onError={this.formError}
       />
      </Container>
    );
  }
}

export default App;
