import { FILTRO_DETALHE_HOTEIS, FILTRO_HOTEIS } from "../data/variaveisFiltroHoteis"

export const filtrarHoteis = (destino, mesAnoCheckIn, mesAnoCheckOut, diaCheckIn, diaCheckOut, adultos, criancas)=>{
  cy.get(FILTRO_HOTEIS.BARRA_OPCOES)
    .contains('Hotéis')
    .dblclick();
  if(destino){
    cy.get(FILTRO_HOTEIS.DESTINO)
      .type(destino)
    cy.get(FILTRO_HOTEIS.MODAL_DESTINO)
      .should('be.visible')
      .contains(destino)
      .click()
  }
  if(mesAnoCheckIn && mesAnoCheckOut && diaCheckIn && diaCheckOut){
    cy.get(FILTRO_HOTEIS.CAMPO_CHECK_IN_OUT)
      .click()
    cy.get(FILTRO_HOTEIS.CAMPO_DIAS)
      .contains(diaCheckIn)
      .click()
    cy.get(FILTRO_HOTEIS.CAMPO_DIAS)
      .contains(diaCheckOut)
      .click()
    cy.get(FILTRO_HOTEIS.BOTAO_CONTINUAR)
      .click()
  }
  if(adultos && criancas != null){
    cy.get(FILTRO_HOTEIS.CAMPO_HOSPEDES)
      .click()
    cy.get(FILTRO_HOTEIS.BUSCAR)
      .click()
  }

}
export const filtrarTelaDetalhes = (valorDesde, valorAte) => {
  if (valorDesde) {
    valorDesde = String(valorDesde);
    cy.get(FILTRO_DETALHE_HOTEIS.VALOR_DESDE)
      .focus()
      .invoke('val', '')
      .type(valorDesde);
  }
  if (valorAte) {
    valorAte = String(valorAte);
    cy.get(FILTRO_DETALHE_HOTEIS.VALOR_ATE)
      .focus()
      .invoke('val', '')
      .type(valorAte);
  }

    cy.wait(5000)
  let i = 1;

  cy.get('.wrapper > .content-wrapper > .resume-wrapper > .price-wrapper > .price > .daily-price').each(() => {
    cy.get(`:nth-child(${i}) > .wrapper > .content-wrapper > .resume-wrapper > .price-wrapper > .price > .daily-price`, { timeout: 10000 }).should('be.visible').then($element => {
      cy.wrap($element).invoke('text').then(text => {
        const valorItem = parseFloat(text.replace('R$', '').replace(/\./g, '').replace(',', '.'));
        const valorMinimo = valorDesde ? parseFloat(valorDesde.replace('R$', '').replace(',', '.')) : Number.MIN_VALUE;
        const valorMaximo = valorAte ? parseFloat(valorAte.replace('R$', '').replace(',', '.')) : Number.MAX_VALUE;

        cy.log(`Valor do item: ${valorItem}, Valor mínimo: ${valorMinimo}, Valor máximo: ${valorMaximo}`);

        if (valorItem > valorMinimo && valorItem < valorMaximo) {
          cy.log(`Valor ${text} dentro do intervalo.`);
        } else {
          cy.log(`Valor ${text} fora do intervalo.`);
        }
      });
    });
    i++;
  });
};



  


  

  
