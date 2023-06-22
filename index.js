const express = require('express')
const app = express();
const cors = require('cors')
const port = 5000
const chefs = require('./data/chefs.json')
const recipes = require('./data/recipes.json')

app.use(cors())

app.get('/', (req, res) => {
  res.send('Test')
})

// Chef data
app.get('/chefs',(req,res)=>{
  res.send(chefs);
})

// chef with id

app.get('/chefs/:id', (req, res) => {
  const chefId = parseInt(req.params.id);
  const chef = chefs.find(chef => chef.id === chefId);
  if (!chef) {
    return res.status(404).send('Chef not found..');
  }
  res.send(chef);
});

// recipe data
app.get('/recipes',(req,res)=>{
  res.send(recipes);
})


app.get('/recipes/:id', (req, res) => {
  const recipeId = parseInt(req.params.id);
  const recipe = recipes.find(recipe => recipe.id === recipeId);
  if (!recipe) {
    return res.status(404).send('Recipe not found..');
  }
  res.send(recipe);
});




app.listen(port, () => {
    console.log(`test ${port}`)
  })