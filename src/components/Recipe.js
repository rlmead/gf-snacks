import React from 'react';
import { Jumbotron, Button, Container, Row, Col } from 'reactstrap';

function Recipe() {
  return (
    <div>
      <Jumbotron className="bg-transparent">
        <Container>
          <Row>
            <Col sm="3">
              <Button color="primary">New recipe</Button>
            </Col>
            <Col sm="9">
              <h4>Ingredients</h4>
              <ul>
                <li>1/2 scoop of protein powder</li>
                <li>1 rounded tablespoon of almond butter</li>
                <li>a dash of vanilla extract</li>
              </ul>
              <h4>Instructions</h4>
              <p>Whisk the protein powder and nut butter together. Add the vanilla extract. Stir and mash together until well mixed. Eat and savor.</p>
            </Col>
          </Row>
        </Container>
      </Jumbotron>
    </div>
  );
};

export default Recipe;