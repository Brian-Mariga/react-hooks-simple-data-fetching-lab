// create your App component here
import React, { useEffect, useState } from "react";

function App() {
  const [dogImageUrl, setDogImageUrl] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((res) => res.json())
      .then((data) => {
        setDogImageUrl(data.message);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error Fetching data:", error);
        setLoading(false);
      });
  }, []);

  return (
    <>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <img src={dogImageUrl} alt="A Random Dog" />
      )}
    </>
  );
}

export default App;
