import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";

import { Table, Button, Form, Container, Grid } from "semantic-ui-react";
import CardPair from "./CardPair";
import SavedPair from "./SavedPair";

const CardsContainer = (props) => {
  const { push } = useHistory();
  const [savedPairs, setSavedPairs] = useState([]);

  const params = useParams();

  // const cancelCardset = () => {
  //   fetch(`http://localhost:3000/cardsets/${params.id}`, {
  //     method: "DELETE",
  //     headers: { "Content-Type": "application/json" },
  //   });
  // };

  const saveCardPair = (e) => {
    e.preventDefault();

    const cardPair = {
      front: e.target.frontText.value,
      back: e.target.backText.value,
    };
    {
      setSavedPairs((prevSavedPairs) => [cardPair, ...prevSavedPairs]);

      fetch(`http://localhost:3000/cardsets/${params.id}/flashcards`, {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(cardPair),
      })
        .then((res) => res.json())
        .then(console.log(savedPairs));
    }
  };

  return (
    <div>
      <Grid columns={2} divided>
        <Grid.Row>
          <Grid.Column>
            <CardPair
              // cardPair={cardPair}
              key={Math.random()}
              // saveText={saveText}
              // saveFrontText={saveFrontText}
              // saveBackText={saveBackText}
              saveCardPair={saveCardPair}
            />
          </Grid.Column>
          {savedPairs.length === 0 ? null : (
            <Grid.Column>
              <h1>Your Cards</h1>
              {savedPairs.map((pair) => (
                <SavedPair pair={pair} key={Math.random()} />
              ))}
              <br></br>
              <Button size="large" positive onClick={() => push("/my-index")}>
                Save!
              </Button>
            </Grid.Column>
          )}
        </Grid.Row>
      </Grid>
    </div>
  );
};

export default CardsContainer;
