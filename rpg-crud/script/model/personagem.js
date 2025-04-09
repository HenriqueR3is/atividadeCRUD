import { ItemMagico } from "./itemMagico.js";

export class Personagem {
  constructor(id, nome, nomeAventureiro, classe, level, forca, defesa) {
    this.id = id;
    this.nome = nome;
    this.nomeAventureiro = nomeAventureiro;
    this.classe = classe;
    this.level = level;
    this._validarPontos(forca, defesa);
    this.forcaBase = forca;
    this.defesaBase = defesa;
    this.itensMagicos = [];
  }

  _validarClasee(classe) {
    const classesValidas = ["Guerreiro", "Mago", "Arqueiro", "Ladino", "Bardo"];
    if (!classesValidas.includes(classe)) {
      throw new Error("Classe invalida");
    }
    return classe;
  }

  _validarPontos(forca, defesa) {
    const total = forca + defesa;
    if (total > 10) {
      throw new Error("Distribua no maximo 10 pontos entre Forca e Defesa");
    }
  }

  adicionarItemMagico(item) {
    if (!(item instanceof ItemMagico)) {
      throw new Error("O item precisa ser uma instacia de ItemMagico");
    }

    if (item.tipo === "Amuleto") {
      const jaTemAmuleto = this.itensMagicos.some((i) => i.tipo === "Amuleto");
      if (jaTemAmuleto) {
        throw new Error("O personagem ja possui um amuleto");
      }
    }

    this.itensMagicos.push(item);
  }

  removerItemMagicoPorId(idItem) {
    this.itensMagicos = this.itensMagicos.filter((item) => item.id !== idItem);
  }

  get forcaTotal() {
    return (
      this.forcaBase +
      this.itensMagicos.reduce((acc, item) => acc + item.forca, 0)
    );
  }

  get defesaTotal() {
    return (
      this.defesaBase +
      this.itensMagicos.reduce((acc, item) => acc + item.defesa, 0)
    );
  }
}
