import * as React from 'react';
import { Input, Select } from 'antd';

const textInput = (type: any) =>
  <Input autosize={false} />;

const textArea = (type: any) =>
  <Input.TextArea rows={3} autosize={true} />
;

const dropdown = (type: any) => (
  <Select>
    {type.values.map((val: string) => (
      <Select.Option
        key={val}
        value={val}
      >
        {val}
      </Select.Option>
    ))}
  </Select>
);

export const inputSelect = (type : any) => {
  switch (type.input) {
    case 'text':
      return textInput(type);
    case 'textArea':
      return textArea(type);
    case 'dropdown':
      return dropdown(type);
    default:
      return null;
      break;
  }
}
