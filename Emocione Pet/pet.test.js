const { Pet } = require("./pet")

describe("Testes da classe Pet", () => {
    it("Verificar se o cadastro de pet é feito corretamente", () => {
        const pet1 = new Pet("SRD", 10, "medio", "curta", true, "São Paulo - SP");
        expect(pet1.idade).toBe(10);
    });

    it("Verificar se o pet é filhote", () => {
        const pet1 = new Pet("SRD", 10, "medio", "curta", true, "São Paulo - SP");
        expect(pet1.filhote).toBe(true);
    });
})

