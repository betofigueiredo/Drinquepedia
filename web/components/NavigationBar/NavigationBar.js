import React from 'react';
import Link from 'next/link';

// CSS
import * as s from './NavigationBar.style';

// Utils
import config from '../../utils/config';

const NavigationBar = () => (
    <s.NavigationBar>
        <s.NavigationWrapper>
            <s.Logo>
                <Link href="/"><a><img src={`${config.STORAGE_PATH}/drinquepedia-logo.png`} /></a></Link>
            </s.Logo>
            <s.Menu>
                <ul>
                    <li><Link href="/drinques" passHref><s.MenuLink label="Drinques" active /></Link></li>
                    <li><Link href="/destaques" passHref><s.MenuLink label="Destaques" /></Link></li>
                    <li><Link href="/tudosobrebar" passHref><s.MenuLink label="Tudo sobre bar" /></Link></li>
                    <li><Link href="/dicas" passHref><s.MenuLink label="Dicas" /></Link></li>
                </ul>
            </s.Menu>
        </s.NavigationWrapper>
    </s.NavigationBar>
);

export default NavigationBar;
