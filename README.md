# iyml

## How to use

Add in your package.json the following line to run the script

```
node node_modules/iyml/index.js <path> <dest>
```

```
{
  "name": "example",
  "version": "1.0.0",
  "description": "",
  "scripts": {
    "contenttypes": "node node_modules/iyml/index.js example/example.yml example/modules.yml"
  },
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "iyml": "^1.0.3"
  }
}
```