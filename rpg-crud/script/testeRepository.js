import { PersonagemRepository } from "./repository/personagemRepository.js";

const repo = new PersonagemRepository();

const personagem1 = {
  nomeAventureiro: "Aragorn",
  classe: "Guerreiro",
  level: 10,
};
const personagem2 = { nomeAventureiro: "Gandalf", classe: "Mago", level: 20 };

repo.salvar(personagem1);
repo.salvar(personagem2);

console.log("Todos os personagens:", repo.listarTodos());
console.log("Buscar ID 1:", repo.buscarPorId(1));
repo.atualizarNomeAventureiro(2, "Gandalf, o Branco");
console.log("Apos atualizar nome do ID 2:", repo.buscarPorId(2));

repo.remover(1);
console.log("Apos remover ID 1:", repo.listarTodos());
