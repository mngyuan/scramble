import React from 'react';
import App from 'next/app';
import {withTina} from 'tinacms';
import '../css/tailwind.css';

class MyApp extends App {
  render() {
    const {Component, pageProps} = this.props;
    return <Component {...pageProps} />;
  }
}

export default withTina(MyApp);
