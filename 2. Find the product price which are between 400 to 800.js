// 2. Find the product price which are between 400 to 800

db.products.find({ product_price : { $gte: 400, $lte: 800 }})

// Output

[
    {
      _id: ObjectId("653d259bf28279722291db78"),
      id: '1',
      product_name: 'Intelligent Fresh Chips',
      product_price: 655,
      product_material: 'Concrete',
      product_color: 'mint green'
    },
    {
      _id: ObjectId("653d259bf28279722291db7a"),
      id: '3',
      product_name: 'Refined Steel Car',
      product_price: 690,
      product_material: 'Rubber',
      product_color: 'gold'
    },
    {
      _id: ObjectId("653d259bf28279722291db7b"),
      id: '4',
      product_name: 'Gorgeous Plastic Pants',
      product_price: 492,
      product_material: 'Soft',
      product_color: 'plum'
    },
    {
      _id: ObjectId("653d259bf28279722291db7d"),
      id: '6',
      product_name: 'Awesome Wooden Towels',
      product_price: 474,
      product_material: 'Plastic',
      product_color: 'orange'
    },
    {
      _id: ObjectId("653d259bf28279722291db7e"),
      id: '7',
      product_name: 'Practical Soft Shoes',
      product_price: 500,
      product_material: 'Rubber',
      product_color: 'pink'
    }
  ]