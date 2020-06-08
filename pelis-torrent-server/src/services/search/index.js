const stringSimilarity = require('string-similarity');
'use strict'
/**parameters allowed: name, category... */
module.exports = async function (fastify, opts) {
  fastify.get('/search', async function (request, reply) {

    const torrents = await fastify.torrent.search(request.query.name, 'Movies', 20);
    const torrentsName = torrents.map(t => t.title);
    const bestMatch = stringSimilarity.findBestMatch(request.query.name, torrentsName)
    const response = await fastify.torrent.getMagnet(torrents[bestMatch.bestMatchIndex]);
    reply.status(200).send({response});
  })
}

const compareSeeds = ( a, b ) => { return b.seeds - a.seeds; }
