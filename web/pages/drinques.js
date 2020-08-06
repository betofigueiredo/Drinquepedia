import React, { useState, useEffect } from 'react';
import { gql } from '@apollo/client';
import { Heading } from 'grommet';
import client from '../services';

import { Container, Row, Column } from '../ui-components';
import NavigationBar from '../components/NavigationBar';
import SubNavigation from '../components/SubNavigation';
import Categoria from '../components/Categoria';
import DrinqueRow from '../components/DrinqueRow';

const query = gql`
    query GetCategorias {
        categorias {
            id
            nome
        }
    }
`;

const Drinques = () => {
    const [categorias, setCategorias] = useState([]);

    useEffect(() => {
        client
            .query({ query })
            .then(result => {
                setCategorias(result.data.categorias || []);
            });
    }, []);

    return (
        <>
            <NavigationBar />
            <SubNavigation />
            <Container>
                <Row>
                    <Column>
                        <Heading level={3}>Shots</Heading>
                    </Column>
                </Row>
                <Row>
                    <Column>
                        <DrinqueRow
                            drinque={{
                                imagem: 'http://www.drinquepedia.com/drinques/fotos/438/438p.jpg',
                                nome: 'Sex on the Beach',
                                ingredientes: 'Licor de Pêssego, Bailey´s Irish Cream, Grenadine',
                            }}
                        />
                        <DrinqueRow
                            drinque={{
                                imagem: 'http://www.drinquepedia.com/drinques/fotos/79/79p.jpg',
                                nome: '77 Sunset Strip',
                                ingredientes: 'Vodca, Gin, Rum Branco, Triple Sec, Suco de Abacaxi, Água com gás, Grenadine',
                            }}
                        />
                        <DrinqueRow
                            drinque={{
                                imagem: 'http://www.drinquepedia.com/drinques/fotos/160/160p.jpg',
                                nome: 'Adios Muchachos',
                                ingredientes: 'Vodca, Suco de Laranja, Suco de Abacaxi, Mix de Limão, Mix de Morango',
                            }}
                        />
                    </Column>
                </Row>
                <Categoria />
            </Container>
        </>
    );
};

export default Drinques;
