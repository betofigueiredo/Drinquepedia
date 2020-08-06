import React from 'react';
import PropTypes from 'prop-types';

// CSS
import * as s from './DrinqueRow.style';

const DrinqueRow = ({ drinque }) => (
    <s.DrinqueRow>
        <s.Imagem imagem={drinque.imagem} />
        <s.BorderBreak />
        <s.BorderBack />
        <s.Nome level={3}>{drinque.nome}</s.Nome>
        <s.Ingredientes>
            <span>Ingredientes:</span> {drinque.ingredientes}
        </s.Ingredientes>
    </s.DrinqueRow>
);

DrinqueRow.propTypes = {
    drinque: PropTypes.shape({
        imagem: PropTypes.string,
        nome: PropTypes.string,
        ingredientes: PropTypes.string,
    }).isRequired,
};

export default DrinqueRow;
