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

// Rota para cadastrar um novo suspeito
suspeitosRoutes.post("/", (req, res) => {
    const {nome, profissao, envolvimento_em_postas, nivel_de_suspeita} = req.body;

    // Validação dos campos nome e profissão
    if (!nome || !profissao) {
      return res.status(400).send({
        message: "O nome ou o profissao não foi preenchido!",
      });
    }
  
    // Validação de nivel de suspeita
    if (nivel_de_suspeita != "baixo" & nivel_de_suspeita != "médio" & nivel_de_suspeita != "alto") {
        return res.status(400).send({
            message: "O nível de suspeita deve ser baixo, médio ou alto",
        });
    }  
    // Criação de um novo suspeito
    const novoSuspeito = {
      id: Math.floor(Math.random() * 1000000),
      nome,
      profissao,
      envolvimento_em_postas,
      nivel_de_suspeita,
    };
  
    // Adiciona o novo suspeito ao array de suspeitos
    suspeitos.push(novoSuspeito);
  
    return res.status(201).json({
      message: "Novo suspeito cadastrado com sucesso!",
      novoSuspeito,
    });
});
  
// Rota para listar todos os suspeitos
suspeitosRoutes.get("/", (req, res) => {
    return res.status(200).json(suspeitos);
  });

  // Rota para buscar um suspeito pelo id
  suspeitosRoutes.get("/:id", (req, res) => {
    const { id } = req.params;
  
    // Busca um suspeito pelo id no array de suspeitos
    const suspeito = suspeitos.find((procurado) => procurado.id == id);
  
    // Verifica se o suspeito foi encontrado
    if (!suspeito) {
      return res
        .status(404)
        .json({ message: `Suspeito com id ${id} não encontrado!` });
    }

  
    return res.status(200).json(suspeito);
  });

  // Rota para atualizar um suspeito pelo id
suspeitosRoutes.put("/:id", (req, res) => {
    const { id } = req.params;
    const { nome, profissao, envolvimento_em_postas, nivel_de_suspeita} = req.body;
  
    // Busca um suspeito pelo id no array de suspeitos
    const suspeito = suspeitos.find((procurado) => procurado.id == id);
  
    // Verifica se o suspeito foi encontrado
    if (!suspeito) {
      return res
        .status(404)
        .json({ message: `suspeito com id ${id} não encontrado!` });
    }
  
    // Validação dos campos nome e profissao
    if (!nome || !profissao) {
      return res.status(400).send({
        message: "O nome ou o profissao não foi preenchido",
      });
    }
  
    suspeito.nome = nome;
    suspeito.profissao = profissao;
    suspeito.envolvimento_em_postas = envolvimento_em_postas;
    suspeito.nivel_de_suspeita = nivel_de_suspeita;
  
    return res.status(200).json({
      message: "suspeito atualizado com sucesso!",
      suspeito,
    });
  });
  
  suspeitosRoutes.delete("/:id", (req, res) => {
    const { id } = req.params;
  
    // Busca um suspeito pelo id no array de suspeitos
    const suspeito = suspeitos.find((procurado) => procurado.id == id);
  
    // Verifica se o suspeito foi encontrado
    if (!suspeito) {
      return res
        .status(404)
        .json({ message: `suspeito com id ${id} não encontrado!` });
    }
          
        // Remove o suspeito do array de suspeitos
        suspeitos = suspeitos.filter((procurado) => procurado.id != id);
      
        return res.status(200).json({
          message: "Suspeito removido com sucesso!",
          suspeito,
        });
      });

export default suspeitosRoutes;