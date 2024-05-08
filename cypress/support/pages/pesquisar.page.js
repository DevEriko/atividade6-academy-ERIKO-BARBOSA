export default class pesquisaPageUsuario {
    inputBuscar = ".sc-gsFSXq";
    listaUsuarios = "#listaUsuarios";
    todosOsUsuariosDaLista = "#listaUsuarios #userData";
    paginaAtual = "#paginacaoAtual";

    buttonAnterior = "#paginacaoVoltar";
    buttonAvançar = "#paginacaoProximo";
    buttonLixeira = '[data-test="userDatadelete"]';
    buttonVerDetalhes = ".sc-feUZmu > #userDataDetalhe";

    idDetalhe = '[name="id"]';
    nomeDetalhe = "#userName";
    emailDetalhe = "#userEmail";

    usuario = '#userData';
    nomeUsuario = '[data-test="userDataName"]';
    emailUsuario = '[data-test="userDataEmail"]';
    usuarioNaoExiste = 'h3';

    typeBuscarNome(nome) {
        cy.get(this.inputBuscar).type(nome);
    }
    typeBuscarEmail(email) {
        cy.get(this.inputBuscar).type(email);
    }
    clickButtonAnterior() {
        cy.get(this.buttonAnterior).click();
    }
    clickButtonAvançar() {
        cy.get(this.buttonAvançar).click();
    }
    clickButtonLixeira() {
        cy.get(this.buttonLixeira).click();
    }
    clickButtonVerDetalhes() {
        cy.get(this.buttonVerDetalhes).click();
    }




}