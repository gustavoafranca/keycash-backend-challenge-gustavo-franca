import Imoveis from '../models/Imovel'

export default {
    render(imoveis: Imoveis) {
        const dataCriada = new Date(imoveis.createAT)
        const dataUpdate = new Date(imoveis.updateAT)
        return {
            tipo: imoveis.tipo.tipo,
            quarto: imoveis.quarto,
            metragem: imoveis.metragem,
            vagas: imoveis.vagas,
            criado: ((dataCriada.getDate() )) + "/" + ((dataCriada.getMonth() + 1)) + "/" + dataCriada.getFullYear(),
            alterado: ((dataUpdate.getDate() )) + "/" + ((dataUpdate.getMonth() + 1)) + "/" + dataUpdate.getFullYear(),
        }
    },
    renderMany(imoveis: Imoveis[]){
        return imoveis.map(imoveis => this.render(imoveis))
    }
}