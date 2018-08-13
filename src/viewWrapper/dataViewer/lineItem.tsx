import * as React from 'react';
import styled from 'styled-components';

const LineItemContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Title = styled.p`
  font-weight: 600;
`


interface ILineItem {
  title: string,
  type: any,
  value: string,
}

const LineItem: React.StatelessComponent<ILineItem> = ({ title, type, value }) => (
  <LineItemContainer>
    <Title>
      {title}
    </Title>
    <p>
      {value}
    </p>
  </LineItemContainer>
)

export default LineItem;
