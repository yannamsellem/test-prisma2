### Test prisma 2

launch Postgres

via Docker:

```bash
$ docker run --name postgres -e POSTGRES_PASSWORD=prisma -e POSTGRES_USER=prisma -p 5432:5432 postgres
```

or via Postgres directly

Make sure to have
User and password set to prisma

Set database url into `.env` file

### Init data base model

create the fist migration by doing

```bash
$ yarn prisma2 migrate save --name 'init' --experimental
$ yarn prisma2 migrate up --experimental
```

### Generate client

```bash
$ prisma2 generate
```
