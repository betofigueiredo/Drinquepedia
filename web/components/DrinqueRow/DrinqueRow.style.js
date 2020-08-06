import styled from 'styled-components';
import { Heading } from 'grommet';
import theme from '../../styles/theme';

export const DrinqueRow = styled.div`
    display: block;
    position: relative;
    min-height: 121px;
    padding: 10px 0 0 120px;
`;

export const Nome = styled(Heading)`
    width: 100%;
    margin: 0 0 5px;
    font-weight: ${theme.header_font_weight};
    color: #EFC04C;
`;

export const Ingredientes = styled.div`
    width: 100%;
    font-size: 14px;
    color: #353535;

    > span {
        color: #8B9499;
    }
`;

export const Imagem = styled.div`
    position: absolute;
    top: 8px;
    left: 8px;
    width: 76px;
    height: 76px;
    border-radius: 100%;
    background: #F3F3F5;
    background-image: url(${props => props.imagem});
    background-size: cover;
    z-index: -1;
`;

export const BorderBreak = styled.div`
    position: absolute;
    top: 0;
    left: 49px;
    width: 52px;
    height: 60px;
    background: #fff;
    z-index: -2;
`;

export const BorderBack = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 92px;
    height: 92px;
    border-radius: 100%;
    border: 2px solid #FFC107;
    z-index: -3;
`;