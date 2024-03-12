const { filtrarHoteis, filtrarTelaDetalhes } = require("../../pages/filtros/hoteis/functions/filtroHoteis");
const { realizarLogin } = require("../../pages/login/functions/login");


describe('Casos de teste de filtrar hotéis',()=>{ 
    it('Filtrar hotéis',()=>{
      cy.visit('https://www.maxmilhas.com.br/')
      filtrarHoteis('Rio de Janeiro, RJ, Brasil', 'Abril 2024', 'Abril 2024', 12, 15, 2, 1)
      cy.wait(2000)
      filtrarTelaDetalhes('R$ 1000','R$ 1500')
    })


  
});