# language: pt

Funcionalidade: Listagem de usuários

Contexto: Usuário deverá acessar a funcionalidade de lista de usuários
Dado que acessei a página de lista de usuários

@listUsers
Cenário: Deve ser possível consultar todos os usuários contidos na lista
Quando acessar a lista de usuários
Então terá acesso as informações de nome e email de todos os usuário da lista

@listaVazia
Cenário: Deve mostrar uma opção para cadastrar usuário quando não existirem usuários cadastrados na lista
Quando acessar a lista de usuários vazia
Então o sistema mostrará a mensagem que não há nenhum usuário para ser exibido, pedindo para cadastrar um novo usuário

@listUsers
Cenário: Deve exibir a paginação se existir mais de 6 usuários cadastrados na lista
Quando acessar a lista de usuários
Então a função de avançar para próxima páginas da lista estará habilitada

@lista6Users
Cenário: Não deve ser possível avançar para a próxima página se existirem 6 usuários na lista
Quando acessar a lista de usuários
Então a função de avançar para próxima páginas da lista estará desabilitada

@listUsers
Cenário: Deve ser possível avançar e retornar as páginas da lista de usuários
Quando acessar a lista com mais de 6 usuários
Então terá acesso a avançar e retornar as páginas da lista de usuários

@listUsers
Cenário: Devem existir opções para exibir detalhes ou excluir usuário da lista
Quando acessar a lista de usuários
Então visualizamos os campos de detalhe e eclusão de usuários

