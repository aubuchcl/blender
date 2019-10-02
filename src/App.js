import React from "react";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import { BrowserRouter, Route } from "react-router-dom";

import Toasters from "./Toasters/Toasters";
import Toaster from "./Toasters/Toaster";

// Set up apollo client
const client = new ApolloClient({
  uri: "https://chrisaubuchon.com/graphql"
});

function App() {
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <div>
          <header>
            <h1>Toaster Review site</h1>
          </header>
          <div className="content">
            <Route exact path="/" component={Toasters} />
            <Route path="/toasters" component={Toasters} />
            <Route path="/toaster/:slug" component={Toaster} />
          </div>
        </div>
      </BrowserRouter>
    </ApolloProvider>
  );
}

export default App;
