import styled, { css } from 'styled-components';
import theme from '../../styles/theme';
import { Anchor } from 'grommet';

export const NavigationBar = styled.div`
	height: 81px;
	border-bottom: 1px solid #F0F0F0;
`;

export const NavigationWrapper = styled.div`
	display: flex;
	flex-direction: row;
	max-width: ${theme.max_width}px;
	margin: 0 auto;
`;

export const Logo = styled.div`
	padding: 27px 60px 0 0;
`;

export const Menu = styled.div`
	padding: 0;

	> ul {
		margin: 0;
		padding: 0;
		list-style: none;
		text-align: left;

		> li {
			display: inline-block;
			width: auto;

			> a {
				display: block;
				padding: 28px 20px 23px;
			}
		}
	}
`;

export const MenuLink = styled(Anchor)`
	${props => props.active && css`
		color: #000;
	`}
`;

