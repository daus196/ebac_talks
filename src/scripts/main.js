AOS.init();

const dataDoEvento = new Date('May 2, 2024 19:00:00')
const timesTampDoEvento = dataDoEvento.getTime()

const contaAsHoras = setInterval(()=>{
    const agora = new Date()
    const timesTampAtual = agora.getTime()

    const distancia = timesTampDoEvento - timesTampAtual;

    const diaEmMs = 1000 * 60 * 60 * 24
    const horaEmMs = 1000 * 60 * 60
    const minutoEmMs = 1000 * 60


    const diasAteoEvento = Math.floor(distancia / diaEmMs)
    const horasAteOEvento = Math.floor((distancia % diaEmMs) / horaEmMs)
    const minutosAteOEvento = Math.floor((distancia % horaEmMs) / minutoEmMs)
    const segundosAteOEvento = Math.floor((distancia % minutoEmMs) / 1000)
    
    document.getElementById('contador').innerHTML = `${diasAteoEvento}d ${horasAteOEvento}h ${minutosAteOEvento}m ${segundosAteOEvento}s`

    if(distancia < 0 ){
        clearInterval(contaAsHoras)
        document.getElementById('contador1').innerHTML= `O evento ja começou!`
    }
},1000)