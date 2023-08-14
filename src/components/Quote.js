import React, { useState, useEffect } from 'react';

function DisplayQuote() {
  const [data, setData] = useState([{ quote: '', author: '', category: '' }]);
  const [count, setCount] = useState(0);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const url = 'https://api.api-ninjas.com/v1/quotes?';
  const apiKey = 'z5XLf8fhX3+Ih1Uq/ImzfA==uzC71RdEcjGKYpXv';

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(url, {
          method: 'GET',
          headers: { 'X-Api-Key': apiKey },
          'Content-type': 'application/json; charset=UTF-8',
          'access-control-allow-origin': '*',
          'Access-Control-Allow-Credentials': 'true',
        });
        const json = await response.json();
        setData(json);
        setCount((c) => c + 1);
      } catch (error) {
        setError(true);
      }
      setIsLoading(false);
    };
    fetchData();
  }, [setData, setIsLoading]);

  if (error) return <p>Something went wrong!, can not display</p>;
  if (isLoading) return <p>Loading... please wait</p>;

  return (
    <section id="quote">
      <q>{ data[0].quote }</q>
      <p><b>{ data[0].author }</b></p>
      <q>{ data[0].category }</q>
      <p>
        You have read
        {' '}
        <strong>{ count }</strong>
        {' '}
        pieces of quotes
      </p>
    </section>
  );
}

export default DisplayQuote;
