
import { useState, useCallback } from "react";

export const UserService = () => {

  const [ loading, setLoading ] = useState(false);

  const getUsers = useCallback(async () => {

    setLoading(true);

    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      if (!response.ok) {
        throw new Error(`Could not fetch, status: ${response.status}`);
      }
      const data = await response.json();
      setLoading(false);
      return data;
    } catch(e) {
      setLoading(false);
      throw e;
    }
  }, [])

  const getUserById = useCallback(async (id) => {
    setLoading(true);

    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
      if (!response.ok) {
        throw new Error(`Could not fetch, status: ${response.status}`);
      }
      const data = await response.json();
      setLoading(false);
      return data;
    } catch(e) {
      setLoading(false);
      throw e;
    }
  }, [])

  return { getUsers, getUserById, loading };
}
