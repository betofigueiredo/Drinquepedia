import React from 'react';
import PropTypes from 'prop-types';
import { useQuery } from '@apollo/client';
import { Container, Row, Column } from 'ui-components';

// Api
import { GET_DRINQUE } from 'api';

// Css
import * as s from './Drinque.style';

const Drinque = ({ drinque_full_id }) => {
    if (drinque_full_id === '') return null;

    const [drinque_id] = drinque_full_id.split('-').slice(-1);
    const { loading, error, data } = useQuery(GET_DRINQUE, {
        variables: { drinque_id: Number(drinque_id) },
    });

    console.log('data', data.drinques);

    return (
        <Container>
            <Row>
                <Column>
                    <s.Drinque>{drinque_id}</s.Drinque>
                </Column>
            </Row>
        </Container>
    );
};

Drinque.propTypes = {
    drinque_full_id: PropTypes.string,
};

Drinque.defaultProps = {
    drinque_full_id: '',
};

export default Drinque;
