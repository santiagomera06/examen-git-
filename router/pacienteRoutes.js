const express = require('express');
const pacienteController = require('../controller/pacienteController');
const router = express.Router();


router.get('/', pacienteController.listarpacientes);
router.post('/', pacienteController.createPaciente);
router.put('/:id', pacienteController. actualizarpacientes);
router.delete('/:id', pacienteController. eliminarpacientes);

module.exports = router;
