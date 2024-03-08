import React from 'react';
import Link from 'next/link';
// Utils
import config from 'utils/config';
// Css
import * as s from './NavigationBar.style';
// Components
import MenuItem from './MenuItem';

const NavigationBar = () => (
    <s.NavigationBar>
        <s.NavigationWrapper>
            <s.Logo>
                <Link href="/"><a><img src={`${config.STORAGE_PATH}/drinquepedia-logo.png`} alt="Home" /></a></Link>
            </s.Logo>
            <s.Menu>
                <ul>
                    <MenuItem href="/drinques" label="Drinques" />
                    <MenuItem href="/destaques" label="Destaques" />
                    <MenuItem href="/tudosobrebar" label="Tudo sobre bar" />
                    <MenuItem href="/dicas" label="Dicas" />
                </ul>
            </s.Menu>
        </s.NavigationWrapper>
    </s.NavigationBar>
);

export default NavigationBar;
