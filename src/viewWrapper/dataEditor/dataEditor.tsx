import * as React from 'react';
import styled from 'styled-components';

const EditContainer = styled.div`
	width: 80%;
`

class DataEditor extends React.Component<any, any> {
	constructor(props: any) {
		super(props);
	}

	public render() {
		return (
			<EditContainer>
				Data Editor
			</EditContainer>
		)
	}
}

export default DataEditor
