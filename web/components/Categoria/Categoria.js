import React, { useState, useEffect } from 'react';
import { gql } from '@apollo/client';

import client from '../../services';

const query = gql`
    query GetCategorias {
        categorias {
            id
            nome
        }
    }
`;

const Categoria = () => {
    const [categorias, setCategorias] = useState([]);

    useEffect(() => {
        client
            .query({ query })
            .then(result => {
                setCategorias(result.data.categorias || []);
            });
    }, []);

    return (
        <div>
            {categorias.map(categoria => (
                <p key={categoria.id}>{categoria.nome}</p>
            ))}
        </div>
    );
};

export default Categoria;
