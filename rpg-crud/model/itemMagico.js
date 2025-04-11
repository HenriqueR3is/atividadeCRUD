export class ItemMagico {
  static TIPOS_VALIDOS = ["Arma", "Armadura", "Amuleto"];

  constructor(id, nome, tipo, forca, defesa) {
    this.id = id;
    this.nome = nome;

    this._validarTipo(tipo);
    this._validarAtributos(tipo, forca, defesa);

    this.tipo = tipo;

    if (tipo === "Arma") {
      this.forca = forca;
      this.defesa = 0;
    } else if (tipo === "Armadura") {
      this.forca = 0;
      this.defesa = defesa;
    } else {
      this.forca = forca;
      this.defesa = defesa;
    }
  }

  _validarTipo(tipo) {
    const tipoValido = ItemMagico.TIPOS_VALIDOS.includes(tipo);
    if (!tipoValido) {
      throw new Error(`Tipo de item inválido: ${tipo}`);
    }
  }

  _validarAtributos(tipo, forca, defesa) {
    const atributosDentroDoLimite =
      forca >= 0 && forca <= 10 && defesa >= 0 && defesa <= 10;
    if (!atributosDentroDoLimite) {
      throw new Error("Atributos devem estar entre 0 e 10.");
    }

    const ambosZerados = forca === 0 && defesa === 0;
    if (ambosZerados) {
      throw new Error("Item não pode ter Força e Defesa iguais a zero.");
    }

    if (tipo === "Arma" && defesa !== 0) {
      throw new Error("Armas devem ter Defesa igual a 0.");
    }

    if (tipo === "Armadura" && forca !== 0) {
      throw new Error("Armaduras devem ter Força igual a 0.");
    }
  }

  getResumo() {
    return {
      id: this.id,
      nome: this.nome,
      tipo: this.tipo,
      forca: this.forca,
      defesa: this.defesa,
    };
  }
}
