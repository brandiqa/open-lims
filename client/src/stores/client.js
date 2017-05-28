import feathers from 'feathers/client';
import hooks from 'feathers-hooks';
import socket from 'feathers-socketio/client';
import io from 'socket.io-client';
import authentication from 'feathers-authentication-client';

let instance = false;
const uri = 'http://localhost:3030/';

export function feathersClient() {
  if (instance) return instance;

  instance = feathers()
    .configure(socket(io(uri)))
    .configure(hooks())
    .configure(authentication({
      storage: window.localStorage
    }
  ));

  return instance;
}

export function service(name) {
  return feathersClient().service(name);
}
