const { createProxyMiddleware } = require('http-proxy-middleware');
const proxy = require('http-proxy-middleware');

module.exports = function(app) {
    app.use(createProxyMiddleware('/listings/all',
    {
      target: 'http://localhost:3004',
      secure: false
    }));
    app.use(createProxyMiddleware('/listings/:listingId',
    {
      target: 'http://localhost:3004',
      secure: false
    }));
}