import React, { useState } from 'react';

// CSS
import * as s from './Destaques.style';

// Components
import Destaque from '../Destaque';

// Utils
import config from '../../utils/config';

const Destaques = () => {
	const [destaque_selecionado, setDestaque] = useState(1);

	const dests = [
		{
			numero: 1,
			titulo: <>Caipirinhas especiais <br /> para este verão</>,
			descricao: <>Com certeza a melhor opção para os dias quentes! Confira receitas <br /> com blueberrys, amoras, kiwis, morangos e muito mais</>,
			imagem: `${config.storage_path}/destaques/caipirinhas-large.jpg`,
			link: '',
		},
		{
			numero: 2,
			titulo: <>Smoothies naturais e <br /> saudáveis</>,
			descricao: <>Smoothies são bebidas saudáveis feitas com frutas, iogurtes e <br /> outros ingredientes naturais. Perfeitos para o verão</>,
			imagem: `${config.storage_path}/destaques/smoothies-large.jpg`,
			link: '',
		},
		{
			numero: 3,
			titulo: <>Drinques quentes para <br /> os dias frios</>,
			descricao: <>Separamos nossos melhores coquetéis para te esquentar nos dias <br /> mais frios, apreciando também aquele bom chocolate quente</>,
			imagem: `${config.storage_path}/destaques/hot-drink-large.jpg`,
			link: '',
		},
	];

	function alterarDestaque(numero_destaque) {
		setDestaque(null);
		setTimeout(() => setDestaque(numero_destaque), 50);
	}

	const des = dests[destaque_selecionado - 1];

	return (
		<s.Destaques>
			{destaque_selecionado !== null && (
				<Destaque destaque={des} />
			)}
			<button onClick={() => alterarDestaque(1)}>1</button>
			<button onClick={() => alterarDestaque(2)}>2</button>
			<button onClick={() => alterarDestaque(3)}>3</button>
		</s.Destaques>
	);
};

export default Destaques;
