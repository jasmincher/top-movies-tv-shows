import React from "react";
import "../css/Home.css";

function Home() {
  return (
    <div id="home-container">
      <h2 style={{ textAlign: "center", marginBottom: "20px" }}>
        Tired of searching? Me too.
      </h2>
      <p>
        I know what it feels like to waste hours in searching for something good to watch, and finally finding something interesting, but now you're too sleepy to watch. That's why I created this website, so anyone can discover great shows and movies, quick and easy. All of these movies and
        shows are worth watching, even if it's not in your favorite genre selection. 
      </p>

      <img
        src="https://media.giphy.com/media/3o6gDWOo1d6zKmQCru/source.gif"
        style={{ width: "100%", marginTop: "20px" }}
      />
    </div>
  );
}

export default Home;
