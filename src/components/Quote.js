import React, { useState, useEffect } from 'react';

function GetQuote() {
  const [data, setData] = useState([{ quote: '', author: '' }]);
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const url = 'https://api.api-ninjas.com/v1/quotes';
  const apiKey = 'z5XLf8fhX3+Ih1Uq/ImzfA==uzC71RdEcjGKYpXv';

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const res = await fetch('url', {
          method: 'GET',
          headers: { 'X-Api-Key': 'apiKey' },
        });
        const json = await res.json();
        setData(json);
      } catch (error) {
        setHasError(true);
      }
      setIsLoading(false);
    };
    fetchData();
  }, [setData, setIsLoading]);

  if (hasError) return <div>Something went wrong!</div>;
  if (isLoading) return <div>Loading...</div>;

  return (
    <section id="quote">
      <q>{ data[0].quote }</q>
      <p>{ data[0].author }</p>
    </section>
  );
}

export default GetQuote;
