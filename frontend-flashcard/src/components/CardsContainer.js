import React, { useState } from "react";
import { useParams, useHistory } from "react-router-dom";

import { Table, Button, Form, Container } from "semantic-ui-react";
import CardPair from "./CardPair";
import SavedCards from "./SavedCards";

const CardsContainer = (props) => {
  const { push } = useHistory();
  const [savedPairs, setSavedPairs] = useState([]);
  const [cardPairs, setCardPairs] = useState([
    { front: "", back: "", cardId: 0 },
  ]);

  const params = useParams();

  const cancelCardset = (params) => {
    fetch(`http://localhost:3000/cardsets/${params.id}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    });
  };

  const saveFrontText = (id, value) => {
    cardPairs.map((cardPair) => {
      if (cardPair.cardId === id) {
        cardPair.front = value;
      }
    });
  };

  const saveBackText = (id, value) => {
    cardPairs.map((cardPair) => {
      if (cardPair.cardId === id) {
        cardPair.back = value;
      }
    });
  };

  const saveCardPair = (cardPair) => {
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
  };

  const showPage = () => {
    push(`/cardset/${params.id}/show-set`);
  };

  return (
    <div>
      <div>
        <Table basic>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Front</Table.HeaderCell>
              <Table.HeaderCell>Back</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            <Table.Cell>
              {cardPairs.map((cardPair) => (
                <CardPair
                  cardPair={cardPair}
                  key={Math.random()}
                  saveFrontText={saveFrontText}
                  saveBackText={saveBackText}
                  saveCardPair={saveCardPair}
                />
              ))}
            </Table.Cell>
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
        <Button positive onClick={showPage()}>
          Create Cards
        </Button>
      </div>
      <Button negative onClick={() => cancelCardset(params)}>
        Cancel
      </Button>

      <Container>
        <SavedCards savedPairs={savedPairs} />
      </Container>
    </div>
  );
};

export default CardsContainer;
