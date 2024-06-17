// lib/graphql-client.ts

import axios from 'axios';
import { Console } from 'console';

const client = axios.create({
  baseURL: "https://modest-tetra-26.hasura.app/v1/graphql",
  headers: {
    'Content-Type': 'application/json',
    'x-hasura-admin-secret':"3DjEPkAffdkW52wNbju51p8xF5O8A6J5Y3dZQpw4zc0JpLqNK533Nv7gVx15r0Tq",
  },
});

export default client;
