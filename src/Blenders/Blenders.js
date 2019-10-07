import React from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import { Link } from "react-router-dom";

const Blenders = () => (
  <Query
    query={gql`
      {
        blenders {
          edges {
            node {
              title
              slug
            }
          }
        }
      }
    `}
  >
    {/* object available to render data */}
    {({ loading, error, data }) => {
      while (loading || error) {
        return <h1>Loading...</h1>;
      }

      return (
        <div>
          {data.blenders.edges.map((blender, key) => {
            return (
              <div key={key}>
                <h2>{blender.node.title}</h2>
                <Link to={`/blender/${blender.node.slug}`}>
                  {blender.node.slug} Learn More
                </Link>
              </div>
            );
          })}
        </div>
      );
    }}
  </Query>
);

export default Blenders;
