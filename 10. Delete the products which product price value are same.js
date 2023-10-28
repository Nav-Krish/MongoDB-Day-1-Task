// 10. Delete the products which product price value are same

db.products.deleteMany({
    product_price: { $eq: db.products.distinct("product_price") },
  });
