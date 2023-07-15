import { gql } from "@apollo/client";

export const postWifi = gql`
  mutation MyMutation($speed: Int!, $provider: String!, $name: String!) {
    insert_wifi_one(
      object: { name: $name, provider: $provider, speed: $speed }
    ) {
      created_at
      id
      name
      provider
      speed
    }
  }
`;

export const postPackage = gql`
  mutation MyMutation($object: package_insert_input!) {
    insert_package_one(object: $object) {
      id
      max_user
      name
      price
      wifi_id
    }
  }
`;

export const postMember = gql`
  mutation MyMutation($object: member_insert_input!) {
    insert_member_one(object: $object) {
      code
      expired
      id
      name_user
    }
  }
`;
