export class Personagem {
  static CLASSES_VALIDAS = ["Guerreiro", "Mago", "Arqueiro", "Ladino", "Bardo"];

  constructor(id, nome, nomeAventureiro, classe, level, forca, defesa) {
    this._validarClasse(classe);
    this._validarDistribuicaoAtributos(forca, defesa);

    this.id = id;
    this.nome = nome;
    this.nomeAventureiro = nomeAventureiro;
    this.classe = classe;
    this.level = level;
    this.forca = forca;
    this.defesa = defesa;
    this.itens = [];
  }

  _validarClasse(classe) {
    const classeValida = Personagem.CLASSES_VALIDAS.includes(classe);
    if (!classeValida) {
      throw new Error(`Classe inválida: ${classe}`);
    }
  }

  _validarDistribuicaoAtributos(forca, defesa) {
    const soma = forca + defesa;
    const dentroDoLimite = soma <= 10;

    if (!dentroDoLimite) {
      throw new Error(
        "Distribuição inválida: máximo de 10 pontos entre Força e Defesa."
      );
    }
  }

  adicionarItem(item) {
    const jaTemAmuleto =
      item.tipo === "Amuleto" && this.itens.some((i) => i.tipo === "Amuleto");

    if (jaTemAmuleto) {
      throw new Error("O personagem já possui um Amuleto.");
    }

    this.itens.push(item);
  }

  get forcaTotal() {
    const somaForca = this.itens.reduce((total, item) => total + item.forca, 0);
    return this.forca + somaForca;
  }

  get defesaTotal() {
    const somaDefesa = this.itens.reduce(
      (total, item) => total + item.defesa,
      0
    );
    return this.defesa + somaDefesa;
  }
}
