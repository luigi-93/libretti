import { jsonExtract } from "../services/jsonExtract"

const sampledata = 
    {
        "NominaTerzoResponsabileEsercizioManutenzione_Compilato": false,
        "SistemaAccumulo_Compilato": false,
        "ImpiantiVentilazioneMeccanicaControllata_Compilato": false,
        "InterventiControlloEfficienzaEnergetica_Compilato": true,
        "RisultatiIspezioniPeriodiche_Compilato": false,
        "IDLibretto": 0,
        "Revisione": null,
        "Operatore": null,
        "DataModifica": "2022-11-23T13:58:30.095",
        "TipoLibrettoCode": "",
        "CodCatastoImpianto": "",
        "SchedaIdentificativa": {
            "SoggettiImpianto": null,
            "SottoponibileDPR412": false,
            "DataInstallazioneSpecified": false,
            "DataCostruzioneSpecified": false,
            "DataRottamazioneSpecified": false,
            "DataAttivazioneSpecified": false,
            "TipologiaIntervento": {
                "Compilato": false,
                "Data": "2022-11-08T04:00:00",
                "TipoIntervento": 3
            },
            "Compilato": false,
            "UbicazioneDestinazioneEdificio": {
                "Compilato": false,
                "SottoponibileDPR412Specified": false,
                "Indirizzo": "Via Don Morosini",
                "NumeroCivico": "159",
                "Palazzo": "",
                "Scala": "",
                "CodCatasto": null,
                "CAPComune": "04100",
                "ISTATComune": null,
                "Localita": null,
                "Interno": "",
                "Comune": "LATINA",
                "Comune_Istat": "",
                "Provincia": "LT",
                "SingolaUnitaImmobiliare": true,
                "SingolaUnitaImmobiliareSpecified": true,
                "CategoriaEdificio": 1,
                "VolumeLordoRiscaldatoSpecified": false,
                "VolumeLordoRaffrescatoSpecified": false,
                "Piano": "",
                "CatastoSezione": "",
                "CatastoFoglio": "",
                "CatastoParticella": "",
                "CatastoSubalterno": "",
                "CatastoIdentificativo": "",
                "PRiconsegnaEnergiaEl": "",
                "PRiconsegnaCombustibile": "",
                "AttestatoEnergetico": "",
                "AttestatoAnno": null,
                "AttestatoChiave": null
            },
            "ServiziSvolti": {
                "Compilato": false,
                "PotenzaUtileACSSpecified": false,
                "PotenzaUtileInvernaleSpecified": false,
                "PotenzaUtileEstivaSpecified": false,
                "Altro": null
            },
            "TipologiaFluidoVettore": {
                "Compilato": false,
                "TipoAcqua": false,
                "TipoAria": false,
                "TipoAltro": false,
                "DescrizioneAltro": null
            },
            "TipologiaGeneratori": {
                "Compilato": false,
                "GeneratoreACombustione": false,
                "PompaDiCalore": false,
                "MacchinaFrigorifera": false,
                "TeleRiscaldamento": false,
                "TeleRaffrescamento": false,
                "CogenerazioneTrigenerazione": false,
                "Altro": "",
                "Integrazione": {
                    "SolareTermico": {
                        "SuperficiePannelli": 0.0
                    },
                    "Altro": {
                        "Descrizione": null,
                        "PotenzaUtile": 0.0
                    },
                    "Destinazione": {
                        "ClimatizzazioneInvernale": false,
                        "ClimatizzazioneEstiva": false,
                        "ProduzioneACS": false,
                        "Altro": ""
                    }
                }
            },
            "ResponsabileImpianto": {
                "Compilato": false,
                "Cognome": null,
                "Nome": null,
                "CodiceFiscale": null,
                "PostaElettronica": null,
                "PostaCertificata": null,
                "RagioneSociale": "Marotta Vittorio",
                "PartitaIVA": null,
                "Firma": null,
                "Tipologia": 1,
                "TipologiaSpecified": true,
                "Comune": "LATINA",
                "Indirizzo": "Via Don Morosini",
                "CAP": null,
                "NumeroCivico": "159",
                "Provincia": "LT",
                "NominatoTerzoResponsabile": false
            }
        },
        "TrattamentoAcqua": {
            "Compilato": false,
            "ContenutoAcquaImpiantoSpecified": false,
            "DurezzaTotaleAcquaSpecified": false,
            "TrattamentoACS": null,
            "TrattamentoClimatizzazioneInvernale": null,
            "TrattamentoClimatizzazioneEstiva": null
        },
        "NominaTerzoResponsabileEsercizioManutenzione": [],
        "Generatori": {
            "Compilato": false,
            "GruppiTermici_Caldaie_Compilato": false,
            "Bruciatori_Compilato": false,
            "Recuperatori_CondensatoriLatoFumi_Compilato": false,
            "MacchineFrigorifere_PompeDiCalore_Compilato": false,
            "ScambiatoriCaloreSottostazioneTeleriscaldamento_Teleraffrescamento_Compilato": false,
            "Cogeneratori_Trigeneratori_Compilato": false,
            "CampiSolariTermici_Compilato": false,
            "AltriGeneratori_Compilato": false,
            "GruppiTermici_Caldaie": [
                {
                    "SituazioneIniziale": {
                        "DataCostruzioneSpecified": false,
                        "Tiraggio": 0,
                        "TiraggioSpecified": true,
                        "IsBiocombustibile": false,
                        "Fabbricante": "Beretta",
                        "Modello": "S. Ex 24 csi",
                        "Matricola": "ITAT4350495",
                        "Combustibile": "Metano",
                        "FluidoTermovettore": "",
                        "PotenzaTermicaUtile": 0.0,
                        "RendimentoTermicoUtile": 0.0,
                        "Tipo": 0,
                        "NumAnalisiFumoPreviste": "",
                        "Tipologia": 0,
                        "TipologiaSpecified": true,
                        "TipologiaAltro": null,
                        "Destinazione": {
                            "ClimatizzazioneInvernale": true,
                            "ClimatizzazioneEstiva": false,
                            "ProduzioneACS": true,
                            "Altro": null
                        },
                        "dataInstallazione": "1999-04-02T00:00:00",
                        "dataDismissioneSpecified": false
                    },
                    "Sostituzione": null,
                    "posizione": "1"
                }
            ],
            "Bruciatori": [],
            "Recuperatori_CondensatoriLatoFumi": [],
            "MacchineFrigorifere_PompeDiCalore": [],
            "ScambiatoriCaloreSottostazioneTeleriscaldamento_Teleraffrescamento": [],
            "Cogeneratori_Trigeneratori": [],
            "CampiSolariTermici": [],
            "AltriGeneratori": []
        },
        "SistemiRegolazioneContabilizzazione": {
            "Compilato": false,
            "RegolazionePrimaria": {
                "Compilato": false,
                "TipoRegolazioneONOFF": false,
                "TipoRegolazioneCurvaIntegrata": false,
                "TipoRegolazioneCurvaIndipendente": false,
                "TipoRegolazioneValvoleRegolazione": false,
                "TipoRegolazioneMultigradino": false,
                "TipoRegolazioneAInverter": false,
                "TipoRegolazioneAltro": false,
                "SistemaRegolazione": null,
                "ValvoleRegolazione": null,
                "AltroSistema": null
            },
            "RegolazioneSingoloAmbienteDiZona": {
                "Compilato": false,
                "TipoTermostatoOnOff": false,
                "TipoTermostatoProporzionale": false,
                "TipoEntalpico": false,
                "TipoPortataAriaVariabile": false,
                "TipoTermostatoOnOffUA": false,
                "TipoTermostatoProporzionaleUA": false,
                "PresenzaValvoleTermostaticheSpecified": false,
                "PresenzaValvoleDueVieSpecified": false,
                "PresenzaValvoleTreVieSpecified": false,
                "Note": null
            },
            "SistemiTeleletturaTelegestione": null,
            "Contabilizzazione": null
        },
        "SistemiDistribuzione": {
            "TipoDistribuzione": {
                "Compilato": false,
                "TipoVerticale": false,
                "TipoOrizzontale": false,
                "TipoCanaliDAria": false,
                "TipoAltro": false,
                "DescrizioneAltro": null
            },
            "CoibentazioneReteDistribuzione": {
                "Compilato": false,
                "PresenteSpecified": false,
                "Note": null
            },
            "VasiEspansione": null,
            "PompeCircolazione": null
        },
        "SistemaEmissione": {
            "Compilato": false,
            "RadiatoriSpecified": false,
            "TermoconvettoriSpecified": false,
            "VentilconvettoriSpecified": false,
            "PannelliRadiantiSpecified": false,
            "BocchetteSpecified": false,
            "StrisceRadiantiSpecified": false,
            "TraviFreddeSpecified": false,
            "AltroDescrizione": null
        },
        "SistemaAccumulo": [],
        "AltriComponentiImpianto": {
            "Compilato": false,
            "TorriEvaporative_Compilato": false,
            "RaffreddatoriDiLiquido_Compilato": false,
            "ScambiatoriDiCalore_Compilato": false,
            "CircuitiInterrati_Compilato": false,
            "UnitaTrattamentoAria_Compilato": false,
            "RecuperatoriDiCalore_Compilato": false,
            "TorriEvaporative": null,
            "RaffreddatoriDiLiquido": null,
            "ScambiatoriDiCalore": null,
            "CircuitiInterrati": null,
            "UnitaTrattamentoAria": null,
            "RecuperatoriDiCalore": null
        },
        "ImpiantiVentilazioneMeccanicaControllata": [],
        "RisultatiVerifichePeriodiche": {
            "Compilato": false,
            "VerificheGruppiTermici_Caldaie": {
                "GruppoTermico": [
                    {
                        "RiferimentoNormativo": 0,
                        "RiferimentoNormativoAltro": null,
                        "Verifiche": [
                            {
                                "numero": "0",
                                "PortataTermicaEffettiva": 26.70,
                                "ValoriMisurati": {
                                    "TemperaturaFumi": 86.1,
                                    "TemperaturaAria": 24.2,
                                    "PercentualeO2": 16.50,
                                    "PercentualeCO2": 2.50,
                                    "NOx": 0.0,
                                    "IndiceBacharach": {
                                        "M1": "0",
                                        "M2": "0",
                                        "M3": "0"
                                    },
                                    "ConcentrazioneCO": "19",
                                    "PortataCombustibile": {
                                        "Valore": 0.00,
                                        "UM": 0
                                    }
                                },
                                "ValoriCalcolati": {
                                    "ConcentrazioneCO": "77",
                                    "RendimentoCombustione": 99.1
                                },
                                "Verifiche": {
                                    "IndiceBacharach": true,
                                    "IndiceBacharachSpecified": true,
                                    "ConcentrazioneCO": true,
                                    "RendimentoCombustioneMinimoLegge": 90.00,
                                    "RendimentoCombustione": true
                                },
                                "Firma": {
                                    "Cognome": "Marangon",
                                    "Nome": "Roberto"
                                },
                                "data": "2022-11-08T04:00:00"
                            }
                        ],
                        "posizione": "1"
                    }
                ],
                "InterventiManutenzione": null
            },
            "VerificheMacchineFrigo_PompeDiCalore": null,
            "VerificheScambiatoriCaloreStazioniTelerisc_Teleraff": null,
            "VerificheCogeneratori_Trigeneratori": null
        },
        "InterventiControlloEfficienzaEnergetica": [
            {
                "Compilato": false,
                "RagioneSociale": "SANTORI MARCO srl",
                "CCIAA": "03069360596",
                "TipoAllegato": "1",
                "Raccomandazioni": false,
                "Prescrizioni": false,
                "data": "2022-11-08T04:00:00"
            }
        ],
        "RisultatiIspezioniPeriodiche": [],
        "RegistrazioniConsumi": {
            "Compilato": false,
            "ConsumoCombustibile_Compilato": false,
            "ConsumoElettricita_Compilato": false,
            "ConsumoProdottiChimiciTrattamentoAcqua_Compilato": false,
            "ConsumoCombustibile": [],
            "ConsumoElettricita": [],
            "ConsumoAcquaReintegro": {
                "Compilato": false,
                "UnitaMisura": null,
                "Lettura": []
            },
            "ConsumoProdottiChimiciTrattamentoAcqua": []
        },
        "versione": "1.2.0"
    }

const extract = jsonExtract(sampledata);
console.log(extract);