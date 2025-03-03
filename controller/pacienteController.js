const { Paciente } = require('../models');

class pacienteController {
    static async listarpacientes() {
        try {
            const pacientes = await pacienteServices.listarpacientes();
            res.json(pacientes);
        } catch (error) {
            console.log(error);
        }
    }
    static async createPaciente(req, res) {
        try {
            const pacientes = await pacienteServices.crearpacientes();
            res.json(pacientes);
        } catch (error) {
            console.log(error);    
        }
    }
    static async actualizarpacientes(req, res) {
        try {
            const pacientes = await pacienteServices.actualizarpacientes();
            res.json(pacientes);
        } catch (error) {
            console.log(error);    
        }
    }
    static async eliminarpacientes(req, res) {
        try {
            const pacientes = await pacienteServices.eliminarpacientes();
            res.json(pacientes);
        } catch (error) {
            console.log(error);    
        }
    }
static async eliminarpacientes(req, res, params) { 
    await Paciente.destroy({ where: { id: params.id } }); }

}
module.exports = pacienteController