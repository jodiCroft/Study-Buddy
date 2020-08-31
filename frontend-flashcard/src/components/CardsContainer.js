import React, { Component, useState } from "react";
import { useParams } from "react-router-dom";
import SavedCards from "./SavedCards";
import { Table, Button, Form, Container, Grid } from "semantic-ui-react";
import CardPair from "./CardPair";

const CardsContainer = (props) => {
  const [savedCards, setSavedCards] = useState([]);
  const [cardPairs, setCardPairs] = useState([{ front: "", back: "" }]);
  console.log(cardPairs);

  // const [cardData, setCardData] = useState([]);
  const params = useParams();

  function saveCards(cardData, cardId) {
    setSavedCards([...savedCards, cardData]);
    console.log(cardId);
    console.log(cardPairs);
  }

  const cancelCardset = (params) => {
    fetch(`http://localhost:3000/cardsets/${params.id}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    });
  };

  const createFlashcards = (e) => {};
  //   e.preventDefault();
  //   console.log(cardPairs);
  // cardPairs.map((cardPair) => {
  //   setCardData([
  //     ...cardData,
  //     { front: e.target.frontText.value, back: e.target.backText.value },
  //   ]);
  // });

  // {
  //   fetch("http://localhost:3000/flashcards", {
  //     method: "POST",
  //     credentials: "include",
  //     headers: {
  //       "Content-Type": "application/json",
  //       Accept: "application/json",
  //     },
  //     body: JSON.stringify({
  //       cardset_id: params.id,
  //       front: cardData.map((card) => card.front),
  //       back: cardData.map((card) => card.back),
  //     }),
  //   })
  //     .then((res) => res.json())
  //     .then(console.log);
  // }
  // };

  return (
    <div>
      <div>
        <Grid divided="vertically">
          <Grid.Row columns={2}>
            <Grid.Column>
              <Form onSubmit={(e) => createFlashcards(e)}>
                <Table basic>
                  <Table.Header>
                    <Table.Row>
                      <Table.HeaderCell>Front</Table.HeaderCell>
                      <Table.HeaderCell>Back</Table.HeaderCell>
                    </Table.Row>
                  </Table.Header>

                  <Table.Body>
                    {cardPairs.map((cardPair) => (
                      <CardPair front={cardPair.front} back={cardPair.back} />
                    ))}
                  </Table.Body>
                </Table>

                <div>
                  <Button
                    onClick={() =>
                      setCardPairs([
                        ...cardPairs,
                        <CardPair
                          cardId={cardPairs.length}
                          cardPairs={cardPairs}
                          setCardPairs={setCardPairs}
                          saveCards={saveCards}
                          key={new Date()}
                          savedCards={savedCards}
                          setSavedCards={setSavedCards}
                        />,
                      ])
                    }
                  >
                    Add more
                  </Button>
                </div>
                <Button positive type="submit">
                  Create Cards
                </Button>
              </Form>
            </Grid.Column>
            <Grid.Column>
              <Container>
                <SavedCards />
              </Container>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
      <Button negative onClick={() => cancelCardset(params)}>
        Cancel
      </Button>
    </div>
  );
};

export default CardsContainer;
