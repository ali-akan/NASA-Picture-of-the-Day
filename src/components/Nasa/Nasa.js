import React, { useReducer } from "react";
import Button from "../UI/Button";
import classes from "./Nasa.module.css";

const initialState = {
  img: "",
  explanation: "",
  title: "",
  date: "",
  photographer: "",
  buttonClicked: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_DATA":
      return {
        ...state,
        img: action.payload.img,
        explanation: action.payload.explanation,
        title: action.payload.title,
        date: action.payload.date,
        photographer: action.payload.photographer,
        buttonClicked: true,
      };
    default:
      return state;
  }
};

const Nasa = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const getNasa = async () => {
    const api =
      "https://api.nasa.gov/planetary/apod?api_key=G42rYfQj6tqBVML3OF9fQQeZDiNgUvcxGMckF2YQ";

    try {
      const response = await fetch(api);
      const data = await response.json();
      dispatch({
        type: "SET_DATA",
        payload: {
          img: data.hdurl,
          explanation: data.explanation,
          title: data.title,
          date: data.date,
          photographer: "Photographer: " + data.photographer,
        },
      });
    } catch (err) {
      console.log(err);
      dispatch({
        type: "SET_DATA",
        payload: {
          img: "Let's get some pic",
          explanation: "",
          title: "",
          date: "",
          photographer: "",
        },
      });
    }
  };

  return (
    <main className={classes.main}>
      <h2> Picture Of The Day</h2>
      <p>Powered by Nasa </p>
      <b> {state.title}</b>
      {state.buttonClicked ? (
        <>
          <h1>{state.title}</h1>
          <p>{state.date}</p>
          <p>{state.photographer}</p>
          <img src={state.img} alt="" className={classes.img} />
          <p className={classes.explanation}>{state.explanation}</p>
        </>
      ) : (
        <Button onClick={getNasa}>Show me!</Button>
      )}
    </main>
  );
};

export default Nasa;
