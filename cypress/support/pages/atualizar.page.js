export default class atualizarPageUsuario {
    inputNome = '#name';
    inputEmail = '#email';
    buttonLimpar = '[data-test-id="clearButton"]';
    inputBuscar = ".sc-gsFSXq";
    listaUsuarios = "#listaUsuarios";
    todosOsUsuariosDaLista = "#listaUsuarios #userData";
    paginaAtual = "#paginacaoAtual";

    buttonSalvar = '[type="submit"]';
    buttonVerDetalhes = '#userDataDetalhe';
    buttonEditar = ".sc-dAlyuH.jdAtLn";

    mensagemInformacaoSucesso = '.go3958317564';
    mensagemFormatoEmailInvalido = '.sc-cPiKLX';

    idDetalhe = '[name="id"]';
    nomeDetalhe = "#userName";
    emailDetalhe = "#userEmail";

    nomeUsuario = '[data-test="userDataName"]';
    emailUsuario = '[data-test="userDataEmail"]';

    typeAtualizarNome(nome) {
        cy.get(this.nomeDetalhe).type(nome)
    }
    typeAtualizarEmail(email) {
        cy.get(this.emailDetalhe).type(email)
    }
    typeBuscarNome(nome) {
        cy.get(this.inputBuscar).type(nome);
    }
    typeBuscarEmail(email) {
        cy.get(this.inputBuscar).type(email);
    }
    clickButtonVerDetalhes() {
        cy.get(this.buttonVerDetalhes).first().click();
    }
    clickButtonEditar() {
        cy.contains(this.buttonEditar, 'Editar').click();
    }
    typeNome(nome) {
        cy.get(this.inputNome).type(nome);
    }
    typeEmail(email) {
        cy.get(this.inputEmail).type(email);
    }
    clickButtonSalvar() {
        cy.get(this.buttonSalvar).click();
    }
}