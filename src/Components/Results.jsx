import React, { useEffect, useState } from "react";
import scissors from "../../images/icon-scissors.svg";
import lizard from "../../images/icon-lizard.svg";
import paper from "../../images/icon-paper.svg";
import rock from "../../images/icon-rock.svg";
import spock from "../../images/icon-spock.svg";
import "./Results.css";

function Results(props) {
  const [results, setResults] = useState("");
  const [isButton, setIsButton] = useState(false);

  const {
    display,
    setDisplay,
    userOption,
    setUserOption,
    houseOption,
    setHouseOption,
    setScore,
    setIsUserChoice,
  } = props;

  useEffect(() => {
    determineWinner();
  }, [houseOption]);

  const determineWinner = () => {
    if (houseOption === "") {
      setResults("");
    } else {
      if (userOption === houseOption) {
        setResults("IT'S A TIE");
        setIsButton(true);
      } else if (
        (userOption === "scissors" && houseOption === "paper") ||
        (userOption === "scissors" && houseOption === "lizard") ||
        (userOption === "paper" && houseOption === "rock") ||
        (userOption === "paper" && houseOption === "spock") ||
        (userOption === "lizard" && houseOption === "spock") ||
        (userOption === "lizard" && houseOption === "paper") ||
        (userOption === "spock" && houseOption === "scissors") ||
        (userOption === "spock" && houseOption === "rock") ||
        (userOption === "rock" && houseOption === "scissors") ||
        (userOption === "rock" && houseOption === "lizard")
      ) {
        props.setScore((prevScore) => prevScore + 1);
        setResults("YOU WIN");
        setIsButton(true);
      } else {
        props.setScore((prevScore) => prevScore - 1);
        setResults("YOU LOSE");
        setIsButton(true);
      }
    }
  };

  const playAgain = () => {
    setDisplay(!display);
    props.setUserOption(null);
    props.setHouseOption("");
    setResults("");
    setIsButton(false);
    props.setIsUserChoice((currentValue) => {
      return !currentValue;
    });
  };
  return (
    <div>
      <div className="picks">
        <div className="choose">
          <h2>YOU PICKED</h2>
          <div className={`circle ${userOption}`}>
            <img src={eval(userOption)} alt="" />
          </div>
        </div>
        <div className="results-container">
          <h2>{results}</h2>
          <div className={isButton ? "button-game" : "button-none"}>
            <button className="btn-width" onClick={playAgain}>
              PLAY AGAIN
            </button>
          </div>
        </div>

        <div className={display ? "choose" : ""}>
          <h2 className={display ? "" : "invisible-h2"}>THE HOUSE PICKED</h2>
          <div className={display ? `circle ${houseOption}` : ""}>
            <img
              className={display ? "" : "invisible-img"}
              src={eval(houseOption)}
              alt="House pick"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Results;
