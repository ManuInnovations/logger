# manu-file-log
This is a script to write console logs to a .log file.
It creates a seperate 'logs' folder and inside you'll find the .log file.

## Installation
To install the package as a dev dependency type the following terminal command:
```
npm install manu-file-log --save-dev
```
Or if you want to install it as a main dependency use:
```
 npm install manu-file-log --save
```
## Usage
Once installed you can use it in any .js file. Simply require it by adding the following code at the top of the .js file:
 ```
 const file = require('manu-file-log')
 ```

In your code where you want to log something to a file use the following:
```
file.log('this is a test string ', 'another test string')
```

## Result
You will find your log in the logs folder in the file.log file:
```
main directory
  -->logs
    --->file.log
```
 and the outcome will be:
```
this is a test string another test string
```
