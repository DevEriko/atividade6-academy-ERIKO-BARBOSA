import { Given, When, Then, Before } from '@badeball/cypress-cucumber-preprocessor';
import { faker } from '@faker-js/faker';
import atualizarPageUsuario from '../pages/atualizar.page';
const paginaAtualiza = new atualizarPageUsuario();
var nome = faker.person.firstName() + "ão";
var email = faker.internet.email();

Given('que tenho um usuário cadastrado', function () {
    cy.request({
        method: "POST",
        url: "https://rarocrud-80bf38b38f1f.herokuapp.com/api/v1/users",
        body: {
            name: nome,
            email: email,
        },
    })
});

Given('acessei os detalhes do usuário', function () {
    cy.visit('https://rarocrud-frontend-88984f6e4454.herokuapp.com/users');
    paginaAtualiza.typeBuscarEmail(nome);
    paginaAtualiza.clickButtonVerDetalhes();
    paginaAtualiza.clickButtonEditar();
})

When('editar o nome', function () {
    cy.get(paginaAtualiza.nomeDetalhe).clear();
    paginaAtualiza.typeAtualizarNome('Sebastião Nunes');
})

When('confirmar a operação', function () {
    paginaAtualiza.clickButtonSalvar();
})

Then('o sistema exibe a mensagem de atualização realizada com sucesso', function () {
    cy.get(paginaAtualiza.mensagemInformacaoSucesso).should('be.visible');
    cy.get(paginaAtualiza.mensagemInformacaoSucesso).invoke('text').should('equal', 'Informações atualizadas com sucesso!');
})

When('editar o e-mail desejável', function () {
    const novoEmail = faker.internet.email();
    cy.get(paginaAtualiza.emailDetalhe).clear();
    paginaAtualiza.typeAtualizarEmail(novoEmail);
})

When('inserir um e-mail inválido', function () {
    cy.get(paginaAtualiza.emailDetalhe).clear();
    paginaAtualiza.typeAtualizarEmail('teste.com');
})

Then('vejo uma mensagem de erro - Formato de e-mail inválido', function () {
    cy.get(paginaAtualiza.mensagemFormatoEmailInvalido).should('be.visible');
    cy.get(paginaAtualiza.mensagemFormatoEmailInvalido).invoke('text').should('equal', 'Formato de e-mail inválido');
})



