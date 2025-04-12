// MODELS =====================================================

export class ItemMagico {
  constructor(nome, tipo, forca, defesa) {
    this.id = null;
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
      throw new Error("Tipo de item inválido");
    }

    if (this.forca === 0 && this.defesa === 0) {
      throw new Error("Item não pode ter força e defesa zerados");
    }
  }

  _validarAtributo(valor) {
    if (valor < 0 || valor > 10) {
      throw new Error("Atributos devem estar entre 0 e 10");
    }
    return valor;
  }
}

const gerenciadorItens = {
  idItemAtual: 1,
  itensMagicos: [],

  validarItem(item) {
    if (!(item instanceof ItemMagico)) {
      throw new Error("Objeto inválido. Esperado: ItemMagico.");
    }
    const { tipo, forca, defesa } = item;

    if (forca === 0 && defesa === 0) {
      throw new Error(
        "O item deve ter pelo menos Força ou Defesa maior que 0."
      );
    }

    if (forca > 10 || defesa > 10) {
      throw new Error("Força e Defesa devem ser no máximo 10.");
    }

    if (tipo === "Arma" && defesa !== 0) {
      throw new Error("Armas devem ter Defesa igual a 0.");
    }

    if (tipo === "Armadura" && forca !== 0) {
      throw new Error("Armaduras devem ter Força igual a 0.");
    }

    if (!["Arma", "Armadura", "Amuleto"].includes(tipo)) {
      throw new Error("Tipo inválido. Use apenas: Arma, Armadura ou Amuleto.");
    }

    return true;
  },

  criarItemMagico(item) {
    this.validarItem(item);
    item.id = this.idItemAtual++;
    this.itensMagicos.push(item);
    return item;
  },

  listarItensMagicos() {
    return this.itensMagicos;
  },
};

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("formItemMagico");
  const tabelaContainer = document.getElementById("tabelaItensMagicos");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    try {
      const nome = document.getElementById("nomeItem").value.trim();
      const tipo = document.getElementById("tipoItem").value;
      const forca = parseInt(document.getElementById("forcaItem").value);
      const defesa = parseInt(document.getElementById("defesaItem").value);

      const novoItem = new ItemMagico(null, nome, tipo, forca, defesa);
      gerenciadorItens.criarItemMagico(novoItem);

      alert("Item criado com sucesso!");
      form.reset();
    } catch (erro) {
      alert("Erro ao criar item: " + erro.message);
    }
  });

  document.getElementById("btnListarItens").addEventListener("click", () => {
    const itens = gerenciadorItens.listarItensMagicos();

    if (itens.length === 0) {
      tabelaContainer.innerHTML =
        "<p class='text-light'>Nenhum item cadastrado ainda.</p>";
      return;
    }

    let tabela = `
      <div class="table-responsive">
        <table class="table table-dark table-bordered table-striped">
          <thead>
            <tr>
              <th>ID</th>
              <th>Nome</th>
              <th>Tipo</th>
              <th>Força</th>
              <th>Defesa</th>
            </tr>
          </thead>
          <tbody>
    `;

    itens.forEach((item) => {
      tabela += `
        <tr>
          <td>${item.id}</td>
          <td>${item.nome}</td>
          <td>${item.tipo}</td>
          <td>${item.forca}</td>
          <td>${item.defesa}</td>
        </tr>
      `;
    });

    tabela += `
          </tbody>
        </table>
      </div>
    `;

    tabelaContainer.innerHTML = tabela;
  });
});

export class Personagem {
  static _idAtual = 1;

  constructor(nome, nomeAventureiro, classe, level, forca, defesa) {
    this.id = Personagem._idAtual++;
    this.nome = nome;
    this.nomeAventureiro = nomeAventureiro;
    this.classe = this._validarClasse(classe);
    this.level = level;
    this.forca = this._validarStatus(forca, "Força");
    this.defesa = this._validarStatus(defesa, "Defesa");
    this.itensMagicos = [];
  }

  _validarClasse(classe) {
    const classesValidas = ["Guerreiro", "Mago", "Arqueiro", "Ladino", "Bardo"];
    if (!classesValidas.includes(classe)) {
      throw new Error(
        `Classe inválida. Escolha entre: ${classesValidas.join(", ")}`
      );
    }
    return classe;
  }

  _validarStatus(valor, nomeCampo) {
    if (isNaN(valor) || valor < 0 || valor > 10) {
      throw new Error(`${nomeCampo} deve estar entre 0 e 10.`);
    }
    return valor;
  }

  adicionarItemMagico(item) {
    if (!(item instanceof ItemMagico)) {
      throw new Error("O item precisa ser uma instância de ItemMagico");
    }

    if (item.tipo === "Amuleto") {
      const jaTemAmuleto = this.itensMagicos.some((i) => i.tipo === "Amuleto");
      if (jaTemAmuleto) {
        throw new Error("O personagem já possui um amuleto");
      }
    }

    this.itensMagicos.push(item);
  }

  removerItemMagicoPorId(idItem) {
    this.itensMagicos = this.itensMagicos.filter((item) => item.id !== idItem);
  }

  get forcaTotal() {
    return (
      this.forca + this.itensMagicos.reduce((acc, item) => acc + item.forca, 0)
    );
  }

  get defesaTotal() {
    return (
      this.defesa +
      this.itensMagicos.reduce((acc, item) => acc + item.defesa, 0)
    );
  }
}

const personagens = [];

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("formPersonagem");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    try {
      const nome = document.getElementById("nome").value.trim();
      const nomeAventureiro = document
        .getElementById("nomeAventureiro")
        .value.trim();
      const classe = document.getElementById("classe").value.trim();
      const level = parseInt(document.getElementById("level").value);
      const forca = parseInt(document.getElementById("forca").value);
      const defesa = parseInt(document.getElementById("defesa").value);

      const novoPersonagem = new Personagem(
        nome,
        nomeAventureiro,
        classe,
        level,
        forca,
        defesa
      );

      personagens.push(novoPersonagem);
      alert("Personagem criado com sucesso!");
      form.reset();
    } catch (erro) {
      alert("Erro ao criar personagem: " + erro.message);
    }
  });

  function renderizarTabelaPersonagens() {
    const tbody = document.querySelector("#tabelaPersonagens tbody");
    tbody.innerHTML = "";

    if (personagens.length === 0) {
      tbody.innerHTML = `
        <tr>
          <td colspan="7" class="text-center text-light">Nenhum personagem cadastrado ainda.</td>
        </tr>
      `;
      return;
    }

    personagens.forEach((p) => {
      const linha = `
        <tr>
          <td>${p.id}</td>
          <td>${p.nome}</td>
          <td>${p.nomeAventureiro}</td>
          <td>${p.classe}</td>
          <td>${p.level}</td>
          <td>${p.forca}</td>
          <td>${p.defesa}</td>
        </tr>
      `;
      tbody.innerHTML += linha;
    });
  }

  document
    .getElementById("btnListarPersonagens")
    .addEventListener("click", () => {
      renderizarTabelaPersonagens();
    });
});

Personagem._idAtual = 1;

// SCRIPT UNIFICADO ===========================================

export class RPGManager {
  constructor() {
    this.personagens = [];
    this.itensMagicos = [];
    this.idItemAtual = 1;
    this.idPersonagemAtual = 1;

    document.addEventListener("DOMContentLoaded", () => {
      const formPersonagem = document.getElementById("form-personagem");
      const formItem = document.getElementById("form-item");

      if (formPersonagem) {
        formPersonagem.addEventListener("submit", (event) => {
          event.preventDefault();

          const nome = document.getElementById("nome").value;
          const nomeAventureiro =
            document.getElementById("nomeAventureiro").value;
          const classe = document.getElementById("classe").value;
          const level = parseInt(document.getElementById("level").value);
          const forca = parseInt(document.getElementById("forca").value);
          const defesa = parseInt(document.getElementById("defesa").value);

          const personagem = new Personagem(
            nome,
            nomeAventureiro,
            classe,
            level,
            forca,
            defesa
          );
          this.criarPersonagem(personagem);
          alert("Personagem criado com sucesso!");
        });
      }

      if (formItem) {
        formItem.addEventListener("submit", (event) => {
          event.preventDefault();

          const nome = document.getElementById("nomeItem").value;
          const tipo = document.getElementById("tipoItem").value;
          const forca = parseInt(document.getElementById("forcaItem").value);
          const defesa = parseInt(document.getElementById("defesaItem").value);

          const item = new ItemMagico(nome, tipo, forca, defesa);
          this.criarItemMagico(item);
          alert("Item criado com sucesso!");
        });
      }
    });
  }

  criarPersonagem(personagem) {
    if (!(personagem instanceof Personagem)) {
      throw new Error("Objeto inválido. Esperado: Personagem.");
    }
    personagem.id = this.idPersonagemAtual++;
    this.personagens.push(personagem);
    return personagem;
  }

  listarPersonagens() {
    return this.personagens;
  }

  buscarPersonagemPorId(buscarPersonagemPorId) {
    const personagem = this.personagens.find((p) => p.id === id);
    if (!personagem) throw new Error(`Personagem com ID ${id} não encontrado.`);
    return personagem;
  }

  atualizarPersonagem(personagemAtualizado) {
    const index = this.personagens.findIndex(
      (p) => p.id === personagemAtualizado.id
    );
    if (index === -1) {
      throw new Error(
        `Personagem com ID ${personagemAtualizado.id} não encontrado.`
      );
    }
    this.personagens[index] = personagemAtualizado;
    return personagemAtualizado;
  }

  atualizarNomeAventureiro(id, novoNome) {
    const personagem = this.buscarPersonagemPorId(id);
    personagem.nomeAventureiro = novoNome;
    return personagem;
  }

  removerPersonagem(id) {
    const index = this.personagens.findIndex((p) => p.id === id);
    if (index === -1)
      throw new Error(`Personagem com ID ${id} não encontrado.`);
    this.personagens.splice(index, 1);
    return true;
  }
}
