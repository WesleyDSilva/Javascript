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
    constructor(agencia,codigo,dataCriacao,titular,saldo=0,limite = 200){
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
    constructor(agencia,codigo,dataCriacao,titular,saldo=0,aniversario){
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
        console.log(`Saldo R$ ${super.ObterSaldo()}`);
    }
}

let cliente = new ContaCorrente('001','002','15-10-2021','Wesley Silva',0,600);

let cliente1 = new ContaCorrente('001','002','10-08-2022','Maria Dias',400,400);

let cliente2 = new ContaCorrente('001','002','19-07-2024','Marina Santos',100,undefined);

let cliente3 = new ContaPoupanca('002','001','05-01-2019','Clecia Oliveira',300,'05-01');

let cliente4 = new ContaPoupanca('002','001','09-02-2020','Alberto Jejum', undefined,'09-02');

/*
console.log(cliente);
cliente.Depositar(400);
console.log(cliente);
cliente.Retirar(100);
console.log(cliente);
*/



/*
console.log(cliente1);
cliente1.Depositar(100);
console.log(cliente1);
cliente1.Retirar(200);
console.log(cliente1);
*/

/*
console.log(cliente2);
cliente2.Depositar(620);
console.log(cliente2);
cliente2.Retirar(350);
console.log(cliente2);
*/

console.log(cliente3);
cliente3.Depositar(217);
console.log(cliente3);
cliente3.Retirar(121);
console.log(cliente3);

/*
console.log(cliente4);
console.log(cliente4);
*/