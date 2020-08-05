import React from 'react';
import Link from 'next/link';

// CSS
import * as s from './SubNavigation.style';

const SubNavigation = () => (
    <s.SubNavigation>
        <s.SubNavigationWrapper>
            <s.Submenu>
                <ul>
                    <li><Link href="/drinques" passHref><s.SubmenuLink label="De A a Z" active /></Link></li>
                    <li><s.Division /></li>
                    <li><Link href="/drinques/martinis" passHref><s.SubmenuLink label="Martinis" /></Link></li>
                    <li><Link href="/drinques/tropicais" passHref><s.SubmenuLink label="Tropicais" /></Link></li>
                    <li><Link href="/drinques/frozen" passHref><s.SubmenuLink label="Frozen" /></Link></li>
                    <li><Link href="/drinques/quentes" passHref><s.SubmenuLink label="Quentes" /></Link></li>
                    <li><Link href="/drinques/shots" passHref><s.SubmenuLink label="Shots" /></Link></li>
                    <li><Link href="/drinques/classicos" passHref><s.SubmenuLink label="Clássicos" /></Link></li>
                    <li><Link href="/drinques/semalcool" passHref><s.SubmenuLink label="Sem Álcool" /></Link></li>
                    <li><s.Division /></li>
                    <li><Link href="/drinques/caipirinhas" passHref><s.SubmenuLink label="Caipirinhas" /></Link></li>
                    <li><Link href="/drinques/smoothies" passHref><s.SubmenuLink label="Smoothies" /></Link></li>
                </ul>
            </s.Submenu>
        </s.SubNavigationWrapper>
    </s.SubNavigation>
);

export default SubNavigation;
