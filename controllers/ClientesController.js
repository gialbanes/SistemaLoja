import express from "express";
const router = express.Router();

router.get("/clientes", (req, res) => {
    const clientes = [
      { 
        nome: "Ana Paula Silva", 
        cpf: "12345678900", 
        endereco: "Rua das Flores, 123 - Bairro Jardim - São Paulo, SP - 01000-000" 
      },
      { 
        nome: "Beatriz Fernandes Oliveira", 
        cpf: "234.567.890-12", 
        endereco: "Avenida Paulista, 456 - Centro - São Paulo, SP - 01310-000" 
      },
      { 
        nome: "Camila Rodrigues Lima", 
        cpf: "334.455.667-78", 
        endereco: "Rua das Palmeiras, 789 - Vila Nova - Belo Horizonte, MG - 03456-789" 
      },
      { 
        nome: "Elaine Martins da Silva", 
        cpf: "445.566.778-89", 
        endereco: "Rua dos Jacarandás, 1010 - Jardim Bela Vista - São Paulo, SP - 04567-890" 
      },
      { 
        nome: "Daniela Pereira Costa", 
        cpf: "556.677.889-90", 
        endereco: "Rua da Esperança, 2020 - Boa Viagem - Recife, PE - 05678-901" 
      },
      { 
        nome: "Fernanda Gomes Almeida", 
        cpf: "667.788.990-01", 
        endereco: "Rua dos Lírios, 3030 - Alto da Lapa - São Paulo, SP - 06789-012" 
      },
      { 
        nome: "Gabriela Alves Pinto", 
        cpf: "778.899.001-12", 
        endereco: "Rua do Horizonte, 4040 - Jardim Botânico - Curitiba, PR - 07890-123" 
      },
      { 
        nome: "Helena Souza Pereira", 
        cpf: "889.900.112-23", 
        endereco: "Avenida das Américas, 5050 - Barra da Tijuca - Rio de Janeiro, RJ - 08901-234" 
      },
      { 
        nome: "Isabella Costa Rocha", 
        cpf: "990.011.223-34", 
        endereco: "Rua do Sol, 6060 - Parque das Nações - Porto Alegre, RS - 09012-345" 
      },
      { 
        nome: "Juliana Carvalho Martins", 
        cpf: "101.122.334-45", 
        endereco: "Rua das Magnólias, 7070 - Centro - Vitória, ES - 10123-456" 
      }
    ];
    res.render("clientes", {
      clientes: clientes,
    });
  });

export default router;