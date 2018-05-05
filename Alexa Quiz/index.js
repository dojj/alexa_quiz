"use strict";

var Alexa = require("alexa-sdk");

var handlers = {
  'LaunchRequest': function() {
    // this.response.speak
    this.emit(':ask', "Hello, welcome to our quiz section! " + 
    'In the video, Big Buck Bunny, what is the first animal you see? ' +
    "A butterfly? " + 
    "A bird? " + 
    "A cow? " +
    "Or a Bunny? ").listen("Tell me what you think is the world's most popular language.");
    // this.emit(':responseReady');
  },

  'MostValuableTeamsIntent': function () {
    var myTeam = this.event.request.intent.slots.team.value;
    if (myTeam === 'bird') {
      this.response.speak("Correct! A bird is the first animal you see.");
    }
    // else {
    //   this.response.speak("You guessed " + myTeam + 
    //   ". Actually, a bird is the first animal you see.");
    // }
    else {
      this.response.speak("Sorry, the correct answer is a bird. You have gotten 0 out of 1 question(s) correct.");
    }
    this.emit(':responseReady');
  }
};

exports.handler = function(event, context, callback){
    var alexa = Alexa.handler(event, context);
    alexa.registerHandlers(handlers);
    alexa.execute();
};