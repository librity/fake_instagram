# Instagram clone

Forked from https://github.com/vinnydeveloper/fake_instagram

## Resources

- https://app.diagrams.net/ aka draw.io
- https://www.slant.co/options/166/alternatives/~draw-io-alternatives
- https://dev.mysql.com/downloads/workbench/
- https://www.apachefriends.org/pt_br/index.html
- https://hub.docker.com/_/mysql/
- https://dbeaver.io/
- https://sqldbm.com/Home/

## Sequelize

- https://sequelize.org/v5/
- https://sequelize.org/master/manual/migrations.html
- https://sequelize.org/master/manual/raw-queries.html
- https://sequelize.org/master/manual/model-basics.html
- https://sequelize.org/master/manual/querying.html
- https://sequelize.org/master/manual/raw-queries.html

## Setup

Copy dotenv:

```bash
$ cp .env.example .env
```

Create a persistent docker container:

```bash
$ docker run --name mysql_5_7_29 -e MYSQL_ROOT_PASSWORD=root -p 3306:3306 -d mysql:5
```

We then install our dependencies, create and migrate our database and start our
dev server:

```bash
$ yarn
$ yarn sequelize db:create
$ yarn sequelize db:migrate
$ yarn start
```