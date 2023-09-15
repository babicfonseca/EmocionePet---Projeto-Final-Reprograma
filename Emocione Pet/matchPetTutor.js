const { Caracteristicas } = require("./caracteristicasBuscadas");
const { Pet } = require("./pet");
const { Tutor } = require("./tutor");
const { tutores } = require("./cadastroTutorPet");

// Criar função de match
// receber (tutor e a lista completa de pets)
// A função retorna (return lista filtrada de pets)
// olhar as características e filtrar os pets

//console.log(tutores)

/*let petsCadastradosFiltrados = Pet.petsCadastrados.filter(function (pet) {
    return pet.localidade === tutores[0].localidade &&
        el.RollNumber <= 200 &&
        el.Marks >= 80;
}
);*/


function matchPetTutor(tutor){
    let petsCadastradosFiltrados = Pet.petsCadastrados.filter(function (pet) {
        return pet.localidade === tutor.localidade &&
        pet.filhote === tutor.caracteristicasBuscadas.filhote &&
        pet.pelagem === tutor.caracteristicasBuscadas.pelagem &&
        pet.porte === tutor.caracteristicasBuscadas.porte &&
        pet.sociavel === tutor.caracteristicasBuscadas.sociavel
    }
    );

    return petsCadastradosFiltrados;
}

let listaFiltradaPets = matchPetTutor(tutores[0])
if(listaFiltradaPets.lenght === 0) {
    console.log("Não há animais disponíveis para adoção com as características informadas.")
}

console.log(matchPetTutor(tutores[0]))





// dar preferência para quem quer cachorro de suporte emocional.