const { LOGIN } = require("../data/variaveisLogin")

export const realizarLogin = (email, senha) => {
    const URL = 'https://www.maxmilhas.com.br/'
    cy.visit(URL)
    cy.fixture('dadosUsuariosLogin.json').then((dados) => {
        cy.get(LOGIN.MENU_HAMB_NAV)
          .click()
        cy.get(LOGIN.BOTAO_LOGIN_CADASTRO)
          .click()
        cy.get(LOGIN.CAMPO_EMAIL)
          .type(email || dados.email)
        cy.get(LOGIN.CAMPO_SENHA)
          .type(senha || dados.senha)
        cy.get(LOGIN.PAGINA_COMPLETA_LOGIN).then((element)=>{
          cy.get(element)
            .contains('Entrar')
            .click()
            .wait(2000)
          cy.get(LOGIN.PAGINA_COMPLETA_LOGIN).then(($element) => {
              if ($element.text().match(/Usuário ou senha incorretos|Ocorreu um erro inesperado, por favor tente novamete/)) {
                // Se o texto 1 ou o texto 2 estiverem presentes no elemento, faça algo aqui
                cy.log('oi')
              } else {
                // Se nenhum dos textos estiver presente, faça algo aqui
              }
            })
            
            .then((msg)=>{
              if(msg.length > 0){
                cy.fail('Login Falhou')
              }if(msg.length === 0){
                cy.log('Login efetuado com sucesso')

              }
            })
          
        })
          
        
        
    })
}