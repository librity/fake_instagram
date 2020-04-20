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
- https://sequelize.org/master/manual/model-querying-basics.html
- https://sequelize.org/master/manual/creating-with-associations.html
- https://sequelize.org/master/manual/model-instances.html#incrementing-and-decrementing-integer-values

## Setup

1. copy dotenv:

```bash
$ cp .env.example .env
```

2. create a persistent mysql5 docker container:

```bash
$ docker run --name mysql_5_7_29 -e MYSQL_ROOT_PASSWORD=root -p 3306:3306 -d mysql:5
```

3. install our dependencies

```bash
$ yarn
```

4. create, migrate and seed our database:

```bash
$ yarn database
```

5. generate a json file discribing our database's schema (for convinience):

```bash
$ yarn schema
```

6. start our dev server:

```bash
$ yarn start
```

## Features

- [x] Sequelize migrations
- [x] Sequelize seeds
- [x] Sequelize models
- [x] User creation
- [x] Login and Authentication
- [x] Param Validations (celebrate)
- [x] Home feed
- [x] Search users (index)
- [x] Create comments
- [x] Basic like functionality for publications
- [ ] Create publication with image upload
- [ ] Advanced Like resource
- [ ] Following/followed resource
- [ ] Home feed shows followed-users' publications
