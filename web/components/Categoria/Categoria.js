import React, { useEffect } from 'react';
import { gql } from '@apollo/client';

import client from '../../services';

const Categoria = () => {
	useEffect(() => {
		client
			.query({
				query: gql`
					query GetCategorias {
						categorias {
							id
							nome
						}
					}
				`
			})
			.then(result => console.log(result));
	}, []);

	return (
		<div>aaaa</div>
	);
};

export default Categoria;
