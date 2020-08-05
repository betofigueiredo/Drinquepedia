import styled, { keyframes } from 'styled-components';
import { Heading } from 'grommet';
import theme from '../../styles/theme';

export const Destaque = styled.div`
    display: block;
    position: relative;
    height: 560px;

    @media (max-width: 768px) {
        height: 360px;
    }

    @media (max-width: 1000px) {
        height: 460px;
    }
`;

const show = keyframes`
    0% {
        margin-left: -34px;
        opacity: 0;
    }
    100% {
        margin-left: 0;
        opacity: 1;
    }
`;

const show_image = keyframes`
    0% {
        margin-right: -34px;
        opacity: 0;
    }
    100% {
        margin-right: 0;
        opacity: 1;
    }
`;

export const Numero = styled.div`
    padding: 0;
    font-family: ${theme.header_font};
    font-weight: ${theme.header_font_weight};
    font-size: 120px;
    line-height: 1;
    color: #F2F2F2;
    animation: ${show} 0.3s cubic-bezier(0.12, 0.0, 0.48, 1.0);
    animation-delay: 0.35s;
    animation-fill-mode: backwards;
`;

export const Divisao = styled.div`
    width: 120px;
    height: 4px;
    margin: 20px 0 32px;
    background: #333333;
    animation: ${show} 0.3s cubic-bezier(0.12, 0.0, 0.48, 1.0);
    animation-delay: 0.1s;
    animation-fill-mode: backwards;
`;

export const Titulo = styled(Heading)`
    width: 100%;
    margin: 0 0 25px;
    font-weight: ${theme.header_font_weight};
    font-size: 60px;
    line-height: 1.1;
    color: #323232;
    animation: ${show} 0.3s cubic-bezier(0.12, 0.0, 0.48, 1.0);
    animation-delay: 0.15s;
    animation-fill-mode: backwards;

    @media (max-width: 1000px) {
        font-size: 50px;
    }
`;

export const Descricao = styled.div`
    width: 100%;
    color: #353535;
    animation: ${show} 0.3s cubic-bezier(0.12, 0.0, 0.48, 1.0);
    animation-delay: 0.19s;
    animation-fill-mode: backwards;
`;

export const VejaMais = styled.div`
    height: 81px;
`;

export const Imagem = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    width: 76%;
    height: 100%;
    background: #F3F3F5;
    background-image: url(${props => props.imagem});
    background-size: cover;
    z-index: -1;
    animation: ${show_image} 0.3s cubic-bezier(0.12, 0.0, 0.48, 1.0);
    animation-delay: 0.16s;
    animation-fill-mode: backwards;
`;
