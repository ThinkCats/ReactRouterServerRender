// Babel 6 Compile
require('babel-core/register')({
   presets: ['es2015','stage-1', 'react'],
   plugins: ["transform-class-properties"]
});

import express from 'express';
import React from 'react';
import ReactDOM from 'react-dom/server';
import {match ,RouterContext} from 'react-router';
import swig from 'swig';
var route = require('./src/view/route'); //注意这一段怪怪的引用

const app = express();

app.use(express.static( 'public/resources'));

//服务端渲染
app.use((req,res) => {
   match({routes:route.default , location:req.url},(error, redirectLocation, renderProps) => {
      if (error) {
         res.status(500).send(error.message)
      } else if (redirectLocation) {
         res.redirect(302, redirectLocation.pathname + redirectLocation.search)
      } else if (renderProps) {
         var html = ReactDOM.renderToString(React.createElement(RouterContext, renderProps));
         var page = swig.renderFile('./public/index.html',{html:html});
         res.status(200).send(page);
      } else {
         res.status(404).send('Not found')
      }
   });
});

app.listen(3000,()=>{
   console.log('server running');
});