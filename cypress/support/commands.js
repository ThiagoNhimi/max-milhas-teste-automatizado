Cypress.Commands.add('login',(usuario,senha) => {
    const URL = 'https://www.maxmilhas.com.br/'
    cy.visit(URL)

    cy.fixture('dadosUsuariosLogin.json').then((dados) => {
        cy.get(LOGIN_VARIAVEIS.CAMPO_USUARIO)
            .type(usuario || dados.usuario)
        cy.get(LOGIN_VARIAVEIS.CAMPO_SENHA)
            .type(senha || dados.senha)
        cy.get(LOGIN_VARIAVEIS.BOTAO_ENTRAR)
            .click()
        
    })

})