// 10. Delete the products which product price value are same

db.temp.aggregate([
  {
    $group: {
      _id: "$product_price",
      dups: {
        $push: "$id",
      },
      count: {
        $sum: 1,
      },
    },
  },
  {
      $match:{count: {$gt:1}}
  }
]).forEach(function (doc) {
    doc.dups.shift();
    db.temp.remove({ _id: { $in: doc.dups } });
  });
