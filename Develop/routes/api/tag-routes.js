const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', (req, res) => {
  // find all tags
  // be sure to include its associated Product data
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

router.get('/:id', (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  Tag.findId().then((tagData) => {
    res.json(tagData);
  })
});

router.post('/', (req, res) => {
  // create a new tag
  Tag.create(req.body)
    .then((newTag) => {
      res.json(newTag);
    })
    .catch((err) => {
      res.json(err);
    });
});

router.put('/:id', (req, res) => {
  // update a tag's name by its `id` value
  Tag.findByPk(req.params.id).then((tagData) => {
    res.json(tagData);
  });
});

router.delete('/:id', (req, res) => {
  // delete on tag by its `id` value
  Tag.deleteByPk(req.params.id).then((tagData) => {
    res.json(tagData);
  });
});

module.exports = router;
