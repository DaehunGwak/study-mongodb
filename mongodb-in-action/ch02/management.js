use tutorial

show dbs
show collections
db.stats()
db.numbers.stats()

db.stats()
db.runCommand({dbstats: 1})
db.runCommand // 상세 구현 확인 가능 (datagrip에선 X)
db.$cmd.findOne({collstats: "numbers"})
