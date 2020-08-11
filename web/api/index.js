import { gql } from '@apollo/client';

export const GET_DRINQUE = gql`
    query getDrinque($drinque_id: Int!) {
        drinque(id: $drinque_id) {
            id
            nome
        }
    }
`;
