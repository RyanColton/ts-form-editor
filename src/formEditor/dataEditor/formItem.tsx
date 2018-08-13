import * as React from 'react';
import { Form } from 'antd';
import { inputSelect } from './helpers';
import styled from 'styled-components';

const FormItemContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Title = styled.p`
  font-weight: 600;
`;
const WrappedInput = styled.div`
  width: 300px;
`

interface IFormItem {
  title: string,
  value: string,
  type: any,
  form: any,
  rules: any,
}

class FormItem extends React.Component<IFormItem> {
  constructor(props: any) {
    super(props);
  }

  public render() {
    const { title, value, type, form, rules } = this.props;
    const { getFieldDecorator } = form;
    // console.log(rules)
    return (
      <Form.Item>
        <FormItemContainer>
          <Title>
            {title}
          </Title>
          <WrappedInput>
            {
              getFieldDecorator(title, { initialValue: value, rules })
              (inputSelect(type))
            }
          </WrappedInput>
        </FormItemContainer>
      </Form.Item>
    )
  }
}

export default FormItem;
