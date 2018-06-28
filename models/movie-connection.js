const mysql = require('mysql'),
      conf = require('./db-conf.json'),
      dbOptions = {
        host      : conf.mysql.host,
        user      : conf.mysql.user,
        password  : conf.mysql.pass,
        port      : conf.mysql.port,
        database  : conf.mysql.db
      },
      myConexion = mysql.createConnection(dbOptions)

myConexion.connect((err) => {
  return (err) ? console.log(`Error al conectarse a MySQL: ${err.stack}`) : console.log(`Conexion establecida con MySQL Num: ${myConexion.threadId}`)
})

console.log(conf)
module.exports = myConexion