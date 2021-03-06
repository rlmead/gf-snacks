import React, { useEffect, useState } from "react";
import { Button, Container, Row, Col } from "reactstrap";
import allIngredients from "../data/ingredients";

function Recipe() {
  let mainIngredients = [];
  let starch = "";
  let instructions = [];
  let flavorChoices = [];
  let toppings = [];
  const [instDisplay, setInstDisplay] = useState([]);
  const [mainDisplay, setMainDisplay] = useState([]);
  const [topDisplay, setTopDisplay] = useState([]);

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
        for (let i = 0; i < inputArray.length - 1; i++) {
          output = output + inputArray[i] + ", ";
        }
        output += "and " + inputArray[inputArray.length - 1];
    }
    return output;
  }

  function generateRecipe() {
    // base ingredient combination:
    switch (Math.ceil(Math.random() * 2)) {
      case 1:
        // 1: starch + protein
        starch = allIngredients["base"]["starch"][Math.floor(Math.random() * allIngredients["base"]["starch"].length)];
        mainIngredients.push(starch);
        mainIngredients.push(allIngredients["base"]["protein"][Math.floor(Math.random() * allIngredients["base"]["protein"].length)]);
        break;
      case 2:
        // 2: two proteins
        mainIngredients = randomSubset(allIngredients["base"]["protein"], 2);
        break;
    }

    // flavor palette:
    switch (Math.ceil(Math.random() * 3)) {
      case 1:
        flavorChoices = allIngredients["flavors"]["savory"];
        break;
      case 2:
        flavorChoices = allIngredients["flavors"]["sweet"];
        break;
      case 3:
        flavorChoices = allIngredients["flavors"]["sweet"];
        flavorChoices["sprinkle"] = flavorChoices["sprinkle"].concat(allIngredients["flavors"]["savory"]["sprinkle"]);
        flavorChoices["sauce"] = flavorChoices["sauce"].concat(allIngredients["flavors"]["savory"]["sauce"]);
        break;
    }

    // flavor ingredient combination:
    switch (Math.ceil(Math.random() * 6)) {
      // 1: 1 sauce!
      case 1:
        toppings = randomSubset(flavorChoices["sauce"], 1);
        break;
      // 2: 1 sauce + 1 sprinkle!!
      case 2:
        toppings = randomSubset(flavorChoices["sauce"], 1).concat(randomSubset(flavorChoices["sprinkle"], 1));
        break;
      // 3: 1 sauce + 2 sprinkles!!!
      case 3:
        toppings = randomSubset(flavorChoices["sauce"], 1).concat(randomSubset(flavorChoices["sprinkle"], 2));
        break;
      // 4: 2 sauces!!!!
      case 4:
        toppings = randomSubset(flavorChoices["sauce"], 2);
        break;
      // 5: 2 sauces + 1 sprinkle!!!!!
      case 5:
        toppings = randomSubset(flavorChoices["sauce"], 2).concat(randomSubset(flavorChoices["sprinkle"], 1));
        break;
      // 6: 2 sauces + 2 sprinkles!!!!!!
      case 6:
        toppings = randomSubset(flavorChoices["sauce"], 2).concat(randomSubset(flavorChoices["sprinkle"], 2));
        break;
    }
  }

  function newRecipe() {
    generateRecipe();
    setInstDisplay(instructions);
    setMainDisplay(mainIngredients);
    setTopDisplay(toppings);
  }

  useEffect(() => {
    newRecipe();
  }, [])

  return (
    <div className="mb-5">
      <Container className="text-black pb-5 mt-5 mb-5">
        <Row className="bg-info rounded shadow p-3 mb-5" style={{opacity: 0.85}}>
          <Col sm="4">
            <h2>Ingredients</h2>
            <ul>
              {
                mainDisplay.concat(topDisplay).map((item, index) => {
                  return (
                    <li key={index}>{item}</li>
                  )
                })
              }
            </ul>
          </Col>
          <Col sm="8">
            <h2>Instructions</h2>
            <ol>
              <li>Combine {verbalizeArray(mainDisplay)} in a medium-sized bowl.</li>
              {
                instDisplay.map((item, index) => {
                  return (
                    <li key={index}>{item}</li>
                  )
                })
              }
              <li>Top with {verbalizeArray(topDisplay)}.</li>
              <li>Eat and savor.</li>
            </ol>
          </Col>
        </Row>
        <Row className="fixed-bottom p-4 mb-5">
          <Col className="text-center">
            <Button color="danger" className="shadow" onClick={newRecipe}>Try another recipe</Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Recipe;