const { Tutor } = require("./tutor");

class Caracteristicas {
    idade; //filhote ou adulto
    pelagem; //curta ou longa - se alérgico, tem q ser curta
    porte; // pequeno, médio ou grande
    sociavel;
    
    static caracteristicasBuscadas = []

    constructor(idade, pelagem, porte, sociavel) {
        this.idade = idade;
        this.pelagem = pelagem;
        this.porte = porte;
        this.sociavel = sociavel;

        Caracteristicas.caracteristicasBuscadas.push(this);
    }
}

module.exports = { Caracteristicas }