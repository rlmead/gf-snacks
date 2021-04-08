const ingredients = {
  "base": {
    "dry": [
      {
        "food": "1/2 scoop of protein powder",
        // protein powder has no wet measurement! do a special thing to make sure this ingredient is only selected with dice roll 2, and omit wet ingredient
        "instructions": [
          "Combine all ingredients in a medium-sized bowl.",
          "Use a fork or a very small, sturdy mini bar whisk to mix them all together."
        ]
      },
      {
        "food": "1/4 cup sweet rice flour (aka mochi flour)",
        "wet-measurement": "1/4 cup",
        "instructions": [
          "Combine all ingredients in a microwave-safe bowl and stir together until smooth.",
          "Cover the bowl and microwave at full strength for about 50 seconds. Microwaves differ, so you may need to adjust these times. You are looking for the microwave to transform the chalky looking raw mixture to a smooth, semi-translucent paste.",
          "Use a potholder to remove the bowl from the microwave. Expect it to be HOT.",
          "With a spoon or knife, slice through the paste both vertically and horizontally several times, as if cutting brownies after baking. This step simply makes eating the stretchy, chewy treat a bit easier."
        ]
      },
      {
        "food": "1/3 cup gluten-free flour blend",
        "wet-measurement": "1/3 cup",
        // special: extras! add those in if they're there
        "extras": [
          "1 tablespoon melted butter",
          "1/2 teaspoon baking powder"
        ],
        "instructions": [
          "Mix all ingredients in a heavy, large, microwaveable mug or bowl.",
          "Stir with a fork, spoon or mini bar whisk until the dough is completely and thoroughly mixed.",
          "Put in the microwave and cover it.",
          "Lower the power of your microwave by at least 20 percent.",
          "Microwave for 45 seconds, and check it. If the top is still liquidy, microwave again (at lowered power) for 10 seconds at a time until the top is still moist and tender but no longer liquid.",
          "Let it cool a bit!"
        ]
      }
    ],
    "wet": [
      "cream",
      "milk",
      "nut milk",
      "buttermilk"
    ],
    "protein": [
      "peanut butter",
      "hazelnut butter",
      "pecan butter",
      "almond butter",
      "frozen shelled soybeans (aka edamame)",
      "toasted walnuts",
      "toasted pecans"
    ]
  },
  "flavors": {
    "sauce": {
      "savory": [
        "toasted sesame oil",
        "coconut aminos",
        "liquid aminos",
        "hot sauce",
        "gluten free hoisin sauce",
        "gluten free teriyaki sauce",
        "gluten free oyster sauce",
        "worcestershire sauce",
        "good chicken broth"
      ],
      "sweet": [
        "vanilla extract",
        "almond extract",
        "lemon extract",
        "hazelnut extract",
        "lemon juice",
        "maple syrup",
        "honey",
        "sweet sorghum syrup",
        "agave",
        "jam, jelly or marmalade",
        "icing",
        "grand marnier",
        "cointreau",
        "cherry liqueur",
        "peanut liqueur",
        "pecan liqueur",
        "amaretto",
        "walnut liqueur (aka Nocino)",
        "hazelnut liqueur (aka Frangelico)",
        "Kahlua",
        "Creme de cassis"
      ]
    },
    "sprinkle": {
      "savory": [
        "kosher salt",
        "flaky salt (such as Maldonado)",
        "ground cayenne pepper",
        "freshly ground black pepper",
        "red pepper flakes"
      ],
      "sweet": [
        "lemon zest",
        "confectioner's sugar",
        "demerara sugar",
        "monk fruit powder",
        "stevia concentrate or powder",
        "toasted coconut flakes",
        "unsweetened cocoa powder",
        "dark chocolate chips",
        "dark chocolate squares",
        "blueberries, fresh or frozen",
        "ground cinnamon",
        "ground allspice",
        "ground cloves",
        "ground ginger",
        "ground nutmeg",
        "ground cardamom"
      ]
    }
  }
}

export default ingredients;