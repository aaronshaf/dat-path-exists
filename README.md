```javascript
const datPathExists = require("dat-path-exists");

async function main(archive) {
  await datPathExists("/foo/bar", archive);
  await datPathExists("/foo/bar/baz.md", archive);
}

main(archive);
```
