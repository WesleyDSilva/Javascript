function Pulalinha(){

}

class Conta{
    constructor(agencia,codigo,dataCriacao,titular,saldo){
        this.agencia = agencia;
        this.codigo = codigo;
        this.dataCriacao = dataCriacao;
        this.titular = titular;
        this.saldo = saldo;        
    }

    Retirar(quantia){
        this.saldo -= quantia; 
    }

    Depositar(quantia){
        this.saldo += quantia;
    }

    ObterSaldo(){
        return this.saldo;
    }
}

class ContaCorrente extends Conta{
    constructor(agencia,codigo,dataCriacao,titular,saldo,limite){
        super(agencia,codigo,dataCriacao,titular,saldo)
        this.limite = limite;
    }
}

