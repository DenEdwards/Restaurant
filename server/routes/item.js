//CRUD
const router = require("express").Router();
let Item = require("../models/items.model");

router.route("/add").post((req,res) =>{
    const newItem = new Item({
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
        image: req.body.image
    });

    newItem.save()
        .then((item)=>res.json(item.name +" added."))
        .catch(err =>res.status("400").json("Error: " + err));
});

router.route("/").get((req,res) =>{
    Item.find()
        .then((items)=>{res.json(items)})
        .catch((err)=>{res.status("400").json("Error: "+err)});
});

router.route("/update/:id").post((req,res)=>{    
    Item.findByIdAndUpdate(req.params.id)
        .then((updateItem)=>{
            updateItem.name = req.body.name,
            updateItem.description= req.body.description,
            updateItem.price= req.body.price,
            updateItem.image= req.body.image

            updateItem.save()
                .then(item=>res.json(item.name + " was updated."))
                .catch(err => res.status("400").json("Error: "+err));
        })
        .catch(err=>res.status("400").json("Error: " +err));
});

router.route("/delete/:id").delete((req,res) =>{
    Item.findByIdAndDelete(req.params.id)
        .then(item => res.json(item.name + " was deleted."))
        .catch(err => res.status("400").json("Error: "+err));
});

module.exports = router;