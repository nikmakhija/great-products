const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  // find all categories
  Category.findAll({
    include: [Product], 
  })
  .then((catagories) => res.json(catagories))
  .catch((err) => res.status(500).json(err));
  // be sure to include its associated Products
  router.post('/seed', (req, res) => {
    Category.create(req.body)
    .then((category) => {
      res.json(category);
    })
    .catch((err) => {
      res.json(err);
    });
  })
});

router.get('/:id', (req, res) => {
  // find one category by its `id` value
  Category.findId().then((categoryData) => {
    res.json(categoryData);
  });
  // be sure to include its associated Products
  router.post('/seed', (req, res) => {
    Category.bulkCreate([
      {
        id: 1,
        product_name: 'laptop',
        price: 300,
        stock: 100,
        category: 'electronics'
      },
      {
        id: 2,
        product_name: 'Xbox series x',
        price: 500,
        stock: 100,
        category: 'electronics'
      },
      {
        id: 3,
        product_name: 'oculus quest 2',
        price: 400,
        stock: 100,
        category: 'electronics'
      },
      {
        id: 4,
        product_name: 'TV',
        price: 100,
        stock: 100,
        category: 'electronics'
      },
      {
        id: 5,
        product_name: 'headphones',
        price: 10,
        stock: 100,
        category: 'electronics'
      },
      {
        id: 6,
        product_name: 'thumb drive',
        price: 10,
        stock: 100,
        category: 'electronics'
      },
    ])
  })
});

router.post('/', (req, res) => {
  // create a new category
  Category.create(req.body)
    .then((newCategory) => {
      res.json(newCategory);
    })
    .catch((err) => {
      res.json(err);
    });
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
  Category.findByPk(req.params.id).then((categoryData) => {
    res.json(categoryData);
  });
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
  Category.deleteByPk(req.params.id).then((categoryData) => {
    res.json(categoryData);
  });
});

module.exports = router;
