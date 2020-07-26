import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

// CSS
import * as s from './Destaque.style';

const Destaque = ({ destaque }) => {
	return (
		<s.Destaque>
			<s.Numero>0{destaque.numero}</s.Numero>
			<s.Divisao />
			<s.Titulo>{destaque.titulo}</s.Titulo>
			<s.Descricao><p>{destaque.descricao}</p></s.Descricao>
			<s.VejaMais>Veja mais</s.VejaMais>
			<s.Imagem imagem={destaque.imagem} />
		</s.Destaque>
	);
};

Destaque.propTypes = {
	destaque: PropTypes.shape({
		numero: PropTypes.number,
		titulo: PropTypes.node,
		descricao: PropTypes.node,
		imagem: PropTypes.string,
		link: PropTypes.string,
	}).isRequired,
};

export default Destaque;
