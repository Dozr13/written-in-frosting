const router = require('express').Router();
let Cake = require('../models/cakes.model');

router.route('/').get((req, res) => {
  Cake.find()
    .then(cake => res.json(cake))
    .catch(err => res.status(400).json(`Error ${err}`));
});

router.route('/add').post((req, res) => {
  const name = req.body.name;
  const flavor = req.body.flavor;
  const color = req.body.color;
  const allergyInfo = req.body.allergyInfo;
  const price = Number(req.body.price);
  const imgUrl = req.body.imgUrl;

  const newProperty = new Cake({
    name,
    flavor,
    color,
    allergyInfo,
    price,
    imgUrl,
  });

  newProperty.save()
    .then(() => res.json('New Cake has been added!'))
    .catch(err => req.status(400).json(`Error: ${err}`));
});


router.route('/:id').get((req, res) => {
  Cake.findById(req.params.id)
    .then(cake => res.json(cake))
    .catch(err => res.status(400).json(`Error: ${err}`));
});


router.route('/:id').delete((req, res) => {
  Cake.findByIdAndDelete(req.params.id)
    .then(() => res.json(`Selected Cake has been deleted.`))
    .catch(err => res.status(400).json(`Error: ${err}`));
});


router.route('/update/:id').post((req, res) => {
  Cake.findById(req.params.id)
    .then(cake => {
      cake.name = req.body.name;
      cake.flavor = req.body.flavor;
      cake.color = req.body.color;
      cake.allergyInfo = req.body.allergyInfo;
      cake.price = Number(req.body.price);
      cake.imgUrl = req.body.imgUrl;

      cake.save()
        .then(() => res.json('Cake has been updated!'))
        .catch(err => res.status(400).json(`Error: ${err}`));
    })
    .catch(err => res.status(400).json(`Error: ${err}`));
});

module.exports = router;