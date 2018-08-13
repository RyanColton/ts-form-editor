import * as React from 'react';
import styled from 'styled-components';
import LineItem from './lineItem';

const ViewContainer = styled.div`
	width: 80%;
`

class DataViewer extends React.Component<any, any> {
	constructor(props: any) {
		super(props);
	}

	public render() {
		const { data } = this.props;
		return (
			<ViewContainer>
				{data.map((item: any) => <LineItem {...item} key={item.value} />)}
			</ViewContainer>
		)
	}
}

export default DataViewer
