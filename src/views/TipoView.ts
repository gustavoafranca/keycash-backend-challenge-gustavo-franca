import Tipo from '../models/Tipo'

export default {
    render(tipo: Tipo) {
        const dataCriada = new Date(tipo.createAT)
        const dataUpdate = new Date(tipo.updateAT)
        return {
            tipo: tipo.tipo,
            criado: ((dataCriada.getDate() )) + "/" + ((dataCriada.getMonth() + 1)) + "/" + dataCriada.getFullYear(),
            alterado: ((dataUpdate.getDate() )) + "/" + ((dataUpdate.getMonth() + 1)) + "/" + dataUpdate.getFullYear(),
        }
    },
    renderMany(tipo: Tipo[]){
        return tipo.map(tipo => this.render(tipo))
    }
}