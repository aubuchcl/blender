import React, { Component } from "react";

import gql from "graphql-tag";
import { graphql } from "react-apollo";

class Blender extends Component {
  render() {
    const props = this.props;
    console.log({ props });
    if (!props.data.blender) {
      return <p>Loadings</p>;
    }
    return (
      <div>
        <h2>{props.data.blender.title}</h2>
        <p>
          Price -> $
          <strong style={{ color: "green" }}>
            {props.data.blender.blenderMeta.price}
          </strong>
        </p>

        <p>
          Watts -> <strong>{props.data.blender.blenderMeta.watts}</strong>
        </p>
      </div>
    );
  }
}

const GetBlenderBySlug = gql`
  query getBlenderBySlug($slug: String) {
    blender: blenderBy(uri: $slug) {
      title
      blenderMeta {
        price
        watts
      }
    }
  }
`;

export default graphql(GetBlenderBySlug, {
  options: props => {
    const slug = props.match.params.slug;
    return {
      variables: {
        slug
      }
    };
  }
})(Blender);

// normal export`
// export default Blender
