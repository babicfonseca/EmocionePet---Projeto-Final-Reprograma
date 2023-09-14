const { Pet } = require("./pet")

class Tutor {
    nome;
    idade; // se for idoso, não pode ser pet filhote, pq tem mais energia
    idoso;
    #telefone;
    email;
    localidade;
    alergiaAPelo;
    possuiOutrosAnimais;
    motivoAdocao;
    caracteristicasBuscadas;

    static perfilTutor = [];

    constructor(nome, idade, telefone, email, localidade, alergiaAPelo, possuiOutrosAnimais, motivoAdocao, caracteristicas) {
        this.nome = nome;
        this.idade = idade;

        if(idade >= 60){
            this.idoso = true;

        } else{
            this.idoso = false;
        }
        
        this.#telefone = telefone;
        this.email = email;
        this.localidade = localidade;
        this.alergiaAPelo = alergiaAPelo;
        this.possuiOutrosAnimais = possuiOutrosAnimais;
        this.motivoAdocao = motivoAdocao // suporte emocional. Seria só pra suporte emocional?
        this.caracteristicasBuscadas = caracteristicas;

        Tutor.perfilTutor.push(this);
    }

    get telefone() {
        return this.#telefone;
    }

    set telefone(telefone) {
        this.#telefone = telefone;
    }


    cadastroTutor(nome, idade, telefone, email, localidade, alergiaAPelo, possuiOutrosAnimais, motivoAdocao, caracteristicas) {
        if(Tutor instanceof Tutor) {
            this.nome = nome;
            this.idade = idade;
            this.#telefone = telefone;
            this.email = email;
            this.localidade = localidade;
            this.alergiaAPelo = alergiaAPelo;
            this.possuiOutrosAnimais = possuiOutrosAnimais;
            this.motivoAdocao = motivoAdocao;
            this.caracteristicasBuscadas = caracteristicas;
    
            return "Tutor cadastrado";
        } else {
            throw new Error("Erro no cadastro, dados inválidos");
        }
      }

    maioridade() {
        if(this.idade <= 18) {
            throw new Error("A adoção de animais para suporte emocional deve ser realizada por maiores de 18 anos.")
        };
    }
}


module.exports = { Tutor };