const { Caracteristicas } = require("./caracteristicasBuscadas");

describe("Testes na classe Característica", () => {
    it("Verificar se as características são criadas corretamente", () => {
        const caracteristicaTutorBarbara = new Caracteristicas("filhote", "curta", "pequeno")
        expect(caracteristicaTutorBarbara.idade).toBe("filhote");
        expect(caracteristicaTutorBarbara.pelagem).toBe("curta");
        expect(caracteristicaTutorBarbara.porte).toBe("pequeno");
    });

})