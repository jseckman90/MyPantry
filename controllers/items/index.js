const { Router } = require("express");
const router = Router();
const auth = require('../authmiddleware')
const Item = require('../../models/items')


// //signup

// router.get("/", (req,res) => {
//   res.render('auth/signup')
// })

//INDEX
router.get("/items", auth, async (req, res) => {
    try {
        const items = await Item.find({username: req.session.username})
    res.render("index", {items})
    } catch (err) {
        console.log(err)
    }
  });


//NEW
router.get('/items/new', auth, (req, res) => {
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
router.post('/items/',auth, async (req, res)=>{
    req.body.username = req.session.username
    const newItem = await Item.create(req.body)
    res.redirect('/items')
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