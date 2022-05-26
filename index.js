const mongoose = require('mongoose');

// Import of the model Recipe from './models/Recipe.model.js'
const Recipe = require('./models/Recipe.model');
// Import of the data from './data.json'
const data = require('./data');

const MONGODB_URI = 'mongodb://localhost:27017/recipe-app';

// Connection to the database "recipe-app"
mongoose
  .connect(MONGODB_URI)
  .then(x => {
    console.log(`Connected to the database: "${x.connection.name}"`);
    // Before adding any recipes to the database, let's remove all existing ones
    return Recipe.deleteMany()
  })
  .then(() => {
    // Run your code here, after you have insured that the connection was made
    return Recipe.create({
      title: 'Chicke Tikka Masala',
      level: 'Easy Peasy',
      ingredients: ['Chicke', 'Masala', 'Chilli', 'Tomato'],
      cuisine: 'Nepali',
      dishType: 'main_course',
      duration: 30,
      creator: 'Loken'
    })
  })

  .then((response) => console.log(response.title))
  
      Recipe.insertMany(data)
      .then((data) => {
        data.forEach((recipe) => {
          console.log(recipe.title)
        })
        
        Recipe.findOneAndUpdate({ title: 'Rigatoni alla Genovese'}, 
        {duration: 100}
        )
        console.log('success')
      })

      .then(()=> {
        Recipe.deleteOne({ title: 'Carrot Cake '})
        .then((data) => {
          console.log('One missing')
        })
      })

  .catch(error => {
    console.error('Error connecting to the database', error);
  });
