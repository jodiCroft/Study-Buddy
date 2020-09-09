import React from "react";
import { useParams, useHistory } from "react-router-dom";
import { Card } from "semantic-ui-react";

const SavedCards = (props) => {
  const { push } = useHistory();
  const { params } = useParams();

  console.log(props.pair);
  return (
    <div>
      <Card.Group>
        <Card>
          <Card.Content>
            <Card.Meta>
              <i>Front</i>
            </Card.Meta>
            <Card.Description align="center">
              {props.pair.front}
            </Card.Description>
          </Card.Content>
        </Card>

        <Card>
          <Card.Content>
            <Card.Meta>
              <i>Back</i>
            </Card.Meta>
            <Card.Description align="center">
              {props.pair.back}
            </Card.Description>
          </Card.Content>
        </Card>
      </Card.Group>
    </div>
  );
};

export default SavedCards;
