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

    Retirar(quantia) {
        if((this.saldo+this.limite)>quantia){
            super.Retirar(quantia);
            console.log(`Saque de: R$ ${quantia}`);
            console.log(`Saldo+limite restante de: R$ ${this.saldo+this.limite}`);
        } else {
            console.log(`Saque maior que o limite disponível. Saldo disponível+limite: R$ ${this.saldo+this.limite}`);
        }
    }

    ObterSaldo(){        
        console.log(`Saldo: R$ ${super.ObterSaldo()}`);
        console.log(`Limite: R$ ${this.limite}`);        
    }
}

class ContaPoupanca extends Conta{
    constructor(agencia,codigo,dataCriacao,titular,saldo,aniversario){
        super(agencia,codigo,dataCriacao,titular,saldo);
        this.aniversario = aniversario;
    }

    Retirar(quantia){
        if(this.saldo<quantia){
            console.log(`Saque negado, quantia solicitada superior ao saldo de: R$ ${super.ObterSaldo()}`);
        } else{
            super.Retirar(quantia);
            console.log(`Saque realizado de: R$ ${quantia}`);
            console.log(`Saldo disponível de: R$ ${super.ObterSaldo()}`);
        }
    }

    ObterSaldo(){
        console.log(`SaldoÇ R$ ${super.ObterSaldo()}`);
    }
}