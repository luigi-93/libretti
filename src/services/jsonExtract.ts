

export const jsonExtract = (json: any) => {

    const responsabile = json.SchedaIdentificativa?.ResponsabileImpianto;

    const nome = responsabile?.nome;
    const cognome = responsabile?.cognome;
    const ragioneSociale = responsabile?.RagioneSociale;
    const nomecognome = (nome || cognome) 
        ? `${nome || ''} ${cognome || ''}`.trim()
        : ragioneSociale || 'null';

    
    const caldaia = json.Generatori?.GruppiTermici_Caldaie?.[0]?.SituazioneIniziale;
    const verifica = json.RisultatiVerifichePeriodiche?.VerificheGruppiTermici_Caldaie?.GruppoTermico?.[0]?.Verifiche?.[0];
    const valoriMisurati = verifica?.ValoriMisurati;
    const valoriCalcolati = verifica?.ValoriCalcolati;


    return {
        nomecongnome: nomecognome || 'null',
        nome: nome || 'null',
        cognome: cognome || 'null', 
        
        dataIntervento: json.SchedaIdentificativa?.TipologiaIntervento?.Data || 'null',
        via: json.SchedaIdentificativa?.UbicazioneDestinazioneEdificio?.Indirizzo|| 'null',
        numero: json.SchedaIdentificativa?.UbicazioneDestinazioneEdificio?.NumeroCivico || 'null',
        comune: json.SchedaIdentificativa?.UbicazioneDestinazioneEdificio?.Comune || 'null',
        categoriaEdificio: json.SchedaIdentificativa?.UbicazioneDestinazioneEdificio?.CategoriaEdificio || 'null',

        // Dettagli caldaia
        gruppoTermico: caldaia?.Fabbricante || 'null',
        modello: caldaia?.Modello || 'null',
        matricola: caldaia?.Matricola || 'null',
        combustibile: caldaia?.Combustibile || 'null',

        // Analisi combustione
        data: verifica?.data || 'null',
        portaTermicaEffettiva: verifica?.PortataTermicaEffettiva || 'null',
        temperaturafumi: valoriMisurati?.TemperaturaFumi || 'null',
        temperaturaAria: valoriMisurati?.TemperaturaAria || 'null',
        percentualeO2: valoriMisurati?.PercentualeO2 || 'null',
        percentualeCO2: valoriMisurati?.PercentualeCO2 || 'null',
        percentualeCO: valoriMisurati?.ConcentrazioneCO || 'null',  
        valoriCalcolati: valoriCalcolati?.ConcentrazioneCO || 'null',
        rendimentoCombustione: valoriCalcolati?.RendimentoCombustione || 'null'
    }
}