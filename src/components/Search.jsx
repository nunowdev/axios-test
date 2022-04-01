import React, { useState, useEffect } from "react";

const Search = () => {
  const [input, setInput] = useState("");

  useEffect(() => {
    console.log(input);
  });

  return (
    <form>
      <label>
        Name:
        <input
          type="text"
          value={input}
          onInput={(e) => setInput(e.target.value)}
        />
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
};

export default Search;
