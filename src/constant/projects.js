// Maximo de caracteres: 260

const projects = [
  {
    title: "Assistência Técnica",
    text: "Aplicação React projetada para fornecer uma plataforma interativa para uma assistência técnica, permitindo que os usuários entrem em contato e solicitem serviços de reparo.",
    technologies: ["React", "Javascript", "GitHub Pages"],
    github: "https://github.com/kzanetty/application",
    deploy: {
      state: true,
      path: "https://kzanetty.github.io/application/#/",
    },
  },
  {
    title: "Meu Portfólio",
    text: "Este projeto tem o intuito de servir como meu portfólio, apresentando meus projetos realizados e minhas competências.",
    technologies: ["React", "Javascript", "GitHub Pages"],
    github: "https://github.com/kzanetty/portfolio",
    deploy: {
      state: true,
      path: "https://kzanetty.github.io/portfolio/",
    },
  },
  {
    title: "Spring security",
    text: "Esta API foi criada com o objetivo de demonstrar a usabilidade do Spring Security. Ela fornece recursos de autenticação e autorização para permitir que os usuários acessem o sistema de forma segura.",
    technologies: ["React", "Spring Boot", "PostgreSQL"],
    github: "https://github.com/kzanetty/login-spring-security",
    deploy: {
      state: false,
      path: "N/A",
    },
  },
  {
    title: "API de compras",
    text: "Esta é uma API desenvolvida para controlar a compra de produtos. Ao realizar um pedido de um ou mais produtos, a API gera uma nota de compra contendo o histórico da transação.",
    technologies: ["Spring Boot", "MySQL", "H2 Database"],
    github: "https://github.com/kzanetty/API-Controle-de-Compra-de-Produtos",
    deploy: {
      state: false,
      path: "N/A",
    },
  },
];

export default projects;
