import React, { Component } from "react";

import gql from "graphql-tag";
import { graphql } from "react-apollo";

class Toaster extends Component {
  render() {
    const props = this.props;
    console.log({ props });
    if (!props.data.toaster) {
      return <p>Loadings</p>;
    }
    return (
      <div>
        <h2>{props.data.toaster.title}</h2>
        <p>
          Price -> $
          <strong style={{ color: "green" }}>
            {props.data.toaster.toasterMeta.price}
          </strong>
        </p>

        <p>
          Watts -> <strong>{props.data.toaster.toasterMeta.watts}</strong>
        </p>
      </div>
    );
  }
}

const GetToasterBySlug = gql`
  query getToasterBySlug($slug: String) {
    toaster: toasterBy(uri: $slug) {
      title
      toasterMeta {
        price
        watts
      }
    }
  }
`;

export default graphql(GetToasterBySlug, {
  options: props => {
    const slug = props.match.params.slug;
    return {
      variables: {
        slug
      }
    };
  }
})(Toaster);

// normal export`
// export default Toaster
