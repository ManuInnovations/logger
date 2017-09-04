var fs = require('fs');
var util = require('util');

module.exports = function(...messages){
  const log_file = fs.createWriteStream(__dirname + '/debug.log', {flags : 'a'});
  const log_stdout = process.stdout;


  messages.forEach(message=> {
    log_file.write(util.format(message));
    log_stdout.write(util.format(message));
  })

  log_file.write(util.format() + '\n');
  log_stdout.write(util.format() + '\n');
}
