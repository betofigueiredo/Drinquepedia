import styled, { css, keyframes } from 'styled-components';
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
			position: relative;
			width: auto;
			margin: 0 20px;

			> a {
				display: block;
				padding: 28px 10px 23px;
			}
		}
	}
`;

const border_in = keyframes`
	0% {
		width: 0;
	}
	100% {
		width: 28px;
	}
`;

const border_out = keyframes`
	0% {
		width: 28px;
	}
	100% {
		width: 0;
	}
`;

export const MenuLink = styled(Anchor)`
	:after {
		content: ' ';
		position: absolute;
		top: 52px;
		left: 10px;
		width: 0;
		height: 4px;
		background: #FFE29A;
		animation: ${border_out} 0.3s forwards;
	}

	:hover {
		color: #000;

		:after {
			animation: ${border_in} 0.3s forwards;
		}
	}

	${props => props.active && css`
		color: #000;
		font-weight: bold;

		:after {
			width: 28px;
			animation: none;
		}

		:hover {
			:after {
				animation: none;
			}
		}
	`}
`;

