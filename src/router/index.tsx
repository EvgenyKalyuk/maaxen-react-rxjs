import * as React from 'react';
import { Switch, Route } from 'react-router-dom';

import MainPage from 'pages/main';
import ApartmentList from 'pages/apartment-list';
import ApartmentCard from 'pages/apartment-card';
import Contacts from 'pages/contacts';
import NotFound from 'pages/not-found';

export default () => (
    <Switch>
        <Route path="/apartment/:id" component={ApartmentCard} />
        <Route path="/apartment" component={ApartmentList} />
        <Route path="/contacts" component={Contacts} />
        <Route path="/" component={MainPage} />
        <Route path="*" component={NotFound} />
    </Switch>
);
