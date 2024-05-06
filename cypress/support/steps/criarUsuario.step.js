import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import CadastroPage from '../pages/cadastro.page';
import { faker } from '@faker-js/faker';
const paginaCriar = new CadastroPage();

Given('que acessei a Funcionalidade de cadastro', function () {
    cy.visit('https://rarocrud-frontend-88984f6e4454.herokuapp.com/users')
});

When('informar um novo nome', function () {
    cy.get('.sc-gEvEer').click();
    paginaCriar.typeNome(faker.person.fullName());
});

When('informar um novo e-mail', function () {
    var novoEmail = faker.internet.email();
    paginaCriar.typeEmail(novoEmail);
});

When('confirmar a operação', function () {
    cy.intercept('POST', 'api/v1/users').as('postUsuario')
    paginaCriar.clickButtonCadastrar();
});

Then('o usuário deverá ser cadastrado', function () { });