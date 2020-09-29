const { Router } = require("express");
const router = Router();
const Item = require('/Users/joshseckman/Desktop/seir-flex-zen-work/projects/project-2/project2/models/items/index.js')


// INDEX
router.get('/items', (req, res) => {
    Item.find({}, (error, allItems) => {
      res.render("index", {items: allItems})
    })
})


//new
router.get('/items/new', (req, res) => {
    res.render("new")
})


  
//DELETE
router.delete('/items/:id', (req, res) => {
    Item.findByIdAndRemove(req.params.id, (err, data) => {
        res.redirect('/items')
    })
})
  
//UPDATE
router.put('/items/:id', (req, res)=>{
    Item.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err, updatedModel)=>{
        res.redirect('/items');
    });
});
  
//CREATE
router.post('/items/', (req, res)=>{
    Item.create(req.body, (error, createdItem)=>{
        res.redirect('/items')
    });
});
  
//EDIT
router.get('/items/:id/edit', (req, res) => {
    Item.findById(req.params.id, (err, founditem) => {
        res.render('edit', { item: founditem })
    })
})
  
  //SHOW
router.get("/items/:id", (req, res) => {
    Item.findById(req.params.id, (err, foundItem) => {
      res.render('show', {
        item: foundItem
      })
  
    })
    
})

module.exports = router