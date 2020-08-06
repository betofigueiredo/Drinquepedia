import styled, { css } from 'styled-components';
import { Anchor } from 'grommet';
import theme from '../../styles/theme';
import { transition } from '../../styles/mixins';

export const NavigationBar = styled.div`
    height: 81px;
    border-bottom: 1px solid #F0F0F0;
`;

export const NavigationWrapper = styled.div`
    display: flex;
    flex-direction: row;
    max-width: ${theme.max_width}px;
    margin: 0 auto;
    padding: 0 15px;
`;

export const Logo = styled.div`
    min-width: 281px;
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

export const MenuLink = styled(Anchor)`
    :after {
        content: ' ';
        position: absolute;
        top: 52px;
        left: 10px;
        width: 0;
        height: 4px;
        background: #FFE29A;
        ${transition('all 0.25s')}
    }

    :hover {
        color: #000;

        :after {
            width: 28px;
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
