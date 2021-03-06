/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Grommet } from 'grommet';
import { ApolloProvider } from '@apollo/client';
// import Router from 'next/router'
import App from 'next/app';
import NavigationBar from 'components/NavigationBar';
import client from 'services';
// import nprogress from 'nprogress'
// import debounce from 'lodash.debounce'

// Only show nprogress after 500ms (slow loading)
// const start = debounce(nprogress.start, 500)
// Router.events.on('routeChangeStart', start)
// Router.events.on('routeChangeComplete', url => {
//   start.cancel()
//   nprogress.done()
//   window.scrollTo(0, 0)
// })
// Router.events.on('routeChangeError', () => {
//   start.cancel()
//   nprogress.done()
// })

import 'styles/normalize.css';
import 'styles/fonts.css';
import grommetTheme from 'styles/grommetTheme';

class MyApp extends App {
    render() {
        const { Component, pageProps } = this.props;

        return (
            <ApolloProvider client={client}>
                <Grommet theme={grommetTheme}>
                    <NavigationBar />
                    <Component {...pageProps} />
                </Grommet>
            </ApolloProvider>
        );
    }
}

export default MyApp;
