'use strict'
/**parameters allowed: name, category... */
module.exports = async function (fastify, opts) {
  fastify.get('/search', async function (request, reply) {

    const torrents = await fastify.torrent.search(request.query.name, 'Movies', 20);
    const response = await Promise.all(torrents.map(torrent => fastify.torrent.getMagnet(torrent)));
    reply.status(200).send({response});
  })
}

const compareSeeds = ( a, b ) => { return b.seeds - a.seeds; }
