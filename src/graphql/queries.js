import { gql } from "@apollo/client";

export const GET_USER_ID_BY_EMAIL = gql`
  query GetUserIdByEmail($email: String!) {
    getUserIdByEmail(email: $email)
  }
`;

export const GET_USERS = gql`
  query {
    users {
      id
      name
      email
    }
  }
`;
