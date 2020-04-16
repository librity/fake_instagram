# Notes

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

Connect to it from the terminal and run the sql script `./database_init/fake-instagram.sql`:

```bash
$ mysql -u root -h 0.0.0.0 -p
```

We then install the dependencies, create the database with sequelize-cli and
start our dev server:

```bash
$ yarn
$ yarn start
```