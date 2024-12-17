import { Countdown } from "./countdown.js";

const tempoParaONatal = new Countdown('24 December 2024 23:59:59 GMT-0300')
const tempoParaOAnoNovo = new Countdown('31 December 2024 23:59:59 GMT-0300')


setInterval(() => {
    console.log(tempoParaOAnoNovo.total)
}, 1000)