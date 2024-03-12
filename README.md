# max-milhas-teste-automatizado

**Max Milhas Software - Testes Automatizados**

Este repositório contém testes automatizados para o sistema de login do software da Max Milhas, bem como testes de filtros de hotéis. Os testes são realizados utilizando a ferramenta Cypress e seguem uma estrutura específica para manter o código organizado e reutilizável.

### Estrutura do Repositório

O repositório está organizado da seguinte forma:

- **cypress/**
  - **pages/**
    - **login/**
      - **data/**: Esta pasta contém os arquivos com os dados necessários para os testes de login.
      - **functions/**: Nesta pasta estão as funções que executam as ações relacionadas ao sistema de login.
    - **hotels/**
      - **data/**: Pasta que contém os arquivos com os dados necessários para os testes do filtro de hotéis.
      - **functions/**: Funções que executam as ações relacionadas ao filtro de hotéis.

### Testes Automatizados

- **Sistema de Login:**
  - Os testes validam o sistema de login com informações corretas e incorretas.
  - Durante os testes, foi identificado um erro genérico que ocorre ao tentar fazer login repetidas vezes.

- **Filtro de Hotéis:**
  - Os testes verificam a funcionalidade do filtro de hotéis, garantindo que os resultados sejam precisos e consistentes.

### Considerações

A estrutura do repositório foi projetada para facilitar a manutenção e reutilização do código. Os arquivos de dados e funções estão organizados de forma separada para cada módulo, o que torna mais fácil localizar e modificar partes específicas do sistema. Isso contribui para a eficiência e confiabilidade dos testes automatizados no software da Max Milhas.
