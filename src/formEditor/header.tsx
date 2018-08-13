import * as React from 'react';
import { Button } from 'antd';
import styled from 'styled-components';

const HeaderContainer = styled.div`
	display: flex;
	justify-content: flex-end;
`;

// It would appear that there is a conflict with the compnent library, styled components and typescript
// I am using inline styles until I have tome to look into this further

const SaveButton = {
	marginLeft: '10px'
}

interface IHeader {
	toggleEdit: ((bool: boolean) => void),
	editing: boolean,
	handleSave: ((e: any) => void),
}

const Header: React.StatelessComponent<IHeader> = ({ toggleEdit, editing, handleSave }) => (
	<HeaderContainer>
		<Button
			htmlType="button"
			onClick={() => toggleEdit(!editing)}
		>
		{editing ?
			'Cancel'
			:
			'Edit'
		}
			
		</Button>
		{
			editing &&
			<Button
				style={SaveButton}
				htmlType="button"
				type="primary"
				onClick={handleSave}
			>
				Save
			</Button>
			
		}
	</HeaderContainer>
);

export default Header