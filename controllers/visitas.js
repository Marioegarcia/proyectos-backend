
const Visitas = require("../models/registro");

function resgisto(req,res) {
    console.log(req.body);
    const visitas = new Visitas();
    const { nombre, edad, pais, comentarios } = req.body;
    visitas.nombre = nombre;
    visitas.edad =  Number.parseInt(edad, 10);
    visitas.pais = pais;
    visitas.comentarios = comentarios;

    visitas.save((err, visitaStored) => {
        if (err) {
          res.status(500).send({ message: "Error en el servidor." });
        } else {
          if (!visitaStored) {
            res.status(404).send({ message: "Error al guardar visita." });
          } else {
            res.status(200).send({ visita: visitaStored,message:"Registro guardado correctamente" });
          }
        }
      });

}

function getVisitas(req, res) {
    Visitas.find().then(visita => {
      if (!visita) {
        res.status(404).send({ message: "No se ha encontrado ninguna visita." });
      } else {
        res.status(200).send({ visita });
      }
    });
}

function deleteVisita(req, res) {
    const { id } = req.params;
  
    Visitas.findByIdAndRemove(id, (err, postDeleted) => {
      if (err) {
        res.status(500).send({ code: 500, message: "Error del servidor." });
      } else {
        if (!postDeleted) {
          res.status(404).send({ code: 404, message: "Visita no encontrada." });
        } else {
          res.status(200).send({
            code: 200,
            message: "La visita ha sido eliminada correctamente."
          });
        }
      }
    });
  }



module.exports = {
    resgisto,
    getVisitas,
    deleteVisita
}