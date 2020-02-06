import React from "react";
import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";
import { filter } from "graphql-anywhere";
import { Languages } from "./Languages";

const REPOSITORY_QUERY = gql`
  query RepositoryQuery($owner: String!, $name: String!) {
    repository(owner: $owner, name: $name) {
      id
      name
      description
      ...LanguageFragment
    }
  }
  ${Languages.fragments.repository}
`;

function Repository({ name, owner }) {
  const { data, loading, error } = useQuery(REPOSITORY_QUERY, {
    variables: { owner, name }
  });

  if (error) return <div>error...</div>;
  if (loading || !data) return <div>loading...</div>;

  // return <pre>{JSON.stringify(data, null, 2)}</pre>;

  return (
    <div>
      <h2>{data.repository.name}</h2>
      <p>{data.repository.description}</p>
      <Languages
        repository={filter(Languages.fragments.repository, data.repository)}
      />
    </div>
  );
}

export { Repository };
