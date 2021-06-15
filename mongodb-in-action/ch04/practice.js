// db
use garden
db.products.insertOne({name: "Extra Large Wheelbarrow"})
db.products.find() // 전체 조회
db.products.deleteMany({}) // 도큐먼트 전체 삭제
db.products.drop() // 컬렉션 삭제
db.dropDatabase() // 디비 삭제
db.stats()

// collection
db.createCollection("users")
db.users.drop()
db.createCollection("users", {size: 20000})
db.products.categories.insertOne({name: "test"}) // products.categories 랑 products는 다른 컬렉션
db.getCollection("products.categories").find()
db.products.renameCollection("rename_test")
db.getCollectionNames()

// capped collection
db.createCollection("user_actions", {capped: true, size: 16384})
db.createCollection("user_actions", {capped: true, size: 16384, max: 100})
for (let i = 0; i < 500; i++) {
    db.user_actions.insertOne({
        "username": "kbanker",
        action_code: 0,
        time: new Date(),
        n: i
    })
}
db.user_actions.count()
db.user_actions.find()

// TTL collection
db.createCollection("reviews")
db.reviews.createIndex({time_field: 1}, {expireAfterSeconds: 60})
db.reviews.insertOne({
    time_field: new Date()
})
db.reviews.stats()
db.reviews.find()

// System collection
use garden
//show dbs
//show databases
//use config
db.getCollectionNames()
db.user_actions.getIndexes()
db.numbers.insertOne({n: 5})
db.numbers.insertOne({n: NumberLong("20")})
db.numbers.insertOne({n: NumberDecimal("20")})
db.numbers.insertOne({n: NumberInt("20")})
db.numbers.find({"n": {$type: "number"}})

db.isMaster()
