class CaixaDaLanchonete {

    calcularValorDaCompra(metodoDePagamento, itens) {
        let valorTotal = 0;
        let resultado;
        if(!itens){
           return console.log("Não há itens no carrinho de compra!");
        }

        valorTotal = this.verificacaoItens(itens);
        resultado = this.metodoDePagamento(metodoDePagamento, valorTotal);
        return resultado;
    }
    
        metodoDePagamento(metodoDePagamento, valorTotal){
        switch(metodoDePagamento){
            case "dinheiro":
                valorTotal = valorTotal - (valorTotal * 0.05);
                return "R$" + valorTotal.toString();
                break;
            case "debito":
                valorTotal = valorTotal - (valorTotal * 0.03);
                return "R$" + valorTotal.toString();
                break;
            case "credito":
                return "R$" + valorTotal.toString();
                break;
            default:
                return "Forma de pagamento inválida!";
        }
    }

    verificacaoItens(itens){
        
    }


}

export { CaixaDaLanchonete };