import React from "react";
import { ApolloProvider } from "@apollo/react-hooks";
import client from "./client";
import { Repository } from "./Repository";

function App() {
  return (
    <ApolloProvider client={client}>
      <Repository owner="leighhalliday" name="use-supercluster" />
      <Repository owner="leighhalliday" name="uses.tools" />
    </ApolloProvider>
  );
}

export default App;
