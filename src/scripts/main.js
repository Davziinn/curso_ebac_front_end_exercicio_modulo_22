const dataEvento = new Date('April 12, 2025 21:00:00');
const timeStampEvento = dataEvento.getTime();

const contaHora = setInterval(() =>{
    const agora = new Date();
    const timeStampAtual = agora.getTime();

    const distanciaAteEvento = timeStampEvento - timeStampAtual;

    const diaEmMS = 1000 * 60 * 60 * 24;
    const horasEmMS = 1000 * 60 * 60;
    const minutosEmMS = 1000 * 60;

    const diasAteEvento = Math.floor(distanciaAteEvento / diaEmMS);
    const horasAteEvento = Math.floor((distanciaAteEvento % diaEmMS) / horasEmMS);
    const minutosAteEvento = Math.floor((distanciaAteEvento % horasEmMS) / minutosEmMS);
    const segundosAteEvento = Math.floor((distanciaAteEvento % minutosEmMS) / 1000);

    document.getElementById('contador').innerHTML = `${diasAteEvento}d ${horasAteEvento}h ${minutosAteEvento}m ${segundosAteEvento}s`

    if(distanciaAteEvento < 0){
        clearInterval(contaHora);

        document.getElementById('contador').innerHTML = 'EVENTO JÁ ENCERRADO!!!'
    }

}, 1000);