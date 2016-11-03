##Redis-nodejs-express server and routing

Uses `@samelie/chewb-redis`
which is a wrapper around [redis](https://www.npmjs.com/package/redis) package.

This project can be used to start a fresh instance of `@samelie/chewb-redis` and give you an express server with an API to hit.

It can also give you the routing for an existing express server.

`index.js`

`
  return {
    server: server,
    routes: routes
  }
`
