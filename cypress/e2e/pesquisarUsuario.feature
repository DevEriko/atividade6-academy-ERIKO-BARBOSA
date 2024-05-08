# language: pt
Funcionalidade: Pesquisar Usuários

Contexto: Usuário deverá acessar a funcionalidade de pesquisa de usuários
Dado que acesso a página de pesquisa de usuários

@novoUsuario
Cenário: Pesquisar um usuário cadastrado
Dado que tenho um usuário já cadastrado
E que acesso a página de pesquisa de usuários
E busco este usuário
Quando acessar o campo VER DETALHES
Então terei acesso as informações do usuário cadastrado


Cenário: Pesquisar usuário por nome
Quando informar o nome do usuário cadastrado
Então verei o nome e as informações completas do usuário


Cenário: Pesquisar usuário por email
Quando informar o email do usuário cadastrado
Então verei o e-mail e as informações completas do usuário

@usuarioNaoEncontrado
Cenário: Não deve ser possível pesquisar um usuário não cadastrado
Quando informar nome ou e-mail de um usuário não cadastrado
Então o sistema retorna uma mensagem - Ops! Não existe nenhum usuário para ser exibido.



