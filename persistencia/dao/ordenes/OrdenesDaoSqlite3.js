const ContenedorSqlite3Mariadb = require("../../contenedores/ContenedorSqlite3Mariadb.js");
const {sqlite3Config} = require('../../../config.js');
const knexSqlite = require("knex")(sqlite3Config);
const esquema = require('../../model/knex/ordenes.model.js');

class OrdenesDaoSqlite3 extends ContenedorSqlite3Mariadb {
  constructor() {
    super(knexSqlite, "ordenes", esquema);

  }



  guardarOrden = async (productos, obj) => {
    try {
      let datos = await this.listarTodo();
      let numeroDeOrden = datos.length + 1; 
      let newProductos = JSON.stringify(productos);
      let orden = {
        id_usuario:obj.id_usuario,
        productos:newProductos,
        numero:numeroDeOrden,
        fechayhora:new Date().toLocaleString(),
        estado:'generada',
        email:obj.username
      }

      let id = await await this.knex(this.tabla).insert(orden);
      return id;
    } catch (error) {
      console.log("guardarOrden - ocurrio un error: " + error);
    }
  };


}

module.exports = OrdenesDaoSqlite3;
