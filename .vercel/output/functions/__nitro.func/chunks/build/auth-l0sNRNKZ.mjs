import { p as parseQuery, P as toNodeListener, O as useNitroApp } from '../_/nitro.mjs';

const nitroApp = useNitroApp();
const handler = toNodeListener(nitroApp.h3App);
const listener = function(req, res) {
  const query = req.headers["x-now-route-matches"];
  if (query) {
    const { url } = parseQuery(query);
    if (url) {
      req.url = url;
    }
  }
  return handler(req, res);
};

const authL0sNRNKZ = /*#__PURE__*/Object.freeze({
  __proto__: null
});

export { authL0sNRNKZ as a, listener as l };
//# sourceMappingURL=auth-l0sNRNKZ.mjs.map
