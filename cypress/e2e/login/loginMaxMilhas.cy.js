const { realizarLogin } = require("../../pages/login/functions/login");


describe('Casos de teste de login',()=>{ 
    it('Login preenchendo os campos de forma errônea',()=>{
      realizarLogin('TESTE', 'SENHA123')//Se passa nos parâmetros dentro dessa chamada de função, irá considerar o que for passado. Caso contrário, ele irá no fixtures
    })

    it('Login preenchendo os campos de forma correta',()=>{
      realizarLogin()//Se passa nos parâmetros dentro dessa chamada de função, irá considerar o que for passado. Caso contrário, ele irá no fixtures
    })

  
});