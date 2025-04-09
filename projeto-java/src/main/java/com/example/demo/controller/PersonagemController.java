package com.example.demo.controller;

import com.example.demo.entity.Personagem;
import com.example.demo.repository.PersonagemRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.Arrays;
import java.util.List;

@RestController
@RequestMapping("/personagem")
public class personagemController {

    @Autowired
    private PersonagemRepository personagemRepository;

    @PostMapping
    public Personagem createPersonagem(@RequestBody Personagem personagem) {
        return personagemRepository.save(personagem);
    }

    @GetMapping
    public List<Personagem> getAllPersonagens() {
        return personagemRepository.findAll();
    }

    @GetMapping("/{id}")
    public Personagem getProductById(@PathVariable Long id) {
        return personagemRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Produto não encontrado"));
    }

    @PutMapping("/{id}")
    public Personagem updateProduct(@PathVariable Long id, @RequestBody Personagem personagemDetails) {
        Personagem personagem = personagemRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Personagem não encontrado"));

        personagem.setNome(personagemDetails.getNome());
        personagem.setClasse(personagemDetails.getClasse());

        return personagemRepository.save(personagem);
    }

    @DeleteMapping("/{id}")
    public void deleteProduct(@PathVariable Long id) {
        personagemRepository.deleteById(id);
    }
}