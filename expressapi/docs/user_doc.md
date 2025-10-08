# User documentation

## Install dependencies

```cmd
npm install
```

## Copy config file

Copy **config/default.json.example** to **config/default.json** file.

## App key generation

```cmd
node op key:generate
```

## Database setup

Edit the config/default.json file.

## Endpoints

All endpoint have a /api prefix.

| Endpoint | Method | Auth | Description |
|-|-|-|-|
| /register | POST  | no |  create user |
| /login    | POST  | no |  login  |
| /users    | GET   | yes |  read users |

## The register endpoint

```json
{
    "name": "joe",
    "email": "joe@green.lan",
    "password": "secret",
    "password_confirmation": "secret"
}
```

## The login endpoint

```json
{
    "name": "joe",
    "password": "secret"
}
```

You receive the bearear token with accessToken key.

## The users endpoint

Send the bearer token.

## Model and controller generation

```cmd
node op create model thing
node op create controller thing
```

## Key generation

```cmd
node op key:generate
```

## Generate admin user

```cmd
node op admin:generate
```

## Database import

```cmd
node op db:import thing things.json
node op db:import thing things.csv
node op db:import thing things.csv ,
node op db:import thing things.csv ";"
node op db:import thing things.csv :
```

## Database

### Database synchronization

Models and database tables can be synchronized, but this can be dangerous.

Database synchronization can be set up in the app/models/modrels.js file. Default values are:

```js
{ alter: true }
```

This preserves the data and existing structure.

Possible values:

```js
{ force: true }
```

The latter deletes the contents of the database table!

If the value is false, there is no synchronization in either case.

### Migration

Generate a migration:

```bash
node op make/migration thing
```

Run all migration:

```bash
node op migration:run
```

Run a migration:

```bash
node op migration:run <migration_name>
```

Rollback a migration:

```bash
node op migration:rollback
```

Rollback two migrations:

```bash
node op migration:rollback 2
```

Reset the database:

```bash
node op migration:reset
```

Reset the database and run all migrations:

```bash
node op migration:fresh
```
