// SUBSISTEMA1

class SistemaPagamento{
    processarPagamento(valor){
        console.log(`Processamento pagamento no valor de R$ ${valor}`);
    }

}

// SUBSISTEMA2
class SistemaLogistica{
    enviarProduto(destinatario){
        console.log(`Enviar produto para R$ ${destinatario}`);
    }
    
}



// SUBSISTEMA3
class SistemaNotificacao{
    enviarEmail(destinatario, mensagem){
        console.log(`Enviar e-mail para R$ ${destinatario}: ${mensagem}`);
    }
    
}


// FACHADA

class LojaOnline{
    constructor(){
        this.pagamento = new SistemaPagamento();
        this.logistica = new SistemaLogistica();
        this.notificacao = new SistemaNotificacao();
    }

    realizarCompra(produto, destinatario){
        this.pagamento.processarPagamento(produto.preco);
        this.logistica.enviarProduto(destinatario);
        this.notificacao.enviarEmail(destinatario, `Seu pedido de ${produto.nome} foi enviado`);
    }

}


// CLIENTE EXEMPLO DE USO ######

const loja = new LojaOnline();

const produto = {
    nome: 'Camiseta',
    preco: 49.99
};

const destinatario ='jtplara@gmail.com';
loja.realizarCompra(produto, destinatario);