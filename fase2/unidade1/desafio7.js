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
    let receita = somarValores()
    let despesas = somarValores2()
    let saldo = ''
    saldo = calculaSaldo(saldo, receita, despesas);
    let saldoAtual = statusSaldo(saldo)

    console.log(`o usuário ${usuario.nome} tem um saldo ${saldoAtual} de ${saldo}`)
}

function calculaSaldo(saldo, receita, despesas) {
        saldo = (receita - despesas).toFixed(2);
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

function somarValores(){
    let atualReceita = 0
    for(i=0;i<usuario.receitas.length;i++){
        atualReceita += usuario.receitas[i]
    }
    return atualReceita.toFixed(2)
}

function somarValores2(){
    let atualDespesas = 0
    for(i=0;i<usuario.despesas.length;i++){
        atualDespesas += usuario.despesas[i]
    }
    return atualDespesas.toFixed(2)
}
