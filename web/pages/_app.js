import React from 'react'
import Router from 'next/router'
import App from 'next/app'
import nprogress from 'nprogress'
import debounce from 'lodash.debounce'

// Only show nprogress after 500ms (slow loading)
const start = debounce(nprogress.start, 500)
Router.events.on('routeChangeStart', start)
Router.events.on('routeChangeComplete', url => {
  start.cancel()
  nprogress.done()
  window.scrollTo(0, 0)
})
Router.events.on('routeChangeError', () => {
  start.cancel()
  nprogress.done()
})

// import '../styles/tailwind.css'
// import '../styles/index.css'

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props
    return <Component {...pageProps} />
  }
}

export default MyApp
