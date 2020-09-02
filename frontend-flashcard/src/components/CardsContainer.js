import React, { useState } from "react";
import { useParams, useHistory } from "react-router-dom";

import { Table, Button, Form, Container, Grid } from "semantic-ui-react";
import CardPair from "./CardPair";
import SavedCards from "./SavedCards";

const CardsContainer = (props) => {
  const { push } = useHistory();
  const [savedPairs, setSavedPairs] = useState([]);
  const [cardPair, setCardPair] = useState([
    { front: "", back: "", cardId: 0 },
  ]);

  const params = useParams();

  const cancelCardset = () => {
    fetch(`http://localhost:3000/cardsets/${params.id}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    });
  };

  const saveFrontText = (id, value) => {
    cardPair.map((card) => {
      if (card.cardId === id) {
        card.front = value;
      }
    });
  };

  const saveBackText = (id, value) => {
    cardPair.map((card) => {
      if (card.cardId === id) {
        card.back = value;
      }
    });
  };

  // const deleteCardPair = (cardPair) => {

  // }

  const saveCardPair = (cardPair) => {
    if (cardPair.front !== "" || cardPair.back !== "") {
      setSavedPairs([...savedPairs, cardPair]);
      fetch(`http://localhost:3000/cardsets/${params.id}/flashcards`, {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          front: cardPair.front,
          back: cardPair.back,
        }),
      })
        .then((res) => res.json())
        .then(console.log);
    }
  };

  const showPage = () => {
    push(`/cardset/${params.id}/show-set`);
  };

  return (
    <div>
      <Grid columns={2} divided>
        <Grid.Row>
          <Grid.Column>
            {cardPair.map((cardPair) => (
              <CardPair
                cardPair={cardPair}
                key={Math.random()}
                saveFrontText={saveFrontText}
                saveBackText={saveBackText}
                saveCardPair={saveCardPair}
              />
            ))}
          </Grid.Column>
          <Grid.Column>
            <SavedCards savedPairs={savedPairs} showPage={showPage} />
          </Grid.Column>
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
