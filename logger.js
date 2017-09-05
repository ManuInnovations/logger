var fs = require('fs');
var util = require('util');

function log(...messages){
  const dir_name = makeDirName(__dirname,'/logs')
  const log_folder = makeDirectory(dir_name)
  const log_file = fs.createWriteStream(dir_name +'/'+ 'file.log', {flags : 'a'});
  const log_stdout = process.stdout;

  messages.forEach(message=> {
    log_file.write(util.format(message));
    log_stdout.write(util.format(message));
  })

  log_file.write(util.format() + '\n');
  log_stdout.write(util.format() + '\n');
}

function makeDirName(dir,folder){
  const dirArr = dir.split('/')
  const index = dirArr.findIndex((item)=>{
    return item=='node_modules'
  })

  return dirName = '/'+dirArr.filter((item,i)=>{
    if(index===-1){
      return i
    }else{
      return i<index
    }
  }).join('/')+folder
}

function makeDirectory(dir){
  if(!fs.existsSync(dir)){
    fs.mkdirSync(dir)
  }
}

module.exports={
  log:log
}
