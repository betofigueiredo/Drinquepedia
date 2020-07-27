import { Container, Row, Column } from '../ui-components';
import NavigationBar from '../components/NavigationBar';
import Destaques from '../components/Destaques';
import Categoria from '../components/Categoria';

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

			<Categoria />
		</Container>
	</>
);

export default Home;
