 const file = require('manu-file-log')

 const testObj = {
   'item1': ['testItem1', 'testItem2'],
   'string':'this is a string'
 }

 file.log('this is a test string: ',testObj)
