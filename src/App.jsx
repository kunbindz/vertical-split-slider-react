import { useEffect, useState } from "react";
import "./App.css";

const App = () => {
  const [current, setCurrent] = useState("blue");

  const next = () => {
    let l, r;
    switch (current) {
      case "gold":
        l = "0";
        r = "-200";
        setCurrent("blue");
        break;
      case "blue":
        l = "-100";
        r = "-100";
        setCurrent("red");
        break;
      case "red":
        l = "-200";
        r = "0";
        setCurrent("gold");
        break;
      default:
        l = "0";
        r = "0";
    }
    document.querySelector(".left").style.transform = `translateY(${l}vh)`;
    document.querySelector(".right").style.transform = `translateY(${r}vh)`;
  };

  const prev = () => {
    let l, r;
    switch (current) {
      case "red":
        l = "0";
        r = "-200";
        setCurrent("blue");
        break;
      case "blue":
        l = "-200";
        r = "0";
        setCurrent("gold");
        break;
      case "gold":
        l = "-100";
        r = "-100";
        setCurrent("red");
        break;
      default:
        l = "0";
        r = "0";
    }
    document.querySelector(".left").style.transform = `translateY(${l}vh)`;
    document.querySelector(".right").style.transform = `translateY(${r}vh)`;
  };

  const handleKeyUp = (e) => {
    if (e.key === "ArrowUp") {
      prev();
    }
    if (e.key === "ArrowDown") {
      next();
    }
  };

  const handleScroll = (e) => {
    const delta = Math.sign(e.deltaY || -e.detail);
    if (delta > 0) {
      next();
    } else if (delta < 0) {
      prev();
    }
  };

  const handleDotClick = (target) => {
        setCurrent(target);
  };

  return (
    <div className="slider-container">
      <div
        className="mask"
        tabIndex="0"
        onKeyUp={handleKeyUp}
        onWheel={handleScroll}
      >
        <div className="wrapper">
          <div className="column left">
            <div className={`content first ${current === "blue" && "active"}`}>
              <h2>Blue Iceberg</h2>
              <p>Get cool with blue</p>
            </div>
            <div className={`content second ${current === "red" && "active"}`}>
              <h2>Crimson Spring</h2>
              <p>Red is not a crime</p>
            </div>
            <div className={`content third ${current === "gold" && "active"}`}>
              <h2>Mida`s Heir</h2>
              <p>Be more with a touch</p>
            </div>
          </div>
          <div className="column right">
            <div
              className={`pic first ${current === "blue" && "active"}`}
            ></div>
            <div
              className={`pic second ${current === "red" && "active"}`}
            ></div>
            <div
              className={`pic third ${current === "gold" && "active"}`}
            ></div>
          </div>
        </div>
      </div>
      <div className="dots-container">
        <div
          className={`dot ${current === "blue" ? "active" : ""}`}
          onClick={() => handleDotClick("blue")}
        ></div>
        <div
          className={`dot ${current === "red" ? "active" : ""}`}
          onClick={() => handleDotClick("red")}
        ></div>
        <div
          className={`dot ${current === "gold" ? "active" : ""}`}
          onClick={() => handleDotClick("gold")}
        ></div>
      </div>
    </div>
  );
};

export default App;
