import Head from 'next/head';
import Destaques from 'components/Destaques';
import { Container, Row, Column } from 'ui-components';

const Home = () => (
    <>
        <Head>
            <title>Drinquepedia</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        <Container>
            <Row>
                <Column>
                    <Destaques />
                </Column>
            </Row>

            <Row>
                <Column>aaa</Column>
                <Column>aaa</Column>
                <Column>aaa</Column>
            </Row>
        </Container>
    </>
);

export default Home;
