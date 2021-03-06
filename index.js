const mongoose = require("mongoose");
const app = require("./app");
const port = process.env.PORT || 3977;
const { API_VERSION, IP_SERVER, PORT_DB } = require("./config");

mongoose.set("useFindAndModify", false);
mongoose.set("useCreateIndex", true);

mongoose.connect(
  `mongodb+srv://mariodb:warioegh92@proyectos-mario.svchx.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`,
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err, res) => {
    if (err) {
      throw err;
    } else {
      console.log("La conexion a la base de datos es correcta.");
//process.env.PORT, '0.0.0.0'
      app.listen(process.env.PORT, '0.0.0.0', () => {
        console.log("######################");
        console.log("###### API REST ######");
        console.log("######################");
        console.log(`http://${IP_SERVER}:${port}/api/${API_VERSION}/`);
      });
    }
  }
);

// app.listen(port, () => {
//   console.log("######################");
//   console.log("###### API REST ######");
//   console.log("######################");
//   console.log(`http://${IP_SERVER}:${port}/api/${API_VERSION}/`);
// });
