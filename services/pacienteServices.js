const { Usuario } = require("../models");
class pacienteServices{
    static async listarpacientes(){
        const pacientes = await Usuario.findAll();
        return pacientes;
    }
    catch(error){
        console.log(error);
    }
    static async crearpacientes(){
        const pacientes = await Usuario.create(req.body);
        return pacientes;
    }
    catch(error){
        console.log(error);
    }
    static async actualizarpacientes(){
        const pacientes = await Usuario.findByPk(req.params.id);
        await pacientes.update(req.body);
        return pacientes;
    }
    catch(error){
        console.log(error);
    }
    static async eliminarpacientes(){
        const pacientes = await Usuario.findByPk(req.params.id);
        await pacientes.destroy();
        return pacientes;
    }
    catch(error){
        console.log(error);
    }
}
module.exports = pacienteServices