const express = require("express");
const dotenv = require("dotenv");
const pacienteRoutes = require("./router/pacienteRoutes");

dotenv.config();
const app = express();

app.use(express.json());

app.use("/api/pacientes", pacienteRoutes);

const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto `);
});
