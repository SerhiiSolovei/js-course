const User = function (name) {
  this.name = name;
  this.chatroom = null;
};

User.prototype = {
  send: function (message, to) {
    this.chatroom.send(message, this, to);
  },

  receive: function (message, from) {
    console.log(`${from.name} to ${this.name}: ${message}`);
  }
};

const Chatroom = function () {
  let users = {}; // list of users

  return {
    register: function (user) {
      users[user.name] = user;
      user.chatroom = this;
    },
    send: function (message, from, to) {
      if (to) {
        // Single user message
        to.receive(message,from);
      } else {
        // Mass message
        for (key in users) {
          if (users[key] !== from) {
            users[key].receive(message, from);
          }
        }
      }
    }
  }
};

const brad = new User('Brad');
const steve = new User('Steve');
const maria = new User('Maria');

const chatroom = new Chatroom();

chatroom.register(brad);
chatroom.register(steve);
chatroom.register(maria);

brad.send('Hello Steve', steve); // 'Brad to Steve: Hello Steve'
maria.send('Hello Brad, you are the best dev ever!', brad); // 'Maria to Brad: Hello Brad, you are the best dev ever!'
steve.send('Hello Everyone!!!'); // 'Steve to Brad: Hello Everyone!!!', 'Steve to Maria: Hello Everyone!!!'
