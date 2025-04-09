package com.example.demo.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Itens {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer Id;
    private String nomeItem;
    private String tipoItem;
    private Integer forcaItem;
    private Integer defItem;

    public Itens(Integer id, String nomeItem, String tipoItem, Integer forcaItem, Integer defItem) {
        Id = id;
        this.nomeItem = nomeItem;
        this.tipoItem = tipoItem;
        this.forcaItem = forcaItem;
        this.defItem = defItem;
    }

    public Integer getId() {
        return Id;
    }

    public void setId(Integer id) {
        Id = id;
    }

    public String getNomeItem() {
        return nomeItem;
    }

    public void setNomeItem(String nomeItem) {
        this.nomeItem = nomeItem;
    }

    public String getTipoItem() {
        return tipoItem;
    }

    public void setTipoItem(String tipoItem) {
        this.tipoItem = tipoItem;
    }

    public Integer getForcaItem() {
        return forcaItem;
    }

    public void setForcaItem(Integer forcaItem) {
        this.forcaItem = forcaItem;
    }

    public Integer getDefItem() {
        return defItem;
    }

    public void setDefItem(Integer defItem) {
        this.defItem = defItem;
    }
}
