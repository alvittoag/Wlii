import { gql } from "@apollo/client";

export const DeleteWifi = gql`
  mutation MyMutation($id: Int!) {
    delete_wifi_by_pk(id: $id) {
      id
    }
  }
`;

export const DeletePackage = gql`
  mutation MyMutation($id: Int!) {
    delete_package_by_pk(id: $id) {
      id
    }
  }
`;

export const DeleteMember = gql`
  mutation MyMutation($id: Int!) {
    delete_member_by_pk(id: $id) {
      id
    }
  }
`;
