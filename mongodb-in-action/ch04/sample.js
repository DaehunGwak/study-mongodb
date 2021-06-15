const product = {
  _id: ObjectId(),
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
  total_review: 4,
  average_review: 4.5,
  pricing: {
    retail: 589700,
    sale: 489700
  },
  price_history: [
    {
      retail: 529700,
      sale: 429700,
      start: new Date(2010, 4, 1),
      end: new Date(2010, 4, 8)
    },
    {
      retail: 529700,
      sale: 529700,
      start: new Date(2010, 4, 9),
      end: new Date(2010, 4, 16)
    }
  ],
  primary_category: ObjectId(),
  category_ids: [
    ObjectId(),
    ObjectId()
  ],
  main_cat_id: ObjectId(),
  tags: ["tools", "gardening", "soil"],
}


const category = {
  _id: ObjectId(),
  slug: "gardening-tools".
  name: "Gardening Tools",
  description: "Gardening gadgets galore!",
  parent_id: ObjectId(),
  ancestors: [
    {
      name: "Home",
      _id: ObjectId(),
      slug: "home"
    },
    {
      name: "Outdoors",
      _id: ObjectId(),
      slug: "outdoors"
    }
  ]
}


const order = {
  _id: ObjectId(),
  user_id: ObjectId(),
  state: "CART",
  line_items: [
    {
      _id: ObjectId(),
      sku: "9092",
      name: "Extra Large Wheelbarrow",
      quantity: 1,
      pricing: {
        retail: 5891,
        sale: 4897,
      }
    },
    {
      _id: ObjectId(),
      sku: "10027",
      name: "Rubberized Work Glove, Black",
      quantity: 2,
      pricing: {
        retail: 1499,
        sale: 1299,
      }
    }
  ],
  shipping_address: {
    street: "588 5th Street",
    city: "Brooklyn",
    state: "NY",
    zip: 11215
  },
  sub_total: 6196 // 비정규화된 세일 가격
}

const user = {
  _id: ObjectId(),
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
}

const review = {
  _id: ObjectId(),
  product_id: ObjectId(),
  date: new Date(2010, 5, 7),
  title: "Amazing",
  text: "Has a squeaky wheel, but still a darn good wheelbarrow",
  rating: 4,
  user_id: ObjectId(),
  username: "dgreenthumb",
  helpful_votes: 3,
  voter_ids: [
    ObjectId(),
    ObjectId(),
    ObjectId()
  ]
}