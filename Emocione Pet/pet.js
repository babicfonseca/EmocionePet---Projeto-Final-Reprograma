class Pet {
    raca;
    idade;
    porte;
    pelagem;
    sociavel;
    localidade;

    static perfilPet = [];

    constructor(raca, idade, porte, pelagem, sociavel, localidade){
        this.raca = raca;
        this.idade = idade;

        if(idade < 12){
            this.filhote = true;

        } else{
            this.filhote = false;
        }
        this.porte = porte;
        this.pelagem = pelagem;
        this.sociavel = sociavel;
        this.localidade = localidade;

        Pet.perfilPet.push(this)
    }

    
    cadastroPet(raca, idade, porte, pelagem, sociavel, localidade) {
        if(Pet instanceof Pet) {
            this.raca = raca;
            this.idade = idade;
            this.porte = porte;
            this.pelagem = pelagem;
            this.sociavel = sociavel;
            this.localidade = localidade;
    
            return "Pet cadastrado";
        } else {
            throw new Error("Erro no cadastro, dados inválidos");
        }
    }

    contatoComOutrosPets() {
        if(this.sociavel === true) {
            console.log("Esse animal é sociável e pode ter contato com outros pets.")
        } else {
            console.log("Esse animal NÃO é sociável. O ideal é que o Tutor não possua outros pets.")
        }
    }
}

module.exports = { Pet }