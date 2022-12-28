const ContenedorMemoria = require("../../contenedores/ContenedorMemoria.js");

class ProductosDaoMemoria extends ContenedorMemoria {
  constructor() {
    super();
    console.log('Memoria Productos: base de datos conectada');
  }

  listarTodoBusqueda = async (valor) =>{
    const regex =  new RegExp(valor,'i'); 
    try {
        console.log(valor);
        let datos;
        if(valor === '0'){
          datos = await this.listarTodo();
        }else{
          datos = await this.listarTodo();
          datos = datos.filter(el => regex.test(el.nombre));
          console.log(datos);
        }
        return datos;
    } catch (error) {
        return [];
    }finally{
    }
}


listarTodoCategoria = async (valor) =>{
  try {
      let datos;
      if(valor === 'null'){
        datos = await this.listarTodo();
      }else{
        datos = await this.listarTodo();
        datos = datos.filter(el => el.categoria === valor);
      }
      return datos;
  } catch (error) {
      return [];
  }finally{
  }
}



}

module.exports = ProductosDaoMemoria;
