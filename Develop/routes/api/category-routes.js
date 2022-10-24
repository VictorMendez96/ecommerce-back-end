const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  // find all categories
  // be sure to include its associated Products
  try{
    const allCats = await Category.findAll({
      include: [{ model: Product }]
    });
    res.status(200).JSON(allCats)
  } catch (err) {
    res.status(500).JSON(err)
  }
});

router.get('/:id', async (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  try{
    const oneCat = await Category.findOne({
      where: {
        id: req.params.id
      },
      include: [{ model: Product }]
    });
    res.status(200).JSON(oneCat)
  } catch (err) {
    res.status(500).JSON(err)
  }
});

router.post('/', async (req, res) => {
  // create a new category
  try {
    const newCat = await Category.create(req.body);
    res.status(200).JSON(newCat)
  } catch (err) {
    res.status(500).JSON(err)
  }
});

router.put('/:id', async (req, res) => {
  // update a category by its `id` value
  try {
    const updateCat = await Category.update(req.body, {
      where: {
        id: req.params.id
      }
    });
    res.status(200).JSON(updateCat);
  } catch (err) {
    res.status(500).JSON(err)
  }
});

router.delete('/:id', async (req, res) => {
  // delete a category by its `id` value
  try {
    const delCat = await Category.destrol({
      where: {
        id: req.params.id
      }
    })
  } catch (err) {
    res.status(500).JSON(err)
  }
});

module.exports = router;
