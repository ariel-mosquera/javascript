var vel = 75
console.log(`Sua velocidade é de ${vel} km/h`)
if (vel < 60){
    console.log('Você está abaixo da velocidade mínima permitida, risco de multa!')
} else if (vel > 80) {
    console.log('Você está acima da velocidade máxima permitida, risco de multa!')
} else {
    console.log('Dentro do limíte de velocidade permitido!')
}