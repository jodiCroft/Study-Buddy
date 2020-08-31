import React, { Component, useState } from "react";
import { useParams } from "react-router-dom";

import { Table, Button, Form } from "semantic-ui-react";
import CardPair from "./CardPair";

const CreateCards = (props) => {
  const [cardPairs, setCardPairs] = useState([<CardPair />]);
  const params = useParams();
  console.log(params);

  const cancelCardset = (params) => {
    fetch(`http://localhost:3000/cardsets/${params.id}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    });
  };

  const createFlashcards = (e) => {
    e.preventDefault();
    console.log(e.target.frontText.value);

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
          front: e.target.frontText.value,
          back: e.target.backText.value,
        }),
      })
        .then((res) => res.json())
        .then(console.log);
    }
  };

  return (
    <div>
      <div>
        <Form onSubmit={(e) => createFlashcards(e)}>
          <Table basic>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>Front</Table.HeaderCell>
                <Table.HeaderCell>Back</Table.HeaderCell>
              </Table.Row>
            </Table.Header>

            <Table.Body>{cardPairs}</Table.Body>
          </Table>
          <div>
            <Button onClick={() => setCardPairs([...cardPairs, <CardPair />])}>
              Add more
            </Button>
          </div>
          <Button positive type="submit">
            Create Cards
          </Button>
        </Form>
      </div>
      <Button negative onClick={() => cancelCardset(params)}>
        Cancel
      </Button>
    </div>
  );
};

export default CreateCards;
