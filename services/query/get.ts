import { gql } from "@apollo/client";

export const validatUser = gql`
  query MyQuery($username: String!, $password: String!) {
    users(
      where: { username: { _eq: $username }, password: { _eq: $password } }
    ) {
      id
      email
      created_at
      password
      username
    }
  }
`;

export const queryWifi = gql`
  query MyQuery {
    wifi {
      speed
      provider
      name
      id
      created_at
    }
  }
`;

export const queryPackage = gql`
  query MyQuery {
    package {
      id
      max_user
      name
      price
      wifi_selected {
        name
        provider
        speed
        id
        created_at
      }
    }
  }
`;

export const queryMember = gql`
  query MyQuery {
    member {
      expired
      id
      name_user
      package_id
      code
      package {
        name
      }
    }
  }
`;
