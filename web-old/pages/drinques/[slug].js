import { useRouter } from 'next/router';
// Components
import SubNavigation from 'components/SubNavigation';
import DrinquesList from 'components/DrinquesList';
import Drinque from 'components/Drinque';
// Utils
import { categorias_urls } from 'utils/categorias';

const Slug = () => {
    const router = useRouter();
    const slug = router.query.slug || '';
    const isCategoria = categorias_urls
        .some(categoria => categoria === slug.toLowerCase());

    if (isCategoria) {
        return (
            <>
                <SubNavigation />
                <DrinquesList categoria={slug} />
            </>
        );
    }

    const drinque_full_id = slug;
    return (
        <>
            <SubNavigation />
            <Drinque drinque_full_id={drinque_full_id} />
        </>
    );
};

export default Slug;
