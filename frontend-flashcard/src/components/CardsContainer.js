import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";

import { Table, Button, Form, Container, Grid } from "semantic-ui-react";
import CardPair from "./CardPair";
import SavedPair from "./SavedPair";

const CardsContainer = (props) => {
  const { push } = useHistory();
  const [savedPairs, setSavedPairs] = useState([]);
  // const [cardPair, setCardPair] = useState([
  //   { front: "", back: "", cardId: 0 },
  // ]);

  const params = useParams();

  const cancelCardset = () => {
    fetch(`http://localhost:3000/cardsets/${params.id}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    });
  };

  // const saveFrontText = (value) => {
  //   cardPair.map((card) => {
  //     card.front = value;
  //   });
  // };

  // const saveBackText = (value) => {
  //   cardPair.map((card) => {
  //     card.back = value;
  //   });
  // };

  // const deleteCardPair = (cardPair) => {

  // }

  const saveCardPair = (e) => {
    console.log(savedPairs);
    const cardPair = {
      front: e.target.frontText.value,
      back: e.target.backText.value,
    };
    e.preventDefault();
    if (cardPair.front !== "" || cardPair.back !== "") {
      setSavedPairs((prevSavedPairs) => [...prevSavedPairs, cardPair]);

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
              <Button
                size="large"
                positive
                onClick={() => push("/my-index")}
                // onClick={() => push(`/cardset/${params.id}/show-set`)}
              >
                Save!
              </Button>
            </Grid.Column>
          )}
        </Grid.Row>
      </Grid>
      {/* <div> */}
      {/* <Table basic>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Front</Table.HeaderCell>
              <Table.HeaderCell>Back</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            {cardPairs.map((cardPair) => (
              <CardPair
                cardPair={cardPair}
                key={Math.random()}
                saveFrontText={saveFrontText}
                saveBackText={saveBackText}
                saveCardPair={saveCardPair}
              />
            ))}
          </Table.Body>
        </Table>

        <div>
          <Button
            onClick={() =>
              setCardPairs([
                ...cardPairs,
                { front: "", back: "", cardId: cardPairs.length },
              ])
            }
          >
            Add Card
          </Button>
        </div>
        <Button positive onClick={() => showPage()}>
          Create Cards
        </Button>
      </div>
      <Button negative onClick={() => cancelCardset(params)}>
        Cancel
      </Button>

      <Container>
        <SavedCards savedPairs={savedPairs} />
      </Container> */}
    </div>
  );
};

export default CardsContainer;
