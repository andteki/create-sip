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

Options:

```txt
✔ Project name:  … vmi
? Project type:  › - Use arrow-keys. Return to submit.
    Webpage
    Web Bootstrap
    JavaScript
    Web Node.js
    ESBuild JavaScript
    ESBuild TypeScript
    hai mock API
    Express API
❯   Cancel  
```

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

### Default admin user

Generate admin user:

```bash
node op admin:generate
```

### Copy default config file

Copy **config/default.json.example** to **config/default.json** file.

Command:

```bash
node op conf:generate
```

### Seed database

Load data from JSON or CSV file.

Examples:

```bash
node op db:seed thing somethings.json
node op db:seed thing somethings.csv
```

For example JSON file:

employees.json:

```json
[
    { "id": 1, "name": "Tom Large" },
    { "id": 2, "name": "Jack Small" }
]
```

The default separator is comma.

```cmd
node op db:seed employee employees.json
```

For example CSV file:

employees.csv:

```csv
id,name
1,Joe Kitin
2,Peter Fall
```

If you have colon separator, use sep parameter.

```csv
id:name
1:Joe Kitin
2:Peter Fall
```

```cmd
node op db:seed employee employees.csv --sep :
```

If the file has semicolon separator, use sep parameter, for example:

```csv
id;name
1;Joe Kitin
2;Peter Fall
```

Use next command:

```cmd
node op db:seed employee employees.csv --sep ";"
```
