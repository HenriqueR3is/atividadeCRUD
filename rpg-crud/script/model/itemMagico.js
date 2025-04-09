export class ItemMagico {
  constructor(id, nome, tipo, forca, defesa) {
    this.id = id;
    this.nome = nome;
    this.tipo = tipo;

    if (tipo === "Arma") {
      this.forca = this._validarAtributo(forca);
      this.defesa = 0;
    } else if (tipo === "Armadura") {
      this.forca = 0;
      this.defesa = this._validarAtributo(defesa);
    } else if (tipo === "Amuleto") {
      this.forca = this._validarAtributo(forca);
      this.defesa = this._validarAtributo(defesa);
    } else {
      throw new Error("Tipo de item invalido");
    }

    if (this.forca === 0 && this.defesa === 0) {
      throw new Error("Item nao pode ter forca e defesa zerados");
    }
  }

  _validarAtributo(valor) {
    if (valor < 0 || valor > 10) {
      throw new Error("Atributos devem estar entre 0 e 10");
    }
    return valor;
  }
}
