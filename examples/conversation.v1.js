'use strict';
/* eslint-env es6*/

const watson = require('watson-developer-cloud');

var express = require('express');
var body_parser = require('body-parser');

var app = express();

/**
 * Instantiate the Watson Conversation Service
 */
const conversation = new watson.ConversationV1({
  username: process.env.CONVERSATION_USERNAME || 'a24e3ce5-b110-4bd7-aa50-4f96be7e6584',
  password: process.env.CONVERSATION_PASSWORD || 'hlGH2th0xv27',
  version_date: watson.ConversationV1.VERSION_DATE_2017_05_26
});

app.use(body_parser.json({extended:true}));

app.post('/api', function(req, res){
  var text = req.body.text || '';
  var mensaje1 = '';
  if (text != '') {
    /**
     * Calls the conversation message api.
     * returns a promise
     */
    const message = function(text, context) {
      const payload = {
        workspace_id: process.env.WORKSPACE_ID || '19a57598-bb5c-45ee-8999-bdb10f0232a0',
        input: {
          text: text
        },
        context: context
      };
      console.log('text: '+text);
      return new Promise((resolve, reject) =>
        conversation.message(payload, function(err, data) {
          if (err) {
            reject(err);
            console.log('reject');
          } else {
            resolve(data);
            console.log('process');
          }
        })
      );
    };

    // This example makes two successive calls to conversation service.
    // Note how the context is passed:
    // In the first message the context is undefined. The service starts a new conversation.
    // The context returned from the first call is passed in the second request - to continue the conversation.
    message(text, undefined)
      .then(response1 => {
        // APPLICATION-SPECIFIC CODE TO PROCESS THE DATA
        // FROM CONVERSATION SERVICE
        console.log(JSON.stringify(response1, null, 2), '\n--------');

        // invoke a second call to conversation
        return message(text, response1.context);
      })
      .then(response2 => {
         console.log(JSON.stringify(response2, null, 2), '\n--------');
         var mensaje2 = response2.output.text[0];
         res.send(mensaje2.toString());
      })
      .catch(err => {
        // APPLICATION-SPECIFIC CODE TO PROCESS THE ERROR
        // FROM CONVERSATION SERVICE
        console.error(JSON.stringify(err, null, 2));
      });
      }else{
        console.log('no entre');
      }
    });

var server = app.listen(8080, function() {
  console.log('Ejecutando servidor en localhost:8080');
})
