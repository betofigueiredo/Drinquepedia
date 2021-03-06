import React from 'react';
import PropTypes from 'prop-types';
import { Heading } from 'grommet';
import { useQuery } from '@apollo/client';

// Api
import { GET_DRINQUES_LIST } from 'api';

// Components
import { Container, Row, Column } from 'ui-components';
import DrinqueRow from '../DrinqueRow';

// CSS
import * as s from './DrinquesList.style';

const DrinquesList = ({ categoria }) => {
    const show_all_drinks = categoria === '';
    const query = show_all_drinks
        ? GET_DRINQUES_LIST
        : GET_DRINQUES_LIST;
    const { loading, error, data } = useQuery(query);

    console.log('data', data);

    return (
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
        </Container>
    );
};

DrinquesList.propTypes = {
    categoria: PropTypes.string,
};

DrinquesList.defaultProps = {
    categoria: '',
};

export default DrinquesList;
