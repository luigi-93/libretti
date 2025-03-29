

export const jsonExtract = (json: any) => {

    const responsabile = json.SchedaIdentificativa?.ResponsabileImpianto;

    const nome = responsabile?.Nome;
    const cognome = responsabile?.Cognome;
    const ragioneSociale = responsabile?.RagioneSociale;

    if (!nome || !cognome || ragioneSociale) {
        ragioneSociale.split(' '),      
        nome === ragioneSociale[0],
        cognome === ragioneSociale[1]
    
    } 
           
    const caldaia = json.Generatori?.GruppiTermici_Caldaie?.[0]?.SituazioneIniziale;
    const verifica = json.RisultatiVerifichePeriodiche?.VerificheGruppiTermici_Caldaie?.GruppoTermico?.[0]?.Verifiche?.[0];
    const valoriMisurati = verifica?.ValoriMisurati;
    const valoriCalcolati = verifica?.ValoriCalcolati;


    return {
        nome: nome || 'null',
        cognome: cognome || 'null', 
        
        via: json.SchedaIdentificativa?.UbicazioneDestinazioneEdificio?.Indirizzo|| 'null',
        numero: json.SchedaIdentificativa?.UbicazioneDestinazioneEdificio?.NumeroCivico || 'null',
        comune: json.SchedaIdentificativa?.UbicazioneDestinazioneEdificio?.Comune || 'null',
        categoria_edificio: json.SchedaIdentificativa?.UbicazioneDestinazioneEdificio?.CategoriaEdificio || 'null',

        // Dettagli caldaia
        data_intervento: json.SchedaIdentificativa?.TipologiaIntervento?.Data || 'null',
        gruppoTermico: caldaia?.Fabbricante || 'null',
        modello: caldaia?.Modello || 'null',
        matricola: caldaia?.Matricola || 'null',
        combustibile: caldaia?.Combustibile || 'null',

        // Analisi combustione
        data_verifica: verifica?.data || 'null',
        portata_termica: verifica?.PortataTermicaEffettiva || 'null',
        temperatura_fumi: valoriMisurati?.TemperaturaFumi || 'null',
        temperatura_ria: valoriMisurati?.TemperaturaAria || 'null',
        percentuale_O2: valoriMisurati?.PercentualeO2 || 'null',
        percentuale_CO2: valoriMisurati?.PercentualeCO2 || 'null',
        percentuale_CO: valoriMisurati?.ConcentrazioneCO || 'null',  
        concentrazione_CO: valoriCalcolati?.ConcentrazioneCO || 'null',
        rendimento_combustione: valoriCalcolati?.RendimentoCombustione || 'null'
    }
}