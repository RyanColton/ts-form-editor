import * as React from 'react';
import styled from 'styled-components';
import Header from './header';
import DataEditor from './dataEditor/dataEditor';
import DataViewer from './dataViewer/dataViewer';

const Body = styled.div`
	width: 60%;
	padding-top: 25px;
`;

interface IFormState { editing: boolean }

class FormEditor extends React.Component<any, IFormState> {
	constructor(props: any) {
		super(props);
		this.state = {
			editing: false,
		}
	}

	public toggleEdit = (bool: boolean) => this.setState({ editing: bool })

	public render() {
		const { editing } = this.state;
		return (
			<Body>
				<Header
					toggleEdit={this.toggleEdit}
					editing={editing}
				/>
				{editing ?
					<DataEditor />
					:
					<DataViewer />
				}
			</Body>
		)
	}
}

export default FormEditor;
