
module.exports = function(mongoose, dbUrl) {
  if (dbUrl.split(",").length > 1) {
    return mongoose.createSetConnection(dbUrl)
  } else {
    return mongoose.createConnection(dbUrl)
  }
}
