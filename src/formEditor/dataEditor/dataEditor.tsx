import * as React from 'react';
import styled from 'styled-components';
import FormItem from './formItem';

const EditContainer = styled.div`
	width: 80%;
`

class DataEditor extends React.Component<any, any> {
	constructor(props: any) {
		super(props);
	}

	public render() {
		const { data } = this.props;
		return (
			<EditContainer>
				{data.map((item: any) => (
				<FormItem
				{...this.props}
				{...item}
				key={item.value}
				/>
				))}
			</EditContainer>
		)
	}
}

export default DataEditor
