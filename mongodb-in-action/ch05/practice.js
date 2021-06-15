use garden

// 상품 페이지
// sort 를 동반한 pagenation 쿼리
page_number = 1
page_size = 10
product = db.products.findOne({'slug': 'wheel-barrow-9092'})
category = db.categories.findOne({'_id': product['main_cat_id']})
reviews_count = db.reviews.count({'product_id': product['_id']})
reviews = db.reviews.find({'product_id': product['_id']})
        .sort({'helpful_votes': -1})
        .skip((page_number - 1) * page_size)
        .limit(page_size)

// 상품 리스트 페이지
page_number = 1
page_size = 10
category = db.categories.findOne({'slug': 'gardening-tools'})
siblings = db.categories.findOne({'parent_id': category['_id']})
products = db.products.find({'category_id': category['_id']})
                            .sort({'helpful_votes': -1})
                            .skip((page_number - 1) * page_size)
                            .limit(page_size)

// 부모 ID 가 없는 경우 카테고리들
categories = db.categories.find({'parent_id': null})

// 특정 필드만 조회
db.users.findOne(
    {
        'username': 'kbanker',
        'hashed_password': ''
    },
    {
        '_id': 1
    }
)

// 정규식 조회
db.users.find({'last_name': /^Ba/})

// 특정 범위
db.users.find({'addresses.zip': {'$gt': 10019, '$lt': 10040}})

// 서브 도큐먼트 조회 시 주의사항
db.products_test.insertOne({
  slug: "wheelbarrow-9092",
  sku: "9092",
  name: "Extra Large Wheelbarrow",
  description: "Heavy duty wheelbarrow...",
  details: {
    weight: 47,
    weight_units: "lbs",
    model_num: 4039283402,
    manufacturer: "Acme",
    color: "Green"
  },
  tags: ["tools", "equipment", "soil"]
})
db.products_test.deleteMany({})
db.products_test.find({'details.weight': 47})
db.products_test.find({'tags': 'soil'}).explain()
db.products_test.ensureIndex({'tags': 1}) // b tree scan (IXSCAN)
db.products_test.drop()

// 배열
db.orders_test.insertOne({
  username: "kbanker",
  email: "kylebanker@gmail.com",
  first_name: "Kyle",
  last_name: "Banker",
  hashed_password: "",
  addresses: [
    {
      name: "home",
      street: "588 5th Street",
      city: "Brooklyn",
      state: "NY",
      zip: 11215
    },
    {
      name: "work",
      street: "1 E. 23rd Street",
      city: "New York",
      state: "NY",
      zip: 10010
    }
  ],
  payment_methods: [
    {
      name: "VISA",
      payment_token: "43f6ba1dfda6b8106dc7"
    }
  ],
})
db.orders_test.find({
    'addresses': {
        '$elemMatch': {
            'name': 'work',
            'state': 'NY'
        }
    }
})

db.getCollectionNames()

db.system.namespaces.find()
