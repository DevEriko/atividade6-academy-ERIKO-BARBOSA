import { Given, When, Then, Before, } from "@badeball/cypress-cucumber-preprocessor";
import listaPageUsuario from "../pages/listaUsuario.page";
const pagelistaUsuario = new listaPageUsuario();

Given("que acessei a página de lista de usuários", function () {
    cy.visit("/users");
});

Before({ tags: "@listUsers" }, () => {
    cy.intercept("GET", "api/v1/users", {
        statusCode: 200,
        fixture: "listaUsuarios.json",
    }).as("listaUsuarios");
});

When("acessar a lista de usuários", function () {
    cy.get('#listaUsuarios').should('be.visible');
})

Then('terá acesso as informações de nome e email de todos os usuário da lista', function () {
    cy.get('#listaUsuarios').should('be.visible');
    cy.get('[data-test="userDataName"]').should('be.visible');
    cy.get('[data-test="userDataEmail"]').should('be.visible');
    cy.get(pagelistaUsuario.buttonProximaPagina).should('be.enabled');
    pagelistaUsuario.clickButtonProximaPagina()
    cy.get('#listaUsuarios').should('be.visible');
    cy.get('[data-test="userDataName"]').should('be.visible');
    cy.get('[data-test="userDataEmail"]').should('be.visible');
    pagelistaUsuario.clickButtonProximaPagina()
    cy.get('#listaUsuarios').should('be.visible');
    cy.get('[data-test="userDataName"]').should('be.visible');
    cy.get('[data-test="userDataEmail"]').should('be.visible');

})
Before({ tags: "@listaVazia" }, () => {
    cy.intercept("GET", "api/v1/users", {
        statusCode: 200,
        body: []
    }).as("listaVazia");
});

When('acessar a lista de usuários vazia', function () {
    cy.wait('@listaVazia')
})

Then('o sistema mostrará a mensagem que não há nenhum usuário para ser exibido, pedindo para cadastrar um novo usuário', function () {
    cy.get('h3').invoke('text').should('equal', 'Ops! Não existe nenhum usuário para ser exibido.');
    cy.get('p').invoke('text').should('equal', 'Cadastre um novo usuário')
})

Then('a função de avançar para próxima páginas da lista estará habilitada', function () {
    cy.get(pagelistaUsuario.buttonProximaPagina).should('be.enabled')
    cy.get(pagelistaUsuario.buttonVoltarPagina).should('be.disabled')

})

Before({ tags: "@lista6Users" }, () => {
    cy.intercept("GET", "api/v1/users", {
        statusCode: 200,
        fixture: "listaCom5Usuarios.json",
    }).as("listaUsuarios");
});


Then('a função de avançar para próxima páginas da lista estará desabilitada', function () {
    cy.get(pagelistaUsuario.buttonProximaPagina).should('be.disabled')
})

When('acessar a lista com mais de 6 usuários', function () {
    pagelistaUsuario.todosUsuarios()
})

Then('terá acesso a avançar e retornar as páginas da lista de usuários', function () {
    cy.get(pagelistaUsuario.buttonProximaPagina).should('be.enabled')
    pagelistaUsuario.clickButtonProximaPagina();
    pagelistaUsuario.clickButtonProximaPagina();
    cy.get('#paginacaoProximo').should('be.visible')
    pagelistaUsuario.clickButtonVoltarPagina();
    pagelistaUsuario.clickButtonVoltarPagina();
    cy.get('#paginacaoVoltar').should('be.visible')
})

Then('visualizamos os campos de detalhe e eclusão de usuários', function () {
    cy.wait("@listaUsuarios").then(function (lista) {
        const listaUsuarios = lista.response.body;
        listaUsuarios.forEach(() => {
            cy.get(pagelistaUsuario.buttonDeletarUsuario).should("be.visible");
            cy.get(pagelistaUsuario.buttonVerDetalhesUsuario).should("be.visible");
        })
    })

})
