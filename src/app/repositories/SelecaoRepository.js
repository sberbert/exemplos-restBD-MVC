import conexao from '../database/conexao.js';

class SelecaoRepository {
    //CRUD
    create(selecao) {
        const sql = "INSERT INTO selecoes SET ?;" 
        return new Promise((resolve, reject) => {
            conexao.query(sql, selecao, (error, result) => {
                if (error) {                    
                    return reject('Não foi possível cadastrar!')                
                } else {
                    const row = JSON.parse(JSON.stringify(result))
                    return resolve(row)
                }
            })     
        })       
    }

    findAll() {
        const sql = "SELECT * FROM SELECOES;"

        //uso de promise já que o bd pode demorar ou retornar erro
        return new Promise((resolve, reject) => {
            conexao.query(sql, (error, result) => {
                if (error) {                    
                  return reject('Dados não encontrados!')                
                } else {
                  const rows = JSON.parse(JSON.stringify(result))
                  return resolve(rows)
                }
              })                      
        })
    }

    findById(id) {
        const sql = "SELECT * FROM selecoes WHERE id = ?;"
        return new Promise((resolve, reject) => {
            conexao.query(sql, id, (error, result) => {
                if (error) {                    
                    return reject('Dados não encontrados!')                
                } else {
                    const row = JSON.parse(JSON.stringify(result))
                return resolve(row)
                }
            })     
        })   
    }

    update(selecao, id) {
        const sql = "UPDATE selecoes SET ? WHERE id = ?;" 
        return new Promise((resolve, reject) => {
            conexao.query(sql, [selecao, id], (error, result) => {
                if (error) {                    
                    return reject('Dados não atualilzados!')                
                } else {
                 const row = JSON.parse(JSON.stringify(result))
                 return resolve(row)
                }
            })     
        })          
    }

    delete(id) {
        const sql = "DELETE FROM selecoes WHERE id = ?;"
        return new Promise((resolve, reject) => {
            conexao.query(sql, id, (error, result) => {
                if (error) {                    
                    return reject('Dados não excluídos!')                
                } else {
                    const row = JSON.parse(JSON.stringify(result))
                    return resolve(row)
                }
            })     
        })                 
    }

}

export default new SelecaoRepository()