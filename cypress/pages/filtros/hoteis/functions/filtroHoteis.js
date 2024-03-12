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

export const filtrarTelaDetalhes = (valorDesde, valorAte)=>{
  cy.get(FILTRO_DETALHE_HOTEIS.VALOR_DESDE)
    .type('{selectall}{del}')
    .type(valorDesde)
  cy.get(FILTRO_DETALHE_HOTEIS.VALOR_ATE)
    .type('{selectall}{del}')
    .type(valorAte)
}