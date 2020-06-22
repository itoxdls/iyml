# iyml

# Node

To include yml in Node, first install with npm.

```bash
$ npm install iyml
```

## How to use

Add in your package.json the following line to run the script

```bash
$ node node_modules/iyml/index.js <path> <dest>
```

```json
{
  "name": "example",
  "version": "1.0.0",
  "description": "",
  "scripts": {
    "iyml": "node node_modules/iyml/index.js example/example.yml example/modules.yml"
  },
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "iyml": "^1.0.3"
  }
}
```

# Example

## category.yml

```yml
category:
  name: Category
```

## user.yml

```yml
user:
  name: User
```

## Main file example.yml

```yml
include: user.yml
include: category.yml
```

## Run iyml

```bash
$ npm run iyml
```

## Output File modules.yml

```yml
user:
  name: User
category:
  name: Category
```