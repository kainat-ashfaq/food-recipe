//


// // chines item 

// const chineseRecipes = [
//   {
//     name: "Chicken Fried Rice",
//     type: "Rice Dish",
//     ingredients: [
//       "Cooked rice",
//       "Chicken breast",
//       "Eggs",
//       "Carrots",
//       "Peas",
//       "Spring onions",
//       "Garlic",
//       "Soy sauce",
//       "Oyster sauce",
//       "Salt",
//       "Pepper",
//       "Sesame oil",
//       "Vegetable oil",
//     ],
//     recipe: [
//       "Cook and shred the chicken breast, set aside.",
//       "In a wok, heat vegetable oil and scramble the eggs. Remove and set aside.",
//       "Add more oil, then sauté minced garlic until fragrant.",
//       "Add chopped carrots and peas, stir-fry until tender.",
//       "Add the cooked rice and toss well.",
//       "Stir in soy sauce, oyster sauce, salt, and pepper to taste.",
//       "Add the scrambled eggs and shredded chicken back into the wok.",
//       "Drizzle with sesame oil and toss to combine.",
//       "Garnish with chopped spring onions before serving.",
//     ],
//   },
//   {
//     name: "Beef and Broccoli",
//     type: "Stir-Fry",
//     ingredients: [
//       "Beef slices",
//       "Broccoli florets",
//       "Garlic",
//       "Ginger",
//       "Soy sauce",
//       "Oyster sauce",
//       "Cornstarch",
//       "Sugar",
//       "Sesame oil",
//       "Vegetable oil",
//     ],
//     recipe: [
//       "Marinate the beef slices with soy sauce, oyster sauce, cornstarch, and a pinch of sugar for 30 minutes.",
//       "Blanch the broccoli florets in boiling water for 2-3 minutes, then drain and set aside.",
//       "In a wok, heat vegetable oil and sauté minced garlic and ginger until fragrant.",
//       "Add the marinated beef and stir-fry until cooked through.",
//       "Add the blanched broccoli and stir-fry for another 2-3 minutes.",
//       "Drizzle with sesame oil and toss to combine.",
//       "Serve hot with steamed rice.",
//     ],
//   },
//   {
//     name: "Sweet and Sour Chicken",
//     type: "Main Course",
//     ingredients: [
//       "Chicken breast",
//       "Bell peppers",
//       "Pineapple chunks",
//       "Onions",
//       "Garlic",
//       "Ginger",
//       "Soy sauce",
//       "Vinegar",
//       "Ketchup",
//       "Sugar",
//       "Cornstarch",
//       "Salt",
//       "Pepper",
//       "Vegetable oil",
//     ],
//     recipe: [
//       "Cut chicken breast into bite-sized pieces, season with salt, pepper, and coat with cornstarch.",
//       "In a wok, heat vegetable oil and deep fry the chicken pieces until golden brown. Remove and set aside.",
//       "In the same wok, sauté minced garlic and ginger until fragrant.",
//       "Add chopped bell peppers, onions, and pineapple chunks, stir-fry for a few minutes.",
//       "Mix soy sauce, vinegar, ketchup, and sugar in a bowl, then add to the wok.",
//       "Bring the sauce to a boil, then add the fried chicken back to the wok.",
//       "Stir well to coat the chicken in the sauce, cook for another 2-3 minutes.",
//       "Serve hot with steamed rice.",
//     ],
//   },
//   {
//     name: "Kung Pao Chicken",
//     type: "Main Course",
//     ingredients: [
//       "Chicken breast",
//       "Dried red chilies",
//       "Peanuts",
//       "Spring onions",
//       "Garlic",
//       "Ginger",
//       "Soy sauce",
//       "Rice vinegar",
//       "Sugar",
//       "Cornstarch",
//       "Salt",
//       "Pepper",
//       "Vegetable oil",
//     ],
//     recipe: [
//       "Cut chicken breast into cubes and marinate with soy sauce, cornstarch, and a pinch of salt for 15 minutes.",
//       "In a wok, heat vegetable oil and fry dried red chilies until they darken. Remove and set aside.",
//       "In the same oil, stir-fry the marinated chicken until browned.",
//       "Add minced garlic and ginger, sauté until fragrant.",
//       "Add chopped spring onions and peanuts, stir-fry for a few more minutes.",
//       "Return the fried chilies to the wok.",
//       "Add a mixture of soy sauce, rice vinegar, and sugar to the wok, stir well.",
//       "Cook for another 2-3 minutes until the sauce thickens.",
//       "Serve hot with steamed rice.",
//     ],
//   },
//   {
//     name: "Spring Rolls",
//     type: "Appetizer",
//     ingredients: [
//       "Spring roll wrappers",
//       "Cabbage",
//       "Carrots",
//       "Bean sprouts",
//       "Spring onions",
//       "Soy sauce",
//       "Oyster sauce",
//       "Garlic",
//       "Ginger",
//       "Salt",
//       "Pepper",
//       "Vegetable oil",
//     ],
//     recipe: [
//       "Shred cabbage and carrots, chop spring onions.",
//       "In a wok, heat vegetable oil and sauté minced garlic and ginger until fragrant.",
//       "Add the cabbage, carrots, and bean sprouts, stir-fry until tender.",
//       "Season with soy sauce, oyster sauce, salt, and pepper.",
//       "Remove from heat and let the filling cool.",
//       "Place a spoonful of the filling on a spring roll wrapper, roll tightly and seal the edges with a water-flour paste.",
//       "Heat vegetable oil in a pan and deep fry the rolls until golden brown and crispy.",
//       "Serve hot with dipping sauce.",
//     ],
//   },
//   {
//     name: "Hot and Sour Soup",
//     type: "Soup",
//     ingredients: [
//       "Chicken broth",
//       "Chicken breast",
//       "Tofu",
//       "Mushrooms",
//       "Bamboo shoots",
//       "Eggs",
//       "Soy sauce",
//       "Vinegar",
//       "Chili paste",
//       "Cornstarch",
//       "Salt",
//       "Pepper",
//       "Sesame oil",
//       "Spring onions",
//     ],
//     recipe: [
//       "In a pot, bring chicken broth to a boil.",
//       "Add thinly sliced chicken breast, mushrooms, tofu, and bamboo shoots.",
//       "Season with soy sauce, vinegar, chili paste, salt, and pepper.",
//       "Let it simmer for 10 minutes.",
//       "Mix cornstarch with water to make a slurry, add to the soup to thicken.",
//       "Slowly drizzle in beaten eggs while stirring the soup to create egg ribbons.",
//       "Finish with a drizzle of sesame oil and garnish with chopped spring onions.",
//       "Serve hot.",
//     ],
//   },
//   {
//     name: "Chow Mein",
//     type: "Noodle Dish",
//     ingredients: [
//       "Egg noodles",
//       "Chicken or beef",
//       "Bell peppers",
//       "Carrots",
//       "Cabbage",
//       "Onions",
//       "Garlic",
//       "Ginger",
//       "Soy sauce",
//       "Oyster sauce",
//       "Sesame oil",
//       "Salt",
//       "Pepper",
//       "Vegetable oil",
//     ],
//     recipe: [
//       "Cook egg noodles according to package instructions, drain and set aside.",
//       "In a wok, heat vegetable oil and stir-fry sliced chicken or beef until cooked through.",
//       "Add minced garlic and ginger, sauté until fragrant.",
//       "Add sliced bell peppers, carrots, cabbage, and onions, stir-fry until tender.",
//       "Add the cooked noodles to the wok, toss well.",
//       "Season with soy sauce, oyster sauce, salt, and pepper.",
//       "Drizzle with sesame oil and stir-fry for another 2-3 minutes.",
//       "Serve hot.",
//     ],
//   },
//   {
//     name: "Egg Fried Rice",
//     type: "Rice Dish",
//     ingredients: [
//       "Cooked rice",
//       "Eggs",
//       "Peas",
//       "Carrots",
//       "Spring onions",
//       "Garlic",
//       "Soy sauce",
//       "Salt",
//       "Pepper",
//       "Sesame oil",
//       "Vegetable oil",
//     ],
//     recipe: [
//       "In a wok, heat vegetable oil and scramble the eggs. Remove and set aside.",
//       "Add more oil, then sauté minced garlic until fragrant.",
//       "Add chopped carrots and peas, stir-fry until tender.",
//       "Add the cooked rice and toss well.",
//       "Stir in soy sauce, salt, and pepper to taste.",
//       "Add the scrambled eggs back into the wok.",
//       "Drizzle with sesame oil and toss to combine.",
//       "Garnish with chopped spring onions before serving.",
//     ],
//   },
//   {
//     name: "Mapo Tofu",
//     type: "Main Course",
//     ingredients: [
//       "Tofu",
//       "Ground pork",
//       "Garlic",
//       "Ginger",
//       "Spring onions",
//       "Sichuan peppercorns",
//       "Doubanjiang (spicy bean paste)",
//       "Soy sauce",
//       "Chicken broth",
//       "Cornstarch",
//       "Sesame oil",
//       "Vegetable oil",
//     ],
//     recipe: [
//       "Cut tofu into cubes and blanch in boiling water, then drain and set aside.",
//       "In a wok, heat vegetable oil and sauté minced garlic and ginger until fragrant.",
//       "Add ground pork and cook until browned.",
//       "Add doubanjiang and stir-fry for a minute.",
//       "Pour in chicken broth and bring to a boil.",
//       "Add the tofu cubes and simmer for 5 minutes.",
//       "Mix cornstarch with water to make a slurry, add to the wok to thicken the sauce.",
//       "Add soy sauce and stir well.",
//       "Garnish with Sichuan peppercorns and chopped spring onions.",
//       "Serve hot with steamed rice.",
//     ],
//   },
//   {
//     name: "General Tso's Chicken",
//     type: "Main Course",
//     ingredients: [
//       "Chicken breast",
//       "Garlic",
//       "Ginger",
//       "Dried red chilies",
//       "Soy sauce",
//       "Vinegar",
//       "Sugar",
//       "Cornstarch",
//       "Eggs",
//       "Salt",
//       "Pepper",
//       "Vegetable oil",
//     ],
//     recipe: [
//       "Cut chicken breast into bite-sized pieces, season with salt, pepper, and coat with cornstarch.",
//       "Dip the chicken pieces in beaten eggs, then coat with more cornstarch.",
//       "In a wok, heat vegetable oil and deep fry the chicken pieces until golden brown. Remove and set aside.",
//       "In the same wok, sauté minced garlic, ginger, and dried red chilies until fragrant.",
//       "Add soy sauce, vinegar, and sugar, stir well.",
//       "Return the fried chicken to the wok and toss in the sauce.",
//       "Cook for another 2-3 minutes until the sauce thickens and coats the chicken.",
//       "Serve hot with steamed rice.",
//     ],
//   },

//   {
//     name: "Alfredo Pasta",
//     type: "Pasta",
//     ingredients: [
//       "Fettuccine pasta",
//       "Butter",
//       "Heavy cream",
//       "Parmesan cheese",
//       "Garlic",
//       "Salt",
//       "Pepper",
//       "Parsley",
//     ],
//     recipe: [
//       "Cook fettuccine pasta according to package instructions. Drain and set aside.",
//       "In a pan, melt butter over medium heat. Add minced garlic and sauté until fragrant.",
//       "Pour in heavy cream and bring to a gentle simmer.",
//       "Add grated Parmesan cheese and stir until the cheese is melted and the sauce is smooth.",
//       "Season with salt and pepper to taste.",
//       "Toss the cooked pasta in the sauce until well coated.",
//       "Garnish with chopped parsley and serve hot.",
//     ],
//   },
//   {
//     name: "Creamy Garlic Pasta",
//     type: "Pasta",
//     ingredients: [
//       "Pasta (penne or spaghetti)",
//       "Butter",
//       "Heavy cream",
//       "Garlic",
//       "Parmesan cheese",
//       "Salt",
//       "Pepper",
//       "Parsley",
//     ],
//     recipe: [
//       "Cook pasta according to package instructions. Drain and set aside.",
//       "In a pan, melt butter and sauté minced garlic until fragrant.",
//       "Pour in heavy cream and bring to a simmer.",
//       "Add grated Parmesan cheese and stir until melted and smooth.",
//       "Season with salt and pepper to taste.",
//       "Toss the cooked pasta in the sauce until well coated.",
//       "Garnish with chopped parsley and serve hot.",
//     ],
//   },
//   {
//     name: "Lasagna",
//     type: "Pasta Bake",
//     ingredients: [
//       "Lasagna noodles",
//       "Ground beef",
//       "Onion",
//       "Garlic",
//       "Tomato sauce",
//       "Ricotta cheese",
//       "Mozzarella cheese",
//       "Parmesan cheese",
//       "Egg",
//       "Salt",
//       "Pepper",
//       "Olive oil",
//     ],
//     recipe: [
//       "Preheat oven to 375°F (190°C).",
//       "Cook lasagna noodles according to package instructions. Drain and set aside.",
//       "In a pan, heat olive oil and sauté chopped onion and garlic until translucent.",
//       "Add ground beef and cook until browned. Stir in tomato sauce and season with salt and pepper.",
//       "In a bowl, mix ricotta cheese with an egg and half of the Parmesan cheese.",
//       "In a baking dish, spread a layer of meat sauce, followed by lasagna noodles, and then the ricotta mixture.",
//       "Repeat layers, ending with meat sauce on top.",
//       "Sprinkle with mozzarella and remaining Parmesan cheese.",
//       "Cover with aluminum foil and bake for 25 minutes.",
//       "Remove the foil and bake for an additional 10 minutes until the cheese is bubbly and golden.",
//       "Let it rest for 10 minutes before serving.",
//     ],
//   },
//   {
//     name: "Macaroni",
//     type: "Pasta",
//     ingredients: [
//       "Macaroni pasta",
//       "Tomato sauce",
//       "Ground chicken or beef",
//       "Onion",
//       "Garlic",
//       "Bell peppers",
//       "Salt",
//       "Pepper",
//       "Cheddar cheese",
//       "Olive oil",
//     ],
//     recipe: [
//       "Cook macaroni pasta according to package instructions. Drain and set aside.",
//       "In a pan, heat olive oil and sauté chopped onion and garlic until softened.",
//       "Add ground chicken or beef and cook until browned.",
//       "Stir in tomato sauce and chopped bell peppers, cook for 5 minutes.",
//       "Season with salt and pepper to taste.",
//       "Mix the cooked pasta with the sauce.",
//       "Transfer to a baking dish, top with grated cheddar cheese, and bake at 350°F (175°C) for 10-15 minutes until the cheese is melted and bubbly.",
//       "Serve hot.",
//     ],
//   },
//   {
//     name: "Tomato Sauce Pasta",
//     type: "Pasta",
//     ingredients: [
//       "Pasta (spaghetti or penne)",
//       "Tomato sauce",
//       "Garlic",
//       "Onion",
//       "Olive oil",
//       "Basil",
//       "Salt",
//       "Pepper",
//       "Parmesan cheese",
//     ],
//     recipe: [
//       "Cook pasta according to package instructions. Drain and set aside.",
//       "In a pan, heat olive oil and sauté chopped onion and garlic until soft.",
//       "Add tomato sauce and cook for 10 minutes, stirring occasionally.",
//       "Season with salt, pepper, and fresh basil.",
//       "Toss the cooked pasta in the sauce until well coated.",
//       "Garnish with grated Parmesan cheese and serve hot.",
//     ],
//   },
//   {
//     name: "Chinese Pulao",
//     type: "Rice Dish",
//     ingredients: [
//       "Basmati rice",
//       "Chicken breast",
//       "Soy sauce",
//       "Garlic",
//       "Ginger",
//       "Vegetables (carrots, peas, bell peppers)",
//       "Salt",
//       "Pepper",
//       "Spring onions",
//       "Vegetable oil",
//     ],
//     recipe: [
//       "Cook basmati rice according to package instructions. Set aside.",
//       "In a pan, heat vegetable oil and sauté minced garlic and ginger until fragrant.",
//       "Add diced chicken breast and cook until browned.",
//       "Add chopped vegetables and stir-fry until tender.",
//       "Stir in soy sauce, salt, and pepper to taste.",
//       "Add the cooked rice and toss well to combine.",
//       "Garnish with chopped spring onions and serve hot.",
//     ],
//   },
//   {
//     name: "Singaporean Rice",
//     type: "Rice Dish",
//     ingredients: [
//       "Basmati rice",
//       "Chicken breast",
//       "Shrimp",
//       "Soy sauce",
//       "Garlic",
//       "Ginger",
//       "Vegetables (carrots, bell peppers, cabbage)",
//       "Salt",
//       "Pepper",
//       "Spring onions",
//       "Eggs",
//       "Vegetable oil",
//     ],
//     recipe: [
//       "Cook basmati rice according to package instructions. Set aside.",
//       "In a pan, heat vegetable oil and scramble the eggs. Remove and set aside.",
//       "In the same pan, sauté minced garlic and ginger until fragrant.",
//       "Add diced chicken breast and shrimp, cook until done.",
//       "Add chopped vegetables and stir-fry until tender.",
//       "Stir in soy sauce, salt, and pepper to taste.",
//       "Add the cooked rice and scrambled eggs, toss well.",
//       "Garnish with chopped spring onions and serve hot.",
//     ],
//   },
//   {
//     name: "Fresh Salad",
//     type: "Salad",
//     ingredients: [
//       "Lettuce",
//       "Cucumbers",
//       "Tomatoes",
//       "Carrots",
//       "Bell peppers",
//       "Red onions",
//       "Olive oil",
//       "Lemon juice",
//       "Salt",
//       "Pepper",
//     ],
//     recipe: [
//       "Wash and chop all vegetables into bite-sized pieces.",
//       "In a large bowl, combine lettuce, cucumbers, tomatoes, carrots, bell peppers, and red onions.",
//       "Drizzle with olive oil and lemon juice.",
//       "Season with salt and pepper to taste.",
//       "Toss the salad well and serve fresh.",
//     ],
//   },
// ];


// // smoothie recipr 


// const smoothies = [
//     {
//         name: "Strawberry Banana Smoothie",
//         ingredients: [
//             "1 cup strawberries", 
//             "1 banana", 
//             "1/2 cup Greek yogurt", 
//             "1/2 cup milk", 
//             "1 tablespoon honey"
//         ],
//         recipe: [
//             "Wash and hull the strawberries.",
//             "Peel and slice the banana.",
//             "In a blender, add the strawberries, banana, Greek yogurt, milk, and honey.",
//             "Blend until smooth and creamy.",
//             "Pour into a glass and serve immediately."
//         ]
//     },
//     {
//         name: "Mango Pineapple Smoothie",
//         ingredients: [
//             "1 cup frozen mango chunks", 
//             "1/2 cup pineapple chunks", 
//             "1/2 cup coconut milk", 
//             "1/4 cup orange juice", 
//             "1 tablespoon honey"
//         ],
//         recipe: [
//             "In a blender, add the frozen mango, pineapple chunks, coconut milk, orange juice, and honey.",
//             "Blend until smooth and thick.",
//             "Pour into a glass and enjoy the tropical flavors."
//         ]
//     },
//     {
//         name: "Green Detox Smoothie",
//         ingredients: [
//             "1 cup spinach", 
//             "1/2 cucumber", 
//             "1 green apple", 
//             "1/2 lemon (juice)", 
//             "1 tablespoon chia seeds", 
//             "1 cup water"
//         ],
//         recipe: [
//             "Wash and chop the spinach, cucumber, and green apple.",
//             "In a blender, add all the ingredients including the lemon juice and water.",
//             "Blend until smooth and well combined.",
//             "Pour into a glass and drink immediately for a refreshing detox."
//         ]
//     },
//     {
//         name: "Blueberry Almond Smoothie",
//         ingredients: [
//             "1 cup blueberries", 
//             "1/2 cup almond milk", 
//             "1 tablespoon almond butter", 
//             "1/2 banana", 
//             "1 tablespoon honey"
//         ],
//         recipe: [
//             "In a blender, add the blueberries, almond milk, almond butter, banana, and honey.",
//             "Blend until smooth and creamy.",
//             "Pour into a glass and enjoy this protein-packed smoothie."
//         ]
//     },
//     {
//         name: "Peanut Butter Banana Smoothie",
//         ingredients: [
//             "1 banana", 
//             "1 tablespoon peanut butter", 
//             "1/2 cup Greek yogurt", 
//             "1/2 cup milk", 
//             "1 tablespoon honey"
//         ],
//         recipe: [
//             "Peel and slice the banana.",
//             "In a blender, add the banana, peanut butter, Greek yogurt, milk, and honey.",
//             "Blend until smooth and creamy.",
//             "Pour into a glass and enjoy the rich and satisfying flavor."
//         ]
//     },
//     {
//         name: "Tropical Smoothie",
//         ingredients: [
//             "1/2 cup pineapple chunks", 
//             "1/2 cup mango chunks", 
//             "1/2 cup orange juice", 
//             "1/2 banana", 
//             "1/4 cup coconut milk"
//         ],
//         recipe: [
//             "In a blender, add the pineapple, mango, orange juice, banana, and coconut milk.",
//             "Blend until smooth and thick.",
//             "Pour into a glass and enjoy the tropical taste."
//         ]
//     },
//     {
//         name: "Avocado Spinach Smoothie",
//         ingredients: [
//             "1/2 avocado", 
//             "1 cup spinach", 
//             "1/2 banana", 
//             "1/2 cup almond milk", 
//             "1 tablespoon honey"
//         ],
//         recipe: [
//             "Scoop out the avocado flesh and add it to a blender.",
//             "Add the spinach, banana, almond milk, and honey.",
//             "Blend until smooth and creamy.",
//             "Pour into a glass and enjoy the creamy, nutritious smoothie."
//         ]
//     },
//     {
//         name: "Berry Blast Smoothie",
//         ingredients: [
//             "1/2 cup strawberries", 
//             "1/2 cup blueberries", 
//             "1/2 cup raspberries", 
//             "1/2 cup Greek yogurt", 
//             "1/2 cup apple juice"
//         ],
//         recipe: [
//             "Wash the berries and add them to a blender.",
//             "Add the Greek yogurt and apple juice.",
//             "Blend until smooth and well combined.",
//             "Pour into a glass and enjoy the berry explosion of flavors."
//         ]
//     },
//     {
//         name: "Chocolate Banana Smoothie",
//         ingredients: [
//             "1 banana", 
//             "1 tablespoon cocoa powder", 
//             "1/2 cup Greek yogurt", 
//             "1/2 cup milk", 
//             "1 tablespoon honey"
//         ],
//         recipe: [
//             "Peel and slice the banana.",
//             "In a blender, add the banana, cocoa powder, Greek yogurt, milk, and honey.",
//             "Blend until smooth and creamy.",
//             "Pour into a glass and enjoy the rich chocolate flavor."
//         ]
//     },
//     {
//         name: "Kiwi Banana Smoothie",
//         ingredients: [
//             "2 kiwis", 
//             "1 banana", 
//             "1/2 cup Greek yogurt", 
//             "1/2 cup orange juice", 
//             "1 tablespoon honey"
//         ],
//         recipe: [
//             "Peel and slice the kiwis and banana.",
//             "In a blender, add the kiwis, banana, Greek yogurt, orange juice, and honey.",
//             "Blend until smooth and creamy.",
//             "Pour into a glass and enjoy the refreshing kiwi taste."
//         ]
//     },
//     {
//         name: "Peach Mango Smoothie",
//         ingredients: [
//             "1 cup frozen peaches", 
//             "1/2 cup mango chunks", 
//             "1/2 cup orange juice", 
//             "1/4 cup Greek yogurt", 
//             "1 tablespoon honey"
//         ],
//         recipe: [
//             "In a blender, add the frozen peaches, mango, orange juice, Greek yogurt, and honey.",
//             "Blend until smooth and thick.",
//             "Pour into a glass and enjoy the sweet peach-mango flavor."
//         ]
//     },
//     {
//         name: "Coconut Berry Smoothie",
//         ingredients: [
//             "1/2 cup blueberries", 
//             "1/2 cup strawberries", 
//             "1/2 cup coconut milk", 
//             "1/2 banana", 
//             "1 tablespoon honey"
//         ],
//         recipe: [
//             "Wash the berries and add them to a blender.",
//             "Add the coconut milk, banana, and honey.",
//             "Blend until smooth and creamy.",
//             "Pour into a glass and enjoy the coconut-berry fusion."
//         ]
//     },
//     {
//         name: "Apple Cinnamon Smoothie",
//         ingredients: [
//             "1 apple", 
//             "1/2 banana", 
//             "1/2 cup Greek yogurt", 
//             "1/2 cup almond milk", 
//             "1/2 teaspoon cinnamon", 
//             "1 tablespoon honey"
//         ],
//         recipe: [
//             "Core and chop the apple.",
//             "In a blender, add the apple, banana, Greek yogurt, almond milk, cinnamon, and honey.",
//             "Blend until smooth and creamy.",
//             "Pour into a glass and enjoy the apple-cinnamon goodness."
//         ]
//     },
//     {
//         name: "Spinach Mango Smoothie",
//         ingredients: [
//             "1 cup spinach", 
//             "1/2 cup mango chunks", 
//             "1/2 banana", 
//             "1/2 cup orange juice", 
//             "1 tablespoon honey"
//         ],
//         recipe: [
//             "In a blender, add the spinach, mango, banana, orange juice, and honey.",
//             "Blend until smooth and well combined.",
//             "Pour into a glass and enjoy this nutrient-packed smoothie."
//         ]
//     },
//     {
//         name: "Watermelon Mint Smoothie",
//         ingredients: [
//             "2 cups watermelon chunks", 
//             "1/2 cup Greek yogurt", 
//             "1/4 cup mint leaves", 
//             "1/2 cup coconut water", 
//             "1 tablespoon honey"
//         ],
//         recipe: [
//             "In a blender, add the watermelon, Greek yogurt, mint leaves, coconut water, and honey.",
//             "Blend until smooth and refreshing.",
//             "Pour into a glass and enjoy the cooling watermelon-mint combo."
//         ]
//     },
//     {
//         name: "Orange Carrot Smoothie",
//         ingredients: [
//             "1 orange", 
//             "1/2 cup carrot juice", 
//             "1/2 banana", 
//             "1/2 cup Greek yogurt", 
//             "1 tablespoon honey"
//         ],
//         recipe: [
//             "Peel and segment the orange.",
//             "In a blender, add the orange segments, carrot juice, banana, Greek yogurt, and honey.",
//             "Blend until smooth and creamy.",
//             "Pour into a glass and enjoy the vibrant orange-carrot blend."
//         ]
//     }
// ];


// // desserts 




// const sweetsAndDesserts = [
//   {
//     name: "Gulab Jamun",
//     ingredients: [
//       "1 cup milk powder",
//       "1/4 cup all-purpose flour",
//       "1/4 cup ghee",
//       "1/4 cup milk",
//       "1/2 teaspoon baking powder",
//       "Oil for frying",
//       "1 cup sugar",
//       "1 cup water",
//       "1/2 teaspoon cardamom powder",
//     ],
//     recipe: [
//       "In a bowl, mix milk powder, all-purpose flour, and baking powder.",
//       "Add melted ghee and milk, and knead into a smooth dough.",
//       "Divide the dough into small balls and set aside.",
//       "Heat oil in a pan and fry the balls until golden brown.",
//       "In another pan, make a sugar syrup with sugar, water, and cardamom powder.",
//       "Soak the fried balls in the syrup for 1-2 hours.",
//       "Serve warm or at room temperature.",
//     ],
//   },
//   {
//     name: "Jalebi",
//     ingredients: [
//       "1 cup all-purpose flour",
//       "1 tablespoon rice flour",
//       "1/2 teaspoon baking powder",
//       "1/2 cup yogurt",
//       "1 cup sugar",
//       "1 cup water",
//       "1/2 teaspoon cardamom powder",
//       "Oil for frying",
//     ],
//     recipe: [
//       "Mix flour, rice flour, and baking powder in a bowl.",
//       "Add yogurt and water to make a smooth batter. Let it ferment for 8 hours.",
//       "Heat oil in a pan for frying.",
//       "Pour the batter into a piping bag or squeeze bottle and form spirals in the hot oil.",
//       "Fry until golden brown, then dip in hot sugar syrup mixed with cardamom powder.",
//       "Serve warm.",
//     ],
//   },
//   {
//     name: "Rasgulla",
//     ingredients: [
//       "1 liter milk",
//       "2 tablespoons lemon juice",
//       "1 cup sugar",
//       "2 cups water",
//       "1/2 teaspoon cardamom powder",
//     ],
//     recipe: [
//       "Boil the milk and add lemon juice to curdle it. Strain the curds using a cheesecloth.",
//       "Wash the curds under cold water to remove the lemon flavor.",
//       "Knead the curds until smooth and form small balls.",
//       "In a pan, prepare a sugar syrup with sugar, water, and cardamom powder.",
//       "Cook the balls in the syrup until they expand and become soft.",
//       "Let them cool in the syrup before serving.",
//     ],
//   },
//   {
//     name: "Kheer",
//     ingredients: [
//       "1/2 cup rice",
//       "1 liter milk",
//       "1/2 cup sugar",
//       "1/4 cup chopped nuts",
//       "1/4 teaspoon cardamom powder",
//       "Saffron strands (optional)",
//     ],
//     recipe: [
//       "Wash and soak rice for 30 minutes.",
//       "In a pan, bring milk to a boil, then add the rice.",
//       "Simmer on low heat until the rice is cooked and the milk thickens.",
//       "Add sugar, cardamom powder, and nuts.",
//       "Cook for a few more minutes, then garnish with saffron if using.",
//       "Serve warm or chilled.",
//     ],
//   },
//   {
//     name: "Barfi",
//     ingredients: [
//       "1 cup condensed milk",
//       "1 cup milk powder",
//       "1/2 cup ghee",
//       "1/4 cup chopped nuts",
//       "1/4 teaspoon cardamom powder",
//     ],
//     recipe: [
//       "Heat ghee in a pan and add milk powder, stirring continuously.",
//       "Add condensed milk and cook until the mixture thickens and starts to leave the sides of the pan.",
//       "Stir in chopped nuts and cardamom powder.",
//       "Transfer to a greased plate and flatten it.",
//       "Let it cool, then cut into pieces.",
//     ],
//   },
//   {
//     name: "Rasgulla",
//     ingredients: [
//       "1 liter milk",
//       "2 tablespoons lemon juice",
//       "1 cup sugar",
//       "2 cups water",
//       "1/2 teaspoon cardamom powder",
//     ],
//     recipe: [
//       "Boil the milk and add lemon juice to curdle it. Strain the curds using a cheesecloth.",
//       "Wash the curds under cold water to remove the lemon flavor.",
//       "Knead the curds until smooth and form small balls.",
//       "In a pan, prepare a sugar syrup with sugar, water, and cardamom powder.",
//       "Cook the balls in the syrup until they expand and become soft.",
//       "Let them cool in the syrup before serving.",
//     ],
//   },
//   {
//     name: "Peda",
//     ingredients: [
//       "1 cup milk powder",
//       "1/2 cup condensed milk",
//       "1/4 cup ghee",
//       "1/4 teaspoon cardamom powder",
//       "Chopped nuts for garnish",
//     ],
//     recipe: [
//       "Heat ghee in a pan and add milk powder, stirring continuously.",
//       "Add condensed milk and cook until the mixture thickens and leaves the sides of the pan.",
//       "Stir in cardamom powder.",
//       "Transfer to a greased plate, cool slightly, and shape into small discs or balls.",
//       "Garnish with chopped nuts.",
//     ],
//   },
//   {
//     name: "Gajar Ka Halwa",
//     ingredients: [
//       "4 cups grated carrots",
//       "1 liter milk",
//       "1 cup sugar",
//       "1/4 cup ghee",
//       "1/4 cup chopped nuts",
//       "1/4 teaspoon cardamom powder",
//     ],
//     recipe: [
//       "In a pan, heat ghee and add grated carrots.",
//       "Cook for a few minutes, then add milk and bring to a boil.",
//       "Simmer on low heat, stirring frequently, until the milk is absorbed and the mixture thickens.",
//       "Add sugar and cardamom powder. Cook until the sugar is dissolved.",
//       "Garnish with chopped nuts and serve warm.",
//     ],
//   },
//   {
//     name: "Ladoo",
//     ingredients: [
//       "1 cup besan (gram flour)",
//       "1/2 cup ghee",
//       "1/2 cup sugar",
//       "1/4 cup chopped nuts",
//       "1/4 teaspoon cardamom powder",
//     ],
//     recipe: [
//       "Heat ghee in a pan and add besan.",
//       "Roast the besan on low heat until it turns golden brown and gives off a nutty aroma.",
//       "Add sugar and cardamom powder, and mix well.",
//       "Cool slightly and shape into small balls.",
//       "Garnish with chopped nuts.",
//     ],
//   },
//   {
//     name: "Rava Kesari",
//     ingredients: [
//       "1 cup semolina (rava)",
//       "1/2 cup sugar",
//       "1/4 cup ghee",
//       "1/2 cup water",
//       "1/2 cup milk",
//       "1/4 teaspoon cardamom powder",
//       "Chopped nuts for garnish",
//     ],
//     recipe: [
//       "Heat ghee in a pan and roast semolina until golden brown.",
//       "Add water and milk, and stir continuously to avoid lumps.",
//       "Cook until the mixture thickens and starts to leave the sides of the pan.",
//       "Add sugar and cardamom powder, and cook for a few more minutes.",
//       "Garnish with chopped nuts and serve warm.",
//     ],
//   },
//   {
//     name: "Kaju Katli",
//     ingredients: [
//       "1 cup cashew nuts",
//       "1/2 cup sugar",
//       "1/4 cup water",
//       "1/4 teaspoon cardamom powder",
//       "Ghee for greasing",
//     ],
//     recipe: [
//       "Grind cashew nuts into a fine powder.",
//       "In a pan, prepare a sugar syrup with sugar and water.",
//       "Add the cashew powder to the syrup and cook until the mixture thickens and leaves the sides of the pan.",
//       "Add cardamom powder and mix well.",
//       "Transfer to a greased plate and flatten it.",
//       "Let it cool, then cut into diamond shapes.",
//     ],
//   },
//   {
//     name: "Sooji Halwa",
//     ingredients: [
//       "1 cup semolina (sooji)",
//       "1/2 cup sugar",
//       "1/4 cup ghee",
//       "1/2 cup water",
//       "1/2 cup milk",
//       "1/4 teaspoon cardamom powder",
//       "Chopped nuts for garnish",
//     ],
//     recipe: [
//       "Heat ghee in a pan and add semolina.",
//       "Roast the semolina until golden brown.",
//       "Add water and milk, and stir continuously.",
//       "Cook until the mixture thickens and starts to leave the sides of the pan.",
//       "Add sugar and cardamom powder, and mix well.",
//       "Garnish with chopped nuts and serve warm.",
//     ],
//   },
//   {
//     name: "Chum Chum",
//     ingredients: [
//       "1 liter milk",
//       "2 tablespoons lemon juice",
//       "1 cup sugar",
//       "2 cups water",
//       "1/4 teaspoon cardamom powder",
//       "1/4 cup desiccated coconut",
//     ],
//     recipe: [
//       "Boil the milk and add lemon juice to curdle it. Strain the curds using a cheesecloth.",
//       "Wash the curds under cold water to remove the lemon flavor.",
//       "Knead the curds until smooth and shape into oval balls.",
//       "In a pan, prepare a sugar syrup with sugar, water, and cardamom powder.",
//       "Cook the balls in the syrup until they expand and become soft.",
//       "Roll in desiccated coconut and serve.",
//     ],
//   },
//   {
//     name: "Mishti Doi",
//     ingredients: [
//       "1 liter milk",
//       "1/2 cup sugar",
//       "1/4 cup plain yogurt (as a starter)",
//     ],
//     recipe: [
//       "Boil the milk and let it cool to lukewarm.",
//       "Add sugar to the milk and stir until dissolved.",
//       "Mix in the plain yogurt.",
//       "Pour the mixture into a bowl and cover.",
//       "Let it sit in a warm place for 6-8 hours to set.",
//       "Refrigerate before serving.",
//     ],
//   },
//   {
//     name: "Puran Poli",
//     ingredients: [
//       "1 cup chana dal (split chickpeas)",
//       "1 cup jaggery",
//       "1/2 teaspoon cardamom powder",
//       "1 cup all-purpose flour",
//       "1/4 cup ghee",
//       "A pinch of salt",
//     ],
//     recipe: [
//       "Cook chana dal until soft. Drain and mash.",
//       "In a pan, heat jaggery and mix with the dal. Add cardamom powder.",
//       "Cook until the mixture thickens and starts to leave the sides of the pan.",
//       "Prepare a dough with flour, ghee, and a pinch of salt.",
//       "Divide dough and filling into balls and roll out each dough ball into a circle.",
//       "Place filling on one circle, cover with another, and seal the edges.",
//       "Cook on a hot griddle until golden brown on both sides.",
//     ],
//   },
//   {
//     name: "Boondi Ladoo",
//     ingredients: [
//       "1 cup gram flour (besan)",
//       "1/2 cup sugar",
//       "1/2 cup water",
//       "1/4 teaspoon cardamom powder",
//       "Oil for frying",
//       "Chopped nuts for garnish",
//     ],
//     recipe: [
//       "Make a smooth batter with gram flour and water.",
//       "Heat oil in a pan and drop small droplets of batter to form boondi.",
//       "Fry until golden and drain.",
//       "Prepare a sugar syrup with sugar and water.",
//       "Mix the fried boondi with the syrup and cardamom powder.",
//       "Shape into laddoos and garnish with nuts.",
//     ],
//   },
//   {
//     name: "Kheer Kadam",
//     ingredients: [
//       "1/2 cup khoya (milk solids)",
//       "1/2 cup milk",
//       "1/4 cup sugar",
//       "1/4 teaspoon cardamom powder",
//       "1/4 cup chopped nuts",
//       "1 cup cooked rice",
//     ],
//     recipe: [
//       "In a pan, cook khoya with milk until it becomes soft and smooth.",
//       "Add sugar, cardamom powder, and cooked rice.",
//       "Cook until the mixture thickens.",
//       "Shape into small balls and garnish with chopped nuts.",
//     ],
//   },
//   {
//     name: "Moong Dal Halwa",
//     ingredients: [
//       "1 cup moong dal (split green gram)",
//       "1/2 cup sugar",
//       "1/4 cup ghee",
//       "1/2 cup milk",
//       "1/4 teaspoon cardamom powder",
//       "Chopped nuts for garnish",
//     ],
//     recipe: [
//       "Soak moong dal for a few hours and grind to a coarse paste.",
//       "Heat ghee in a pan and roast the moong dal paste until it turns golden brown.",
//       "Add milk and cook until the mixture thickens.",
//       "Add sugar and cardamom powder and mix well.",
//       "Garnish with chopped nuts and serve warm.",
//     ],
//   },
//   {
//     name: "Sooji Ka Halwa",
//     ingredients: [
//       "1 cup semolina (sooji)",
//       "1/2 cup sugar",
//       "1/4 cup ghee",
//       "1/2 cup water",
//       "1/2 cup milk",
//       "1/4 teaspoon cardamom powder",
//       "Chopped nuts for garnish",
//     ],
//     recipe: [
//       "Heat ghee in a pan and roast semolina until golden brown.",
//       "Add water and milk and cook, stirring continuously.",
//       "When the mixture starts to thicken, add sugar and cardamom powder.",
//       "Continue to cook until the mixture thickens further.",
//       "Garnish with chopped nuts and serve warm.",
//     ],
//   },
//   {
//     name: "Ghevar",
//     ingredients: [
//       "1 cup all-purpose flour",
//       "1/4 cup ghee",
//       "1/2 cup milk",
//       "1/2 teaspoon baking powder",
//       "Oil for frying",
//       "1 cup sugar",
//       "1 cup water",
//       "1/4 teaspoon cardamom powder",
//     ],
//     recipe: [
//       "Mix flour, ghee, and baking powder to make a smooth batter.",
//       "Heat oil in a pan and pour batter in a circular motion.",
//       "Fry until golden brown, then drain.",
//       "Prepare sugar syrup with sugar, water, and cardamom powder.",
//       "Dip the fried ghevar in the syrup and serve.",
//     ],
//   },
//   {
//     name: "Paal Payasam",
//     ingredients: [
//       "1/2 cup rice",
//       "1 liter milk",
//       "1/2 cup sugar",
//       "1/4 cup grated coconut",
//       "1/4 teaspoon cardamom powder",
//       "Chopped nuts for garnish",
//     ],
//     recipe: [
//       "Wash and soak rice for 30 minutes.",
//       "Cook rice in milk until soft and the mixture thickens.",
//       "Add sugar, grated coconut, and cardamom powder.",
//       "Cook for a few more minutes, then garnish with chopped nuts.",
//     ],
//   },
//   {
//     name: "Mysore Pak",
//     ingredients: [
//       "1 cup gram flour (besan)",
//       "1 cup sugar",
//       "1 cup ghee",
//       "1/4 cup water",
//       "1/4 teaspoon cardamom powder",
//     ],
//     recipe: [
//       "Heat ghee in a pan and add gram flour. Roast until golden brown.",
//       "Prepare a sugar syrup with sugar and water.",
//       "Add the roasted gram flour to the syrup and cook until it thickens.",
//       "Pour the mixture into a greased plate and let it set.",
//       "Cut into pieces and serve.",
//     ],
//   },
//   {
//     name: "Sandesh",
//     ingredients: [
//       "1 liter milk",
//       "2 tablespoons lemon juice",
//       "1/2 cup sugar",
//       "1/4 teaspoon cardamom powder",
//       "Chopped nuts for garnish",
//     ],
//     recipe: [
//       "Boil the milk and add lemon juice to curdle it. Strain the curds using a cheesecloth.",
//       "Wash the curds under cold water to remove the lemon flavor.",
//       "Knead the curds until smooth.",
//       "Add sugar and cardamom powder, and mix well.",
//       "Press the mixture into molds and let it set.",
//       "Garnish with chopped nuts before serving.",
//     ],
//   },
//   {
//     name: "Coconut Ladoo",
//     ingredients: [
//       "1 cup grated coconut",
//       "1/2 cup condensed milk",
//       "1/4 cup chopped nuts",
//       "1/4 teaspoon cardamom powder",
//     ],
//     recipe: [
//       "In a pan, combine grated coconut and condensed milk.",
//       "Cook until the mixture thickens and starts to leave the sides of the pan.",
//       "Add cardamom powder and mix well.",
//       "Cool slightly and shape into small balls.",
//       "Garnish with chopped nuts.",
//     ],
//   },

//   {
//     name: "Knafeh",
//     ingredients: [
//       "200 grams kataifi (shredded phyllo dough)",
//       "100 grams unsalted butter, melted",
//       "200 grams ricotta cheese",
//       "100 grams mozzarella cheese, shredded",
//       "1 cup sugar",
//       "1 cup water",
//       "1 teaspoon rose water or orange blossom water",
//       "Pistachios for garnish (optional)",
//     ],
//     recipe: [
//       "Preheat your oven to 180°C (350°F).",
//       "In a bowl, mix the ricotta and mozzarella cheese together.",
//       "Grease a baking dish with some melted butter.",
//       "Place half of the kataifi in the dish and press it down firmly.",
//       "Spread the cheese mixture evenly over the kataifi layer.",
//       "Cover with the remaining kataifi, and pour the melted butter over the top.",
//       "Bake for 30-40 minutes or until golden brown and crispy.",
//       "While the Knafeh is baking, make the syrup: in a saucepan, combine sugar and water, and bring to a boil.",
//       "Reduce heat and simmer for 10 minutes. Add rose water or orange blossom water and mix well.",
//       "Remove the Knafeh from the oven and pour the hot syrup evenly over it.",
//       "Let it soak for at least 30 minutes before serving. Garnish with chopped pistachios if desired.",
//     ],
//   },
//   {
//     name: "Chocolate Kustor",
//     ingredients: [
//       "1 cup all-purpose flour",
//       "1/2 cup unsweetened cocoa powder",
//       "1/2 cup sugar",
//       "1/2 cup unsalted butter",
//       "1/4 cup milk",
//       "1/4 cup heavy cream",
//       "1/2 teaspoon vanilla extract",
//       "1/4 teaspoon baking powder",
//       "Pinch of salt",
//       "Powdered sugar for dusting (optional)",
//     ],
//     recipe: [
//       "Preheat your oven to 180°C (350°F) and grease a baking pan.",
//       "In a bowl, whisk together flour, cocoa powder, baking powder, and salt.",
//       "In another bowl, cream the butter and sugar together until light and fluffy.",
//       "Add the milk, heavy cream, and vanilla extract to the butter mixture and mix well.",
//       "Gradually add the dry ingredients to the wet ingredients, mixing until just combined.",
//       "Pour the batter into the prepared baking pan and smooth the top.",
//       "Bake for 20-25 minutes, or until a toothpick inserted in the center comes out clean.",
//       "Let it cool before cutting into squares. Dust with powdered sugar if desired.",
//     ],
//   },
//   {
//     name: "Khaja",
//     ingredients: [
//       "1 cup all-purpose flour",
//       "1/4 cup semolina (rava)",
//       "1/4 cup ghee",
//       "1/4 cup sugar",
//       "1/4 cup water",
//       "1/4 teaspoon cardamom powder",
//       "Oil for frying",
//       "1/2 cup sugar (for syrup)",
//       "1/2 cup water (for syrup)",
//     ],
//     recipe: [
//       "In a bowl, mix flour and semolina.",
//       "Add melted ghee and mix to form a crumbly texture.",
//       "Gradually add water to form a smooth dough. Let it rest for 30 minutes.",
//       "Roll out the dough into thin sheets and cut into strips.",
//       "Heat oil in a pan and fry the strips until golden and crispy.",
//       "Prepare the syrup by combining sugar and water in a pan. Boil until it reaches a single thread consistency.",
//       "Add cardamom powder to the syrup and mix well.",
//       "Soak the fried strips in the hot syrup for a few minutes, then remove and let them cool.",
//       "Serve as a sweet treat.",
//     ],
//   },

// ];


const images = [
  "../src/img/black-plate-removebg-preview.png",
  "../src/img/food.png",
  "../src/img/food1.png",
]; // Add the image URLs here
const imgElement = document.getElementById("foodImage");
let index = 0;

function changeImage() {
  index = (index + 1) % images.length;
  imgElement.src = images[index];
}

// Change image every 2 seconds
setInterval(changeImage, 2000);


