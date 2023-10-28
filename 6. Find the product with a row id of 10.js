// 6. Find the product with a row id of 10

db.products.find({ id: "10" })

// Output

[
  {
    _id: ObjectId("653d259bf28279722291db81"),
    id: '10',
    product_name: 'Generic Wooden Pizza',
    product_price: 84,
    product_material: 'Frozen',
    product_color: 'indigo'
  }
]