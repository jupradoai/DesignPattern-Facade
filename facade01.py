# SUBSISTEMA 1
class SistemaPagamento:
    def processarPagamento(self, valor):
        print(f"Processando pagamento no valor de R$ {valor}")

# SUBSISTEMA 2
class SistemaLogistica:
    def enviarProduto(self, destinatario):
        print(f"Enviar produto para {destinatario}")

# SUBSISTEMA 3
class SistemaNotificacao:
    def enviarEmail(self, destinatario, mensagem):
        print(f"Enviar e-mail para {destinatario}: {mensagem}")

# FACHADA
class LojaOnline:
    def __init__(self):
        self.pagamento = SistemaPagamento()
        self.logistica = SistemaLogistica()
        self.notificacao = SistemaNotificacao()

    def realizarCompra(self, produto, destinatario):
        self.pagamento.processarPagamento(produto['preco'])
        self.logistica.enviarProduto(destinatario)
        self.notificacao.enviarEmail(destinatario, f"Seu pedido de {produto['nome']} foi enviado")

# CLIENTE EXEMPLO DE USO
loja = LojaOnline()

produto = {
    'nome': 'Camiseta',
    'preco': 49.99
}

destinatario = 'jtplara@gmail.com'
loja.realizarCompra(produto, destinatario)
