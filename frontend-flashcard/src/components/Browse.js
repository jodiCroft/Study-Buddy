import React, { useEffect, useState } from "react";
import is from "is_js";
import { useHistory } from "react-router-dom";
import { Button, Form, Divider, Card, Grid } from "semantic-ui-react";
import StudySet from "./StudySet";

const Browse = (props) => {
  const { push } = useHistory();
  const [allCardsets, setAllCardsets] = useState([]);
  const [studyCard, setStudyCard] = useState({});
  //   const [front, setFront] = useState(true);
  //   const [index, setIndex] = useState(0);
  const [search, setSearch] = useState("");

  useEffect(() => {
    let isMounted = true;
    fetch("http://localhost:3000/cardsets", {
      credentials: "include",
    })
      .then((res) => res.json())
      .then((cardsets) => {
        if (isMounted) setAllCardsets(cardsets);
      });
    return () => {
      isMounted = false;
    };
  }, []);

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div>
      {/* STaRt TEST */}
      <div>
        <Grid columns={2} divided>
          <Grid.Row>
            <Grid.Column>
              <h1>Click on a cardset to study it!</h1>
              <div>
                <input onChange={(e) => handleSearch(e)} />
                <i className="search icon" />
              </div>

              {allCardsets
                .filter((card) => {
                  return (
                    card.title.toLowerCase().includes(search) ||
                    card.description.toLowerCase().includes(search) ||
                    card.subject.toLowerCase().includes(search)
                  );
                })
                .map((cardset) => (
                  <Card key={cardset.id} onClick={() => setStudyCard(cardset)}>
                    <Card.Content>
                      <Card.Header>{cardset.title}</Card.Header>
                      <Card.Description>{cardset.subject}</Card.Description>
                      <Card.Description>{cardset.description}</Card.Description>
                    </Card.Content>
                  </Card>
                ))}
            </Grid.Column>

            <Grid.Column>
              {is.empty(studyCard) ? null : <StudySet studyCard={studyCard} />}
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>

      {/* End Test */}
    </div>
  );
};

export default Browse;
