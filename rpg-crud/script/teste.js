import { Personagem } from "./model/personagem.js";
import { ItemMagico } from "./model/itemMagico.js";

try {
  const p1 = new Personagem(
    1,
    "Henrique",
    "Mestre dos Magos",
    "Guerreiro",
    99,
    6,
    4
  );
  console.log("Personagem criado:", p1);

  const espada = new ItemMagico(1, "Espada Flamejante", "Arma", 5, 0);
  const armadura = new ItemMagico(2, "Armadura de Netherite", "Armadura", 0, 4);
  const amuleto = new ItemMagico(3, "Amuleto da Forca", "Amuleto", 3, 1);

  p1.adicionarItemMagico(espada);
  p1.adicionarItemMagico(armadura);
  p1.adicionarItemMagico(amuleto);

  console.log("Forca total:", p1.forcaTotal);
  console.log("Defesa total:", p1.defesaTotal);

  const outroAmuleto = new ItemMagico(4, "Amuleto proibido", "Amuleto", 2, 2);
  p1.adicionarItemMagico(outroAmuleto);
} catch (e) {
  console.error("Erro:", e.message);
}
