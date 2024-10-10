import { Router } from "express";

const suspeitosRoutes = Router();

// Array com suspeitos pré-cadastrados
let suspeitos = [
  {
    id: Math.floor(Math.random() * 1000000),
    nome: "Marcelo",
    profissao: "Instrutor",
    envolvimento_em_postas: "sim",
    nivel_de_suspeita: "médio",
  },
  {
    id: Math.floor(Math.random() * 1000000),
    nome: "Duda",
    profissao: "Perita",
    envolvimento_em_postas: "sim",	
    nivel_de_suspeita: "alto",
  },
  {
    id: Math.floor(Math.random() * 1000000),
    nome: "Sophia",
    profissao: "Policial",
    envolvimento_em_postas: "não",
    nivel_de_suspeita: "médio",
  },
  {
    id: Math.floor(Math.random() * 1000000),
    nome: "Felipe",
    profissao: "Advogado",
    envolvimento_em_postas: "sim",
    nivel_de_suspeita: "alto",
  }
];

export default suspeitosRoutes;