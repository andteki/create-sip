# create-sip

Simple project generator.

## Project types

* Simple webpage. index.html and style.css
* Webpage with Bootstrap with CDN.
* Webpage with CSS and JS file.
* Node.js project for webpage.
* ESBuild and Javascript project for webpage.
* ESBuild and Typescript project for webpage.
* Mock REST API server.
* Express.js REST API start server.

## Using

```bash
npm create sip@latest
```

* Write project name.
* Select project type.

## Express API

Key generation:

```bash
node op key:generate
```

Afte project generation, you have an config/default.json file. If you want generate a new file, delete the config/default.json file and run next command:

```bash
node op conf:generate
```

Create model:

```bash
node op create model <name>
```

Create controller:

```bash
node op create controller <name>
```

Exmple:

```bash
node op create model employee
node op create controller employee
```

### Database

Default database type is sqlite :memory:. If you want to use another database, edit the config/default.json file. For example SQLite:

```json
{
    "app": {
        "port": 8000,
        "key": "",
        "log": "console.log"
    },
    "db": {
        "dialect": "sqlite",
        "host": "127.0.0.1",
        "name": "",
        "user": "",
        "pass": "",
        "path": "database.sqlite"
    }
}
```

Must be set the database path in the config/default.json file.
