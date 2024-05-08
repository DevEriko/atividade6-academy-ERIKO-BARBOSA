# language: pt
Funcionalidade: Criação de usuário

Contexto: Usuário deverá acessar a funcionalidade do cadastro
Dado que acessei a funcionalidade de cadastro

Cenário: Criação de usuário com sucesso
Quando informar um novo nome
E informar um novo e-mail
E confirmar a operação
Então o sistema retorna a mensagem - USUÁRIO SALVO COM SUCESSO

Cenário: Não deve ser possível criar um usuário com e-mail inválido
Quando informar um novo nome
E informar um e-mail inválido "eriko.com"
E confirmar a operação
Então o sistema retorna a mensagem de erro informando que o e-mail é inválido


Cenário: Não deve ser possível criar um usuário sem o nome
Quando informar um novo e-mail
E confirmar a operação
Então o campo nome mostrará uma mensagem - O CAMPO NOME É OBRIGATÓRIO.


Cenário: Não deve ser possível criar um usuário sem o e-mail
Quando informar um novo nome
E confirmar a operação
Então o campo e-mail mostrará uma mensagem - O CAMPO E-MAIL É ORBIGATÓRIO.


Cenário: Não deve ser possível criar um usuário com apenas 3 letras
Quando informar um novo nome com 3 letras
E informar um novo e-mail
E confirmar a operação
Então o campo nome mostrará uma mensagem - Informe pelo menos 4 letras para o nome.

@emailJaExistente
Cenário: Não deve ser possível cadastrar um usuário com e-mail já existente.
Quando informar um novo nome
E informar o e-mail já existente
E confirmar a operação
Então visualizo uma mensagem de ERRO com a mensagem - Este e-mail já é utilizado por outro usuário.


Cenário: Não deve ser possível cadastrar um nome com mais de 100 caracteres.
Quando informar um novo nome com mais de 100 caracteres
E informar um novo e-mail
E confirmar a operação
Então o campo nome mostrará uma mensagem - Informe no máximo 100 caracteres para o nome


Cenário: Não deve ser possível cadastrar um e-mail com mais de 60 caracteres.
Quando informar um novo nome
E informar um novo e-mail com mais de 60 caracteres
E confirmar a operação
Então o campo e-mail mostrará uma mensagem - Informe no máximo 60 caracteres para o e-mail