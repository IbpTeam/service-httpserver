var proxy = require('../interface/httpserverProxy').getProxy();

proxy.on('start', function(e) {
  console.log('start event');
}).on('stop', function(e) {
  console.log('stop event');
});

proxy.restart(function(ret) {
  if(ret.err) return console.log(ret.err);
  console.log(ret.ret);
});

