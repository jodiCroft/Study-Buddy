import React, { Component } from "react";
import { useParams } from "react-router-dom";
const CreateCards = (props) => {
  const params = useParams();
  console.log(params);

  const createFlashcards = (e) => {
    e.preventDefault();

    {
      fetch("http://localhost:3000/flashcards", {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          cardset_id: params.id,
          front: e.target.front.value,
          back: e.target.back.value,
          hint: e.target.hint.value,
        }),
      })
        .then((res) => res.json())
        .then(console.log);
    }
  };

  return (
    <div>
      <div>
        <form onSubmit={(e) => createFlashcards(e)}>
          <h4>Front:</h4>
          <textarea name="front"></textarea>
          <h4>Back:</h4>
          <textarea name="back"></textarea>
          <h4>Hint:</h4>
          <textarea name="hint"></textarea>
          <input type="submit" value="Continue" />
        </form>
      </div>
    </div>
  );
};

export default CreateCards;
