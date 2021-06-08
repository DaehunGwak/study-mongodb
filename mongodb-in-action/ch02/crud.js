use tutorial

// insert
db.users.insertOne({username: "smith"})
db.users.insertOne({username: "jones"})

/* READ */
// query
db.users.find()
db.users.find({username: "jones"})

// and query
db.users.find({
    _id: ObjectId("60bec5e4c37fa80ae37e4865"),
    username: "smith"
})
db.users.find({
    $and: [
        { _id: ObjectId("60bec5e4c37fa80ae37e4865") },
        { username: "smith" }
    ]
}) // 바로 위의 질의와 같음

// or query
db.users.find({
    $or: [
        { username: "smith" },
        { username: "jones" }
    ]
})

// count
db.users.count()



/* UPDATE */
// 1. 도큐먼트 수정
// 3.6 에선 전체 컬렉션의 필드 일관성을 위해 전체적으로 한번 필드 업데이트해야한다
db.users.updateMany(
    {},
    {$unset: {country: 1}}
)
db.users.updateMany(
    {},
    {$set: {country: ""}}
)
// 그리고 개별 업데이트
db.users.update(
    {"username": "smith"}, // "" 를 씌어주니 됨...
    {$set: {country: "UK"}}
)
db.users.update(
    {_id: new ObjectId("60bef33dfb34391acc5a1a15")}, // username을 이용한 수정은 안됨..
    {$set: {country: "Canada"}}
)
db.users.update(
    db.users.findOne({username: "jones"}),
    {$set: {country: "France"}}
)
db.users.update(
    db.users.findOne({
        username: "jones"
    }), {
        $set: {
            favorites: {
                movies: ["Casablanca", "로키"]
            }
        }
    }
)
db.users.find({"favorites.movies": "로키"})

// 2. 오래된 도큐먼트를 새로운 도큐먼트로
db.users.update(
    {
        "favorites.movies": "로키"
    },
    {
        $addToSet: { "favorites.movies": "The Maltese Falcon" } // 중복확인까지 같이
    },
    false, // upsert: data가 없을때 insert
    true // multi: 다중 업데이트 가능 여부
)



/* 4. 데이터 삭제 */
db.foo.remove({}) // 모두 삭제
db.users.deleteOne({"favorites.movies": "로키"})
db.users.drop() // 컬렉션 삭제
