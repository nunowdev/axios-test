import React, { useState } from "react";
import Axios from "axios";

const Search = () => {
  const [photosArr, setPhotosArr] = useState([]);
  const arrayTest = [];

  async function getPhotos() {
    const searchInput = document.getElementById("searchInput");
    const requestedData = await Axios.get(
      `https://api.unsplash.com/search/photos?query=${searchInput.value}&client_id=S1V-XtrLp6rvngz6YkmCg9tiEFlsZODnssVAEZTHYdU&`
    );
    for (let i = 0; i < 10; ++i) {
      arrayTest.push(requestedData.data.results[i].urls.regular);
    }
    setPhotosArr(arrayTest);
    console.log(photosArr);
    //console.log(requestedData.data.results[0].alt_description);
  }

  return (
    <div className="App">
      <h1>Hello World!</h1>
      <button onClick={getPhotos}>Click here</button>
      <input id="searchInput" type="text" onInput={getPhotos}></input>
      <br></br>
      {photosArr.map((photo) => (
        <img src={photo} class="searchedimg" alt=""></img>
      ))}
    </div>
  );
};

export default Search;
