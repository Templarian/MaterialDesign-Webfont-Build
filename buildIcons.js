const util = require('@mdi/util');

const version = util.getVersion();
const meta = util.getMeta(true); // withPaths

const icons = meta.forEach(icon => {
    util.write(`icons/${icon.name}.svg`, `<?xml version="1.0" encoding="utf-8"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" baseProfile="full" width="24" height="24" viewBox="0 0 24 24">
    <path d="${util.closePath(icon.path)}" />
</svg>`);
});

console.log(`\u2714 Build ${version}`);