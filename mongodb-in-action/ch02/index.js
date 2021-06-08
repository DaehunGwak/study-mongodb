use tutorial

/* 1. 대용량 컬렉션 준비 */
// 데이터 준비
for (i = 0; i < 20000; i++) {
    db.numbers.insertOne({num: i})
}
db.numbers.count()
db.numbers.findOne({num: 500})

// 범위 쿼리
db.numbers.find({num: {$gt: 19995}})
db.numbers.find({num: {$gte: 15, $lt: 20}})



/*
2. 인덱싱과 expain()
    - explain으로 통상 db에서 쿼리 플랜을 확인할 수 있음
    - mongodb 도 존재
*/
db.numbers.find({num: {$gte: 15, $lt: 20}}).explain("executionStats")
// docsExamied: 필드를 보면 20000 도큐를 다 살펴봤음을 알 수 있음
// totalKeysExamined: 스캔한 인덱스 엔트리 개수
db.numbers.createIndex({num: 1})
db.numbers.getIndexes()
db.numbers.find({num: {$gte: 15, $lt: 20}}).explain("executionStats")
// totalKeysExamined: 5, totalDocsExamined: 5
