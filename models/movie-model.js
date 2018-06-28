const conexion = require('./movie-connection'),
      MovieModel = () => {}

MovieModel.getAll = (cb) => conexion.query('SELECT * FROM movie', cb)

MovieModel.getOne = (id, cb) => conexion.query('SELECT * FROM movie WHERE movie_id = ?', id, cb)

// MovieModel.insert = (data, cb) => conexion.query('INSERT INTO movie SET ?', data, cb)

// MovieModel.update = (data, cb) => conexion.query('UPDATE movie SET ? WHERE movie_id = ?', [data, data.movie_id], cb)

MovieModel.save = (data, cb) => {
  conexion.query('SELECT * FROM movie WHERE movie_id = ?', data.movie_id, (err, rows) => {
    console.log(`Número de registros: ${rows.length}`)

    if(err) {
      return err
    } else {
      return (rows.length == 1) 
          ? conexion.query('UPDATE movie SET ? WHERE movie_id = ?', [data, data.movie_id], cb) 
          : conexion.query('INSERT INTO movie SET ?', data, cb)
    }

   /*  if (rows.length == 1) {
      conexion.query('UPDATE movie SET ? WHERE movie_id = ?', [data, data.movie_id], cb)
    } else {
      conexion.query('INSERT INTO movie SET ?', data, cb)
    } */
  })
}

MovieModel.delete = (id, cb) => conexion.query('DELETE from movie WHERE movie_id = ?', id, cb)

module.exports = MovieModel