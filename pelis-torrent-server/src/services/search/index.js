const stringSimilarity = require('string-similarity');
'use strict'
/**parameters allowed: name, category... */
module.exports = async function (fastify, opts) {
  fastify.get('/search', async function (request, reply) {
    const torrents = await fastify.torrent.search(request.query.name, 'Movies', 20);
    const sortedTorrents = torrents.sort((t1, t2) => compareTorrents(request.query.name,t1, t2))
    /*const torrentsName = torrents.map(t => t.title);
    const bestMatch = stringSimilarity.findBestMatch(request.query.name, torrentsName)
    const response = await fastify.torrent.getMagnet(torrents[bestMatch.bestMatchIndex]);*/
    reply.status(200).send({response: sortedTorrents.slice(0,10)});
  })
}

const compareTorrents = (pivote, torrent1, torrent2 ) => {
   return stringSimilarity.compareTwoStrings(pivote, torrent2.title)
          - stringSimilarity.compareTwoStrings(pivote, torrent1.title); 
}

const containsKeywords = (keyWords, s2) => {
  var containsAll = true;
  for (let index = 0; index < keyWords.length; index++) {
    const element = array[index];
    if (!s2.includes(element)) {
      containsAll = false;
      break;
    }
  }
  return containsAll;
}
