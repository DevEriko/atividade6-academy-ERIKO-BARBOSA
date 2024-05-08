export default class listaPageUsuario {

    usuarioEmail = '[data-test="userDataEmail"]';
    usuarioNome = '[data-test="userDataName"]';

    linkPaginaNovoUsuario = '[href="/users/novo"]';
    headerUsuarioNaoCadastro = 'h3';

    buttonVoltarPagina = '#paginacaoVoltar';
    buttonProximaPagina = '#paginacaoProximo';
    labelPaginacaoAtual = '#paginacaoAtual';

    buttonDeletarUsuario = '[data-test="userDataDelete"]';
    buttonVerDetalhesUsuario = '#userDataDetalhe';

    listaDeTodosUsuarios = '#listaUsuarios #userData';

    clickButtonProximaPagina() {
        cy.get(this.buttonProximaPagina).click();
    }

    clickButtonVoltarPagina() {
        cy.get(this.buttonVoltarPagina).click();
    }

    todosUsuarios() {
        return cy.get(this.listaDeTodosUsuarios);
    }

}