// app/page.tsx

"use client";

import { useEffect, useState } from 'react';
import client from '../lib/graphql-client';

type Customer = {
  id: string;
  name: string;
  email: string;
};

const GET_CUSTOMERS_QUERY = `
  query {
    customers {
      id
      name
      email
    }
  }
`;

export default function Home() {
  const [customers, setCustomers] = useState<Customer[]>([]);

  useEffect(() => {
    const fetchCustomers = async () => {
      try {
        console.log('Fetching customers...');
        const response = await client.post('', { query: GET_CUSTOMERS_QUERY });
        console.log('Response:', response.data);
        if (response.data.errors) {
          console.error('GraphQL Errors:', response.data.errors);
        } else {
          setCustomers(response.data.data.customers);
        }
      } catch (error) {
        console.error('Error fetching customers:', error);
      }
    };

    fetchCustomers();
  }, []);

  return (
    <div>
      <h1>Customers</h1>
      <ul>
        {customers.map((customer) => (
          <li key={customer.id}>
            {customer.name} - {customer.email}
          </li>
        ))}
      </ul>
    </div>
  );
}
