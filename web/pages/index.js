import Destaques from 'components/Destaques';
import { Container, Row, Column } from 'ui-components';

const Home = () => (
    <>
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
