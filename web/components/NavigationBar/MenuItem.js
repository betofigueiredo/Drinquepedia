import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { useRouter } from 'next/router';
// Css
import * as s from './NavigationBar.style';

const MenuItem = ({ href, label }) => {
    const router = useRouter();
    const drinques_active = router.pathname.indexOf(href) !== -1;

    return (
        <li>
            <Link href={href} passHref>
                <s.MenuLink label={label} active={drinques_active} />
            </Link>
        </li>
    );
};

MenuItem.propTypes = {
    href: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
};

export default MenuItem;
