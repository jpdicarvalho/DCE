import React from "react";
import ReactDOM from "react-dom/client";
import { ApolloProvider } from "@apollo/client";
import client from "./config/apolloClient";

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './index.css'
import App from './App.jsx'

ReactDOM.createRoot(document.getElementById("root")).render(
    <ApolloProvider client={client}>
        <StrictMode>
          <App />
        </StrictMode>,
    </ApolloProvider>
);
