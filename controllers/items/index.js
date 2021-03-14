const { Router } = require("express");
const router = Router();
const auth = require("../authmiddleware");
const Item = require("../../models/items");

// //signup

// router.get("/", (req,res) => {
//   res.render('auth/signup')
// })

//INDEX
router.get("/", auth, async (req, res) => {
  try {
    const items = await Item.find({ username: req.session.username });
    res.render("index", { items });
  } catch (err) {
    console.log(err);
  }
});

//NEW
router.get("/new", auth, (req, res) => {
  res.render("new");
});

//DELETE
router.delete("/:id", (req, res) => {
  Item.findByIdAndRemove(req.params.id, (err, data) => {
    res.redirect("/items");
  });
});

//UPDATE
router.put("/:id", (req, res) => {
  Item.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true },
    (err, updatedModel) => {
      res.redirect("/items");
    }
  );
});

//CREATE
router.post("/", auth, async (req, res) => {
  req.body.username = req.session.username;
  const newItem = await Item.create(req.body);
  res.redirect("/items");
});

//EDIT
router.get("/:id/edit", (req, res) => {
  Item.findById(req.params.id, (err, founditem) => {
    res.render("edit", { item: founditem });
  });
});

//Grocery List

router.get("/grocery-list", auth, async (req, res) => {
  try {
    const items = await Item.find({ username: req.session.username });
    res.render("grocery-list", { items });
  } catch (err) {
    console.log(err);
  }
});

//SHOW
router.get("/:id", (req, res) => {
  Item.findById(req.params.id, (err, foundItem) => {
    res.render("show", {
      item: foundItem,
    });
  });
});

module.exports = router;
