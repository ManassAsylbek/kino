/** @format */

import React from 'react';
import 'assets/scss/app.scss';
import AppRouter from "router/AppRouter";
import Layout from "./layout/Layout";


function App() {
    return (
        <Layout>
            <AppRouter/>
        </Layout>
    );
}

export default App;
