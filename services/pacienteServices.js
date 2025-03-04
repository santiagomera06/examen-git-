const { Paciente } = require("../models");

class pacienteServices {
    static async listarpacientes() {
        try {
            return await Paciente.findAll(); 
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    static async crearpacientes(data) {
        try {
            return await Paciente.create(data); 
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    static async actualizarpacientes(id, data) {
        try {
            const pacienteEN = await Paciente.findByPk(id); 
            if (pacienteEN) {
                return await pacienteEN.update(data);
            } else {
                throw new Error('Paciente not found');
            }
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    static async eliminarpacientes(id) {
        try {
            const paciente = await Paciente.findByPk(id); 
            if (paciente) {
                return await paciente.destroy();
            } else {
                throw new Error('Paciente not found');
            }
        } catch (error) {
            console.log(error);
            throw error;
        }
    }
}


module.exports = pacienteServices;
