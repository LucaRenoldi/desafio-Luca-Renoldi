class CaixaDaLanchonete {
  
  cardapio = {
        'cafe': 3.00,
        'chantily': 1.50,
        'suco': 6.20,
        'sanduiche': 6.50,
        'queijo': 2.00, 
        'salgado': 7.25,
        'combo1': 9.50,
        'combo2': 7.50
      };
  
  calcularValorDaCompra(metodoDePagamento, itens) {
    
    let verificacao = this.verificarItens(itens);
    
    if(verificacao == "Tudo certo!"){
      let resultado, valorTotal = 0, separacao;
            
      for(let i = 0; i < itens.length; i++){
        separacao = itens[i].split(",");
        valorTotal += this.cardapio[separacao[0]] * separacao[1];
      }
      
      resultado = this.pagamento(metodoDePagamento, valorTotal);
      console.log(resultado);
      return resultado;
    }
    else{
      return verificacao;
    }
    
  }

  pagamento(metodoDePagamento, valorPagamento) {
    let valorTotal;
    switch (metodoDePagamento) {
      case "dinheiro":
        valorPagamento = valorPagamento * 0.95;
        valorTotal = valorPagamento.toFixed(2);
        return "R$ " + valorTotal.toString().replace(".", ",");
      case "debito":
        valorTotal = valorPagamento.toFixed(2);
        return "R$ " + valorTotal.toString().replace(".", ",");
      case "credito":
        valorPagamento = valorPagamento * 1.03
        valorTotal = valorPagamento.toFixed(2)
        return "R$ " + valorTotal.toString().replace(".", ",");
      default:
        return "Forma de pagamento inválida!";
    }
  }

  verificarItens(itens) {
    if(itens.length == 0) {
      return "Não há itens no carrinho de compra!";
    }
    else if(this.verificarCodigo(itens) == false){
      return "Item inválido!"
    }
    else if(this.verificarQuantidade(itens) == false){
      return "Quantidade inválida!";
    }
    else if(this.verificarAdicionais(itens) == false){
      return "Item extra não pode ser pedido sem o principal";
    }
    else{
      return "Tudo certo!"
    } 
  }

  verificarAdicionais(itens) {
    let complementares = {
      "chantily": false,
      "cafe": false,
      "sanduiche": false,
      "queijo": false
    };
    let separacao = "";
    for (let i = 0; i < itens.length; i++) {
      separacao = itens[i].split(",");
      switch (separacao[0]) {
        case "chantily":
          complementares[separacao[0]] = true;
          break;
        case "sanduiche":
          complementares[separacao[0]] = true;
          break;
        case "queijo":
          complementares[separacao[0]] = true;
          break;
        case "cafe":
          complementares[separacao[0]] = true;
          break;
        default:
          break;
      }
    }
    if (complementares["cafe"] == false && complementares["chantily"] == true) {
      return false;
    }
    else if (complementares["sanduiche"] == false && complementares["queijo"] == true) {
      return false;
    }
    else {
      return true;
    }
  }

  verificarQuantidade(itens) {
    let separacao = "";
    for (let i = 0; i < itens.length; i++) {
      separacao = itens[i].split(",");
      if (separacao[1] < 1) {
        return false;
        
      }
    }
    return true;
  }
  
  verificarCodigo(itens){
    
    let separacao;
    
    for (let i = 0; i < itens.length; i++) {
      separacao = itens[i].split(",");
      if (separacao[0]  in this.cardapio){
        return true;
      }
    }
    
    return false;
  }
}

export { CaixaDaLanchonete };
