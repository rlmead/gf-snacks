import React from "react";
import { Jumbotron, Button, Container, Row, Col } from "reactstrap";
import allIngredients from "../data/ingredients";

function Recipe() {
  let selectedIngredients = [];
  let dryIngredient = "";
  let instructions = [];
  let flavorPalette = "";

  // roll a few dice to decide what subsets of ingredients to randomly select

  // base ingredient combination:
  switch (Math.ceil(Math.random() * 5)) {
    case 1:
      // 1: dry ingredient + wet ingredient
      dryIngredient = allIngredients["base"]["dry"][Math.floor(Math.random() * allIngredients["base"]["dry"].length)];
      while (dryIngredient["food"] == "1/2 scoop of protein powder") {
        dryIngredient = allIngredients["base"]["dry"][Math.floor(Math.random() * allIngredients["base"]["dry"].length)];
      }
      selectedIngredients.push(dryIngredient["food"]);
      selectedIngredients.push(dryIngredient["wet-measurement"] + " " + allIngredients["base"]["wet"][Math.floor(Math.random() * allIngredients["base"]["wet"].length)]);
      break;
    case 2:
      // 2: dry ingredient + wet ingredient + protein
      dryIngredient = allIngredients["base"]["dry"][Math.floor(Math.random() * allIngredients["base"]["dry"].length)];
      selectedIngredients.push(dryIngredient["food"]);
      if (dryIngredient["wet-measurement"]) {
        selectedIngredients.push(dryIngredient["wet-measurement"] + " " + allIngredients["base"]["wet"][Math.floor(Math.random() * allIngredients["base"]["wet"].length)]);
      }
      selectedIngredients.push(allIngredients["base"]["protein"][Math.floor(Math.random() * allIngredients["base"]["protein"].length)]);
      break;
    case 3:
      // 3: one protein
      selectedIngredients.push(allIngredients["base"]["protein"][Math.floor(Math.random() * allIngredients["base"]["protein"].length)]);
      break;
    default:
      // 4-5: two proteins
      selectedIngredients.push(allIngredients["base"]["protein"][Math.floor(Math.random() * allIngredients["base"]["protein"].length)]);
      let secondProtein = allIngredients["base"]["protein"][Math.floor(Math.random() * allIngredients["base"]["protein"].length)];
      while (secondProtein in allIngredients) {
        secondProtein = allIngredients["base"]["protein"][Math.floor(Math.random() * allIngredients["base"]["protein"].length)];
      }
      selectedIngredients.push(secondProtein);
      break;
  }

  if (dryIngredient) {
    instructions = dryIngredient["instructions"];
    if (dryIngredient["extras"]) {
      selectedIngredients = selectedIngredients.concat(dryIngredient["extras"]);
    }
  } else if (!dryIngredient) {
    instructions = [
      "Combine all ingredients in a medium-sized bowl.",
      "Use a fork to mix ingredients together."
    ]
  }

  // flavor palette:
  switch (Math.ceil(Math.random() * 3)) {
    case 1:
      flavorPalette = "savory";
      break;
    case 2:
      flavorPalette = "sweet";
      break;
    case 3:
      flavorPalette = "adventurous";
      break;
  }

  // flavor ingredient combination:
  // 1: 1 sauce!
  // 2: 1 sauce + 1 sprinkle!!
  // 3: 1 sauce + 2 sprinkles!!!
  // 4: 2 sauces!!!!
  // 5: 2 sauces + 1 sprinkle!!!!!
  // 6: 2 sauces + 2 sprinkles!!!!!!

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
                {
                  selectedIngredients.map((item, index) => {
                    return (
                      <li key={index}>{item}</li>
                    )
                  })
                }
              </ul>
              <h4>Instructions</h4>
              <ol>
                {
                  instructions.map((item, index) => {
                    return (
                      <li key={index}>{item}</li>
                    )
                  })
                }
                <li>Eat and savor.</li>
              </ol>
            </Col>
          </Row>
        </Container>
      </Jumbotron>
    </div>
  );
};

export default Recipe;