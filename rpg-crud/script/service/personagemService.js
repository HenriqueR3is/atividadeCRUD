import { PersonagemRepository } from "../repository/personagemRepository.js";

export class PersonagemService {
  constructor() {
    this.repo = new PersonagemRepository();
  }

  criarPersonagem(personagem) {
    if (
      !personagem.nomeAventureiro ||
      !personagem.classe ||
      !personagem.level
    ) {
      throw new Error(
        "Todos os campos sao obrigatorios: nomeAventureiro, classe e nivel."
      );
    }

    return this.repo.salvar(personagem);
  }

  listarPersonagens() {
    return this.repo.listarTodos();
  }

  buscarPersonagemPorId(id) {
    const personagem = this.repo.buscarPorId(id);
    if (!personagem) {
      throw new Error(`Personagem com ID ${id} não encontrado.`);
    }
    return personagem;
  }

  atualizarNome(id, novoNome) {
    const atualizado = this.repo.atualizarNomeAventureiro(id, novoNome);
    if (!atualizado) {
      throw new Error(
        `Não foi possível atualizar. Personagem com ID ${id} não encontrado.`
      );
    }
    return atualizado;
  }

  removerPersonagem(id) {
    const removido = this.repo.remover(id);
    if (!removido) {
      throw new Error(
        `Não foi possível remover. Personagem com ID ${id} não encontrado.`
      );
    }
    return true;
  }
}
