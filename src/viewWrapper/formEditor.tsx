import * as React from 'react';
import styled from 'styled-components';
import Header from './header';
import DataEditor from './dataEditor/dataEditor';
import DataViewer from './dataViewer/dataViewer';
import { IDataFormat } from '../data';

const Body = styled.div`
	width: 50%;
	padding-top: 25px;
`;

interface IFormProps { data: IDataFormat }

interface IFormState { editing: boolean }

class FormEditor extends React.Component<IFormProps, IFormState> {
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
					{...this.props}
					toggleEdit={this.toggleEdit}
					editing={editing}
				/>
				{editing ?
					<DataEditor
						{...this.props}
					/>
					:
					<DataViewer
						{...this.props}
					/>
				}
			</Body>
		)
	}
}

export default FormEditor;
