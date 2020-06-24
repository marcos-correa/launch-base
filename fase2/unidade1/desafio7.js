const usuarios = [
    {
        nome: "Salvio",
        receitas: [115.3, 48.7, 98.3, 14.5],
        despesas: [85.3, 13.5, 19.9]
    },
    {
        nome: "Marcio",
        receitas: [24.6, 214.3, 45.3],
        despesas: [185.3, 12.1, 120.0]
    },
    {
        nome: "Lucia",
        receitas: [9.8, 120.3, 340.2, 45.3],
        despesas: [450.2, 29.9]
    }
];




for (usuario of usuarios){
    // let receita = somarValores(usuario.receitas)
    //esstudar o reduce
    let receita = usuario.receitas.reduce((total, number)=> total + number, 0)
    let despesas = usuario.despesas.reduce((total, number)=> total + number, 0)
    // let despesas = somarValores(usuario.despesas)
    let saldo = calculaSaldo(receita, despesas);
    let saldoAtual = statusSaldo(saldo)

    console.log(`o usuário ${usuario.nome} tem um saldo ${saldoAtual} de ${saldo}`)
}

function calculaSaldo(receita, despesas) {
        let saldo = (receita - despesas).toFixed(2);
        return saldo;
}

function statusSaldo(saldo) {
    let statusSaldo = "";
    
    if (saldo >= 0) {
        statusSaldo = "POSITIVO";
    }
    else {
        statusSaldo = "NEGATIVO";
    }
    return statusSaldo;
}

function somarValores(valor){
    let valorSomado = 0
    for(i=0;i<valor.length;i++){
        valorSomado += valor[i]
    }
    return valorSomado
}
