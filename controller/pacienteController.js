const { pacientes } = require('../models');
const pacienteServices = require('../services/pacienteServices');

class pacienteController {
    static async listarpacientes(req, res) {
        try {
            const pacientes = await pacienteServices.listarpacientes();
            res.json(pacientes);
        } catch (error) {
            console.log(error);
        }
    }
    static async createPaciente(req, res) {
        try {
            const nuevoPaciente = await pacienteServices.crearpacientes(req.body);
            res.json(nuevoPaciente);
        } catch (error) {
            console.log(error);    
        }
    }
    static async actualizarpacientes(req, res) {
        try {
            const { id } = req.params; 
            const pacienteActualizado = await pacienteServices.actualizarpacientes(id, req.body);
            res.json(pacienteActualizado);
        } catch (error) {
            console.log(error);    
        }
    }
    static async eliminarpacientes(req, res) {
        try {
            const { id } = req.params; 
            await pacienteServices.eliminarpacientes(id); 
            res.json({ message: 'Paciente eliminado correctamente' });
        } catch (error) {
            console.log(error);    
        }
    }
}

module.exports = pacienteController