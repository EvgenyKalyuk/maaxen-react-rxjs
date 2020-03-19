import * as React from 'react';

import Router from 'router';

import Header from './views/header';
import Footer from './views/footer';

export default () => (
    <>
        <Header />
        <Router />
        <Footer />
    </>
);
