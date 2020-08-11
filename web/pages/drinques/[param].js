import { useRouter } from 'next/router';
// Components
import SubNavigation from 'components/SubNavigation';
import DrinquesList from 'components/DrinquesList';
import Drinque from 'components/Drinque';
// Utils
import { categorias_urls } from 'utils/categorias';

const Param = () => {
    const router = useRouter();
    const param = router.query.param || '';
    const isCategoria = categorias_urls
        .some(categoria => categoria === param.toLowerCase());

    if (isCategoria) {
        return (
            <>
                <SubNavigation />
                <DrinquesList categoria={param} />
            </>
        );
    }

    return (
        <>
            <SubNavigation />
            <Drinque drinque_full_id={param} />
        </>
    );
};

export default Param;
