const {youtube} = require('@samelie/chewb-redis');

/*redis client*/
const REDIS = (() => {

  let host = process.env.REDIS_HOST || '127.0.0.1'
  let port = process.env.REDIS_PORT || '6379'

  let isLocal = (process.env.REDIS_HOST === '127.0.0.1' || process.env.REDIS_LOCAL)

  console.log(`Loaded rad-redis on ${host} ${port}. \nisLocal: ${isLocal}`);

  return new youtube({
    host:host,
    port:port
  }, isLocal)

})()

module.exports = REDIS