import * as React from 'react';
import { Button } from 'antd';
import styled from 'styled-components';

const HeaderContainer = styled.div`
	display: flex;
	justify-content: flex-end;
`;

interface IHeader {
	toggleEdit: ((bool: boolean) => void),
	editing: boolean,
}

const Header: React.StatelessComponent<IHeader> = ({ toggleEdit, editing }) => (
	<HeaderContainer>
		<Button
			htmlType='button'
			onClick={() => toggleEdit(!editing)}
		>
			{editing ?
			'Cancel'
			:
			'Edit'
			}
		</Button>
	</HeaderContainer>
);

export default Header