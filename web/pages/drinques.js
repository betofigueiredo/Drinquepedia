import { Container, Row, Column } from '../ui-components';
import NavigationBar from '../components/NavigationBar';
import SubNavigation from '../components/SubNavigation';
import Categoria from '../components/Categoria';

const Drinques = () => (
    <>
        <NavigationBar />
        <SubNavigation />
        <Container>
            <Row>
                <Column>aaa</Column>
                <Column>aaa</Column>
                <Column>aaa</Column>
            </Row>

            <Categoria />
        </Container>
    </>
);

export default Drinques;
