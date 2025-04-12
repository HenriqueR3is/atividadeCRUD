# Projeto CRUD RPG

Este projeto é um sistema para um jogo de RPG, desenvolvido como parte da Atividade Prática

## 🔄 Migração de Java para JavaScript

Inicialmente, o projeto foi iniciado em Java e encontra-se na pasta `projeto-java`. Porém, escolhi migrar o projeto para HTML, CSS e JavaScript por ser uma linguagem que tenho mais familiaridade, e também pela facilidade de criar uma interface visual mais interativa.

## 📂 Estrutura do projeto

- `projeto-java/` → Versão original do projeto iniciada em Java.
- `rpg-crud/` → Nova versão em HTML, CSS e JS, com aplicação dos conceitos de Programação Orientada a Objetos (POO).

## 📌 Observações

- O projeto é individual, conforme solicitado pelo professor.
- A estrutura atual foi pensada para facilitar a organização e visualização dos dados.

============================================================

Objetivo
O objetivo deste projeto é criar um sistema interativo para gerenciar personagens e itens mágicos, utilizando JavaScript puro, com foco em organização de código e boas práticas de desenvolvimento.

Estrutura de Pastas
projeto-java/ # Projeto inicial em java, convertido para JS em seguida
rpg-crud/
├── index.html # Página principal da interface
├── style.css # Estilo visual da aplicação
├── model/
│ └── itemMagico.js # Definição e lógica para os Itens Mágicos
│ └── personagem.js # Definição e lógica para os Personagens
├── script/
│ └── script.js # Interação com a interface e controle de eventos

Funcionalidades

1. Cadastro de Personagem
   Formulário com campos para nome, nome aventureiro, classe, nível, força e defesa.

A soma de força e defesa deve totalizar 10 pontos.

Classes permitidas: Guerreiro, Mago, Arqueiro, Ladino, Bardo.

2. Exibição de Personagens
   Exibição em formato de grade com todos os personagens criados.

Visualização de nome, classe, nível e atributos (considerando os valores somados dos itens equipados).

3. Busca de Personagem por ID
   Campo de busca para localizar um personagem específico através de seu identificador único.

Exibe todos os dados do personagem.

4. Atualização de Nome de Guerreiro
   Campo para inserir o ID e o novo nome.

O nome é alterado apenas se a classe do personagem for "Guerreiro".

5. Exclusão de Personagem
   Campo para inserir o ID e remover o personagem completamente da lista.

6. Cadastro de Item Mágico
   Formulário para criação de itens mágicos com nome, tipo (Arma, Armadura, Amuleto), força, defesa e personagem associado.

Validações aplicadas:

Arma: defesa obrigatória igual a 0.

Armadura: força obrigatória igual a 0.

Amuleto: pode ter força e defesa, mas apenas um amuleto pode ser associado a cada personagem.

O item deve ter pelo menos um valor (força ou defesa) maior que zero.

7. Exibição de Itens Mágicos
   Lista de itens mágicos associados a cada personagem.

8. Busca de Item Mágico por ID
   Campo para pesquisar um item mágico pelo seu ID e exibir seus detalhes.

Regras de Negócio
Um personagem possui sempre 10 pontos para distribuir entre Força e Defesa.

Itens possuem as seguintes regras:

Arma: Força > 0, Defesa = 0

Armadura: Defesa > 0, Força = 0

Amuleto: Pode ter tanto Força quanto Defesa, mas apenas um amuleto pode ser associado a cada personagem.

Nenhum item pode ter Força = 0 e Defesa = 0.

Os valores exibidos na interface consideram os atributos base do personagem, somados aos atributos dos itens equipados.

Como Executar
Clone ou baixe este repositório para o seu computador.

Abra o arquivo index.html diretamente no navegador de sua escolha.

Utilize os formulários para cadastrar, visualizar, editar e excluir personagens e itens mágicos.
