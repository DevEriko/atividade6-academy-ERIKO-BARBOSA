import { Given, When, Then, Before } from '@badeball/cypress-cucumber-preprocessor';
import CadastroPage from '../pages/cadastro.page';
import { faker } from '@faker-js/faker';
const paginaCriar = new CadastroPage();


Given('que acessei a funcionalidade de cadastro', function () {
    cy.visit('users/novo');
});

When('informar um novo nome', function () {
    paginaCriar.typeNome(faker.person.firstName() + 'ão');
});

When('informar um novo e-mail', function () {
    paginaCriar.typeEmail(faker.internet.email());
});

When('confirmar a operação', function () {
    paginaCriar.clickButtonCadastrar();
});

Then('o sistema retorna a mensagem - USUÁRIO SALVO COM SUCESSO', function () {
    cy.get(".go3958317564").should("be.visible");
    cy.get(".go3958317564").should("contain.text", "Usuário salvo com sucesso!");
});


When('informar um e-mail inválido {string}', function (email) {
    paginaCriar.typeEmail(email);
});

Then('o sistema retorna a mensagem de erro informado que o e-mail é inválido', function () {
    cy.contains('Formato de e-mail inválido').should('be.visible');
});

Then('o campo nome mostrará uma mensagem - O CAMPO NOME É OBRIGATÓRIO.', function () {
    cy.contains('O campo nome é obrigatório.').should('be.visible');
});

Then('o campo e-mail mostrará uma mensagem - O CAMPO E-MAIL É ORBIGATÓRIO.', function () {
    cy.contains('O campo e-mail é obrigatório.').should('be.visible');
});

When('informar um novo nome com 3 letras', function () {
    paginaCriar.typeNome('ANA');
});

Then('o campo nome mostrará uma mensagem - Informe pelo menos 4 letras para o nome.', function () {
    cy.get('#name').should('be.visible');
    cy.contains('Informe pelo menos 4 letras para o nome.').should('be.visible');
});

Before({ tags: "@emailJaExistente" }, () => {
    cy.intercept("POST", "api/v1/users", {
        statusCode: 422,
        fixture: "emailJaExistente.json",
    }).as("emailEmUso");
});

Then('visualizo uma mensagem de ERRO com a mensagem - Este e-mail já é utilizado por outro usuário.', function () {
    cy.get("p").should("contain.text", "Este e-mail já é utilizado por outro usuário.")
    cy.get('h2').should('be.visible');
    cy.get('.sc-fhzFiK').should('be.visible');
});

When('informar o e-mail já existente', function () {
    paginaCriar.typeEmail('qualqueremail@qa.com');
});

Then('o campo nome mostrará uma mensagem - Informe no máximo 100 caracteres para o nome', function () {
    cy.get('.sc-cPiKLX').contains('Informe no máximo 100 caracteres para o nome').should('be.visible');
});

When('informar um novo nome com mais de 100 caracteres', function () {
    const nome = Cypress._.repeat('hahahahahaha', 11);
    paginaCriar.typeNome(nome);
});

When('informar um novo e-mail com mais de 60 caracteres', function () {
    const email = Cypress._.repeat('ha', 40);
    paginaCriar.typeEmail(email + '@teste');
});

Then('o campo e-mail mostrará uma mensagem - Informe no máximo 60 caracteres para o e-mail', function () {
    cy.get('.sc-cPiKLX').contains('Informe no máximo 60 caracteres para o e-mail').should('be.visible');
});
