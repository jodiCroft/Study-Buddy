import React, { Component } from "react";
import { useParams } from "react-router-dom";
import { Table } from "semantic-ui-react";

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
        <Table basic>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Front</Table.HeaderCell>
              <Table.HeaderCell>Back</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            <Table.Row>
              <Table.Cell>
                <textarea></textarea>
              </Table.Cell>
              <Table.Cell>
                <textarea></textarea>
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>
                <textarea></textarea>
              </Table.Cell>
              <Table.Cell>
                <textarea></textarea>
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>
                <textarea></textarea>
              </Table.Cell>
              <Table.Cell>
                <textarea></textarea>
              </Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
      </div>
    </div>
  );
};

export default CreateCards;
