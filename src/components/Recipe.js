import React from "react";
import { Jumbotron, Button, Container, Row, Col } from "reactstrap";
import allIngredients from "../data/ingredients";

function Recipe() {
  let mainIngredients = [];
  let dryIngredient = "";
  let instructions = [];
  let flavorPalette = "";
  let toppings = [];

  // roll a few dice to decide what subsets of ingredients to randomly select

  function randomSubset(inputArray, size) {
    let outputArray = [];
    while (outputArray.length < size) {
      let newProtein = inputArray[Math.floor(Math.random() * inputArray.length)];
      if (!outputArray.includes(newProtein)) {
        outputArray.push(newProtein);
      }
    }
    return outputArray;
  }

  function verbalizeArray(inputArray) {
    var output = "";
    switch (inputArray.length) {
      case 1:
        output = inputArray[0];
        break;
      case 2:
        output = inputArray[0] + " and " + inputArray[1];
        break;
      default:
        for (let i = 0; i < inputArray.length-1; i++) {
          output = output + inputArray[i] + ", ";
        }
        output += "and " + inputArray[inputArray.length-1];
    }
    return output;
  }

  // base ingredient combination:
  switch (Math.ceil(Math.random() * 5)) {
    case 1:
      // 1: dry ingredient + wet ingredient
      dryIngredient = allIngredients["base"]["dry"][Math.floor(Math.random() * allIngredients["base"]["dry"].length)];
      while (dryIngredient["food"] == "1/2 scoop of protein powder") {
        dryIngredient = allIngredients["base"]["dry"][Math.floor(Math.random() * allIngredients["base"]["dry"].length)];
      }
      mainIngredients.push(dryIngredient["food"]);
      mainIngredients.push(dryIngredient["wet-measurement"] + " " + allIngredients["base"]["wet"][Math.floor(Math.random() * allIngredients["base"]["wet"].length)]);
      break;
    case 2:
      // 2: dry ingredient + wet ingredient + protein
      dryIngredient = allIngredients["base"]["dry"][Math.floor(Math.random() * allIngredients["base"]["dry"].length)];
      mainIngredients.push(dryIngredient["food"]);
      if (dryIngredient["wet-measurement"]) {
        mainIngredients.push(dryIngredient["wet-measurement"] + " " + allIngredients["base"]["wet"][Math.floor(Math.random() * allIngredients["base"]["wet"].length)]);
      }
      mainIngredients.push(allIngredients["base"]["protein"][Math.floor(Math.random() * allIngredients["base"]["protein"].length)]);
      break;
    case 3:
      // 3: three proteins!
      mainIngredients = randomSubset(allIngredients["base"]["protein"], 3);
      break;
    default:
      // 4-5: two proteins
      mainIngredients = randomSubset(allIngredients["base"]["protein"], 2);
      break;
  }

  if (dryIngredient) {
    instructions = dryIngredient["instructions"];
    if (dryIngredient["extras"]) {
      mainIngredients = mainIngredients.concat(dryIngredient["extras"]);
    }
  } else if (!dryIngredient) {
    instructions = [
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
                  mainIngredients.map((item, index) => {
                    return (
                      <li key={index}>{item}</li>
                    )
                  })
                }
              </ul>
              <h4>Instructions</h4>
              <ol>
              <li>Combine {verbalizeArray(mainIngredients)} in a medium-sized bowl.</li>
                {
                  instructions.map((item, index) => {
                    return (
                      <li key={index}>{item}</li>
                    )
                  })
                }
                {/* <li>Top with {verbalizeArray(toppings)}.</li> */}
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