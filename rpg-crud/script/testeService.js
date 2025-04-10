import { PersonagemService } from "./service/personagemService.js";
import { PersonagemRepository } from "./repository/personagemRepository.js";
import { Personagem } from "./model/personagem.js";

const personagemRepo = new PersonagemRepository();
const personagemService = new PersonagemService(personagemRepo);

const novoPersonagem = new Personagem("Arthas", "Guerreiro", 10);

try {
  const salvo = personagemService.criarPersonagem(novoPersonagem);
  console.log("Personagem criado com sucesso:", salvo);
} catch (erro) {
  console.error("Erro:", erro.message);
}
