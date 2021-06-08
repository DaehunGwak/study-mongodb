# MongoDB in Action 실습

> 상세한 로컬 세팅방법은 [til docker-mongodb 문서](https://daehungwak.github.io/til/docs/mongodb/docker-mongodb)에 정리

## how to run

```bash
# run
docker-compose up -d

# 실행 유무 확인
docker ps

# mongodb docker 컨테이너 접속
docker exec -it mongodb_local bash
```

## how to connect mongodb shell

```sh
$ mongo -u "root" -p [--authenticationDatabase=admin]
MongoDB shell version v3.6.23
Enter password: # docker-compose.yml 에서 설정한 비밀번호 입력

# 접속 후 다음과 같이 뜸
connecting to: mongodb://127.0.0.1:27017/?gssapiServiceName=mongodb
Implicit session: session { "id" : UUID("dc4a3e2a-9124-41ac-88e5-5d29e1e8bb42") }
MongoDB server version: 3.6.23
Welcome to the MongoDB shell.
For interactive help, type "help".
For more comprehensive documentation, see
        http://docs.mongodb.org/
Questions? Try the support group
        http://groups.google.com/group/mongodb-user
>
```

