# language: pt
Funcionalidade: Atualizar um usuário

Contexto: Usuário deverá acessar a funcionalidade de atualizar usuários
Dado que tenho um usuário cadastrado
E acessei os detalhes do usuário


Cenário: Deve ser possível atualizar um usuário por nome
Quando editar o nome
E confirmar a operação
Então o sistema exibe a mensagem de atualização realizada com sucesso

Cenário: Deve ser possível atualizar um usuário por e-mail
Quando editar o e-mail desejável
E confirmar a operação
Então o sistema exibe a mensagem de atualização realizada com sucesso

Cenário: Não deve ser possível atualizar um usuário com e-mail inválido
Quando inserir um e-mail inválido
E confirmar a operação
Então vejo uma mensagem de erro - Formato de e-mail inválido

# Cenário: Não deve ser possível atualizar um usuário com nome inválido
# Quando inserir o nome inválido 'Eriko13'
# E confirmar a operação
# Então vejo uma mensagem de erro - Formato de nome inválido


# Cenário: Não deve ser possível atualizar um e-mail de um usuário para um email de um usuário já existente
# E seleciono a opção EDITAR e-mail
# Quando atualizo para um e-mail já existente
# E confirmar a operação
# Então o sistema exibe a mensagem de ERRO - Este e-mail já é utilizado por outro usuário.



# Cenário: Não deve ser possível atualizar o nome de um usuário com mais de 100 caracteres.
# Quando insiro um nome com mais de 100 caracteres
# E confirmar a operação
# Então o sistema exibe a mensagem - Informe no máximo 100 caracteres para o nome


# Cenário: Não deve ser possível atualizar um e-mail de um usuário com mais de 60 caracteres.
# Quando insiro um e-mail com mais de 60 caracteres
# E confirmo a operação
# Então o sistema exibe a mensagem - Informe no máximo 60 caracteres para o e-mail



// Iury somente consegui implementar 3 testes pois ele não avançando mais //