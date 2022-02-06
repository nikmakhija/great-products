const router = require('express').Router();
const { Product, Category, Tag, ProductTag } = require('../../models');

// The `/api/products` endpoint
router.get('/', (req, res) => {})

// get all products
router.get('/', (req, res) => {
  // find all products
  // be sure to include its associated Category and Tag data
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
  });

// get one product
router.get('/:id', (req, res) => {
  Product.create(req.body)
    .then((newProduct) => {
      res.json(newProduct);
    })
    .catch((err) => {
      res.json(err);
    });
  // find a single product by its `id`
  // be sure to include its associated Category and Tag data
  router.post('/seed', (req, res) => {
    Category.create([
      {
        id: 1,
        product_name: 'laptop',
        price: 300,
        stock: 100,
        category: 'electronics'
      },
    ])
  })
});
// create new product
router.post('/', (req, res) => {
  /* req.body should look like this...
    {
      product_name: "Basketball",
      price: 200.00,
      stock: 3,
      tagIds: [1, 2, 3, 4]
    }
  */
    router.post('/seed', (req, res) => {
      Category.create([
        {
          product_name: 'microphone',
          price: 300,
          stock: 100,
          tagIds: 7
        },
      ])
    }) 
  Product.create(req.body)
    .then((product) => {
      // if there's product tags, we need to create pairings to bulk create in the ProductTag model
      if (req.body.tagIds.length) {
        const productTagIdArr = req.body.tagIds.map((tag_id) => {
          return {
            product_id: product.id,
            tag_id,
          };
        });
        return ProductTag.bulkCreate(productTagIdArr);
      }
      // if no product tags, just respond
      res.status(200).json(product);
    })
    .then((productTagIds) => res.status(200).json(productTagIds))
    .catch((err) => {
      console.log(err);
      res.status(400).json(err);
    });
});

// update product
router.put('/:id', (req, res) => {
  // update product data
  Product.update(req.body, {
    where: {
      id: req.params.id,
    },
  })
    .then((product) => {
      // find all associated tags from ProductTag
      return ProductTag.findAll({ where: { product_id: req.params.id } });
    })
    .then((productTags) => {
      // get list of current tag_ids
      const productTagIds = productTags.map(({ tag_id }) => tag_id);
      // create filtered list of new tag_ids
      const newProductTags = req.body.tagIds
        .filter((tag_id) => !productTagIds.includes(tag_id))
        .map((tag_id) => {
          return {
            product_id: req.params.id,
            tag_id,
          };
        });
      // figure out which ones to remove
      const productTagsToRemove = productTags
        .filter(({ tag_id }) => !req.body.tagIds.includes(tag_id))
        .map(({ id }) => id);

      // run both actions
      return Promise.all([
        ProductTag.destroy({ where: { id: productTagsToRemove } }),
        ProductTag.bulkCreate(newProductTags),
      ]);
    })
    .then((updatedProductTags) => res.json(updatedProductTags))
    .catch((err) => {
      // console.log(err);
      res.status(400).json(err);
    });
});

router.delete('/:id', (req, res) => {
  // delete one product by its `id` value
  Product.deleteByPk(req.params.id).then((productData) => {
    res.json(productData);
  });
});

module.exports = router;
