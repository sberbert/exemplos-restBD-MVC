import SelecaoRepository from '../repositories/SelecaoRepository.js';

//essa classe deverá ter um método para cada ação realizada pelas nossas rotas
class SelecaoController {

    //metodo assincrono pois precisa aguardar (await) o resultado do findAll, que demora por causa da conexao com o BD. Se não aguardar, o resultado vem vazio
    async index(req, res)  {
      const rows = await SelecaoRepository.findAll()
      res.json(rows)
    }

    async show (req, res) {
      const id = req.params.id
      const rows = await SelecaoRepository.findById(id)
      res.json(rows)
    }

    async store(req, res) {
        const selecao = req.body
        const row = await SelecaoRepository.create(selecao)
        res.json(row)        
    }

    async update(req, res) {
        const id = req.params.id
        const selecao = req.body
        const row = await SelecaoRepository.update(selecao, id)
        res.json(row)    
    }

    async delete(req, res) {
        const id = req.params.id
        const row = await SelecaoRepository.delete(id)
        res.json(row)  
    }

}

//padrao Singleton - uma única instancia dessa classe para o projeto todo
export default new SelecaoController()  