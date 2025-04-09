export class PersonagemRepository {
  constructor() {
    this.personagens = [];
    this.idAtual = 1;
  }

  salvar(personagem) {
    personagem.id = this.idAtual++;
    this.personagens.push(personagem);
    return personagem;
  }

  listarTodos() {
    return this.personagens;
  }

  buscarPorId(id) {
    return this.personagens.find((p) => p.id === id);
  }

  atualizarNomeAventureiro(id, novoNome) {
    const personagem = this.buscarPorId(id);
    if (personagem) {
      personagem.nomeAventureiro = novoNome;
      return personagem;
    }
    return null;
  }

  remover(id) {
    const index = this.personagens.findIndex((p) => p.id === id);
    if (index !== -1) {
      this.personagens.splice(index, 1);
      return true;
    }
    return false;
  }
}
