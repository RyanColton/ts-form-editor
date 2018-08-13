import * as React from 'react';
import styled from 'styled-components';
import { Form } from 'antd';
import Header from './header';
import DataEditor from './dataEditor/dataEditor';
import DataViewer from './dataViewer/dataViewer';
import { IDataFormat } from '../data';

const Body = styled.div`
	width: 50%;
	padding-top: 25px;
`;

interface IFormProps {
	data: IDataFormat,
	form: any,
	onError: any,
	onSave: ((values: any) => void)
}

interface IFormState { editing: boolean }

class FormEditor extends React.Component<IFormProps, IFormState> {
	constructor(props: any) {
		super(props);
		this.state = {
			editing: false,
		}
	}

	public handleSave = (e: any) => {
		e.preventDefault();
		const { form, onError, onSave } = this.props;
		form.validateFields((err: any, values: any) => {
			if (err) {
				onError(err)
			} else {
				onSave(values)
				this.toggleEdit(false);
			}
		})
	}

	public toggleEdit = (bool: boolean) => this.setState({ editing: bool })

	public render() {
		const { editing } = this.state;
		return (
			<Body>
				<Form>
					<Header
						{...this.props}
						toggleEdit={this.toggleEdit}
						editing={editing}
						handleSave={this.handleSave}
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
				</Form>
			</Body>
		)
	}
}

const WrappedFormEditor = Form.create()(FormEditor)
export default WrappedFormEditor;
