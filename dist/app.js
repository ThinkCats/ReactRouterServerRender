'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _server = require('react-dom/server');

var _server2 = _interopRequireDefault(_server);

var _reactRouter = require('react-router');

var _swig = require('swig');

var _swig2 = _interopRequireDefault(_swig);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Babel 6 Compile
require('babel-core/register')({
   presets: ['es2015', 'react']
});

var route = require('./src/view/route'); //注意这一段怪怪的引用

var app = (0, _express2.default)();

app.use(_express2.default.static('public/resources'));

//服务端渲染
app.use(function (req, res) {
   (0, _reactRouter.match)({ routes: route.default, location: req.url }, function (error, redirectLocation, renderProps) {
      if (error) {
         res.status(500).send(error.message);
      } else if (redirectLocation) {
         res.redirect(302, redirectLocation.pathname + redirectLocation.search);
      } else if (renderProps) {
         var html = _server2.default.renderToString(_react2.default.createElement(_reactRouter.RouterContext, renderProps));
         var page = _swig2.default.renderFile('./public/index.html', { html: html });
         res.status(200).send(page);
      } else {
         res.status(404).send('Not found');
      }
   });
});

app.listen(3000, function () {
   console.log('server running');
});
