import { gql } from "@apollo/client";

export const PutWifi = gql`
  mutation MyMutation($id: Int!, $setUpdateWifi: wifi_set_input!) {
    update_wifi_by_pk(pk_columns: { id: $id }, _set: $setUpdateWifi) {
      id
    }
  }
`;

export const PutPackage = gql`
  mutation MyMutation($id: Int!, $setUpdatePackage: package_set_input!) {
    update_package_by_pk(pk_columns: { id: $id }, _set: $setUpdatePackage) {
      id
    }
  }
`;
