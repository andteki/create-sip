# sip expressapi sabon

Express based REST API sablon

## Install

```cmd
npm install
```

## Copy config file

Copy **config/default.json.example** to **config/default.json** file.

## APP KEY generation

Run the genkey:

```cmd
node op key:generate
```

## Database settings

The database settings can be found at the following location:

* config/default.json

### Database dialect

The default database is an in-memory database. Its contents are cleared after the server is restarted.

One of:

* sqlite
* mariadb

After installing the appropriate dependencies, it can be used:

* mysql
* postgres
* mssql
* db2
* snowflake
* oracle

With the `sqlite` option, the usual path setting is `database.sqlite`. The default storage is :memory:, where data is stored in memory only.

## Starting

For development:

```cmd
npm run dev
```

Run productum:

```cmd
npm start
```

## Model and controller creation

You can generate a model and controller with the following commands:

```bash
node op create model thing
node op create controller thing
```

The name after the model and controller statements must be given in the singular.

## Licence

May be freely distributed under the MIT license.

Copyright (c) 2023 Sallai András
