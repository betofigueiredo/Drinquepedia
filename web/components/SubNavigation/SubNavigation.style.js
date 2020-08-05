import styled, { css, keyframes } from 'styled-components';
import { Anchor } from 'grommet';
import theme from '../../styles/theme';

export const SubNavigation = styled.div`
    height: 52px;
    background: #F7F7F7;
    border-bottom: 1px solid #F0F0F0;
`;

export const SubNavigationWrapper = styled.div`
    display: flex;
    flex-direction: row;
    max-width: ${theme.max_width}px;
    margin: 0 auto;
`;

export const Submenu = styled.div`
    padding: 0;

    > ul {
        margin: 0;
        padding: 0;
        list-style: none;
        text-align: left;
        display: flex;
        align-items: center;

        > li {
            position: relative;
            width: auto;
            margin: 0 40px 0 0;

            :last-of-type {
                margin: 0;
            }

            > a {
                display: block;
                font-size: 14px;
                padding: 14px 0 13px;
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

export const SubmenuLink = styled(Anchor)`
    :after {
        content: ' ';
        position: absolute;
        top: 37px;
        left: 0;
        width: 0;
        height: 3px;
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

export const Division = styled.div`
    width: 1px;
    height: 13px;
    background: #ccc;
    margin: 0 4px;
`;
