import { Given, When, Then, Before } from '@badeball/cypress-cucumber-preprocessor';
import { faker } from '@faker-js/faker';
import pesquisaPageUsuario from '../pages/pesquisar.page';
const paginaPesquisa = new pesquisaPageUsuario();
const nome = faker.person.firstName() + "ão";
const email = faker.internet.email();

Before({ tags: "@novoUsuario" }, () => {
    cy.request({
        method: "POST",
        url: "https://rarocrud-80bf38b38f1f.herokuapp.com/api/v1/users",
        body: {
            name: nome,
            email: email,
        }
    }).as("usuarioNovo");
});

Given('que tenho um usuário já cadastrado', function () {
    cy.get('@usuarioNovo');
});

Given('busco este usuário', function () {
    paginaPesquisa.typeBuscarNome(nome);
})

Given('que acesso a página de pesquisa de usuários', function () {
    cy.visit('https://rarocrud-frontend-88984f6e4454.herokuapp.com/users')
})

When('acessar o campo VER DETALHES', function () {
    paginaPesquisa.clickButtonVerDetalhes();
})

Then('terei acesso as informações do usuário cadastrado', function () {
    cy.get('[name="id"]').should('be.visible')
    cy.get('#userName').should('be.visible')
    cy.get('#userEmail').should('be.visible')
})

When('informar o nome do usuário cadastrado', function () {
    paginaPesquisa.typeBuscarNome(nome);
})

Then('verei o nome e as informações completas do usuário', function () {
    cy.get('#userData').should('be.visible')
    cy.get('[data-test="userDataName"]').should('be.visible')
    cy.get('[data-test="userDataEmail"]').should('be.visible')
})

When('informar o email do usuário cadastrado', function () {
    paginaPesquisa.typeBuscarEmail(email);
})

Then('verei o e-mail e as informações completas do usuário', function () {
    cy.get('#userData').should('be.visible')
    cy.get('[data-test="userDataEmail"]').should('be.visible')
    cy.get('[data-test="userDataName"]').should('be.visible')
})

Before({ tags: "@usuarioNaoEncontrado" }, () => {
    cy.intercept("GET", "api/v1/users", {
        statusCode: 200,
        body: []
    }).as("usuarioNaoExiste");
});

When('informar nome ou e-mail de um usuário não cadastrado', function () {
    cy.get('@usuarioNaoExiste')
});

Then('o sistema retorna uma mensagem - Ops! Não existe nenhum usuário para ser exibido.', function () {
    cy.get('h3').invoke('text').should('equal', 'Ops! Não existe nenhum usuário para ser exibido.');
})
