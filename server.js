const express = require("express");
const dotenv = require("dotenv");
const pacienteRoutes = require("./router/pacienteRoutes");

dotenv.config();
const app = express();

app.use(express.json());

app.use("/api", pacienteRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});
