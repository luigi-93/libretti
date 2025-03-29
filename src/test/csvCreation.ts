import { saveAsCSV } from "../utils/fileWriter";


const testData = [{
    nomecongnome: 'Marotta Vittorio',
    nome: 'null',
    cognome: 'null',
    dataIntervento: '2022-11-08T04:00:00',
    via: 'Via Don Morosini',
    numero: '159',
    comune: 'LATINA',
    categoriaEdificio: 1,
    gruppoTermico: 'Beretta',
    modello: 'S. Ex 24 csi',
    matricola: 'ITAT4350495',
    combustibile: 'Metano',
    data: '2022-11-08T04:00:00',
    portaTermicaEffettiva: 26.7,
    temperaturafumi: 86.1,
    temperaturaAria: 24.2,
    percentualeO2: 16.5,
    percentualeCO2: 2.5,
    percentualeCO: '19',
    valoriCalcolati: '77',
    rendimentoCombustione: 99.1
  }];
  
saveAsCSV(testData, 'test.csv');