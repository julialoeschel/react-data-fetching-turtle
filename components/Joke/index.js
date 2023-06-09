import { useEffect, useState } from "react";

export default function Joke() {
  const [data, setData] = useState();
  const [id, setId] = useState(0);
  const url = `https://example-apis.vercel.app/api/bad-jokes/${id}`;

  useEffect(() => {
    async function startFetching() {
      const response = await fetch(url);
      const newData = await response.json();

      setData(newData);
    }

    startFetching();
  }, [url]);

  function handlePrevJoke() {
    setId(data.prevId);
  }

  function handleNextJoke() {
    setId(data.nextId);
  }

  if (!data) {
    return <h1>Loading...</h1>;
  }

  return (
    <>
      <small>ID: {id}</small>
      <h1>{data.joke}</h1>
      <div>
        <button type="button" onClick={handlePrevJoke}>
          ← Prev Joke
        </button>
        <button type="button" onClick={handleNextJoke}>
          Next Joke →
        </button>
      </div>
    </>
  );
}
