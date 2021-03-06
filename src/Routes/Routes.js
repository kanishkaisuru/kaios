import React, { Component } from 'react';


//components
import App from "../view/app.js";
import ContactList from "../components/contact_list/contact_list";
import SingleContact from "../components/single_contact_details/single_contact_details";
import Login from "../components/login/login";
import Calling from "../components/calling/calling";

const Routes  = [
    {
        path: '/contact-list',
        name: "Contact list",
        icon: "fas fa-user",
        component: ContactList
    },
    {
        path: '/single-contact-list',
        name: "single contact list",
        icon: "fas fa-user",
        component: SingleContact
    },
    {
        path: '/login',
        name: "login",
        icon: "fas fa-user",
        component: Login
    },
    {
        path: '/calling',
        name: "calling",
        icon: "fas fa-user",
        component: Calling 
    }
]
export default Routes;
