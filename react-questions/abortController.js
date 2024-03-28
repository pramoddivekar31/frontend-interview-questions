import React, { useState, useEffect, useRef } from "react";

export default function App() {
  const [value, setValue] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const abortControllerRef = useRef(null);

  useEffect(() => {
    const fetchData = async () => {
      // Create a new AbortController and store its reference in the ref
      abortControllerRef.current = new AbortController();
      const signal = abortControllerRef.current.signal;

      try {
        setLoading(true);
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/users?q=${value}`,
          { signal }
        );
        const data = await response.json();
        setSearchResults(data);
      } catch (error) {
        if (error.name !== "AbortError") {
          setError(error);
        }
      } finally {
        setLoading(false);
      }
    };

    if (value) {
      fetchData();
    }

    // Cleanup function to abort the previous request
    return () => {
      if (abortControllerRef.current) {
        abortControllerRef.current.abort();
      }
    };
  }, [value]);

  const onSearch = (e) => setValue(e.target.value);

  return (
    <div>
      <input onChange={onSearch} value={value} placeholder="Search users..." />
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      {searchResults.length > 0 && (
        <ul>
          {searchResults.map((user) => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
}
