
## Why?
Mongoose 2.0 has different methods for connecting to replicaSets

``` JavaScript
// for single connections
mongoose.connect()
mongoose.createConnection
// for replicaSets
mongoose.connectSet()
mongoose.createSetConnection()
```

This is lame, and is lucky fixed in 3.0, but if you aren't quite there yet, this does the work for you, assuming your
connection strings are comma delimted

## Example
``` JavaScript
var mongoose = require("mongoose")
var mongooseConnector = require("mongoose-connector")
var singleDb = "mongodb://localhost:27017/test"
var replicaDb = "mongodb://hostone:27017/test,mongodb://hosttwo:27017/test"

// singleDb connect
var db = mongooseConnector(mongoose, singleDb)
var dbReplica = mongooseConnector(mongoose, replicaDb)
```
