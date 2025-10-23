var idade = 67

if (idade < 16){
    console.log(`Com ${idade} anos você não vota`)
} else if (idade < 18 || idade > 65 ) {
    console.log(`Com ${idade} voto é opcional.`) 
} else {
    console.log(`Foto obrigatório com ${idade}`)
}