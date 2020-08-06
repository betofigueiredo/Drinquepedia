import { Container, Row, Column } from '../ui-components';
import NavigationBar from '../components/NavigationBar';
import Destaques from '../components/Destaques';

const Home = () => (
    <>
        <NavigationBar />
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
