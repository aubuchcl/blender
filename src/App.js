import React from "react";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import { BrowserRouter, Route } from "react-router-dom";

import Blenders from "./Blenders/Blenders";
import Blender from "./Blenders/Blender";

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
            <h1>Blender Review site</h1>
          </header>
          <div className="content">
            <Route exact path="/" component={Blenders} />
            <Route path="/blenders" component={Blenders} />
            <Route path="/blender/:slug" component={Blender} />
          </div>
        </div>
      </BrowserRouter>
    </ApolloProvider>
  );
}

export default App;
