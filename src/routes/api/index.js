const handlers = require('./handlers');

module.exports = function mountAPI(router) {
    router.get('/get-groupings', (req, res) => res.promise(handlers.getGroupings(req.query.names, req.query.groupSize)));
};