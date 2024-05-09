import { Given, When, Then, Before } from '@badeball/cypress-cucumber-preprocessor';
import { faker } from '@faker-js/faker';
import atualizarPageUsuario from '../pages/atualizar.page';
const paginaAtualiza = new atualizarPageUsuario();


Given('que tenho um usuário cadastrado', function () {
    var nome = faker.person.firstName() + "ão";
    cy.wrap(nome).as('nomeFaker')
    var email = faker.internet.email().toLowerCase()
    cy.wrap(email).as('fakerEmail')
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
    paginaAtualiza.typeBuscarEmail(this.nomeFaker);
    paginaAtualiza.clickButtonVerDetalhes();
    paginaAtualiza.clickButtonEditar();
});

When('editar o nome', function () {
    cy.get(paginaAtualiza.nomeDetalhe).clear();
    paginaAtualiza.typeAtualizarNome('Sebastião Nunes');
});

When('confirmar a operação', function () {
    paginaAtualiza.clickButtonSalvar();
});

Then('o sistema exibe a mensagem de atualização realizada com sucesso', function () {
    cy.get(paginaAtualiza.mensagemInformacaoSucesso).should('be.visible');
    cy.get(paginaAtualiza.mensagemInformacaoSucesso).invoke('text').should('equal', 'Informações atualizadas com sucesso!');
});

When('editar o e-mail desejável', function () {
    const novoEmail = faker.internet.email();
    cy.get(paginaAtualiza.emailDetalhe).clear();
    paginaAtualiza.typeAtualizarEmail(novoEmail);
});

When('inserir um e-mail inválido', function () {
    cy.get(paginaAtualiza.emailDetalhe).clear();
    paginaAtualiza.typeAtualizarEmail('teste.com');
});

Then('vejo uma mensagem de erro {string}', function (mensagem) {
    cy.get(paginaAtualiza.mensagemFormatoEmailInvalido).should('be.visible');
    cy.get(paginaAtualiza.mensagemFormatoEmailInvalido).invoke('text').should('equal', mensagem);
});

When('inserir o nome inválido', function () {
    cy.get(paginaAtualiza.nomeDetalhe).clear();
    paginaAtualiza.typeAtualizarNome('Érik@');
});

Before(function () {
    var Nome = faker.person.firstName() + 'xibiu';
    var Email = faker.internet.email().toLowerCase()
    cy.wrap(Email).as('emailFaker')
    cy.request({
        method: 'POST',
        url: "https://rarocrud-80bf38b38f1f.herokuapp.com/api/v1/users",
        body: {
            name: Nome,
            email: Email
        }
    });
});

When('atualizo para um e-mail já existente', function () {
    cy.get('@emailFaker').then(function (Email) {
        paginaAtualiza.typeAtualizarEmail(Email)
    });
});
// alterei o nome do BDD pois o seletor era outro.
Then('vejo a mensagem de erro {string}', function (mensagem) {
    cy.get(paginaAtualiza.mensagemEmailUsadoPorOutroUsuario).should('be.visible');
    cy.get(paginaAtualiza.mensagemEmailUsadoPorOutroUsuario).invoke('text').should('equal', mensagem)
})

When('insiro um nome com mais de 100 caracteres', function () {
    const nome = Cypress._.repeat('hahahahahaha', 11);
    paginaAtualiza.typeAtualizarNome(nome);
});

When('insiro um e-mail com mais de 60 caracteres', function () {
    const email = Cypress._.repeat('ha', 40);
    paginaAtualiza.typeAtualizarEmail(email + '@teste');
});

When('cancelar a operação', function () {
    paginaAtualiza.clickButtonCancelar();
});

Then('os dados do usuário não serão alterados', function () {
    cy.get('@nomeFaker').then(function (nome) {
        cy.get('@fakerEmail').then(function (email) {
            cy.get(paginaAtualiza.idDetalhe).should('be.visible');
            cy.get(paginaAtualiza.nomeDetalhe).should('have.value', nome)
            cy.get(paginaAtualiza.emailDetalhe).should('have.value', email)
        });
    });
});





