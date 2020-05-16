const path = require('path')

let rootPath = path.normalize(path.join(__dirname, '/../'))

module.exports = {
  development: {
    rootPath: rootPath,
    db: "mongodb://admin:YWXdaakODbtBdSDs@gcmongodb-shard-00-00-ma1ze.gcp.mongodb.net:27017,gcmongodb-shard-00-01-ma1ze.gcp.mongodb.net:27017,gcmongodb-shard-00-02-ma1ze.gcp.mongodb.net:27017/test?ssl=true&replicaSet=GcMongoDb-shard-0&authSource=admin&retryWrites=true&w=majority",
    port: 5000
  },
  staging: {
  },
  production: {
    port: process.env.PORT
  }
}
