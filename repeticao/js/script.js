function pesquisaSatisfacao() {
    let soma = 0
    let satisfeitos = 0
    let insatisfeitos = 0
    let participantes = 1
  
    while (participantes <= 10) {
      let nota = Number(prompt(`Participante ${participantes}, informe sua nota (0 a 10):`))
      soma += nota
      participantes++
  
      if (nota >= 8) {
        satisfeitos++
      } else if (nota < 5) {
        insatisfeitos++
      }
    }
  
    let media = soma / 10
  
    alert(`Média das notas: ${media.toFixed(2)}\nSatisfeitos: ${satisfeitos}\nInsatisfeitos: ${insatisfeitos}`)

}