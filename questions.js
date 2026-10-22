/*
 * DATABASE DOMANDE — Economia e Organizzazione Aziendale
 * ------------------------------------------------------------------
 * Struttura: DATA = [ capitolo, capitolo, ... ]
 *
 * CAPITOLO
 *   code   codice univoco (NON modificarlo dopo l'uso: è la chiave dei badge su Firestore)
 *   title  titolo mostrato nella Home
 *   q      elenco delle domande
 *
 * DOMANDA
 *   s   testo della domanda
 *   o   opzioni di risposta (l'ordine qui è quello originale)
 *   a   indice della risposta CORRETTA in "o" (parte da 0: 0 = prima opzione)
 *   p   (opz.) 1 = testo preformattato (calcoli/tabelle), a capo e spazi mantenuti
 *   c   (opz.) contesto/testo comune mostrato sopra la domanda
 *   d   (opz.) 1 = domanda che richiede calcoli
 *   v   (opz.) 1 = risposta ricostruita, mostra l'avviso "da verificare"
 *
 * Per aggiungere una domanda: copia un blocco { ... }, incollalo dentro "q"
 * del capitolo giusto, e ricordati la virgola tra i blocchi.
 * Gli id interni (capitolo.posizione) sono generati da index.html.
 */

export const DATA = [

  // ═══════════════════════════════════════════════════════════════
  // FC0 — Concetti introduttivi  (18 domande)
  // ═══════════════════════════════════════════════════════════════
  {
    code: "FC0",
    title: "Concetti introduttivi",
    q: [
      // FC0 #1
      {
        s: "Quale delle seguenti affermazioni non esprime compiutamente il principio di economicità? Per operare nel tempo senza necessità di interventi di sostegno, un’azienda deve:",
        o: [
          "creare reddito netto positivo", // 0
          "avere ricavi superiori ai costi sostenuti per ottenerli", // 1
          "creare valore per i clienti", // 2  ← corretta
          "creare valore netto positivo", // 3
        ],
        a: 2,
        d: 1,
      },
      // FC0 #2
      {
        s: "Quale delle seguenti affermazioni è falsa?",
        o: [
          "Una funzione è un insieme di attività relativamente omogenee per tipo.", // 0
          "La funzione operations è una funzione di line.", // 1
          "La funzione finanza è una funzione di staff.", // 2
          "La funzione commerciale è una funzione di staff.", // 3  ← corretta
        ],
        a: 3,
      },
      // FC0 #3
      {
        s: "Quale delle seguenti affermazioni è falsa?",
        o: [
          "La funzione controllo di gestione è una funzione di staff.", // 0
          "La funzione ricerca & sviluppo è una funzione di staff.", // 1  ← corretta
          "La funzione commerciale è una funzione di line.", // 2
          "Una funzione è un insieme di attività relativamente omogenee per tipo.", // 3
        ],
        a: 1,
      },
      // FC0 #4
      {
        s: "Quale delle seguenti affermazioni è falsa?",
        o: [
          "La funzione amministrazione è una funzione di staff.", // 0
          "La funzione di direzione aziendale è una funzione di staff.", // 1  ← corretta
          "Una funzione è un insieme di attività relativamente omogenee per tipo.", // 2
          "La funzione ricerca & sviluppo è una funzione di line.", // 3
        ],
        a: 1,
      },
      // FC0 #5
      {
        s: "Quale fra le seguenti (sotto)funzioni non è di line?",
        o: [
          "produzione", // 0
          "logistica", // 1
          "vendite", // 2
          "amministrazione", // 3  ← corretta
        ],
        a: 3,
      },
      // FC0 #6
      {
        s: "Quale fra le seguenti (sotto)funzioni non è di staff?",
        o: [
          "finanza", // 0
          "sistemi informativi", // 1
          "marketing", // 2  ← corretta
          "controllo di gestione", // 3
        ],
        a: 2,
      },
      // FC0 #7
      {
        s: "La capacità di un’azienda di raggiungere gli obiettivi prefissati è espressa dal concetto di:",
        o: [
          "efficienza", // 0
          "efficacia", // 1  ← corretta
          "nessuna delle due", // 2
          "entrambe", // 3
        ],
        a: 1,
      },
      // FC0 #8
      {
        s: "La percentuale di consegne puntuali è un indicatore diretto di:",
        o: [
          "efficienza", // 0
          "flessibilità", // 1
          "efficacia", // 2  ← corretta
          "nessuna delle tre", // 3
        ],
        a: 2,
        d: 1,
      },
      // FC0 #9
      {
        s: "La percentuale di pezzi scartati è un indicatore inverso di:",
        o: [
          "efficienza soltanto", // 0
          "efficacia soltanto", // 1
          "nessuna delle due", // 2
          "entrambe", // 3  ← corretta
        ],
        a: 3,
        d: 1,
      },
      // FC0 #10
      {
        s: "Quale delle seguenti affermazioni è falsa? Un’azienda è tanto più flessibile quanto minore è il tempo che l’azienda impiega per:",
        o: [
          "aumentare il volume di produzione", // 0
          "produrre un prodotto", // 1  ← corretta
          "lanciare un nuovo prodotto", // 2
          "passare dalla produzione di un prodotto a quella di un altro", // 3
        ],
        a: 1,
      },
      // FC0 #11
      {
        s: "Il rapporto fra risultati ottenuti e risorse utilizzate definisce:",
        o: [
          "l’efficacia di un’organizzazione", // 0
          "l’efficienza di un’organizzazione", // 1  ← corretta
          "la flessibilità di un’organizzazione", // 2
        ],
        a: 1,
      },
      // FC0 #12
      {
        s: "Il rapporto fra risultati ottenuti e risultati programmati definisce:",
        o: [
          "l’efficacia di un’organizzazione", // 0  ← corretta
          "l’efficienza di un’organizzazione", // 1
          "la flessibilità di un’organizzazione", // 2
        ],
        a: 0,
      },
      // FC0 #13
      {
        s: "Se un’azienda nella trentaduesima settimana dell’anno realizza lo stesso output della settimana precedente usando meno input, si dice che l’azienda nella trentaduesima settimana è stata:",
        o: [
          "più efficace che nella settimana precedente", // 0
          "più efficiente che nella settimana precedente", // 1  ← corretta
          "più flessibile che nella settimana precedente", // 2
          "meno rigida che nella settimana precedente", // 3
        ],
        a: 1,
      },
      // FC0 #14
      {
        s: "Quale dei seguenti non è un concetto caratterizzante la definizione di organizzazione?",
        o: [
          "divisione del lavoro fra persone diverse", // 0
          "gerarchia", // 1
          "economicità", // 2  ← corretta
          "coordinamento del lavoro svolto da persone diverse", // 3
        ],
        a: 2,
      },
      // FC0 #15
      {
        s: "Quale delle seguenti affermazioni è falsa?",
        o: [
          "Le funzioni di line comprendono le attività che creano valore per il cliente.", // 0
          "Le funzioni di staff comprendono le attività a supporto delle altre funzioni.", // 1
          "Le funzioni di staff offrono supporto solo alle funzioni di line.", // 2  ← corretta
        ],
        a: 2,
        d: 1,
      },
      // FC0 #16
      {
        s: "Quale delle seguenti affermazioni è vera?",
        o: [
          "Ogni funzione di staff offre supporto solo alle funzioni di line e alle altre funzioni di staff.", // 0
          "La funzione di direzione aziendale comprende le attività di definizione della strategia aziendale.", // 1  ← corretta
          "Funzioni diverse sono sempre svolte da persone diverse.", // 2
        ],
        a: 1,
        d: 1,
      },
      // FC0 #17
      {
        s: "Il concetto di flessibilità esprime la capacità di un’azienda di:",
        o: [
          "raggiungere gli obiettivi prefissati.", // 0
          "massimizzare il risultato raggiunto con le risorse disponibili.", // 1
          "cambiare rapidamente l’output.", // 2  ← corretta
        ],
        a: 2,
      },
      // FC0 #18
      {
        s: "Quale dei seguenti non è un indicatore diretto o inverso di efficienza?",
        o: [
          "La quantità di materia prima impiegata per realizzare un’unità di prodotto.", // 0  
          "Il rapporto fra il reddito netto generato da un’azienda e il capitale investito in azienda dai proprietari.", // 1
          "Il rapporto fra i costi effettivamente sostenuti e i costi che si prevedeva di sostenere.", // 2 ← corretta
        ],
        a: 2,
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════════
  // F1A — La funzione operations: il sistema produttivo  (12 domande)
  // ═══════════════════════════════════════════════════════════════
  {
    code: "F1A",
    title: "La funzione operations: il sistema produttivo",
    q: [
      // F1A #1
      {
        s: "Quale delle seguenti affermazioni è falsa?",
        o: [
          "La nozione di materiale include quella di materia prima.", // 0
          "La nozione di materiale include quella di semilavorato.", // 1
          "Tutti i materiali che l’azienda acquista all’esterno sono materie prime.", // 2  ← corretta
          "Un componente d’acquisto del prodotto è una materia prima.", // 3
        ],
        a: 2,
      },
      // F1A #2
      {
        s: "Quale delle seguenti affermazioni è falsa?",
        o: [
          "Le attività di fabbricazione alterano almeno una caratteristica fisica del materiale.", // 0
          "Le attività di assemblaggio uniscono due o più materiali separati.", // 1
          "Le attività di assemblaggio possono seguire o precedere le attività di fabbricazione.", // 2
          "Un sistema produttivo include sempre sia attività di fabbricazione che attività di assemblaggio.", // 3  ← corretta
        ],
        a: 3,
        d: 1,
      },
      // F1A #3
      {
        s: "Quale delle seguenti affermazioni è falsa?",
        o: [
          "I sistemi produttivi sono classificati in base alla natura del loro output.", // 0
          "I sistemi produttivi per processo non fanno in nessun caso attività di assemblaggio.", // 1  ← corretta
          "I sistemi produttivi sono classificati in base all’omogeneità del loro output nel tempo.", // 2
          "I sistemi produttivi a lotti sono caratterizzati da una varietà di prodotti maggiore dei sistemi produttivi a flusso.", // 3
        ],
        a: 1,
      },
      // F1A #4
      {
        s: "Quale delle seguenti affermazioni è vera?",
        o: [
          "I sistemi produttivi a prodotto singolo sono caratterizzati da assenza di varietà di prodotti.", // 0
          "I sistemi produttivi a flusso sono caratterizzati da una varietà di prodotti inferiore ai sistemi produttivi a lotti.", // 1  ← corretta
          "La differenza fra sistemi produttivi per parti e per processo sta nella presenza o meno di attività di assemblaggio.", // 2
          "I volumi unitari di produzione sono maggiori nei sistemi produttivi a prodotto singolo che nei sistemi a lotti.", // 3
        ],
        a: 1,
      },
      // F1A #5
      {
        s: "Quale delle seguenti affermazioni è vera?",
        o: [
          "Un layout per prodotto è adatto a un sistema produttivo a prodotto singolo.", // 0
          "Un layout per processo è adatto a un sistema produttivo a flusso.", // 1
          "Un layout a celle è adatto a un sistema produttivo a lotti.", // 2  ← corretta
        ],
        a: 2,
        d: 1,
      },
      // F1A #6
      {
        s: "Adottare un lay-out per prodotto significa:",
        o: [
          "raggruppare le macchine nello stabilimento in base al tipo di lavorazione che permettono di effettuare.", // 0
          "disporre le macchine nella sequenza prevista dal ciclo di produzione del prodotto.", // 1  ← corretta
          "creare delle divisioni aziendali (business unit) responsabili, ciascuna, di una linea di prodotti diversa.", // 2
          "raggruppare le macchine in celle dedicate, ciascuna, a una famiglia di prodotti diversa.", // 3
        ],
        a: 1,
      },
      // F1A #7
      {
        s: "Adottare un lay-out per processo significa:",
        o: [
          "raggruppare le macchine nello stabilimento in base al tipo di lavorazione che permettono di effettuare.", // 0  ← corretta
          "disporre le macchine nella sequenza prevista dal ciclo di produzione del prodotto.", // 1
          "creare delle divisioni aziendali (business unit) responsabili, ciascuna, di un processo primario.", // 2
          "raggruppare le macchine in celle dedicate, ciascuna, a una famiglia di prodotti diversa.", // 3
        ],
        a: 0,
      },
      // F1A #8
      {
        s: "Quale delle seguenti affermazioni è falsa?",
        o: [
          "Ceteris paribus, il tempo di attraversamento del sistema produttivo è maggiore in un layout per processo che in uno per prodotto.", // 0
          "Ceteris paribus, passare da un layout per processo a uno a celle permette di ridurre il tempo di attraversamento.", // 1
          "Una cella di produzione raggruppa tutte le macchine necessarie a produrre un insieme di prodotti simili dal punto di vista del ciclo di produzione.", // 2
          "Ceteris paribus, un layout per processo richiede più macchinari di uno per prodotto.", // 3  ← corretta
        ],
        a: 3,
      },
      // F1A #9
      {
        s: "Quale delle seguenti affermazioni è vera?",
        o: [
          "Un layout per prodotto è adatto a un sistema produttivo a prodotto singolo.", // 0
          "Un layout per processo è adatto a un sistema produttivo a flusso.", // 1
          "Un layout a celle è adatto a un sistema produttivo a prodotto singolo.", // 2
          "Un layout per prodotto è adatto a un sistema produttivo a flusso.", // 3  ← corretta
        ],
        a: 3,
      },
      // F1A #10
      {
        s: "La distinta base è:",
        o: [
          "la lista delle operazioni necessarie alla realizzazione di un prodotto.", // 0
          "un documento che mette in luce le caratteristiche distintive di base di un prodotto rispetto agli altri prodotti dell’azienda.", // 1
          "un documento che mette in luce le caratteristiche distintive di base di un prodotto rispetto ai prodotti della concorrenza.", // 2
          "un documento che elenca quali e quante materie prime e quali e quanti semilavorati sono utilizzati nella realizzazione di un’unità di un prodotto in condizioni operative standard.", // 3  ← corretta
        ],
        a: 3,
      },
      // F1A #11
      {
        s: "Con riferimento a un generico materiale presente nella distinta base di un certo prodotto finito, quale delle seguenti affermazioni non è sempre vera?",
        o: [
          "Il coefficiente d’impiego indica la quantità di materiale necessaria a realizzare un’unità del materiale padre in condizioni operative standard.", // 0
          "Il coefficiente d’impiego indica la quantità di materiale necessaria a realizzare un’unità del prodotto finito in condizioni operative standard.", // 1  ← corretta
          "Il coefficiente d’impiego è minore o eguale all’impiego unitario standard.", // 2
          "L’impiego unitario standard indica la quantità di materiale necessaria a realizzare un’unità di prodotto finito in condizioni operative standard.", // 3
        ],
        a: 1,
      },
      // F1A #12
      {
        s: "Il ciclo di produzione di un prodotto è:",
        o: [
          "l’elenco delle operazioni necessarie a realizzare il prodotto, senza un ordine preciso.", // 0
          "la sequenza delle operazioni necessarie a realizzare il prodotto.", // 1  ← corretta
          "la lista dei materiali necessari a realizzare il prodotto.", // 2
        ],
        a: 1,
        d: 1,
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════════
  // F1B — La funzione operations: dal sistema produttivo al sistema operativo  (30 domande)
  // ═══════════════════════════════════════════════════════════════
  {
    code: "F1B",
    title: "La funzione operations: dal sistema produttivo al sistema operativo",
    q: [
      // F1B #1
      {
        s: "Quale delle seguenti affermazioni è falsa?",
        o: [
          "In un sistema operativo, flusso fisico e flusso informativo hanno versi opposti.", // 0
          "Il flusso fisico va dai fornitori ai clienti.", // 1
          "Il flusso informativo governa il flusso fisico.", // 2
          "Il flusso informativo è sempre basato sulle richieste effettive dei clienti.", // 3  ← corretta
        ],
        a: 3,
      },
      // F1B #2
      {
        s: "La scelta della modalità di risposta al mercato riguarda:",
        o: [
          "come posizionare la propria offerta rispetto a quella dei concorrenti.", // 0
          "se utilizzare canali distributivi diretti o indiretti.", // 1
          "quali attività fare su previsione e quali su ordine nella sequenza “acquisto-fabbricazione-montaggio- spedizione”.", // 2  ← corretta
        ],
        a: 2,
      },
      // F1B #3
      {
        s: "Un sistema produttivo che “acquista i componenti del prodotto sulla base di previsioni di vendita e li assembla una volta che sono stati ricevuti gli ordini dei clienti” si definisce di tipo:",
        o: [
          "make-to-order", // 0
          "make-to-stock", // 1
          "assemble-to-order", // 2  ← corretta
          "purchase-to-order", // 3
        ],
        a: 2,
        d: 1,
      },
      // F1B #4
      {
        s: "Quale delle seguenti affermazioni è vera? Se i clienti sono disposti ad accettare un tempo di consegna pari al tempo necessario a svolgere le attività di assemblaggio e spedizione, allora:",
        o: [
          "L’azienda può rispondere al mercato in modalità purchase-to-order.", // 0
          "L’azienda può rispondere al mercato in modalità make-to-order.", // 1
          "L’azienda può rispondere al mercato in modalità make-to-stock.", // 2  ← corretta
        ],
        a: 2,
      },
      // F1B #5
      {
        s: "Quale delle seguenti affermazioni è falsa? Se i clienti sono disposti ad accettare un tempo di consegna pari al tempo necessario a svolgere le attività di assemblaggio e spedizione, allora:",
        o: [
          "L’azienda può rispondere al mercato in modalità make-to-stock.", // 0
          "L’azienda può rispondere al mercato in modalità assemble-to-order.", // 1  ← corretta
          "L’azienda può rispondere al mercato in modalità make-to-order.", // 2
        ],
        a: 1,
        d: 1,
      },
      // F1B #6
      {
        s: "Quale delle seguenti affermazioni è falsa? Se i clienti sono disposti ad accettare un tempo di consegna pari al tempo necessario a svolgere le attività di fabbricazione, assemblaggio e spedizione, allora:",
        o: [
          "L’azienda può rispondere al mercato in modalità make-to-order.", // 0
          "L’azienda può rispondere al mercato in modalità purchase-to-order.", // 1  ← corretta
          "L’azienda può rispondere al mercato in modalità make-to-stock.", // 2
        ],
        a: 1,
      },
      // F1B #7
      {
        s: "Quale delle seguenti iniziative aumenta il grado di integrazione verticale?",
        o: [
          "Diminuire la divisione verticale del lavoro all’interno dell’azienda.", // 0
          "Fare in proprio un’attività produttiva che in precedenza era svolta da terzi.", // 1  ← corretta
          "Migliorare lo scambio informativo e la collaborazione tra le funzioni aziendali.", // 2
        ],
        a: 1,
      },
      // F1B #8
      {
        s: "Quale delle seguenti iniziative aumenta il grado di integrazione verticale a monte?",
        o: [
          "Iniziare a produrre in proprio un componente che in precedenza veniva acquistato.", // 0  ← corretta
          "Passare da una strategia distributiva indiretta a una di distribuzione diretta.", // 1
          "Far fare la manutenzione dei propri macchinari a una ditta esterna.", // 2
        ],
        a: 0,
      },
      // F1B #9
      {
        s: "Quale delle seguenti iniziative aumenta il grado di integrazione verticale a valle?",
        o: [
          "Iniziare a produrre in proprio un componente che in precedenza veniva acquistato.", // 0
          "Distribuire in proprio i prodotti per i quali in precedenza si usava un fornitore di servizi logistici.", // 1  ← corretta
          "Far fare la manutenzione dei propri macchinari a una ditta esterna.", // 2
        ],
        a: 1,
      },
      // F1B #10
      {
        s: "Quale delle seguenti affermazioni è falsa?",
        o: [
          "La manutenzione ciclica permette di minimizzare i costi per ricambi.", // 0  ← corretta
          "La manutenzione degli impianti può avvenire secondo una politica di manutenzione correttiva.", // 1
          "La manutenzione degli impianti può avvenire secondo una politica di manutenzione preventiva.", // 2
        ],
        a: 0,
      },
      // F1B #11
      {
        s: "Quale delle seguenti affermazioni è falsa?",
        o: [
          "La manutenzione a guasto permette di minimizzare i costi per ricambi.", // 0
          "La manutenzione correttiva ha il solo obiettivo di minimizzare i costi di mancata produzione.", // 1  ← corretta
          "La manutenzione degli impianti può avvenire secondo una politica di manutenzione su sintomo.", // 2
        ],
        a: 1,
      },
      // F1B #12
      {
        s: "Quale delle seguenti affermazioni è falsa?",
        o: [
          "Il controllo dei materiali in ingresso rientra fra le attività di assicurazione della qualità.", // 0
          "La definizione dei piani di produzione rientra fra le attività della logistica.", // 1
          "La selezione dei fornitori rientra fra le attività di programmazione della produzione.", // 2  ← corretta
          "La gestione delle scorte di semilavorati rientra fra le attività della logistica.", // 3
        ],
        a: 2,
      },
      // F1B #13
      {
        s: "Le attività di assicurazione della qualità:",
        o: [
          "si limitano sempre e solo al controllo dei prodotti finiti.", // 0
          "si limitano sempre e solo al controllo dei prodotti finiti e dei materiali in ingresso.", // 1
          "possono riguardare prodotti finiti, materiali in ingresso e semilavorati.", // 2  ← corretta
        ],
        a: 2,
      },
      // F1B #14
      {
        s: "Quale delle seguenti affermazioni è falsa?",
        o: [
          "Le scorte di materie prime aiutano ad assicurare la regolare alimentazione dei reparti produttivi.", // 0
          "Le scorte di materie prime permettono di fronteggiare l’incertezza sulle prestazioni dei fornitori.", // 1
          "Le scorte di materie prime permettono di svincolare i ritmi di produzione di due reparti diversi.", // 2  ← corretta
        ],
        a: 2,
      },
      // F1B #15
      {
        s: "Le scorte di materie prime servono a:",
        o: [
          "far fronte a ritardi nell’avanzamento dei lavori.", // 0
          "svincolare i ritmi di produzione di due reparti diversi.", // 1
          "far fronte a ritardi nelle consegne da parte dei fornitori.", // 2  ← corretta
        ],
        a: 2,
      },
      // F1B #16
      {
        s: "Quale delle seguenti affermazioni è falsa?",
        o: [
          "Le scorte di sicurezza servono a sfruttare la possibilità di ottenere sconti quantità.", // 0  ← corretta
          "Le scorte di sicurezza servono a fronteggiare ordini dei clienti superiori alle previsioni.", // 1
          "Le scorte di sicurezza servono a fronteggiare i ritardi di consegna da parte dei fornitori.", // 2
        ],
        a: 0,
      },
      // F1B #17
      {
        s: "Quale delle seguenti affermazioni è falsa?",
        o: [
          "Le scorte di ciclo disaccoppiano nello spazio le attività di produzione e quelle di vendita.", // 0  ← corretta
          "Le scorte di ciclo disaccoppiano nel tempo le attività di produzione e quelle di vendita per effetto di lotti minimi di produzione e/o spedizione.", // 1
          "Le scorte anticipatorie disaccoppiano nel tempo le attività di produzione e quelle di vendita nel caso di stagionalità della domanda.", // 2
        ],
        a: 0,
      },
      // F1B #18
      {
        s: "Quale delle seguenti affermazioni è falsa?",
        o: [
          "Le scorte di transito servono a disaccoppiare il punto in cui si vende un prodotto dal punto in cui lo si produce.", // 0
          "Le scorte di sicurezza servono a fronteggiare l’incertezza sulle prestazioni del sistema produttivo.", // 1
          "Le scorte anticipatorie disaccoppiano nello spazio le attività di produzione e quelle di vendita.", // 2  ← corretta
        ],
        a: 2,
      },
      // F1B #19
      {
        s: "Quale delle seguenti affermazioni è falsa? La programmazione della produzione è un’attività tipica della (sotto)funzione:",
        o: [
          "logistica", // 0  ← corretta
          "operations", // 1
          "controllo di gestione", // 2
        ],
        a: 0,
      },
      // F1B #20
      {
        s: "Le attività della programmazione della produzione includono:",
        o: [
          "monitorare l’efficienza dei reparti.", // 0
          "bilanciare una linea di montaggio.", // 1
          "definire che cosa, quanto e quando produrre in funzione delle esigenze commerciali.", // 2  ← corretta
          "programmare il livello di qualità dei prodotti.", // 3
        ],
        a: 2,
        d: 1,
      },
      // F1B #21
      {
        s: "La gestione dei magazzini di prodotti finiti è un’attività tipica della (sotto)funzione:",
        o: [
          "marketing", // 0
          "logistica", // 1  ← corretta
          "produzione", // 2
          "vendite", // 3
        ],
        a: 1,
      },
      // F1B #22
      {
        s: "La gestione dei trasporti è un’attività tipica della (sotto)funzione:",
        o: [
          "marketing", // 0
          "vendite", // 1
          "logistica", // 2  ← corretta
          "amministrazione", // 3
        ],
        a: 2,
      },
      // F1B #23
      {
        s: "La ricerca e selezione dei fornitori è un’attività tipica della (sotto)funzione:",
        o: [
          "marketing", // 0
          "produzione", // 1
          "acquisti", // 2  ← corretta
          "amministrazione", // 3
        ],
        a: 2,
      },
      // F1B #24
      {
        s: "Quale delle seguenti affermazioni è falsa?",
        o: [
          "La negoziazione delle condizioni di fornitura rientra fra le attività di programmazione della produzione.", // 0  ← corretta
          "Il controllo dei prodotti finiti rientra fra le attività di assicurazione della qualità.", // 1
          "La scelta dei sistemi di trasporto interno rientra fra le attività della logistica manifatturiera.", // 2
          "L’emissione degli ordini di fornitura rientra fra le attività della logistica in entrata.", // 3
        ],
        a: 0,
      },
      // F1B #25
      {
        s: "Quale delle seguenti affermazioni è falsa?",
        o: [
          "Un sistema di trasporto interno rigido è adatto a un layout per prodotto.", // 0
          "Un sistema di trasporto interno rigido è adatto a un layout per processo.", // 1  ← corretta
          "Un sistema di trasporto interno rigido è adatto a un layout a celle.", // 2
        ],
        a: 1,
      },
      // F1B #26
      {
        s: "Quale delle seguenti affermazioni è vera?",
        o: [
          "La logica tradizionale nella selezione dei fornitori punta a minimizzare i costi di acquisto.", // 0  ← corretta
          "La logica tradizionale nella selezione dei fornitori porta a relazioni stabili con i fornitori.", // 1
          "La logica tradizionale nella selezione dei fornitori porta ad avere pochi fornitori per ciascun materiale di acquisto.", // 2
        ],
        a: 0,
      },
      // F1B #27
      {
        s: "Quale delle seguenti affermazioni è falsa?",
        o: [
          "La logistica in entrata si occupa della selezione e valutazione dei fornitori.", // 0
          "La logistica in entrata si occupa della definizione del piano degli acquisti e dell’emissione degli ordini di fornitura.", // 1
          "La logistica in entrata si occupa dell’acquisto delle materie prime soltanto.", // 2  ← corretta
        ],
        a: 2,
      },
      // F1B #28
      {
        s: "Quale delle seguenti affermazioni è falsa?",
        o: [
          "Un piano di produzione è un documento che definisce degli obiettivi di produzione per il futuro.", // 0
          "Un piano di produzione definisce obiettivi di produzione tempificati.", // 1
          "Un piano di produzione si basa sempre e solo su previsioni circa le richieste del mercato.", // 2  ← corretta
        ],
        a: 2,
      },
      // F1B #29
      {
        s: "Quale delle seguenti affermazioni è falsa?",
        o: [
          "Una modalità di risposta al mercato make-to-stock è adatta a un sistema produttivo a prodotto singolo.", // 0  ← corretta
          "La scelta della modalità di risposta al mercato dipende dalla varietà di prodotti offerta.", // 1
          "La scelta della modalità di risposta al mercato è vincolata dal rapporto fra il tempo richiesto dalle attività di approvvigionamento, produzione e distribuzione e il tempo di consegna richiesto dai clienti.", // 2
        ],
        a: 0,
      },
      // F1B #30
      {
        s: "Quale delle seguenti affermazioni è falsa?",
        o: [
          "I servomezzi sono gli impianti di servizio alla produzione.", // 0
          "Gli impianti di servizio non svolgono attività di trasformazione.", // 1
          "Gli impianti di movimentazione interna dei materiali sono impianti di servizio.", // 2
          "La manutenzione deve assicurare il funzionamento degli impianti produttivi soltanto.", // 3  ← corretta
        ],
        a: 3,
        d: 1,
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════════
  // F2 — La funzione di direzione aziendale  (17 domande)
  // ═══════════════════════════════════════════════════════════════
  {
    code: "F2",
    title: "La funzione di direzione aziendale",
    q: [
      // F2 #1
      {
        s: "Quale delle seguenti affermazioni è falsa?",
        o: [
          "L’elasticità della domanda rispetto al prezzo misura la sensibilità della domanda di un bene a variazioni del prezzo del bene stesso.", // 0
          "Se il prezzo di un bene a domanda anelastica aumenta del 10%, la domanda del bene varia di meno del 10%.", // 1
          "L’elasticità della domanda rispetto al prezzo è definita come il rapporto fra la variazione percentuale della domanda e la variazione percentuale del prezzo.", // 2  ← corretta
        ],
        a: 2,
      },
      // F2 #2
      {
        s: "Con riferimento a un bene fornito da un monopolista, quale delle seguenti affermazioni è falsa?",
        o: [
          "Se la domanda è elastica, un incremento del prezzo del bene porta a una riduzione dei ricavi della vendita del bene.", // 0
          "Se la domanda è elastica, un decremento del prezzo del bene porta a un incremento dei ricavi della vendita del bene.", // 1
          "Se la domanda è anelastica, i ricavi della vendita del bene variano in senso opposto al prezzo del bene.", // 2  ← corretta
        ],
        a: 2,
      },
      // F2 #3
      {
        s: "Quale delle seguenti affermazioni è falsa?",
        o: [
          "L’elasticità incrociata della domanda rispetto al prezzo esprime, in valore assoluto, la variazione percentuale della domanda del bene A per effetto di una certa variazione percentuale del prezzo del bene B.", // 0
          "Prodotti che appartengono alla stessa area strategica d’affari sono caratterizzati da valori dell’elasticità incrociata della domanda rispetto al prezzo nulli o bassi.", // 1  ← corretta
          "Prodotti che appartengono ad aree strategiche d’affari diverse sono caratterizzati da valori dell’elasticità incrociata della domanda rispetto al prezzo nulli o bassi.", // 2
        ],
        a: 1,
      },
      // F2 #4
      {
        s: "Quale delle seguenti affermazioni è falsa?",
        o: [
          "L’elasticità incrociata della domanda rispetto al prezzo esprime, in valore assoluto, la variazione percentuale della domanda del bene A per effetto di una certa variazione percentuale del prezzo del medesimo bene A.", // 0  ← corretta
          "Prodotti che appartengono ad aree strategiche d’affari diverse sono caratterizzati da valori dell’elasticità incrociata della domanda rispetto al prezzo nulli o bassi.", // 1
          "Prodotti che appartengono alla stessa area strategica d’affari sono caratterizzati da valori elevati dell’elasticità incrociata della domanda rispetto al prezzo.", // 2
        ],
        a: 0,
      },
      // F2 #5
      {
        s: "Quale delle seguenti affermazioni è falsa?",
        o: [
          "Il numero di prodotti finiti che compongono una certa linea di prodotti prende il nome di profondità della linea.", // 0
          "Il numero di prodotti che compongono la gamma di prodotti di un’azienda prende il nome di ampiezza della gamma.", // 1  ← corretta
          "Il numero di prodotti che compongono la gamma di prodotti di un’azienda prende il nome di estensione della gamma.", // 2
          "A parità di estensione della gamma, al crescere dell’ampiezza della gamma diminuisce la profondità media delle linee di prodotto.", // 3
        ],
        a: 1,
      },
      // F2 #6
      {
        s: "Quale delle seguenti affermazioni è falsa?",
        o: [
          "La redditività del capitale investito in una certa area strategica d’affari è un indicatore di efficacia.", // 0
          "Ceteris paribus, l’attrattività di una certa area strategica d’affari cresce al crescere della redditività del capitale investito in quell’area.", // 1
          "Ceteris paribus, l’attrattività di una certa area strategica d’affari cresce al crescere della stabilità della redditività del capitale investito in quell’area.", // 2  ← corretta
        ],
        a: 2,
        d: 1,
      },
      // F2 #7
      {
        s: "Quale delle seguenti affermazioni è falsa?",
        o: [
          "Il potere contrattuale dei clienti e il potere contrattuale dei fornitori sono alcuni dei fattori che influenzano l’attrattività di una certa area strategica d’affari.", // 0
          "Una certa area strategica d’affari è tanto più attrattiva quanto più alto è il potere contrattuale dei clienti in quell’area.", // 1  ← corretta
          "L’attrattività di una certa area strategica d’affari dipende dalla minaccia di prodotti sostitutivi.", // 2
        ],
        a: 1,
      },
      // F2 #8
      {
        s: "Quale delle seguenti affermazioni è falsa?",
        o: [
          "Il modello della concorrenza allargata è utilizzato per valutare l’attrattività di una certa area strategica d’affari.", // 0
          "Il potere contrattuale dei clienti e il potere contrattuale dei fornitori sono i soli fattori che influenzano l’attrattività di una certa area strategica d’affari.", // 1  ← corretta
          "Una certa area strategica d’affari è tanto più attrattiva quanto più bassa è l’intensità della concorrenza fra le imprese che operano in quell’area.", // 2
        ],
        a: 1,
      },
      // F2 #9
      {
        s: "Quale delle seguenti affermazioni è falsa?",
        o: [
          "L’attrattività di una certa area strategica d’affari dipende dal livello delle barriere all’entrata di nuove imprese nell’area.", // 0
          "Una certa area strategica d’affari è tanto più attrattiva quanto più alto è il potere contrattuale dei fornitori in quell’area.", // 1  ← corretta
          "Il modello della concorrenza allargata è chiamato anche modello delle 5 forze.", // 2
        ],
        a: 1,
      },
      // F2 #10
      {
        s: "Quale delle seguenti affermazioni è falsa?",
        o: [
          "La matrice “tasso di sviluppo della domanda – quota di mercato” è utilizzata per analizzare il bilanciamento del portafoglio di prodotti di un’azienda.", // 0
          "La matrice “tasso di sviluppo della domanda – quota di mercato” assume che al crescere del tasso di sviluppo della domanda di una certa linea di prodotti aumentino i fabbisogni finanziari della linea stessa.", // 1
          "La matrice “tasso di sviluppo della domanda – quota di mercato” è utilizzata per valutare l’attrattività di una certa area strategica d’affari.", // 2  ← corretta
          "La matrice “tasso di sviluppo della domanda – quota di mercato” assume che al crescere della quota di mercato di una certa linea di prodotti crescano le risorse finanziarie generate dalla linea stessa.", // 3
          "Linee di prodotti caratterizzate da elevato tasso di sviluppo della domanda e bassa quota di mercato dovrebbero essere sostenute finanziariamente da linee con basso tasso di sviluppo ed elevata quota di mercato.", // 4
        ],
        a: 2,
      },
      // F2 #11
      {
        s: "Quale delle seguenti affermazioni è falsa?",
        o: [
          "La strategia competitiva definisce come ottenere un vantaggio competitivo duraturo rispetto ai concorrenti.", // 0
          "Per vantaggio competitivo duraturo s’intende una redditività stabilmente superiore alla media dei concorrenti nel lungo periodo.", // 1
          "La strategia competitiva è sempre definita a livello di intera azienda.", // 2  ← corretta
        ],
        a: 2,
      },
      // F2 #12
      {
        s: "Quale delle seguenti affermazioni è falsa?",
        o: [
          "Le strategie funzionali dovrebbero essere coerenti con la strategia competitiva.", // 0
          "La focalizzazione è una delle tre strategie competitive di base.", // 1
          "Una strategia di differenziazione punta a creare un vantaggio competitivo duraturo attraverso costi più bassi dei concorrenti.", // 2  ← corretta
        ],
        a: 2,
      },
      // F2 #13
      {
        s: "Quale delle seguenti affermazioni è falsa?",
        o: [
          "Una strategia di differenziazione punta a creare un vantaggio competitivo duraturo offrendo qualcosa che sia percepito dai potenziali clienti come unico rispetto a quanto offerto dai concorrenti.", // 0
          "La leadership di costo è una delle tre strategie competitive di base.", // 1
          "In una strategia di focalizzazione, la fonte del vantaggio competitivo non può mai essere un livello dei costi inferiore ai concorrenti.", // 2  ← corretta
        ],
        a: 2,
      },
      // F2 #14
      {
        s: "Quale delle seguenti affermazioni è vera?",
        o: [
          "Quando aziende concorrenti attuano strategie di differenziazione, si parla di concorrenza monopolistica.", // 0  ← corretta
          "Una strategia di differenziazione porta a una competizione sul prezzo.", // 1
          "Un’azienda che attua una strategia di differenziazione è price taker.", // 2
        ],
        a: 0,
      },
      // F2 #15
      {
        s: "Quale delle seguenti affermazioni è sicuramente vera?",
        o: [
          "Una strategia di leadership di costo è realizzata tramite economie di scala.", // 0
          "Una strategia di leadership di costo porta a praticare un prezzo più basso dei concorrenti.", // 1  ← corretta
          "Una strategia di leadership di costo consiste nell’avere un livello complessivo di costi più basso dei concorrenti.", // 2
        ],
        a: 1,
        d: 1,
      },
      // F2 #16
      {
        s: "Quale delle seguenti affermazioni è sicuramente vera?",
        o: [
          "Una strategia di differenziazione è realizzata tramite la personalizzazione del prodotto.", // 0
          "Una strategia di differenziazione permette di far pagare un price premium ai clienti.", // 1  ← corretta
          "La strategia di differenziazione è anche detta strategia di nicchia.", // 2
        ],
        a: 1,
        d: 1,
      },
      // F2 #17
      {
        s: "La matrice “tasso di sviluppo della domanda – quota di mercato” è utile per definire:",
        o: [
          "la strategia competitiva", // 0
          "la strategia di marketing", // 1
          "la strategia di portafoglio", // 2  ← corretta
          "la strategia di business", // 3
        ],
        a: 2,
        d: 1,
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════════
  // F3A — La funzione commerciale: marketing strategico e operativo; leva prodotto  (18 domande)
  // ═══════════════════════════════════════════════════════════════
  {
    code: "F3A",
    title: "La funzione commerciale: marketing strategico e operativo; leva prodotto",
    q: [
      // F3A #1
      {
        s: "Quale delle seguenti affermazioni è falsa?",
        o: [
          "Le tecniche quantitative di analisi del mercato producono dati più ricchi delle tecniche qualitative.", // 0  ← corretta
          "Le interviste strutturate prevedono che le domande e le possibili risposte siano interamente predefinite.", // 1
          "Le tecniche qualitative di analisi del mercato utilizzano interviste semi-strutturate o non strutturate.", // 2
        ],
        a: 0,
      },
      // F3A #2
      {
        s: "Quale delle seguenti affermazioni è falsa?",
        o: [
          "Un segmento di mercato è un gruppo di clienti per i quali è possibile definire lo stesso marketing mix.", // 0
          "Segmenti di mercato diversi sono sempre serviti con marketing mix diversi.", // 1  ← corretta
          "La segmentazione del mercato ha l’obiettivo di identificare un numero limitato di segmenti di mercato.", // 2
        ],
        a: 1,
      },
      // F3A #3
      {
        s: "Nel marketing differenziato si cerca di:",
        o: [
          "raggiungere un segmento diverso dai concorrenti.", // 0
          "differenziare i prodotti dalla concorrenza.", // 1
          "raggiungere segmenti diversi con prodotti diversi.", // 2  ← corretta
        ],
        a: 2,
      },
      // F3A #4
      {
        s: "Nel marketing indifferenziato si cerca di:",
        o: [
          "raggiungere gli stessi segmenti di mercato dei concorrenti.", // 0
          "raggiungere un segmento specifico.", // 1
          "raggiungere molti segmenti con un solo prodotto.", // 2  ← corretta
        ],
        a: 2,
      },
      // F3A #5
      {
        s: "Nel marketing concentrato si cerca di:",
        o: [
          "raggiungere un segmento diverso dai concorrenti.", // 0
          "raggiungere un segmento specifico.", // 1  ← corretta
          "raggiungere molti segmenti con un solo prodotto.", // 2
        ],
        a: 1,
      },
      // F3A #6
      {
        s: "Quale delle seguenti affermazioni è falsa?",
        o: [
          "Le mappe percettive sono utili per decidere come posizionare la propria offerta rispetto a quella dei concorrenti in un segmento obiettivo.", // 0
          "Le dimensioni utilizzate nelle mappe percettive sono sempre e solo caratteristiche funzionali o prestazionali del prodotto.", // 1  ← corretta
          "La costruzione di mappe percettive presuppone di aver analizzato clienti e concorrenti.", // 2
        ],
        a: 1,
      },
      // F3A #7
      {
        s: "Quale delle seguenti politiche commerciali non fa parte del marketing mix?",
        o: [
          "Politica di prezzo", // 0
          "Politica di prodotto", // 1
          "Politica di vendita", // 2  ← corretta
          "Politica di distribuzione", // 3
          "Politica di comunicazione", // 4
        ],
        a: 2,
      },
      // F3A #8
      {
        s: "Il marketing operativo include:",
        o: [
          "l’analisi dei clienti", // 0
          "la segmentazione del mercato", // 1
          "le scelte su prodotto, prezzo, distribuzione e comunicazione", // 2  ← corretta
        ],
        a: 2,
      },
      // F3A #9
      {
        s: "Il marketing operativo include:",
        o: [
          "l’analisi dei concorrenti", // 0
          "la scelta dei segmenti-obiettivo", // 1
          "la definizione del marketing mix", // 2  ← corretta
        ],
        a: 2,
      },
      // F3A #10
      {
        s: "Quale delle seguenti affermazioni è vera?",
        o: [
          "Le quattro P del marketing strategico sono: product, price, placement e promotion.", // 0
          "Le quattro P del marketing strategico sono: probing, partitioning, prioritizing e positioning.", // 1
          "Il marketing strategico include la definizione del marketing mix per ciascun segmento obiettivo.", // 2  ← corretta
        ],
        a: 2,
        d: 1,
      },
      // F3A #11
      {
        s: "Quale delle seguenti affermazioni è vera?",
        o: [
          "La modalità di risposta al mercato va scelta fra le seguenti alternative: risposta base, risposta attesa e risposta estesa.", // 0
          "Un prodotto può soddisfare solo bisogni di tipo funzionale.", // 1
          "Un prodotto può soddisfare il bisogno del cliente di esprimere la propria personalità.", // 2  ← corretta
        ],
        a: 2,
      },
      // F3A #12
      {
        s: "Se un prodotto dà solo i benefici minimi attesi dal cliente finale, si dice che il prodotto dà ai bisogni del cliente finale:",
        o: [
          "una risposta base", // 0  ← corretta
          "una risposta attesa", // 1
          "una risposta estesa", // 2
        ],
        a: 0,
      },
      // F3A #13
      {
        s: "Se un prodotto ha le caratteristiche per soddisfare tutti e soli i bisogni espressi dal cliente finale, si dice che il prodotto dà ai bisogni del cliente finale:",
        o: [
          "una risposta base", // 0
          "una risposta attesa", // 1  ← corretta
          "una risposta estesa", // 2
        ],
        a: 1,
      },
      // F3A #14
      {
        s: "Se un prodotto ha le caratteristiche per soddisfare bisogni latenti del cliente finale che quest’ultimo non era abituato a vedere soddisfatti, si dice che il prodotto dà ai bisogni del cliente finale:",
        o: [
          "una risposta base", // 0
          "una risposta attesa", // 1
          "una risposta estesa", // 2  ← corretta
        ],
        a: 2,
      },
      // F3A #15
      {
        s: "Quale dei seguenti tipi di risposta ai bisogni dei clienti finali è più coerente con una strategia competitiva di differenziazione?",
        o: [
          "Una risposta base", // 0
          "Una risposta attesa", // 1
          "Una risposta estesa", // 2  ← corretta
        ],
        a: 2,
        d: 1,
      },
      // F3A #16
      {
        s: "Quale delle seguenti affermazioni è falsa?",
        o: [
          "Si parla di prodotto standard solo quando non si offrono varianti diverse di quel prodotto.", // 0  ← corretta
          "Si parla di prodotto configurato quando il cliente finale configura una variante del prodotto combinando opzioni interamente predefinite dall’azienda.", // 1
          "Si parla di prodotto speciale quando il cliente finale richiede anche caratteristiche del prodotto non predefinite dall’azienda.", // 2
        ],
        a: 0,
      },
      // F3A #17
      {
        s: "Quando l’ordine di un cliente richiede di fare attività di produzione ad hoc per quel cliente, ma non attività di progettazione ad hoc, si parla di:",
        o: [
          "prodotto speciale", // 0
          "prodotto configurato", // 1  ← corretta
          "prodotto standard", // 2
        ],
        a: 1,
      },
      // F3A #18
      {
        s: "Quale fra le seguenti modalità di risposta al mercato è più coerente con l’offerta di prodotti configurati?",
        o: [
          "Ship-to-stock", // 0
          "Make-to-stock", // 1
          "Assemble-to-order", // 2  ← corretta
          "Purchase-to-order", // 3
        ],
        a: 2,
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════════
  // F3B — La funzione commerciale: leve distribuzione, prezzo e comunicazione; ciclo di vita del  (36 domande)
  // ═══════════════════════════════════════════════════════════════
  {
    code: "F3B",
    title: "La funzione commerciale: leve distribuzione, prezzo e comunicazione; ciclo di vita del",
    q: [
      // F3B #1
      {
        s: "Quale delle seguenti affermazioni è vera?",
        o: [
          "Un fornitore di servizi logistici è un intermediario commerciale.", // 0
          "Un agente di vendita è un intermediario commerciale.", // 1
          "Un intermediario commerciale è un fornitore di servizi.", // 2  ← corretta
        ],
        a: 2,
      },
      // F3B #2
      {
        s: "Quale delle seguenti affermazioni è sicuramente vera?",
        o: [
          "Un canale distributivo diretto non prevede l’uso di punti vendita.", // 0
          "Un canale distributivo diretto comporta meno costi fissi distributivi di un canale indiretto.", // 1
          "Un canale distributivo diretto permette di mantenere il controllo del rapporto con il cliente finale.", // 2  ← corretta
        ],
        a: 2,
        d: 1,
      },
      // F3B #3
      {
        s: "Quale delle seguenti affermazioni è sicuramente vera?",
        o: [
          "La scelta dell’intensità distributiva non riguarda un’azienda che vende ai clienti finali solo on-line.", // 0  ← corretta
          "Per un’azienda che vende ai clienti finali anche on-line, internet è un canale distributivo.", // 1
          "Un canale distributivo diretto richiede una rete distributiva di proprietà dell’azienda.", // 2
        ],
        a: 0,
      },
      // F3B #4
      {
        s: "Una distribuzione esclusiva è caratterizzata da:",
        o: [
          "un elevato indice di copertura dei punti vendita", // 0
          "un basso indice di penetrazione al punto vendita", // 1
          "un alto indice di penetrazione al punto vendita", // 2  ← corretta
        ],
        a: 2,
      },
      // F3B #5
      {
        s: "Una distribuzione di massa o intensiva è caratterizzata da:",
        o: [
          "un basso indice di copertura dei punti vendita", // 0
          "un alto indice di penetrazione al punto vendita", // 1
          "un basso indice di penetrazione al punto vendita", // 2  ← corretta
        ],
        a: 2,
      },
      // F3B #6
      {
        s: "Il canale di distribuzione “produttore-grossista-dettagliante-consumatore” è definito come:",
        o: [
          "canale indiretto lungo", // 0  ← corretta
          "canale indiretto breve", // 1
          "canale diretto", // 2
        ],
        a: 0,
      },
      // F3B #7
      {
        s: "Il canale di distribuzione “produttore-agente-consumatore” è definito come:",
        o: [
          "canale indiretto lungo", // 0  ← corretta
          "canale indiretto breve", // 1
          "canale diretto", // 2
        ],
        a: 0,
      },
      // F3B #8
      {
        s: "Quale delle seguenti affermazioni è vera? Un canale indiretto di distribuzione dei prodotti:",
        o: [
          "è particolarmente utilizzato da aziende con molti potenziali clienti finali, dispersi e che acquistano piccole quantità.", // 0  ← corretta
          "è caratterizzato da un solo passaggio di proprietà.", // 1
          "è caratterizzato dal fatto che la forza vendita dell’azienda è sempre indiretta.", // 2
        ],
        a: 0,
      },
      // F3B #9
      {
        s: "Quale delle seguenti affermazioni è falsa? Un canale diretto di distribuzione dei prodotti:",
        o: [
          "è particolarmente utilizzato da aziende con pochi potenziali clienti finali, che acquistano grosse quantità.", // 0
          "è caratterizzato dal fatto che la forza vendita dell’azienda è sempre diretta.", // 1  ← corretta
          "è caratterizzato da un solo passaggio di proprietà.", // 2
        ],
        a: 1,
      },
      // F3B #10
      {
        s: "Quale delle seguenti affermazioni è vera?",
        o: [
          "L’intensità della distribuzione è minima nel caso di distribuzione selettiva.", // 0
          "Il controllo sulle scelte di comunicazione al punto vendita è massimo nel caso di distribuzione selettiva.", // 1
          "La copertura dei punti vendita è massima nel caso di distribuzione intensiva.", // 2  ← corretta
        ],
        a: 2,
      },
      // F3B #11
      {
        s: "Quale delle seguenti affermazioni è sicuramente vera?",
        o: [
          "Il prezzo base di un prodotto dipende dalle condizioni di consegna concordate con il cliente.", // 0
          "Il prezzo di vendita coincide con il prezzo base.", // 1
          "Il prezzo base è indipendente dalla politica di sconti dell’azienda venditrice.", // 2  ← corretta
        ],
        a: 2,
      },
      // F3B #12
      {
        s: "Quale delle seguenti affermazioni è falsa?",
        o: [
          "Nella determinazione del prezzo base occorre considerare le caratteristiche dell’offerta.", // 0
          "Il prezzo di vendita può differire dal prezzo base in funzione della dilazione di pagamento richiesta dal cliente.", // 1
          "La determinazione del prezzo base mediante ricarico (mark-up) ha l’obiettivo di raggiungere rapidamente elevati volumi di vendita.", // 2  ← corretta
        ],
        a: 2,
      },
      // F3B #13
      {
        s: "Quale delle seguenti affermazioni è falsa? Nella determinazione del prezzo base:",
        o: [
          "fissare un prezzo in linea con i concorrenti risponde a obiettivi di vendita.", // 0  ← corretta
          "obiettivi di vendita e obiettivi di profitto possono essere in conflitto.", // 1
          "bisogna tener conto degli obiettivi della politica di prezzo.", // 2
        ],
        a: 0,
      },
      // F3B #14
      {
        s: "Quale delle seguenti affermazioni è vera?",
        o: [
          "Il prezzo di scrematura ha l’obiettivo di raggiungere rapidamente elevati volumi di vendita.", // 0
          "Il prezzo di penetrazione consiste nel lanciare un nuovo prodotto con un prezzo basso.", // 1  ← corretta
          "Il prezzo soglia è sempre eguale al costo variabile unitario.", // 2
        ],
        a: 1,
      },
      // F3B #15
      {
        s: "Quale delle seguenti affermazioni è falsa?",
        o: [
          "Il prezzo di penetrazione ha l’obiettivo di raggiungere rapidamente elevati volumi di vendita.", // 0
          "Il prezzo di scrematura consiste nel lanciare un nuovo prodotto con un prezzo elevato, che viene progressivamente abbassato.", // 1
          "La determinazione del prezzo mediante ricarico (mark-up) non richiede di considerare fattori esterni all’azienda.", // 2  ← corretta
        ],
        a: 2,
      },
      // F3B #16
      {
        s: "Quale delle seguenti affermazioni è vera? La determinazione del prezzo base mediante ricarico (mark-up):",
        o: [
          "è possibile in condizioni di concorrenza perfetta.", // 0
          "richiede di considerare solo i costi sostenuti dall’azienda.", // 1
          "è possibile in condizioni di concorrenza monopolistica.", // 2  ← corretta
        ],
        a: 2,
      },
      // F3B #17
      {
        s: "Quale delle seguenti affermazioni è falsa?",
        o: [
          "L’immagine del prodotto è l’insieme dei giudizi e delle reazioni emotive che un potenziale acquirente associa al prodotto.", // 0
          "La comunicazione istituzionale mira a costruire l’immagine dell’azienda nel suo complesso.", // 1
          "Decidere i contenuti della comunicazione significa decidere solo la/le core selling proposition(s).", // 2  ← corretta
          "Le decisioni su destinatari, contenuti e strumenti della comunicazione sono interrelate.", // 3
        ],
        a: 2,
      },
      // F3B #18
      {
        s: "Quale delle seguenti affermazioni è falsa?",
        o: [
          "I destinatari delle attività di comunicazione di prodotto dell’azienda sono i clienti finali nel caso di comunicazione di tipo pull.", // 0
          "I destinatari delle attività di comunicazione di prodotto dell’azienda sono i clienti finali nel caso di comunicazione di tipo push.", // 1  ← corretta
          "I destinatari delle attività di comunicazione di prodotto dell’azienda sono gli intermediari commerciali nel caso di comunicazione di tipo push.", // 2
        ],
        a: 1,
      },
      // F3B #19
      {
        s: "I destinatari delle attività di comunicazione di prodotto dell’azienda sono:",
        o: [
          "i clienti finali nel caso di comunicazione di tipo push.", // 0
          "i clienti finali nel caso di comunicazione di tipo pull.", // 1  ← corretta
          "gli intermediari commerciali nel caso di comunicazione di tipo pull.", // 2
        ],
        a: 1,
      },
      // F3B #20
      {
        s: "Quale delle seguenti affermazioni è falsa?",
        o: [
          "Se un’azienda usa un canale distributivo indiretto, l’attività di comunicazione di prodotto dell’azienda può essere solo di tipo pull.", // 0
          "Se un’azienda usa un canale distributivo indiretto, l’attività di comunicazione di prodotto dell’azienda può essere sia di tipo pull che di tipo push.", // 1  ← corretta
          "Se un’azienda usa un canale distributivo diretto, l’attività di comunicazione di prodotto dell’azienda può essere solo di tipo pull.", // 2
        ],
        a: 1,
      },
      // F3B #21
      {
        s: "Quale delle seguenti affermazioni è falsa?",
        o: [
          "L’imbuto promozionale classifica gli strumenti di comunicazione dal punto di vista del loro effetto informativo e persuasivo.", // 0
          "Man mano che si scende nell’imbuto promozionale si accorcia il tempo che mediamente passa fra l’attività di comunicazione e l’eventuale vendita che ne consegue.", // 1  ← corretta
          "Man mano che si scende nell’imbuto promozionale si allarga la platea raggiunta dallo strumento di comunicazione.", // 2
        ],
        a: 1,
      },
      // F3B #22
      {
        s: "Quale delle seguenti affermazioni è falsa?",
        o: [
          "La pubblicità ha un effetto persuasivo inferiore alle promozioni.", // 0
          "Le pubbliche relazioni sono uno dei possibili strumenti della comunicazione.", // 1
          "Le promozioni hanno un effetto persuasivo inferiore alle pubbliche relazioni.", // 2  ← corretta
        ],
        a: 2,
      },
      // F3B #23
      {
        s: "Quale delle seguenti affermazioni è falsa?",
        o: [
          "Il merchandising è l’attività di comunicazione al punto vendita.", // 0
          "La pubblicità ha un effetto persuasivo superiore alle promozioni.", // 1  ← corretta
          "Il merchandising ha un effetto persuasivo superiore alla pubblicità.", // 2
        ],
        a: 1,
      },
      // F3B #24
      {
        s: "Quale delle seguenti affermazioni è falsa?",
        o: [
          "Il direct marketing è uno dei possibili strumenti della comunicazione.", // 0
          "La pubblicity consiste nella divulgazione di informazioni sull’azienda e/o i suoi prodotti da parte di soggetti terzi.", // 1
          "Il direct marketing indica le attività di comunicazione fatte di persona.", // 2  ← corretta
        ],
        a: 2,
      },
      // F3B #25
      {
        s: "Quale delle seguenti affermazioni è falsa?",
        o: [
          "Il direct marketing fa parte degli strumenti di comunicazione.", // 0
          "Le promozioni sono rivolte solo ai clienti finali.", // 1  ← corretta
          "La forza vendita è uno strumento di comunicazione.", // 2
        ],
        a: 1,
      },
      // F3B #26
      {
        s: "Quale dei seguenti strumenti di comunicazione ha un effetto più rapido sulle vendite dell’azienda?",
        o: [
          "Le pubbliche relazioni", // 0
          "Le promozioni", // 1  ← corretta
          "La pubblicità", // 2
        ],
        a: 1,
      },
      // F3B #27
      {
        s: "Quale delle seguenti affermazioni è falsa? La curva del ciclo di vita del prodotto:",
        o: [
          "descrive l’andamento delle vendite del prodotto in funzione del tempo.", // 0
          "può essere costruita a vari livelli di aggregazione.", // 1
          "comprende sempre cinque fasi.", // 2  ← corretta
        ],
        a: 2,
      },
      // F3B #28
      {
        s: "Con riferimento alle diverse fasi del ciclo di vita di un prodotto, quale delle seguenti affermazioni è falsa?",
        o: [
          "La fase di maturità è caratterizzata da tassi di sviluppo della domanda positivi ma decrescenti.", // 0
          "La fase di saturazione è caratterizzata da volumi di vendita pressoché costanti.", // 1
          "La fase di introduzione è caratterizzata da tassi di sviluppo della domanda positivi ed elevati.", // 2  ← corretta
          "La fase di declino è caratterizzata da tassi di sviluppo della domanda negativi.", // 3
        ],
        a: 2,
        d: 1,
      },
      // F3B #29
      {
        s: "In quale fase del ciclo di vita di un prodotto il grado di personalizzazione del prodotto tende a essere più elevato?",
        o: [
          "Introduzione", // 0  ← corretta
          "Sviluppo", // 1
          "Saturazione", // 2
          "Declino", // 3
        ],
        a: 0,
        d: 1,
      },
      // F3B #30
      {
        s: "L’analisi del mercato di vendita è un’attività tipica della (sotto)funzione:",
        o: [
          "marketing", // 0  ← corretta
          "vendite", // 1
          "ricerca e sviluppo", // 2
          "amministrazione", // 3
        ],
        a: 0,
      },
      // F3B #31
      {
        s: "Quale delle seguenti (sotto)funzioni sicuramente non è coinvolta nelle attività di comunicazione?",
        o: [
          "marketing", // 0
          "vendite", // 1
          "logistica manifatturiera", // 2  ← corretta
          "sistemi informativi", // 3
        ],
        a: 2,
      },
      // F3B #32
      {
        s: "La promozione dei prodotti è un’attività tipica della (sotto)funzione:",
        o: [
          "logistica manifatturiera", // 0
          "sistemi informativi", // 1
          "marketing", // 2  ← corretta
          "qualità", // 3
        ],
        a: 2,
      },
      // F3B #33
      {
        s: "Quale delle seguenti affermazioni è vera?",
        o: [
          "La sottofunzione marketing svolge solo attività di studio del mercato di sbocco.", // 0
          "La sottofunzione marketing svolge attività di promozione, distribuzione e vendita.", // 1
          "La sottofunzione marketing svolge attività di studio del mercato di sbocco.", // 2  ← corretta
          "La sottofunzione marketing svolge attività di studio del mercato di sbocco e definizione della strategia aziendale.", // 3
        ],
        a: 2,
      },
      // F3B #34
      {
        s: "L’analisi della concorrenza e dei suoi prodotti è un’attività tipica della (sotto)funzione:",
        o: [
          "vendite", // 0
          "produzione", // 1
          "progettazione", // 2
          "marketing", // 3  ← corretta
        ],
        a: 3,
      },
      // F3B #35
      {
        s: "La definizione della scontistica è un’attività tipica della (sotto)funzione:",
        o: [
          "marketing", // 0
          "vendite", // 1  ← corretta
          "logistica", // 2
          "amministrazione", // 3
        ],
        a: 1,
      },
      // F3B #36
      {
        s: "Quale fra le seguenti attività è a cavallo fra marketing e vendite?",
        o: [
          "Scelta e dimensionamento della forza vendita.", // 0
          "Inserimento degli ordini cliente a sistema informativo.", // 1
          "Formulazione delle previsioni di vendita.", // 2  ← corretta
          "Formulazione di offerte a potenziali clienti.", // 3
        ],
        a: 2,
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════════
  // F4 — La funzione ricerca & sviluppo  (31 domande)
  // ═══════════════════════════════════════════════════════════════
  {
    code: "F4",
    title: "La funzione ricerca & sviluppo",
    q: [
      // F4 #1
      {
        s: "Quale delle seguenti affermazioni è falsa?",
        o: [
          "L’innovazione è la prima applicazione di un’invenzione a fini economici.", // 0
          "La diffusione dell’innovazione è l’applicazione a fini economici di un’invenzione da parte di un numero crescente di imprese.", // 1
          "L’innovazione riguarda solo la tecnologia.", // 2  ← corretta
        ],
        a: 2,
      },
      // F4 #2
      {
        s: "Quale delle seguenti affermazioni è falsa?",
        o: [
          "L’innovazione non riguarda solo i prodotti e i processi produttivi.", // 0
          "L’innovazione è l’applicazione a fini economici di un’invenzione da parte di un numero crescente di imprese.", // 1  ← corretta
          "L’innovazione che non riguarda la tecnologia è chiamata innovazione organizzativo-gestionale.", // 2
        ],
        a: 1,
      },
      // F4 #3
      {
        s: "Quale delle seguenti affermazioni è vera?",
        o: [
          "Un prodotto nuovo per l’azienda ma non per il mercato è un esempio di innovazione.", // 0  ← corretta
          "Un prodotto nuovo per l’azienda ma non per il mercato è un esempio di diffusione dell’innovazione.", // 1
          "L’innovazione attiene al piano tecnico-scientifico.", // 2
        ],
        a: 0,
      },
      // F4 #4
      {
        s: "Quale delle seguenti affermazioni è falsa?",
        o: [
          "Un processo produttivo è una tecnologia.", // 0
          "Una tecnologia è un insieme di strumenti tecnici e conoscenze che consentono di ottenere un certo output/risultato a partire da certi input.", // 1
          "La generazione di innovazione all’interno di un’azienda è sempre demandata alla funzione ricerca e sviluppo.", // 2  ← corretta
          "Un prodotto è una tecnologia.", // 3
        ],
        a: 2,
      },
      // F4 #5
      {
        s: "Quale delle seguenti affermazioni è falsa?",
        o: [
          "Il miglioramento (per la prima volta) di un processo produttivo esistente è un caso di innovazione tecnologica.", // 0
          "L’innovazione tecnologica può beneficiare dell’innovazione organizzativo-gestionale.", // 1  ← corretta
          "Il miglioramento (per la prima volta) di un prodotto esistente è un caso di innovazione incrementale.", // 2
          "Innovazione di prodotto e di processo sono sempre indipendenti l’una dall’altra.", // 3
        ],
        a: 1,
      },
      // F4 #6
      {
        s: "Quale delle seguenti affermazioni è falsa?",
        o: [
          "L’innovazione di processo riguarda tutti i processi aziendali.", // 0  ← corretta
          "Il miglioramento (per la prima volta) di un prodotto esistente è un caso di innovazione tecnologica.", // 1
          "L’uso (per la prima volta) di un nuovo processo produttivo per la realizzazione di un prodotto esistente è un caso di innovazione radicale.", // 2
          "L’innovazione organizzativo-gestionale può beneficiare dell’innovazione tecnologica.", // 3
        ],
        a: 0,
      },
      // F4 #7
      {
        s: "L’innovazione di prodotto, rispetto a quella di processo:",
        o: [
          "dà soprattutto vantaggi di costo.", // 0
          "dà soprattutto vantaggi di differenziazione.", // 1  ← corretta
          "dà gli stessi vantaggi.", // 2
        ],
        a: 1,
      },
      // F4 #8
      {
        s: "L’innovazione di processo, rispetto a quella di prodotto:",
        o: [
          "dà soprattutto vantaggi di costo.", // 0  ← corretta
          "dà soprattutto vantaggi di differenziazione.", // 1
          "dà gli stessi vantaggi.", // 2
        ],
        a: 0,
      },
      // F4 #9
      {
        s: "L’identificazione dei bisogni del mercato al fine di progettare un nuovo prodotto è un’attività di:",
        o: [
          "ricerca e sviluppo", // 0
          "marketing", // 1  ← corretta
          "produzione", // 2
          "vendita", // 3
        ],
        a: 1,
      },
      // F4 #10
      {
        s: "La ricerca di base mira a:",
        o: [
          "sviluppare nuove conoscenze scientifiche in qualsiasi campo senza alcuna aspettativa economica.", // 0  ← corretta
          "creare nuovi prodotti e/o processi produttivi.", // 1
          "sviluppare nuove conoscenze in ambiti rilevanti per l’impresa senza alcuna aspettativa economica.", // 2
          "sviluppare nuove conoscenze in ambiti rilevanti per l’impresa senza aspettative economiche nel breve periodo.", // 3
        ],
        a: 0,
      },
      // F4 #11
      {
        s: "La ricerca applicata mira a:",
        o: [
          "valutare se conoscenze scientifiche esistenti possono essere applicate per realizzare un nuovo prodotto.", // 0  ← corretta
          "ampliare le conoscenze scientifiche in ambiti rilevanti per l’impresa senza aspettative economiche nel breve periodo.", // 1
          "creare le condizioni per l’avvio della produzione e per il successo commerciale di un nuovo prodotto.", // 2
          "definire nei minimi dettagli il concetto di un nuovo prodotto.", // 3
        ],
        a: 0,
      },
      // F4 #12
      {
        s: "Quale delle seguenti affermazioni è falsa?",
        o: [
          "Le attività di sviluppo di un nuovo prodotto mirano a creare le condizioni per l’avvio della produzione di serie e per il successo commerciale del nuovo prodotto.", // 0
          "Le attività di sviluppo di un nuovo prodotto sono sempre alimentate da attività di ricerca svolte all’interno dell’azienda.", // 1  ← corretta
          "I fornitori sono una possibile fonte di idee di nuovi prodotti.", // 2
        ],
        a: 1,
      },
      // F4 #13
      {
        s: "La generazione di nuove conoscenze in ambiti rilevanti per l’impresa senza aspettative economiche di breve periodo è un’attività di:",
        o: [
          "marketing", // 0
          "sviluppo nuovo prodotto", // 1
          "ricerca di base", // 2  ← corretta
          "ricerca applicata", // 3
        ],
        a: 2,
      },
      // F4 #14
      {
        s: "La dimostrazione che si può realizzare un nuovo prodotto applicando conoscenze scientifiche esistenti è un’attività di:",
        o: [
          "marketing", // 0
          "sviluppo nuovo prodotto", // 1
          "ricerca applicata", // 2  ← corretta
          "ricerca di base", // 3
        ],
        a: 2,
      },
      // F4 #15
      {
        s: "Quale delle seguenti fasi non fa parte del processo di sviluppo nuovo prodotto:",
        o: [
          "sviluppo del concetto", // 0
          "progettazione preliminare", // 1
          "industrializzazione", // 2
          "rilascio in produzione", // 3  ← corretta
          "riempimento del canale distributivo", // 4
        ],
        a: 3,
      },
      // F4 #16
      {
        s: "Quale delle seguenti affermazioni è vera?",
        o: [
          "Un concetto di prodotto è un’idea di nuovo prodotto.", // 0
          "Un concetto di prodotto può essere testato.", // 1  ← corretta
          "Lo sviluppo del concetto di un nuovo prodotto spetta solo al marketing.", // 2
        ],
        a: 1,
      },
      // F4 #17
      {
        s: "In quale delle seguenti fasi del processo di sviluppo nuovo prodotto gioca un ruolo importante il marketing?",
        o: [
          "Rilascio in produzione", // 0
          "Industrializzazione", // 1
          "Sviluppo del concetto", // 2  ← corretta
          "Progettazione di dettaglio", // 3
        ],
        a: 2,
      },
      // F4 #18
      {
        s: "Quale delle seguenti affermazioni è falsa?",
        o: [
          "La progettazione preliminare è chiamata anche progettazione di sistema.", // 0
          "La progettazione preliminare definisce solo le caratteristiche tecniche del prodotto nel suo complesso.", // 1  ← corretta
          "Le specifiche generali definite dalla progettazione preliminare devono essere coerenti con il concetto di prodotto sviluppato in precedenza.", // 2
        ],
        a: 1,
      },
      // F4 #19
      {
        s: "Nella fase di progettazione preliminare non si prendono decisioni su:",
        o: [
          "architettura del nuovo prodotto.", // 0
          "lay-out del nuovo prodotto.", // 1
          "styling del nuovo prodotto.", // 2
          "prezzo di vendita del nuovo prodotto.", // 3  ← corretta
          "carry-over dei componenti.", // 4
        ],
        a: 3,
      },
      // F4 #20
      {
        s: "Nella fase di progettazione di dettaglio:",
        o: [
          "si traduce un concetto di prodotto in specifiche generali di tipo tecnico ed economico.", // 0
          "si progettano e realizzano attrezzature e impianti di produzione del nuovo prodotto.", // 1
          "si ottimizza il processo produttivo del nuovo prodotto.", // 2
          "si produce una descrizione tecnica completa del prodotto in accordo con le specifiche generali date dalla progettazione di sistema.", // 3  ← corretta
        ],
        a: 3,
      },
      // F4 #21
      {
        s: "L’ingegnerizzazione di nuovi prodotti è un’attività di:",
        o: [
          "marketing", // 0
          "sviluppo nuovo prodotto", // 1  ← corretta
          "ricerca", // 2
          "gestione della qualità", // 3
        ],
        a: 1,
      },
      // F4 #22
      {
        s: "L’industrializzazione di nuovi prodotti è un’attività di:",
        o: [
          "marketing", // 0
          "produzione", // 1
          "sviluppo nuovo prodotto", // 2  ← corretta
          "logistica", // 3
        ],
        a: 2,
        d: 1,
      },
      // F4 #23
      {
        s: "Con industrializzazione si intende:",
        o: [
          "la traduzione del concetto di prodotto in specifiche generali di tipo tecnico ed economico.", // 0
          "la definizione del processo produttivo di un nuovo prodotto.", // 1  ← corretta
          "la traduzione dei bisogni dei clienti in un concetto di prodotto.", // 2
          "la produzione di un nuovo prodotto su scala industriale.", // 3
        ],
        a: 1,
      },
      // F4 #24
      {
        s: "In quale fase del processo di sviluppo nuovo prodotto si definiscono i tempi standard per la produzione del nuovo prodotto?",
        o: [
          "progettazione preliminare (o di sistema)", // 0
          "progettazione di dettaglio", // 1
          "industrializzazione", // 2  ← corretta
          "rilascio in produzione", // 3
        ],
        a: 2,
      },
      // F4 #25
      {
        s: "La progettazione delle attrezzature per la produzione di un nuovo prodotto fa parte del processo di:",
        o: [
          "produzione", // 0
          "vendita", // 1
          "controllo di gestione", // 2
          "sviluppo nuovo prodotto", // 3  ← corretta
        ],
        a: 3,
      },
      // F4 #26
      {
        s: "Quale delle seguenti affermazioni è vera?",
        o: [
          "Il processo di sviluppo nuovo prodotto termina con il lancio del nuovo prodotto sul mercato.", // 0
          "Il processo di sviluppo nuovo prodotto termina con la fase di rilascio in produzione.", // 1  ← corretta
          "L’ultima fase del processo di sviluppo nuovo prodotto è l’avvio della produzione in serie del prodotto.", // 2
          "Il processo di sviluppo nuovo prodotto non include attività di produzione.", // 3
        ],
        a: 1,
      },
      // F4 #27
      {
        s: "In generale, le attività del processo di sviluppo nuovo prodotto sono caratterizzate da interdipendenza:",
        o: [
          "solo sequenziale e generica", // 0
          "solo generica", // 1
          "anche reciproca", // 2  ← corretta
          "nulla", // 3
        ],
        a: 2,
      },
      // F4 #28
      {
        s: "Quale delle seguenti affermazioni è falsa?",
        o: [
          "Il ricorso a un team inter-funzionale riduce il rischio di dover rifare attività a monte nel processo di sviluppo nuovo prodotto.", // 0
          "Il ricorso a meccanismi di coordinamento concomitante riduce il rischio di dover rifare attività a monte nel processo di sviluppo nuovo prodotto.", // 1
          "Le attività del processo di sviluppo nuovo prodotto sono caratterizzate da un’interdipendenza puramente sequenziale.", // 2  ← corretta
        ],
        a: 2,
      },
      // F4 #29
      {
        s: "Il processo di sviluppo nuovo prodotto sicuramente non produce:",
        o: [
          "idee di nuovi prodotti", // 0  ← corretta
          "distinte base", // 1
          "cicli di produzione", // 2
          "documentazione tecnica a supporto delle attività di vendita", // 3
        ],
        a: 0,
      },
      // F4 #30
      {
        s: "Il processo di sviluppo nuovo prodotto dovrebbe coinvolgere almeno le seguenti funzioni:",
        o: [
          "ricerca e sviluppo", // 0
          "ricerca e sviluppo e marketing", // 1
          "ricerca e sviluppo, marketing e operations", // 2  ← corretta
        ],
        a: 2,
      },
      // F4 #31
      {
        s: "Quale delle seguenti affermazioni è sicuramente vera?",
        o: [
          "Un’azienda che fa attività di ricerca applicata fa anche attività di ricerca di base.", // 0
          "Un’azienda che fa attività di sviluppo nuovo prodotto fa anche attività di ricerca.", // 1
          "Un’azienda che fa attività di sviluppo nuovo prodotto fa sempre attività di ingegnerizzazione di prodotto.", // 2
          "In un’azienda che produce su disegno del cliente, le attività di sviluppo nuovo prodotto si limitano al più all’industrializzazione e al rilascio in produzione.", // 3  ← corretta
        ],
        a: 3,
        d: 1,
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════════
  // F5 — Le funzioni amministrazione, finanza e controllo di gestione. Cenni alle altre funzioni di  (41 domande)
  // ═══════════════════════════════════════════════════════════════
  {
    code: "F5",
    title: "Le funzioni amministrazione, finanza e controllo di gestione. Cenni alle altre funzioni di",
    q: [
      // F5 #1
      {
        s: "Quale delle seguenti affermazioni è vera?",
        o: [
          "Tutti i debiti dell’azienda verso terzi sono tutelati dalla Legge.", // 0
          "Nel definire il rapporto fra capitale di debito e capitale di rischio giocano un ruolo solo considerazioni di natura finanziaria.", // 1
          "Le perdite d’esercizio riducono l’ammontare del denaro restituito ai proprietari in caso di liquidazione dell’azienda.", // 2  ← corretta
        ],
        a: 2,
      },
      // F5 #2
      {
        s: "Quale delle seguenti affermazioni è vera?",
        o: [
          "Le fonti interne di finanziamento sono dette anche autofinanziamento.", // 0
          "Il capitale sociale iniziale è una fonte di finanziamento interna.", // 1  ← corretta
          "L’aumento di capitale tramite quotazione in Borsa è una fonte di finanziamento esterna.", // 2
        ],
        a: 1,
      },
      // F5 #3
      {
        s: "Quale fra le seguenti fonti di finanziamento non rientra fra le fonti esterne, dette anche capitale di debito?",
        o: [
          "Mutui", // 0
          "Aumenti di capitale", // 1  ← corretta
          "Acconti da parte di clienti", // 2
          "Leasing operativo", // 3
        ],
        a: 1,
      },
      // F5 #4
      {
        s: "Quale fra le seguenti fonti di finanziamento rientra fra le fonti esterne, dette anche capitale di debito?",
        o: [
          "Capitale iniziale", // 0
          "Trattamento di fine rapporto (TFR) dei lavoratori dipendenti (ove possibile)", // 1  ← corretta
          "Aumenti di capitale", // 2
          "Utili non distribuiti", // 3
        ],
        a: 1,
      },
      // F5 #5
      {
        s: "Quale fra le seguenti fonti di finanziamento rientra fra le fonti interne, dette anche capitale di rischio?",
        o: [
          "Trattamento di fine rapporto (TFR) dei lavoratori dipendenti (ove possibile)", // 0
          "Emissione di obbligazioni (ove possibile)", // 1
          "Aumenti di capitale", // 2  ← corretta
          "Leasing operativo", // 3
        ],
        a: 2,
      },
      // F5 #6
      {
        s: "Quale fra le seguenti fonti di finanziamento non rientra fra le fonti interne, dette anche capitale di rischio?",
        o: [
          "Utili non distribuiti", // 0
          "Capitale iniziale", // 1
          "Aumenti di capitale", // 2
          "Trattamento di fine rapporto (TFR) dei lavoratori dipendenti (ove possibile)", // 3  ← corretta
        ],
        a: 3,
      },
      // F5 #7
      {
        s: "Quale delle seguenti affermazioni è falsa?",
        o: [
          "All’allungarsi delle dilazioni di pagamento concesse ai clienti aumentano i fabbisogni finanziari dell’azienda.", // 0
          "All’allungarsi delle dilazioni di pagamento concesse dai fornitori aumentano i fabbisogni finanziari dell’azienda.", // 1  ← corretta
          "All’allungarsi delle dilazioni di pagamento concesse dai fornitori diminuiscono i fabbisogni finanziari dell’azienda.", // 2
        ],
        a: 1,
      },
      // F5 #8
      {
        s: "Quale delle seguenti affermazioni è falsa?",
        o: [
          "I prestiti obbligazionari sono rimborsati alla scadenza del prestito.", // 0
          "Gli interessi sui prestiti obbligazionari sono pagati alla scadenza del prestito.", // 1  ← corretta
          "I mutui sono rimborsati a rate.", // 2
          "Mutui e prestiti obbligazionari hanno durata medio-lunga.", // 3
        ],
        a: 1,
      },
      // F5 #9
      {
        s: "Quale delle seguenti affermazioni è falsa?",
        o: [
          "Nel leasing finanziario il locatario prende a prestito denaro da un intermediario finanziario.", // 0  ← corretta
          "Nel leasing operativo il soggetto finanziatore è l’azienda produttrice del bene oggetto del leasing.", // 1
          "Nel leasing finanziario il soggetto finanziatore è un intermediario finanziario.", // 2
        ],
        a: 0,
      },
      // F5 #10
      {
        s: "Quale delle seguenti affermazioni è falsa?",
        o: [
          "Una linea di credito è una forma di finanziamento bancario a breve termine.", // 0
          "Una linea di credito prevede che il tasso d’interesse sia rinegoziato ogni volta che vi si attinge.", // 1  ← corretta
          "Una linea di credito prevede un limite massimo allo scoperto di conto corrente.", // 2
        ],
        a: 1,
      },
      // F5 #11
      {
        s: "Qual è il nome della seguente operazione: “l’azienda vende la merce al cliente, la banca paga l’azienda e il cliente rimborsa successivamente la banca”?",
        o: [
          "Factoring", // 0
          "Leasing", // 1
          "Anticipo o “sconto” di fatture verso clienti", // 2  ← corretta
          "Anticipo da clienti", // 3
        ],
        a: 2,
      },
      // F5 #12
      {
        s: "Quale delle seguenti affermazioni è falsa?",
        o: [
          "Il trattamento di fine rapporto (TFR) viene accantonato su base mensile.", // 0
          "Il trattamento di fine rapporto (TFR) viene corrisposto al dipendente alla cessazione del rapporto di lavoro.", // 1
          "Oggi il trattamento di fine rapporto (TFR) è una possibile fonte di finanziamento solo per le aziende con più di 50 dipendenti, a patto che il dipendente opti per lasciare il TFR in azienda.", // 2  ← corretta
        ],
        a: 2,
      },
      // F5 #13
      {
        s: "Gestire la tesoreria è un’attività tipica della funzione:",
        o: [
          "organizzazione", // 0
          "amministrazione", // 1
          "finanza", // 2  ← corretta
          "controllo di gestione", // 3
        ],
        a: 2,
      },
      // F5 #14
      {
        s: "La gestione dei rapporti con le banche è un’attività tipica della funzione:",
        o: [
          "amministrazione", // 0
          "acquisti", // 1
          "controllo di gestione", // 2
          "finanza", // 3  ← corretta
        ],
        a: 3,
      },
      // F5 #15
      {
        s: "Quale delle seguenti (sotto)funzioni non è generalmente coinvolta nella definizione delle politiche di credito alla clientela:",
        o: [
          "commerciale", // 0
          "amministrazione", // 1  ← corretta
          "finanza", // 2
        ],
        a: 1,
      },
      // F5 #16
      {
        s: "Quale delle seguenti (sotto)funzioni non è generalmente coinvolta nella definizione delle condizioni di pagamento ai fornitori:",
        o: [
          "acquisti", // 0
          "amministrazione", // 1  ← corretta
          "finanza", // 2
        ],
        a: 1,
      },
      // F5 #17
      {
        s: "Quali delle seguenti affermazioni è vera?",
        o: [
          "La funzione finanza supporta la direzione aziendale nelle scelte su come coprire i fabbisogni finanziari dell’azienda.", // 0  ← corretta
          "La funzione finanza determina il reddito imponibile e l’imposta sul reddito d’esercizio.", // 1
          "La funzione finanza definisce autonomamente le dilazioni di pagamento ai fornitori.", // 2
        ],
        a: 0,
      },
      // F5 #18
      {
        s: "Se doveste finanziare la costruzione di un nuovo stabilimento, non ricorrereste a:",
        o: [
          "scoperto su conto corrente", // 0  ← corretta
          "mutuo", // 1
          "aumento di capitale", // 2
          "prestito obbligazionario (ove possibile)", // 3
        ],
        a: 0,
      },
      // F5 #19
      {
        s: "Quale delle seguenti affermazioni è falsa?",
        o: [
          "La funzione amministrazione tiene la contabilità generale dell’azienda.", // 0
          "La contabilità generale registra tutti i costi dell’azienda.", // 1  ← corretta
          "La contabilità generale registra le conseguenze patrimoniali delle transazioni dell’impresa con tutti i soggetti terzi.", // 2
          "La contabilità generale registra le conseguenze finanziarie delle transazioni dell’impresa con tutti i soggetti terzi.", // 3
        ],
        a: 1,
      },
      // F5 #20
      {
        s: "Quale delle seguenti affermazioni è falsa?",
        o: [
          "Il bilancio civilistico sintetizza le conseguenze economiche, patrimoniali e finanziarie di tutte le transazioni dell’impresa con soggetti terzi nel corso dell’esercizio che si è chiuso.", // 0
          "Il bilancio civilistico è pubblico.", // 1
          "Il bilancio civilistico serve per determinare l’imposta sul reddito dell’esercizio che si è chiuso.", // 2  ← corretta
        ],
        a: 2,
      },
      // F5 #21
      {
        s: "La tenuta della contabilità generale è un’attività della funzione:",
        o: [
          "organizzazione", // 0
          "controllo di gestione", // 1
          "amministrazione", // 2  ← corretta
          "finanza", // 3
        ],
        a: 2,
      },
      // F5 #22
      {
        s: "Quale delle seguenti affermazioni è falsa?",
        o: [
          "Il processo di controllo di gestione prevede che si definiscano dei programmi con un orizzonte annuale.", // 0
          "Il processo di controllo di gestione comprende una fase di programmazione e una di controllo consuntivo.", // 1  ← corretta
          "Il processo di controllo di gestione ha l’obiettivo di influenzare il comportamento dei membri dell’organizzazione al fine di realizzarne la strategia.", // 2
        ],
        a: 1,
      },
      // F5 #23
      {
        s: "Con riferimento al processo di controllo di gestione, quale delle seguenti affermazioni è falsa?",
        o: [
          "Il monitoraggio degli obbiettivi raggiunti va fatto periodicamente su base infra-annuale.", // 0
          "Gli obiettivi definiti in fase di programmazione devono essere coerenti fra loro e con la strategia aziendale.", // 1
          "Gli obiettivi definiti in fase di programmazione possono essere di natura qualitativa.", // 2  ← corretta
        ],
        a: 2,
      },
      // F5 #24
      {
        s: "Quale delle seguenti affermazioni è vera?",
        o: [
          "Con riferimento al processo di controllo di gestione, le macro-attività di budgeting e di controllo concomitante sono interdipendenti in maniera solo sequenziale e generica.", // 0
          "Con riferimento al processo di controllo di gestione, le macro-attività di budgeting e di controllo concomitante sono caratterizzate da interdipendenza di tipo reciproco.", // 1  ← corretta
          "La direzione aziendale è l’unico cliente del processo di controllo di gestione.", // 2
          "I report periodici sull’andamento della gestione sono l’unico output del processo di controllo di gestione.", // 3
        ],
        a: 1,
        d: 1,
      },
      // F5 #25
      {
        s: "Quale delle seguenti affermazioni è falsa?",
        o: [
          "La funzione finanza reperisce i capitali di cui l’azienda abbisogna.", // 0
          "La funzione amministrazione redige il bilancio consuntivo d’esercizio.", // 1
          "La funzione controllo di gestione realizza autonomamente il processo di controllo di gestione.", // 2  ← corretta
        ],
        a: 2,
      },
      // F5 #26
      {
        s: "Quale delle seguenti affermazioni è falsa?",
        o: [
          "La contabilità analitica è a volte chiamata contabilità industriale o direzionale.", // 0
          "La contabilità analitica ha come unità di analisi l’azienda nel suo complesso.", // 1  ← corretta
          "La contabilità analitica disaggrega ricavi e costi dei diversi prodotti.", // 2
        ],
        a: 1,
      },
      // F5 #27
      {
        s: "La tenuta della contabilità analitica è un’attività tipica della funzione:",
        o: [
          "finanza", // 0
          "controllo di gestione", // 1  ← corretta
          "amministrazione", // 2
          "organizzazione", // 3
        ],
        a: 1,
      },
      // F5 #28
      {
        s: "Il responsabile del controllo di gestione (controller):",
        o: [
          "analizza l’andamento della gestione e mette in atto misure correttive.", // 0
          "è il responsabile dell’andamento della gestione.", // 1
          "progetta e produce i report periodici sull’andamento della gestione.", // 2  ← corretta
        ],
        a: 2,
      },
      // F5 #29
      {
        s: "Quali delle seguenti affermazioni è falsa?",
        o: [
          "Un processo aziendale utilizza ben precise risorse, spesso di funzioni diverse.", // 0
          "Il processo di controllo di gestione è un processo di supporto.", // 1
          "Il processo di trasformazione è sempre un processo primario.", // 2  ← corretta
        ],
        a: 2,
      },
      // F5 #30
      {
        s: "Quali delle seguenti affermazioni è vera?",
        o: [
          "Un processo aziendale è un insieme di attività che concorrono a produrre un ben preciso output.", // 0  ← corretta
          "L’output di un processo aziendale è sempre destinato a un cliente esterno.", // 1
          "Il processo di sviluppo nuovo prodotto è sempre un processo di supporto.", // 2
        ],
        a: 0,
      },
      // F5 #31
      {
        s: "Quali delle seguenti affermazioni è falsa?",
        o: [
          "Un processo aziendale utilizza ben precise risorse, spesso di funzioni diverse.", // 0
          "Un processo aziendale è un insieme di attività che concorrono a produrre un ben preciso output.", // 1
          "L’output di un processo aziendale è sempre destinato a un cliente interno.", // 2  ← corretta
        ],
        a: 2,
      },
      // F5 #32
      {
        s: "Quali delle seguenti affermazioni è falsa?",
        o: [
          "Un processo aziendale è un insieme di attività altamente interdipendenti.", // 0
          "Un processo aziendale produce un ben preciso output a partire da ben precisi input.", // 1
          "Un processo aziendale di tipo primario produce un output destinato a un cliente interno all’azienda.", // 2  ← corretta
        ],
        a: 2,
      },
      // F5 #33
      {
        s: "Quali delle seguenti affermazioni è vera?",
        o: [
          "Un processo aziendale è un insieme di attività interdipendenti in maniera almeno sequenziale.", // 0
          "Gli input di un processo aziendale sono le risorse utilizzate dal processo stesso.", // 1  ← corretta
          "Un processo aziendale utilizza sempre risorse di funzioni diverse.", // 2
        ],
        a: 1,
      },
      // F5 #34
      {
        s: "Quale delle seguenti affermazioni è falsa? La funzione finanza:",
        o: [
          "gestisce i rapporti con le banche.", // 0
          "concorre a definire le politiche di credito alla clientela.", // 1
          "supporta la direzione nella valutazione economico-finanziaria solo degli investimenti per aumentare la capacità produttiva.", // 2  ← corretta
        ],
        a: 2,
        d: 1,
      },
      // F5 #35
      {
        s: "Quale delle seguenti affermazioni è vera? La funzione finanza:",
        o: [
          "decide come coprire i fabbisogni finanziari dell’impresa.", // 0
          "determina l’imposta sul reddito d’esercizio.", // 1
          "supporta la direzione aziendale nella valutazione economico-finanziaria degli investimenti.", // 2  ← corretta
        ],
        a: 2,
        d: 1,
        v: 1,
      },
      // F5 #36
      {
        s: "Quale delle seguenti attività non è tipica della funzione controllo di gestione?",
        o: [
          "Tenere la contabilità analitica.", // 0
          "Effettuare l’analisi degli scostamenti rispetto al budget.", // 1
          "Valutare il personale.", // 2  ← corretta
          "Determinare il costo pieno dei prodotti.", // 3
        ],
        a: 2,
        d: 1,
      },
      // F5 #37
      {
        s: "Quale delle seguenti attività non è tipica della funzione organizzazione e risorse umane?",
        o: [
          "Programmare, ricercare e selezionare il personale.", // 0
          "Effettuare l’analisi degli scostamenti rispetto al budget.", // 1  ← corretta
          "Supportare la progettazione organizzativa.", // 2
          "Gestire il rapporto contrattuale di lavoro.", // 3
        ],
        a: 1,
        d: 1,
      },
      // F5 #38
      {
        s: "Quale delle seguenti affermazioni è falsa?",
        o: [
          "Il sistema informativo aziendale è composto dall’hardware e dal software che l’impresa utilizza per inserire, archiviare, trasmettere e trattare dati e informazioni.", // 0
          "Il sistema informativo aziendale può offrire supporto ad attività esecutive.", // 1  ← corretta
          "Il sistema informativo aziendale include procedure e persone.", // 2
          "Il sistema informativo aziendale può offrire supporto ad attività direttive.", // 3
        ],
        a: 1,
        d: 1,
      },
      // F5 #39
      {
        s: "Quale delle seguenti attività non è tipica della funzione sistemi informativi?",
        o: [
          "Formare e supportare gli utenti del sistema informativo aziendale.", // 0
          "Tutelare la sicurezza e l’integrità dei dati in archivio.", // 1
          "Redigere l’organigramma aziendale.", // 2  ← corretta
          "Valutare le soluzioni hardware disponibili sul mercato.", // 3
        ],
        a: 2,
        d: 1,
      },
      // F5 #40
      {
        s: "La promozione del miglioramento continuo delle prestazioni è un’attività tipica della funzione:",
        o: [
          "controllo di gestione.", // 0
          "marketing", // 1
          "qualità", // 2  ← corretta
          "ricerca", // 3
        ],
        a: 2,
        d: 1,
      },
      // F5 #41
      {
        s: "Quale delle seguenti affermazioni è falsa?",
        o: [
          "La qualità va intesa come conformità all’uso.", // 0
          "La qualità riguarda solo la funzione operations.", // 1  ← corretta
          "La funzione qualità si occupa della rilevazione delle non conformità.", // 2
          "La funzione qualità è una funzione di staff.", // 3
        ],
        a: 1,
        d: 1,
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════════
  // F6A — Progettazione organizzativa: interdipendenza delle attività e loro coordinamento  (14 domande)
  // ═══════════════════════════════════════════════════════════════
  {
    code: "F6A",
    title: "Progettazione organizzativa: interdipendenza delle attività e loro coordinamento",
    q: [
      // F6A #1
      {
        s: "Le attività di trasformazione (nell’ipotesi che si avvalgono di macchinari) e quelle di manutenzione sono legate da interdipendenza:",
        o: [
          "solo generica", // 0
          "solo generica e sequenziale", // 1
          "anche reciproca", // 2  ← corretta
          "nessuna", // 3
        ],
        a: 2,
        d: 1,
      },
      // F6A #2
      {
        s: "Le attività di fabbricazione e assemblaggio sono legate da interdipendenza:",
        o: [
          "solo generica", // 0
          "solo generica e sequenziale", // 1  ← corretta
          "anche reciproca", // 2
          "nessuna", // 3
        ],
        a: 1,
      },
      // F6A #3
      {
        s: "Quale delle seguenti affermazioni è vera?",
        o: [
          "Le attività di (ri)bilanciamento delle linee di assemblaggio e le attività di assemblaggio sono interdipendenti in maniera solo generica.", // 0
          "Le attività di riattrezzaggio e quelle di produzione sono interdipendenti in maniera solo generica e sequenziale.", // 1
          "Le attività di ingegnerizzazione di prodotto e di industrializzazione sono interdipendenti in maniera reciproca.", // 2  ← corretta
          "nessuna delle precedenti.", // 3
        ],
        a: 2,
      },
      // F6A #4
      {
        s: "Quali delle seguenti affermazioni è falsa?",
        o: [
          "Tutte le attività svolte in azienda hanno almeno un’interdipendenza generica fra loro.", // 0
          "Due attività caratterizzate da interdipendenza sequenziale sono anche caratterizzate da interdipendenza reciproca.", // 1  ← corretta
          "Se due attività interdipendenti devono essere svolte da persone diverse, allora vanno coordinate.", // 2
        ],
        a: 1,
      },
      // F6A #5
      {
        s: "Quali delle seguenti affermazioni è falsa?",
        o: [
          "Due attività caratterizzate da interdipendenza reciproca sono anche caratterizzate da interdipendenza generica.", // 0
          "Le relazioni laterali sono un meccanismo di coordinamento concomitante.", // 1  ← corretta
          "Meccanismi di coordinamento preventivi e concomitanti si escludono a vicenda.", // 2
        ],
        a: 1,
        d: 1,
      },
      // F6A #6
      {
        s: "Quale delle seguenti affermazioni è falsa?",
        o: [
          "Nelle relazioni laterali il coordinamento avviene per mutuo adattamento.", // 0
          "Le relazioni laterali sono realizzate unicamente attraverso contatti diretti fra due “pari grado” all’interno dell’organizzazione.", // 1
          "Le relazioni laterali riducono il carico di lavoro del capo gerarchico comune per attività di coordinamento.", // 2  ← corretta
        ],
        a: 2,
        d: 1,
      },
      // F6A #7
      {
        s: "Quali delle seguenti affermazioni è falsa?",
        o: [
          "La scelta del/i meccanismo/i di coordinamento dipende dal grado di incertezza che caratterizza le attività da coordinare.", // 0
          "I piani/programmi permettono di far fronte ad alcuni imprevisti senza ricorrere al capo gerarchico comune.", // 1
          "Le procedure permettono di far fronte agli imprevisti senza ricorrere al capo gerarchico comune.", // 2  ← corretta
        ],
        a: 2,
      },
      // F6A #8
      {
        s: "Quali delle seguenti affermazioni è falsa?",
        o: [
          "La selezione/formazione delle persone è un meccanismo di coordinamento preventivo.", // 0
          "Il capo gerarchico comune è un meccanismo di coordinamento preventivo.", // 1  ← corretta
          "Un piano di produzione coordina attività di produzione e vendita/distribuzione predefinendo degli obiettivi di produzione tempificati.", // 2
        ],
        a: 1,
      },
      // F6A #9
      {
        s: "Quali delle seguenti affermazioni è vera?",
        o: [
          "Le scelte su struttura organizzativa e meccanismi di coordinamento sono del tutto indipendenti.", // 0
          "Un team interfunzionale per lo sviluppo di un nuovo prodotto è un esempio di relazione laterale.", // 1  ← corretta
          "I meccanismi di coordinamento preventivo sono utilizzati solo quando non c’è alcuna incertezza sulle cose da fare.", // 2
        ],
        a: 1,
      },
      // F6A #10
      {
        s: "Quale delle seguenti affermazioni è falsa?",
        o: [
          "Qualunque azienda utilizza anche meccanismi di coordinamento concomitante.", // 0
          "I meccanismi di coordinamento concomitante sono indispensabili per gestire imprevisti che generano conflitti di interesse fra “pari grado”.", // 1
          "I meccanismi di coordinamento concomitante prevedono sempre un mutuo adattamento.", // 2  ← corretta
        ],
        a: 2,
      },
      // F6A #11
      {
        s: "Le procedure sono un meccanismo di coordinamento utilizzato:",
        o: [
          "quando il lavoro è stabile e ripetitivo.", // 0  ← corretta
          "solo in organizzazioni di grandi dimensioni.", // 1
          "solo nel lavoro amministrativo.", // 2
        ],
        a: 0,
      },
      // F6A #12
      {
        s: "Le riunioni sono un meccanismo di coordinamento utilizzato:",
        o: [
          "quando le situazioni di lavoro sono stabili e ripetitive.", // 0
          "solo in organizzazioni di grandi dimensioni.", // 1
          "quando la prevedibilità delle situazioni di lavoro è bassa.", // 2  ← corretta
        ],
        a: 2,
      },
      // F6A #13
      {
        s: "Per coordinare attività non ripetitive caratterizzate da un elevato grado di incertezza è conveniente ricorrere a:",
        o: [
          "gruppi di lavoro", // 0  ← corretta
          "piani/programmi", // 1
          "procedure", // 2
        ],
        a: 0,
      },
      // F6A #14
      {
        s: "Per coordinare attività di tipo ripetitivo e stabili nel tempo è conveniente ricorrere a:",
        o: [
          "gruppi di lavoro", // 0
          "contatti diretti", // 1
          "procedure", // 2  ← corretta
        ],
        a: 2,
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════════
  // F6B — Progettazione organizzativa: struttura organizzativa e relative decisioni  (25 domande)
  // ═══════════════════════════════════════════════════════════════
  {
    code: "F6B",
    title: "Progettazione organizzativa: struttura organizzativa e relative decisioni",
    q: [
      // F6B #1
      {
        s: "Quale delle seguenti affermazioni non è sicuramente vera?",
        o: [
          "Un compito è un insieme di operazioni manuali o mentali che dev’essere svolto necessariamente da una stessa persona.", // 0
          "La divisione verticale del lavoro separa i compiti direttivi da quelli esecutivi, collocando i primi a un livello più alto nella gerarchia.", // 1
          "Un capo ha autorità piena sui subordinati.", // 2  ← corretta
        ],
        a: 2,
      },
      // F6B #2
      {
        s: "Quale delle seguenti affermazioni è vera?",
        o: [
          "I capi dotati di autorità gerarchica possono prendere decisioni che riguardano solo la dimensione giuridico-disciplinare del rapporto di lavoro.", // 0
          "I capi dotati di autorità funzionale possono prendere decisioni solo sulle attività che il subordinato deve fare.", // 1  ← corretta
          "Il capo funzionale di un soggetto che lavora nella funzione commerciale è il responsabile dell’ufficio commerciale.", // 2
          "Un subordinato non può avere potere sul suo capo gerarchico.", // 3
        ],
        a: 1,
      },
      // F6B #3
      {
        s: "Quale delle seguenti affermazioni è falsa?",
        o: [
          "Una struttura organizzativa verticale è caratterizzata da valori relativamente bassi dell’ampiezza media di controllo.", // 0
          "Ceteris paribus, una struttura organizzativa piatta comporta minori costi del personale rispetto a una verticale.", // 1
          "Una struttura piatta offre più opportunità di avanzamenti di ruolo.", // 2  ← corretta
          "A parità di addetti al livello più basso della gerarchia, numero di livelli gerarchici e ampiezza media di controllo sono inversamente proporzionali.", // 3
        ],
        a: 2,
      },
      // F6B #4
      {
        s: "Quale delle seguenti affermazioni è falsa?",
        o: [
          "Il criterio di divisione orizzontale del lavoro deve essere lo stesso a tutti i livelli gerarchici.", // 0  ← corretta
          "L’area geografica in cui si lavora è un possibile criterio di divisione orizzontale del lavoro.", // 1
          "I criteri di divisione orizzontale del lavoro sono detti anche criteri di raggruppamento.", // 2
        ],
        a: 0,
      },
      // F6B #5
      {
        s: "Quale delle seguenti affermazioni è vera?",
        o: [
          "Arricchire una mansione caratterizzata da un certo livello (possibilmente nullo) di autonomia significa includervi un ulteriore compito caratterizzato dallo stesso livello di autonomia.", // 0
          "Allargare una mansione caratterizzata da un certo livello (possibilmente nullo) di autonomia significa includervi un ulteriore compito caratterizzato da un livello superiore di autonomia.", // 1
          "Arricchire o allargare una mansione è una decisione di micro-struttura organizzativa.", // 2  ← corretta
        ],
        a: 2,
      },
      // F6B #6
      {
        s: "Quale delle seguenti affermazioni è falsa?",
        o: [
          "L’introduzione della figura del direttore operations come capo gerarchico dei direttori produzione e logistica è una decisione di micro-struttura organizzativa.", // 0  ← corretta
          "In un’azienda con struttura organizzativa per prodotto “pura”, centralizzare le funzioni di staff è una decisione di macro-struttura organizzativa.", // 1
          "In un’azienda con struttura organizzativa per prodotto “pura”, centralizzare le funzioni di staff produce una struttura organizzativa ibrida.", // 2
        ],
        a: 0,
      },
      // F6B #7
      {
        s: "Quale delle seguenti affermazioni è falsa?",
        o: [
          "Una struttura organizzativa a matrice è un esempio di struttura organizzativa ibrida.", // 0
          "Una struttura organizzativa a matrice crea una gerarchia duale.", // 1
          "In una struttura organizzativa a matrice tutti i membri dell’organizzazione hanno due capi, uno gerarchico e uno funzionale, che si trovano allo stesso livello gerarchico.", // 2  ← corretta
        ],
        a: 2,
      },
      // F6B #8
      {
        s: "Quale delle seguenti affermazioni è falsa?",
        o: [
          "La struttura organizzativa è il risultato delle decisioni, formalizzate in documenti, sulla divisione del lavoro all’interno dell’organizzazione.", // 0
          "In un’azienda diversificata, la struttura organizzativa funzionale favorisce l’efficienza evitando la duplicazione di ruoli manageriali.", // 1  ← corretta
          "In una struttura organizzativa funzionale i capi sono dotati solo di autorità funzionale.", // 2
        ],
        a: 1,
        d: 1,
        v: 1,
      },
      // F6B #9
      {
        s: "Quale delle seguenti affermazioni è falsa?",
        o: [
          "Le decisioni di micro-struttura organizzativa riguardano il raggruppamento di compiti in mansioni/ruoli.", // 0
          "La struttura organizzativa per prodotto favorisce le sinergie, a livello di acquisti, produzione e vendita, fra aree strategiche d’affari diverse.", // 1  ← corretta
          "Il responsabile dell’Ufficio Vendite ha autorità gerarchica sui venditori che vi lavorano.", // 2
        ],
        a: 1,
      },
      // F6B #10
      {
        s: "Quale delle seguenti affermazioni è falsa?",
        o: [
          "Le decisioni di macro-struttura organizzativa riguardano il raggruppamento di mansioni/ruoli in unità organizzative via via più grandi.", // 0
          "In un’azienda diversificata, la struttura organizzativa funzionale favorisce le sinergie, a livello di acquisti, produzione e vendita, fra aree strategiche d’affari diverse.", // 1
          "In un’azienda diversificata, la struttura organizzativa per prodotto favorisce l’efficienza evitando la duplicazione di ruoli manageriali.", // 2  ← corretta
        ],
        a: 2,
      },
      // F6B #11
      {
        s: "Quale delle seguenti affermazioni è falsa?",
        o: [
          "In un’azienda diversificata, una struttura organizzativa funzionale garantisce una maggior attenzione del management alle singole aree strategiche d’affari.", // 0  ← corretta
          "L’organigramma è una rappresentazione grafica semplificata della struttura organizzativa.", // 1
          "La struttura organizzativa per prodotto “pura” prevede la duplicazione di tutte le funzioni per ogni area strategica d’affari.", // 2
        ],
        a: 0,
      },
      // F6B #12
      {
        s: "La struttura organizzativa definisce:",
        o: [
          "lo stile di direzione", // 0
          "i meccanismi di coordinamento tra le funzioni", // 1
          "la divisione del lavoro all’interno dell’organizzazione", // 2  ← corretta
          "la distribuzione del potere all’interno dell’organizzazione", // 3
        ],
        a: 2,
      },
      // F6B #13
      {
        s: "In un’azienda diversificata, la struttura organizzativa di tipo funzionale ha il vantaggio di:",
        o: [
          "evitare la duplicazione di ruoli manageriali.", // 0  ← corretta
          "garantire una maggior attenzione del management alle singole aree strategiche d’affari.", // 1
          "migliorare il coordinamento tra le persone che lavorano per una stessa area strategica d’affari nelle varie funzioni.", // 2
        ],
        a: 0,
      },
      // F6B #14
      {
        s: "In un’azienda diversificata, la struttura organizzativa per prodotto ha il vantaggio di:",
        o: [
          "favorire le sinergie fra aree strategiche d’affari a livello di acquisti, produzione e vendita.", // 0
          "evitare la duplicazione di ruoli manageriali.", // 1
          "favorire la coerenza delle strategie funzionali con la strategia competitiva di ciascuna area strategica d’affari.", // 2  ← corretta
        ],
        a: 2,
        d: 1,
      },
      // F6B #15
      {
        s: "In un’azienda diversificata, quale Svantaggio comporta una struttura organizzativa per prodotto rispetto a una di tipo funzionale?",
        o: [
          "costi del personale più alti", // 0  ← corretta
          "maggior carico decisionale per il vertice aziendale", // 1
          "maggiori resistenze, interne all’azienda, all’ingresso in una nuova area strategica d’affari", // 2
        ],
        a: 0,
      },
      // F6B #16
      {
        s: "In un’azienda diversificata, quale vantaggio comporta una struttura organizzativa per prodotto rispetto a una di tipo funzionale?",
        o: [
          "costi del personale più bassi", // 0
          "più sinergie fra aree strategiche d’affari diverse", // 1  ← corretta
          "minori resistenze, interne all’azienda, all’ingresso in una nuova area strategica d’affari", // 2
        ],
        a: 1,
      },
      // F6B #17
      {
        s: "In un’azienda diversificata, quale vantaggio comporta una struttura organizzativa funzionale rispetto a una per prodotto?",
        o: [
          "minor carico decisionale per il vertice aziendale", // 0
          "costi del personale più bassi", // 1  ← corretta
          "maggior attenzione del management alle singole aree strategiche d’affari", // 2
        ],
        a: 1,
        d: 1,
      },
      // F6B #18
      {
        s: "In un’azienda diversificata, quale Svantaggio comporta una struttura organizzativa funzionale rispetto a una per prodotto?",
        o: [
          "minori sinergie fra aree strategiche d’affari diverse", // 0
          "costi del personale più alti", // 1  ← corretta
          "maggiori resistenze, interne all’azienda, all’ingresso in una nuova area strategica d’affari", // 2
        ],
        a: 1,
      },
      // F6B #19
      {
        s: "Con riferimento alla struttura organizzativa per prodotto, quale delle seguenti affermazioni è falsa?",
        o: [
          "Garantisce una maggior attenzione del management alle singole aree strategiche d’affari.", // 0
          "Favorisce la formazione di quadri direttivi con capacità gestionali globali.", // 1
          "Non genera duplicazione di risorse/attività.", // 2  ← corretta
        ],
        a: 2,
      },
      // F6B #20
      {
        s: "Quale fra le seguenti strutture organizzative favorisce la flessibilità attraverso la decentralizzazione delle decisioni relative alle diverse linee di prodotto offerte dall’azienda?",
        o: [
          "funzionale", // 0
          "per area geografica", // 1
          "per prodotto", // 2  ← corretta
        ],
        a: 2,
      },
      // F6B #21
      {
        s: "Quale fra le seguenti strutture organizzative favorisce l’efficienza evitando la duplicazione di ruoli manageriali?",
        o: [
          "per prodotto", // 0
          "funzionale", // 1  ← corretta
          "per area geografica", // 2
        ],
        a: 1,
      },
      // F6B #22
      {
        s: "Con riferimento a un organigramma, quale delle seguenti affermazioni è vera?",
        o: [
          "Le linee continue rappresentano i rapporti di autorità gerarchica.", // 0  ← corretta
          "Le linee tratteggiate rappresentano solo rapporti di autorità funzionale.", // 1
          "I rettangoli rappresentano solo unità organizzative.", // 2
          "L’organigramma rappresenta graficamente tutte le decisioni di macro e micro-struttura organizzativa.", // 3
        ],
        a: 0,
      },
      // F6B #23
      {
        s: "Quale delle seguenti affermazioni è falsa?",
        o: [
          "Le decisioni di progettazione organizzativa riguardano solo la divisione e il coordinamento del lavoro.", // 0  ← corretta
          "Le decisioni di progettazione organizzativa devono essere coerenti fra loro.", // 1
          "Le decisioni di progettazione organizzativa devono essere coerenti con la strategia aziendale.", // 2
        ],
        a: 0,
      },
      // F6B #24
      {
        s: "Quale struttura organizzativa è meno adatta a un’azienda diversificata?",
        o: [
          "struttura funzionale", // 0  ← corretta
          "struttura a matrice", // 1
          "struttura per prodotto", // 2
        ],
        a: 0,
      },
      // F6B #25
      {
        s: "Quale delle seguenti affermazioni è falsa?",
        o: [
          "La struttura per progetto è un caso particolare di struttura organizzativa ibrida.", // 0
          "La struttura organizzativa ibrida prevede sempre una gerarchia duale.", // 1  ← corretta
          "La struttura per progetto può essere debole o forte a seconda del tipo di autorità conferita al capo progetto.", // 2
        ],
        a: 1,
        d: 1,
        v: 1,
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════════
  // C1 — Concetti di costo  (25 domande)
  // ═══════════════════════════════════════════════════════════════
  {
    code: "C1",
    title: "Concetti di costo",
    q: [
      // C1 #1
      {
        s: "Quale delle seguenti affermazioni non è sempre vera?",
        o: [
          "Le quote di ammortamento di un bene strumentale pagato alla consegna sono costi contabili a manifestazione finanziaria anticipata.", // 0
          "La quota di TFR dello stipendio mensile di un dipendente di un’azienda con meno di 50 dipendenti il quale abbia optato per lasciare il TFR in azienda è un costo contabile a manifestazione finanziaria differita.", // 1
          "Il costo delle materie prime consumate è un costo contabile a manifestazione finanziaria anticipata.", // 2  ← corretta
        ],
        a: 2,
      },
      // C1 #2
      {
        s: "Quale dei seguenti non è un costo opportunità?",
        o: [
          "Costo di mancata vendita dovuto a capacità produttiva scarsa.", // 0
          "Costo di mancata vendita dovuto a guasto di un macchinario.", // 1
          "Costo del personale.", // 2  ← corretta
        ],
        a: 2,
        d: 1,
      },
      // C1 #3
      {
        s: "Quale delle seguenti affermazioni è vera?",
        o: [
          "A un costo contabile corrisponde sempre temporalmente una spesa.", // 0
          "A una spesa corrisponde sempre un costo contabile.", // 1
          "Un costo opportunità è un mancato profitto.", // 2  ← corretta
        ],
        a: 2,
      },
      // C1 #4
      {
        s: "Quale delle seguenti affermazioni è falsa?",
        o: [
          "Le spese sono uscite di denaro.", // 0
          "A un costo corrisponde sempre una spesa.", // 1  ← corretta
          "I costi rappresentano una perdita di valore.", // 2
        ],
        a: 1,
      },
      // C1 #5
      {
        s: "Quale delle seguenti affermazioni è falsa?",
        o: [
          "Esistono costi cui non corrispondono delle spese.", // 0
          "Costi contabili e spese sono sfasati nel tempo.", // 1
          "I costi sono un fatto finanziario.", // 2  ← corretta
        ],
        a: 2,
      },
      // C1 #6
      {
        s: "Quale delle seguenti affermazioni è falsa?",
        o: [
          "I costi opportunità sono chiamati anche costi figurativi.", // 0
          "I costi opportunità sono utili per prendere decisioni.", // 1
          "I costi opportunità sono registrati dalla contabilità aziendale.", // 2  ← corretta
        ],
        a: 2,
        d: 1,
      },
      // C1 #7
      {
        s: "Quale delle seguenti affermazioni è vera?",
        o: [
          "Un oggetto di costo è sempre un materiale o un prodotto finito.", // 0
          "Un oggetto di costo è sempre qualcosa di tangibile.", // 1
          "Un oggetto di costo è un qualsiasi scopo per cui si impiegano risorse con un valore economico.", // 2  ← corretta
        ],
        a: 2,
      },
      // C1 #8
      {
        s: "Quale delle seguenti affermazioni è falsa?",
        o: [
          "I costi di logistica distributiva fanno parte dei costi industriali.", // 0
          "I costi di trasformazione fanno parte dei costi industriali.", // 1
          "I costi dei materiali indiretti consumati dalle operations fino ai cancelli della fabbrica fanno parte dei costi di trasformazione.", // 2  ← corretta
        ],
        a: 2,
        d: 1,
      },
      // C1 #9
      {
        s: "Quale delle seguenti affermazioni è vera?",
        o: [
          "Il costo della manodopera diretta è sempre un costo diretto.", // 0  ← corretta
          "Il costo della manodopera indiretta è sempre un costo indiretto, qualsiasi sia l’oggetto di costo considerato.", // 1
          "La manodopera indiretta non è coinvolta nello svolgimento delle attività di trasformazione.", // 2
        ],
        a: 0,
        d: 1,
      },
      // C1 #10
      {
        s: "Quale delle seguenti affermazioni NON è necessariamente vera?",
        o: [
          "Se un fattore produttivo è utilizzato in maniera completa ed esclusiva per un oggetto di costo, il costo del fattore produttivo è diretto rispetto a questo oggetto.", // 0
          "Se un fattore produttivo è utilizzato per più oggetti di costo e si misura la quantità effettiva di fattore produttivo utilizzata per ognuno di questi oggetti, il costo del fattore produttivo è diretto rispetto ciascuno di essi.", // 1  ← corretta
          "Se un fattore produttivo è utilizzato interamente per più oggetti di costo e si misura la quantità effettiva di fattore produttivo utilizzata per ognuno di questi oggetti, il costo del fattore produttivo è diretto rispetto ciascuno di essi.", // 2
        ],
        a: 1,
      },
      // C1 #11
      {
        s: "Quale delle seguenti affermazioni è falsa?",
        o: [
          "Un costo indiretto rispetto a un oggetto di costo può essere attribuito a quell’oggetto di costo solo in maniera arbitraria.", // 0
          "Un costo indiretto riguarda un fattore produttivo impiegato per almeno due oggetti di costo differenti.", // 1
          "Rispetto all’intera impresa, tutti i costi sono indiretti.", // 2  ← corretta
        ],
        a: 2,
      },
      // C1 #12
      {
        s: "Se per un fattore produttivo usato interamente per due o più oggetti di costo è in teoria possibile misurare\n    la quantità effettivamente impiegata per ciascun oggetto di costo, quale delle seguenti affermazioni è\n    sicuramente vera?",
        p: 1,
        o: [
          "Il costo del fattore produttivo è diretto rispetto agli oggetti di costo in questione.", // 0
          "Il costo del fattore produttivo è indiretto rispetto agli oggetti di costo in questione.", // 1
          "Il costo del fattore produttivo è diretto o indiretto a seconda che si misurino effettivamente o meno i volumi fisici d’impiego.", // 2  ← corretta
        ],
        a: 2,
      },
      // C1 #13
      {
        s: "Se per un fattore produttivo usato per due o più oggetti di costo si misura la quantità effettivamente\n    impiegata per ciascun oggetto di costo, quale delle seguenti affermazioni è sicuramente vera?",
        p: 1,
        o: [
          "Il costo del fattore produttivo è diretto rispetto agli oggetti di costo in questione.", // 0
          "Il costo del fattore produttivo è indiretto rispetto agli oggetti di costo in questione.", // 1
          "Il costo del fattore produttivo è diretto o indiretto a seconda che il fattore produttivo venga usato in maniera completa o meno per gli oggetti di costo in questione.", // 2  ← corretta
        ],
        a: 2,
      },
      // C1 #14
      {
        s: "Con riferimento a un’azienda multiprodotto, quale delle seguenti affermazioni è vera?",
        o: [
          "Il costo della manodopera diretta è sempre un costo diretto, a prescindere dall’oggetto di costo.", // 0
          "Il costo della manodopera indiretta è sempre un costo indiretto, a prescindere dall’oggetto di costo.", // 1
          "Il costo della manodopera diretta può essere diretto o indiretto, a seconda dell’oggetto di costo.", // 2  ← corretta
        ],
        a: 2,
      },
      // C1 #15
      {
        s: "Quale delle seguenti affermazioni è vera?",
        o: [
          "I costi industriali sono i costi della funzione operations.", // 0
          "I costi industriali sono la somma dei costi delle materie prime e dei loro costi di trasformazione.", // 1
          "I costi di stoccaggio dei prodotti finiti presso le filiali di vendita sono costi industriali.", // 2
          "I costi industriali sono la somma dei costi dei materiali diretti e dei loro costi di trasformazione.", // 3  ← corretta
        ],
        a: 3,
      },
      // C1 #16
      {
        s: "Quale delle seguenti affermazioni è falsa? Il costo della pulizia di uno stabilimento che produce prodotti diversi è:",
        o: [
          "un costo diretto", // 0  ← corretta
          "un costo indiretto", // 1
          "un costo diretto rispetto allo stabilimento", // 2
          "un costo non industriale", // 3
        ],
        a: 0,
      },
      // C1 #17
      {
        s: "Quale delle seguenti affermazioni è falsa? L’ammortamento dell’impianto antiincendio in uno stabilimento che produce prodotti diversi è:",
        o: [
          "un costo indiretto", // 0
          "un costo diretto rispetto allo stabilimento", // 1
          "un costo diretto", // 2  ← corretta
        ],
        a: 2,
      },
      // C1 #18
      {
        s: "Quale delle seguenti affermazioni è falsa? L’ammortamento di un’attrezzatura dedicata a un prodotto, utilizzata in uno stabilimento multiprodotto è:",
        o: [
          "un costo industriale", // 0
          "un costo indiretto", // 1  ← corretta
          "un costo diretto rispetto allo stabilimento", // 2
          "un costo diretto", // 3
        ],
        a: 1,
      },
      // C1 #19
      {
        s: "Quale delle seguenti affermazioni è falsa? Il costo del responsabile della manutenzione di uno stabilimento che produce prodotti diversi è:",
        o: [
          "un costo diretto", // 0  ← corretta
          "un costo indiretto", // 1
          "un costo industriale", // 2
          "un costo diretto rispetto allo stabilimento", // 3
        ],
        a: 0,
      },
      // C1 #20
      {
        s: "Quale delle seguenti affermazioni è falsa? Il costo di una campagna promozionale per uno specifico prodotto è:",
        o: [
          "un costo diretto", // 0
          "un costo non industriale", // 1
          "un costo indiretto", // 2  ← corretta
        ],
        a: 2,
        d: 1,
      },
      // C1 #21
      {
        s: "Quale delle seguenti affermazioni è falsa? Il costo del personale amministrativo di un’azienda che produce più prodotti è:",
        o: [
          "un costo indiretto", // 0
          "un costo diretto", // 1  ← corretta
          "un costo non industriale", // 2
        ],
        a: 1,
      },
      // C1 #22
      {
        s: "Quale delle seguenti affermazioni è falsa? Il costo di una consulenza per una riorganizzazione complessiva di un’azienda che vende più prodotti è:",
        o: [
          "un costo diretto", // 0  ← corretta
          "un costo non industriale", // 1
          "un costo diretto rispetto all’azienda", // 2
        ],
        a: 0,
      },
      // C1 #23
      {
        s: "Quale delle seguenti affermazioni è sicuramente vera? Gli stipendi degli addetti alle vendite di un’azienda che vende più prodotti sono:",
        o: [
          "un costo diretto", // 0
          "un costo diretto dell’ufficio vendite", // 1  ← corretta
          "un costo industriale", // 2
        ],
        a: 1,
      },
      // C1 #24
      {
        s: "Quale delle seguenti voci di costo è un costo industriale?",
        o: [
          "Costi amministrativi", // 0
          "Costi di stoccaggio dei prodotti finiti presso le filiali di vendita.", // 1
          "Costi di stoccaggio dei prodotti finiti in fabbrica.", // 2  ← corretta
          "Costi commerciali", // 3
        ],
        a: 2,
      },
      // C1 #25
      {
        s: "Quale delle seguenti affermazioni è vera?",
        o: [
          "I costi di trasformazione non includono mai costi di materie prime.", // 0  ← corretta
          "I costi di trasformazione non includono i costi del magazzino prodotti finiti in fabbrica.", // 1
          "I costi di trasformazione includono i costi dei materiali indiretti consumati dalle operations fino ai cancelli della fabbrica.", // 2
        ],
        a: 0,
        d: 1,
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════════
  // C2 — Metodo dei centri di costo  (27 domande)
  // ═══════════════════════════════════════════════════════════════
  {
    code: "C2",
    title: "Metodo dei centri di costo",
    q: [
      // C2 #1
      {
        s: "Si abbiano i seguenti dati consuntivi relativi all’ultimo mese:\n Centro di              Ore di manodopera          Costi totali di centro dopo       Ore di manodopera diretta\n costo finale           diretta timbrate nel             la chiusura dei centri   lavorate per ciascun prodotto\n                                      centro                         intermedi    Prodotto A         Prodotto B\n Fabbricazione                           640                            60.000           420               180\n Assemblaggio                            960                            45.000           600               300\n Voce di costo                             Costo totale per prodotto A         Costo totale per prodotto B\n Materia prima                                       10.000                              20.000\nQuale delle seguenti affermazioni è falsa?",
        p: 1,
        o: [
          "Nel mese appena trascorso l’azienda ha sostenuto costi diretti per 30.000 euro.", // 0
          "Il costo pieno totale del prodotto A per il mese appena trascorso vale 82.000 euro.", // 1
          "Il costo pieno totale del prodotto A per il mese appena trascorso vale 77.500 euro.", // 2  ← corretta
          "Nel mese appena trascorso l’azienda ha sostenuto costi indiretti per 105.000 euro.", // 3
        ],
        a: 2,
      },
      // C2 #2
      {
        s: "Si abbiano i seguenti dati consuntivi relativi all’ultimo mese:\n Centro di               Ore di manodopera         Costi totali di centro dopo     Ore di manodopera diretta\n costo finale             diretta timbrate nel           la chiusura dei centri lavorate per ciascun prodotto\n                                       centro                        intermedi  Prodotto A         Prodotto B\n Fabbricazione                            960                          135.000          600              300\n Assemblaggio                             640                           60.000          420              180\nQuale delle seguenti affermazioni è falsa?",
        p: 1,
        o: [
          "Nel mese appena trascorso l’azienda ha sostenuto costi indiretti per 195.000 euro.", // 0
          "Il costo pieno totale del prodotto B per il mese appena trascorso vale 59.062,5 euro.", // 1  ← corretta
          "Il costo pieno totale del prodotto B per il mese appena trascorso vale 63.000 euro.", // 2
        ],
        a: 1,
      },
      // C2 #3
      {
        s: "Si abbiano i seguenti dati consuntivi relativi all’ultimo mese:\n Centro di              Ore di manodopera          Costi totali di centro dopo       Ore di manodopera diretta\n costo finale           diretta timbrate nel             la chiusura dei centri   lavorate per ciascun prodotto\n                                      centro                         intermedi    Prodotto A         Prodotto B\n Fabbricazione                           640                            90.000           420               180\n Assemblaggio                            960                            45.000           600               300\n Voce di costo                             Costo totale per prodotto A         Costo totale per prodotto B\n Materia prima                                       10.000                              20.000\nQuale delle seguenti affermazioni è falsa?",
        p: 1,
        o: [
          "Il costo pieno totale del prodotto B per il mese appena trascorso vale 62.000 euro.", // 0
          "Il costo pieno totale del prodotto B per il mese appena trascorso vale 59.375 euro.", // 1  ← corretta
          "Nel mese appena trascorso l’azienda ha sostenuto costi totali per 165.000 euro.", // 2
        ],
        a: 1,
      },
      // C2 #4
      {
        s: "Si abbiano i seguenti dati consuntivi relativi all’ultimo mese:\n Centro di               Ore di manodopera         Costi totali di centro dopo     Ore di manodopera diretta\n costo finale             diretta timbrate nel           la chiusura dei centri lavorate per ciascun prodotto\n                        centro (costo orario:                        intermedi  Prodotto A         Prodotto B\n                                       25€/h)\n Fabbricazione                            960                           90.000          600              300\n Assemblaggio                             640                           30.000          420              180\nQuale delle seguenti affermazioni è falsa?",
        p: 1,
        o: [
          "Nel mese appena trascorso l’azienda ha sostenuto costi di manodopera diretta per 40.000 euro.", // 0
          "Il costo pieno totale del prodotto A per il mese appena trascorso vale 81.000 euro.", // 1
          "Il costo pieno totale del prodotto A per il mese appena trascorso vale 75.937,5 euro.", // 2  ← corretta
        ],
        a: 2,
      },
      // C2 #5
      {
        s: "Quale delle seguenti affermazioni è falsa?",
        o: [
          "Un centro di costo è un oggetto di costo intermedio.", // 0
          "Un centro di costo è un oggetto di costo finale.", // 1
          "Un centro di costo identifica delle attività.", // 2
          "Un centro di costo dovrebbe essere omogeneo in termini di attività svolte e risorse utilizzate per svolgerle.", // 3  ← corretta
        ],
        a: 3,
        d: 1,
      },
      // C2 #6
      {
        s: "Quale delle seguenti affermazioni è falsa?",
        o: [
          "Il piano dei centri di costo elenca i centri di costo in cui è suddivisa l’azienda.", // 0
          "Il piano dei centri di costo classifica i centri di costo in cui è suddivisa l’azienda.", // 1
          "Il piano dei centri di costo indica l’unità di misura del servizio erogato da ciascun centro.", // 2
          "L’unità di misura del servizio erogato da ciascun centro è sempre oggettiva.", // 3  ← corretta
        ],
        a: 3,
      },
      // C2 #7
      {
        s: "Quale delle seguenti affermazioni è falsa?",
        o: [
          "Un centro di costo può non corrispondere ad alcuna unità organizzativa.", // 0
          "Un centro di costo corrisponde sempre a un’unità organizzativa.", // 1  ← corretta
          "Un centro di costo può corrispondere a una parte di un’unità organizzativa.", // 2
        ],
        a: 1,
      },
      // C2 #8
      {
        s: "Quale delle seguenti affermazioni è vera? I centri di costo comuni:",
        o: [
          "sono quelli su cui vengono ribaltati i costi di tutti gli altri centri di costo dell’azienda.", // 0
          "svolgono attività a favore di tutti gli altri centri di costo dell’azienda.", // 1  ← corretta
          "svolgono attività a favore dei soli centri produttivi dell’azienda.", // 2
          "svolgono attività a favore dei soli centri ausiliari dell’azienda.", // 3
        ],
        a: 1,
      },
      // C2 #9
      {
        s: "Quale delle seguenti affermazioni è sicuramente vera? I centri di costo ausiliari:",
        o: [
          "sono quelli su cui vengono ribaltati tutti i costi dei centri comuni dell’azienda.", // 0
          "danno un servizio a favore di tutti i centri finali dell’azienda.", // 1
          "danno un servizio a favore di altri centri ausiliari dell’azienda.", // 2
          "danno un servizio a favore di centri finali ed, eventualmente, altri centri ausiliari.", // 3  ← corretta
        ],
        a: 3,
        d: 1,
      },
      // C2 #10
      {
        s: "Quale fra i seguenti centri di costo è un centro ausiliario?",
        o: [
          "reparto assemblaggio", // 0
          "ufficio gestione del personale", // 1
          "manutenzione", // 2  ← corretta
        ],
        a: 2,
      },
      // C2 #11
      {
        s: "Quale fra i seguenti centri di costo è un centro comune?",
        o: [
          "amministrazione", // 0  ← corretta
          "centrale di erogazione dell’energia forza motrice", // 1
          "manutenzione", // 2
        ],
        a: 0,
      },
      // C2 #12
      {
        s: "Quale fra i seguenti centri di costo è un centro finale?",
        o: [
          "logistica in entrata (o degli approvvigionamenti)", // 0
          "logistica manifatturiera", // 1
          "logistica in uscita (o distributiva)", // 2  ← corretta
        ],
        a: 2,
      },
      // C2 #13
      {
        s: "Quale fra i seguenti centri di costo non è un centro comune?",
        o: [
          "ufficio controllo di gestione", // 0
          "ufficio vendite", // 1  ← corretta
          "ufficio sistemi informativi", // 2
          "ufficio finanza", // 3
        ],
        a: 1,
      },
      // C2 #14
      {
        s: "Dati il costo totale del centro “amministrazione” (90.000 euro), il numero di impiegati in amministrazione (10), il numero di addetti alla manutenzione (10), il numero di addetti all’assemblaggio (50) e il numero di addetti alla fabbricazione (30), calcolare l’ammontare della quota del costo dell’amministrazione che viene ribaltata sul centro assemblaggio se si usa il numero di dipendenti come base di ripartizione.",
        o: [
          "45.000 euro", // 0  ← corretta
          "50.000 euro", // 1
          "30.000 euro", // 2
        ],
        a: 0,
      },
      // C2 #15
      {
        s: "Dato il costo totale del centro “gestione del personale” (10.000), il costo del personale nei centri manutenzione (4.300), fabbricazione (16.700) e assemblaggio (10.000), calcolare la quota del costo del centro “gestione del personale” che viene ribaltata sul centro fabbricazione se si usa il costo del personale come base di ripartizione.",
        o: [
          "4.073", // 0
          "3.226", // 1
          "5.387", // 2  ← corretta
        ],
        a: 2,
      },
      // C2 #16
      {
        s: "Dato il costo totale del centro “finanza” (8.000), i costi totali dei centri manutenzione (5.100), fabbricazione (26.700) e assemblaggio (13.200), calcolare la quota del costo del centro “finanza” che viene ribaltata sul centro assemblaggio se si usa il costo totale di centro come base di ripartizione.",
        o: [
          "2.347", // 0  ← corretta
          "1.992", // 1
          "4.747", // 2
        ],
        a: 0,
      },
      // C2 #17
      {
        s: "Dato il costo totale del centro “manutenzione” (61.200), il valore originario di macchinari e attrezzature utilizzati nei centri fabbricazione (2.500.000), assemblaggio (500.000) e magazzino automatizzato prodotti finiti (7.000.000), calcolare la quota del costo del centro “manutenzione” che viene imputata al centro fabbricazione se si usa il valore originario di macchinari e attrezzature come base di ripartizione.",
        o: [
          "15.207", // 0
          "15.300", // 1  ← corretta
          "3.060", // 2
        ],
        a: 1,
      },
      // C2 #18
      {
        s: "Dato il costo totale del centro “acquisti” (6.000), il costo dei materiali ausiliari di manutenzione (800), il costo delle materie prime utilizzate nel centro fabbricazione (10.000) e il costo dei componenti d’acquisto utilizzati nel centro assemblaggio (3.200), calcolare la quota del costo del centro “acquisti” che viene imputata al centro assemblaggio se si usa il costo dei materiali acquistati come base di ripartizione.",
        o: [
          "960", // 0
          "1.371", // 1  ← corretta
          "4.286", // 2
        ],
        a: 1,
      },
      // C2 #19
      {
        s: "Con riferimento al metodo dei centri di costo per il calcolo dei costi pieni dei prodotti, quale delle seguenti affermazioni è falsa?",
        o: [
          "La chiusura dei centri comuni precede quella dei centri ausiliari.", // 0
          "I costi dei centri comuni vengono ribaltati solo sui centri ausiliari.", // 1  ← corretta
          "Il numero dei ribaltamenti dipende dal numero di centri comuni e ausiliari presenti in azienda.", // 2
        ],
        a: 1,
      },
      // C2 #20
      {
        s: "Con riferimento al metodo dei centri di costo per il calcolo dei costi pieni dei prodotti, quale delle seguenti affermazioni è falsa?",
        o: [
          "La chiusura dei centri comuni precede quella dei centri ausiliari.", // 0
          "I costi dei centri comuni vengono ribaltati sui centri ausiliari e finali.", // 1
          "I centri di costo devono sempre corrispondere a unità organizzative o parti di esse.", // 2  ← corretta
        ],
        a: 2,
      },
      // C2 #21
      {
        s: "Con riferimento al metodo dei centri di costo per il calcolo dei costi pieni dei prodotti, quale delle seguenti affermazioni è falsa? Il ribaltamento dei costi di un centro ausiliario sui centri finali utenti:",
        o: [
          "dovrebbe rispettare il criterio del fattore di servizio.", // 0
          "dovrebbe utilizzare come base di ripartizione una misura oggettiva del servizio erogato dal centro ausiliario ai centri finali utenti.", // 1
          "dovrebbe avvenire in proporzione diretta al servizio che il centro ausiliario riceve da ciascun centro finale.", // 2  ← corretta
        ],
        a: 2,
      },
      // C2 #22
      {
        s: "Con riferimento al metodo dei centri di costo per il calcolo dei costi pieni dei prodotti, quale delle seguenti affermazioni è vera?",
        o: [
          "Dopo la chiusura dei centri comuni, la somma dei costi dei centri ausiliari e finali è pari al totale dei costi diretti del periodo.", // 0
          "Dopo la chiusura dei centri comuni e ausiliari, la somma dei costi dei centri finali è pari al totale dei costi diretti del periodo.", // 1
          "La chiusura dei centri ausiliari segue quella dei centri comuni.", // 2  ← corretta
        ],
        a: 2,
      },
      // C2 #23
      {
        s: "Con riferimento al metodo dei centri di costo per il calcolo dei costi pieni dei prodotti, quale delle seguenti affermazioni è falsa?",
        o: [
          "Dopo la chiusura dei centri comuni e ausiliari, la somma dei costi dei centri finali è pari al totale dei costi diretti del periodo.", // 0  ← corretta
          "La chiusura dei centri comuni precede quella dei centri ausiliari.", // 1
          "Dopo la chiusura dei centri comuni e ausiliari, la somma dei costi dei centri finali è pari al totale dei costi indiretti del periodo.", // 2
        ],
        a: 0,
      },
      // C2 #24
      {
        s: "Con riferimento al metodo dei centri di costo per il calcolo dei costi pieni dei prodotti, quale delle seguenti affermazioni è sicuramente vera?",
        o: [
          "I centri di costo ausiliari danno un servizio a favore di tutti i centri finali.", // 0  ← corretta
          "I centri di costo finali sono sempre e solo centri in cui si svolgono attività di produzione.", // 1
          "Il ribaltamento dei costi di un centro ausiliario sui centri finali utenti dovrebbe avvenire in proporzione diretta al servizio che ciascun centro finale utente riceve dal centro ausiliario.", // 2
        ],
        a: 0,
      },
      // C2 #25
      {
        s: "Con riferimento al metodo dei centri di costo per il calcolo dei costi pieni dei prodotti in un’azienda industriale, quale delle seguenti affermazioni è sicuramente vera?",
        o: [
          "I centri di costo finali includono i centri in cui si svolgono attività di trasformazione.", // 0  ← corretta
          "I centri di costo ausiliari danno un servizio solo a centri finali dell’azienda.", // 1
          "I centri di costo ausiliari sono quelli su cui vengono ribaltati per intero i costi dei centri comuni dell’azienda.", // 2
        ],
        a: 0,
        d: 1,
      },
      // C2 #26
      {
        s: "Con riferimento al metodo dei centri di costo per il calcolo dei costi pieni dei prodotti, che cosa si intende per “criterio del fattore di servizio” (detto anche principio funzionale)?",
        o: [
          "La classificazione dei centri di costo secondo una gerarchia che va dai centri comuni a quelli finali.", // 0
          "Il ribaltamento dei costi di un centro in funzione del servizio che quel centro ha oggettivamente ricevuto da altri centri.", // 1
          "La classificazione dei costi in relazione alla funzione per la quale sono sostenuti.", // 2
          "Il ribaltamento dei costi di un centro in proporzione diretta al servizio che quel centro ha oggettivamente erogato ad altri centri.", // 3  ← corretta
        ],
        a: 3,
      },
      // C2 #27
      {
        s: "Con riferimento al metodo dei centri di costo per il calcolo dei costi pieni dei prodotti, quale delle seguenti affermazioni è vera?",
        o: [
          "Il numero dei ribaltamenti è sempre due.", // 0
          "La gerarchia dei centri di costo comprende sempre tre livelli.", // 1
          "Un centro di costo comune non eroga mai servizi ad altri centri comuni.", // 2
          "Centri di costo allo stesso livello gerarchico possono scambiarsi servizi vicendevolmente.", // 3  ← corretta
        ],
        a: 3,
        d: 1,
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════════
  // C3 — Rilevazione dei costi  (24 domande)
  // ═══════════════════════════════════════════════════════════════
  {
    code: "C3",
    title: "Rilevazione dei costi",
    q: [
      // C3 #1
      {
        s: "Quale delle seguenti affermazioni è falsa? Con riferimento a un generico periodo di tempo, il costo di acquisto di un fattore produttivo e il costo derivante dal suo utilizzo coincidono:",
        o: [
          "quando il fattore produttivo non è immagazzinabile.", // 0
          "quando il fattore produttivo è tenuto a scorta e il valore della scorta all’inizio del periodo è uguale al valore della scorta alla fine del periodo.", // 1
          "quando il fattore produttivo è tenuto a scorta e il valore della scorta all’inizio del periodo è diverso dal valore della scorta alla fine del periodo.", // 2  ← corretta
        ],
        a: 2,
      },
      // C3 #2
      {
        s: "Quale delle seguenti affermazioni è sicuramente vera? Con riferimento a un generico periodo di tempo, il costo di acquisto di un fattore produttivo e il costo derivante dal suo utilizzo coincidono:",
        o: [
          "quando il prezzo di acquisto non muta nel corso del periodo.", // 0
          "quando il fattore produttivo è tenuto a scorta e il valore della scorta all’inizio del periodo è uguale al valore della scorta alla fine del periodo.", // 1  ← corretta
          "quando il fattore produttivo è tenuto a scorta e il valore della scorta all’inizio del periodo è diverso dal valore della scorta alla fine del periodo.", // 2
        ],
        a: 1,
      },
      // C3 #3
      {
        s: "Quale delle seguenti affermazioni è sicuramente vera? Con riferimento a un generico periodo di tempo, il costo di acquisto di un fattore produttivo e il costo derivante dal suo utilizzo non coincidono:",
        o: [
          "quando il prezzo di acquisto muta nel corso del periodo.", // 0
          "quando il fattore produttivo non è immagazzinabile.", // 1
          "quando il fattore produttivo è tenuto a scorta e il valore della scorta all’inizio del periodo è diverso dal valore della scorta alla fine del periodo.", // 2  ← corretta
        ],
        a: 2,
      },
      // C3 #4
      {
        s: "Quale delle seguenti affermazioni è falsa?",
        o: [
          "Un materiale ausiliario di produzione è un bene strumentale.", // 0  ← corretta
          "Un macchinario è un bene strumentale.", // 1
          "Un bene strumentale è un fattore produttivo a utilizzo ripetuto.", // 2
          "Una licenza software è un bene strumentale.", // 3
        ],
        a: 0,
      },
      // C3 #5
      {
        s: "Quale delle seguenti affermazioni è falsa?",
        o: [
          "Con il criterio FIFO si assume che i materiali siano consumati nel loro ordine di arrivo a magazzino.", // 0
          "Con il criterio del costo medio ponderato si assume che i materiali siano consumati senza un ordine preciso.", // 1
          "Con il criterio LIFO si assume che i materiali siano consumati nel loro ordine di arrivo a magazzino.", // 2  ← corretta
          "Il costo medio ponderato può essere calcolato per movimento o per periodo.", // 3
        ],
        a: 2,
      },
      // C3 #6
      {
        s: "Siano dati i seguenti movimenti di un magazzino materia prima che al 31/12/10 era vuoto: in data 01/01/11, acquisto di 100 pezzi al prezzo di 10 euro il pezzo; in data 05/01/11, prelievo di 80 pezzi; in data 09/01/11, acquisto di 150 pezzi al prezzo di 8 euro il pezzo; in data 30/01/11, prelievo di 160 pezzi. A quanto ammonta il costo della materia prima consumata nel mese di gennaio 2011 se si utilizza il criterio LIFO?",
        o: [
          "2.100 euro", // 0  ← corretta
          "2.120 euro", // 1
          "2.118 euro", // 2
        ],
        a: 0,
      },
      // C3 #7
      {
        s: "Siano dati i seguenti movimenti di un magazzino materia prima che al 31/12/14 era vuoto: in data 01/01/15, acquisto di 100 pezzi al prezzo di 10 euro il pezzo; in data 05/01/15, prelievo di 80 pezzi; in data 09/01/15, acquisto di 150 pezzi al prezzo di 11 euro il pezzo; in data 30/01/15, prelievo di 160 pezzi. A quanto ammonta il valore dei consumi di materia prima nel mese di gennaio 2015 se si utilizza il criterio LIFO?",
        o: [
          "2.550 euro", // 0
          "2.540 euro", // 1  ← corretta
          "2.541 euro", // 2
        ],
        a: 1,
      },
      // C3 #8
      {
        s: "Siano dati i seguenti movimenti del magazzino materia prima, che al 31/12/14 era vuoto: in data 01/01/15, acquisto di 1.000 pezzi al prezzo di 10 euro il pezzo; in data 10/01/15, prelievo di 700 pezzi; in data 15/01/15, acquisto di 2.000 pezzi al prezzo di 9 euro il pezzo; in data 30/01/15, prelievo di 900 pezzi. A quanto ammonta il valore dei consumi di materia prima nel mese di gennaio 2015 se si utilizza il criterio LIFO?",
        o: [
          "15.217 euro", // 0
          "15.100 euro", // 1  ← corretta
          "15.400 euro", // 2
        ],
        a: 1,
      },
      // C3 #9
      {
        s: "Siano dati i seguenti movimenti di un magazzino materia prima che al 31/12/14 era vuoto: in data 01/01/15, acquisto di 100 pezzi al prezzo di 10 euro il pezzo; in data 05/01/15, prelievo di 80 pezzi; in data 09/01/15, acquisto di 150 pezzi al prezzo di 11 euro il pezzo; in data 30/01/15, prelievo di 160 pezzi. A quanto ammonta il valore dei consumi di materia prima nel mese di gennaio 2015 se si utilizza il criterio FIFO?",
        o: [
          "2.550 euro", // 0
          "2.540 euro", // 1  ← corretta
          "2.541 euro", // 2
        ],
        a: 1,
      },
      // C3 #10
      {
        s: "Siano dati i seguenti movimenti di un magazzino materia prima che al 31/12/14 era vuoto: in data 01/01/15, acquisto di 100 pezzi al prezzo di 10 euro il pezzo; in data 05/01/15, prelievo di 80 pezzi; in data 09/01/15, acquisto di 150 pezzi al prezzo di 11 euro il pezzo; in data 30/01/15, prelievo di 160 pezzi. A quanto ammonta il valore dei consumi di materia prima nel mese di gennaio 2015 se si utilizza il criterio del costo medio ponderato (per movimento)?",
        o: [
          "2.550 euro", // 0
          "2.540 euro", // 1
          "2.541 euro", // 2  ← corretta
        ],
        a: 2,
      },
      // C3 #11
      {
        s: "Siano dati i seguenti movimenti del magazzino materia prima, che al 31/12/14 era vuoto: in data 01/01/15, acquisto di 1.000 pezzi al prezzo di 10 euro il pezzo; in data 10/01/15, prelievo di 700 pezzi; in data 15/01/15, acquisto di 2.000 pezzi al prezzo di 9 euro il pezzo; in data 30/01/15, prelievo di 900 pezzi. A quanto ammonta il valore dei consumi di materia prima nel mese di gennaio 2015 se si utilizza il criterio FIFO?",
        o: [
          "15.217 euro", // 0
          "15.100 euro", // 1  ← corretta
          "15.400 euro", // 2
        ],
        a: 1,
      },
      // C3 #12
      {
        s: "Siano dati i seguenti movimenti del magazzino materia prima, che al 31/12/14 era vuoto: in data 01/01/15, acquisto di 1.000 pezzi al prezzo di 10 euro il pezzo; in data 10/01/15, prelievo di 700 pezzi; in data 15/01/15, acquisto di 2.000 pezzi al prezzo di 9 euro il pezzo; in data 30/01/15, prelievo di 900 pezzi. A quanto ammonta il valore dei consumi di materia prima nel mese di gennaio 2015 se si utilizza il criterio del costo medio ponderato (per movimento)?",
        o: [
          "15.217 euro", // 0  ← corretta
          "15.100 euro", // 1
          "15.400 euro", // 2
        ],
        a: 0,
      },
      // C3 #13
      {
        s: "Quale delle seguenti affermazioni è sicuramente vera?",
        o: [
          "L’ammortamento riguarda qualsiasi bene strumentale utilizzato da un’azienda.", // 0
          "L’ammortamento riguarda qualsiasi bene strumentale di proprietà di un’azienda.", // 1
          "L’ammortamento riguarda qualsiasi bene strumentale di proprietà di un’azienda e che abbia una vita utile limitata nel tempo.", // 2  ← corretta
          "La vita utile di un bene strumentale è sempre superiore a un anno.", // 3
        ],
        a: 2,
        d: 1,
      },
      // C3 #14
      {
        s: "Quale delle seguenti affermazioni è falsa?",
        o: [
          "La quota di ammortamento è la perdita di valore del bene strumentale in un determinato periodo all’interno della sua vita utile.", // 0
          "La quota di ammortamento annua è sempre la stessa.", // 1  ← corretta
          "L’ammortamento è un procedimento contabile.", // 2
          "Il valore da ammortizzare è dato dalla differenza fra il valore originario del bene strumentale e il suo eventuale valore residuo a fine vita utile.", // 3
        ],
        a: 1,
        d: 1,
      },
      // C3 #15
      {
        s: "Si consideri un’attrezzatura costata 25.000 € che si prevede di utilizzare per 10.000 ore nell’arco di 4 anni e di vendere a 1.000 € alla fine della sua vita utile. Nell’ipotesi di ammortamento proporzionale al tempo di funzionamento, qual è il suo valore residuo contabile alla fine del primo anno, in cui è stata utilizzata per 2.000 ore?",
        o: [
          "19.000 euro", // 0
          "20.200 euro", // 1  ← corretta
          "20.000 euro", // 2
        ],
        a: 1,
        d: 1,
      },
      // C3 #16
      {
        s: "Nell’ipotesi di ammortamento proporzionale al tempo trascorso, quanto vale la quota annua di ammortamento (QA) di un’attrezzatura costata 24.000 € se si prevede di utilizzarla per 4 anni e di ricavare 2.000 € dalla sua vendita a fine vita utile? Qual è il suo valore residuo contabile (VRC) dopo 4 anni?",
        o: [
          "QA=6.000 €, VRC=0", // 0
          "QA=5.500 €, VRC=0", // 1
          "QA=5.500 €, VRC=2.000 €", // 2  ← corretta
          "QA=6.000 €, VRC=2.000 €", // 3
        ],
        a: 2,
      },
      // C3 #17
      {
        s: "Nell’ipotesi di ammortamento proporzionale al tempo trascorso, quanto vale la quota annua di ammortamento (QA) di un’attrezzatura costata 26.000 € se si prevede di utilizzarla per 4 anni e di ricavare 2.000 € dalla sua vendita a fine vita utile? Qual è il suo valore residuo contabile (VRC) dopo 4 anni?",
        o: [
          "QA=6.000 €, VRC=0", // 0
          "QA=6.000 €, VRC=2.000 €", // 1  ← corretta
          "QA=6.500 €, VRC=0", // 2
          "QA=6.500 €, VRC=2.000 €", // 3
        ],
        a: 1,
        d: 1,
      },
      // C3 #18
      {
        s: "Si consideri un’attrezzatura costata 36.000 € che si prevede di utilizzare per 10.000 ore nell’arco di 4 anni e di vendere per 2.000 € alla fine della sua vita utile. Nell’ipotesi di ammortamento proporzionale al tempo di funzionamento, quanto vale la sua quota di ammortamento nel primo anno (QA1), in cui è stata utilizzata per 3.000 ore? Quale sarà il suo valore residuo contabile (VRC) alla fine del secondo anno, in cui si prevede di utilizzarla per 2.500 ore?",
        o: [
          "QA1= 8.500 €, VRC= 19.000 €", // 0
          "QA1= 10.200 €, VRC= 17.300 €", // 1  ← corretta
          "QA1= 10.800 €, VRC= 16.200 €", // 2
          "QA1=10.200 €, VRC=25.800 €", // 3
        ],
        a: 1,
        d: 1,
      },
      // C3 #19
      {
        s: "Nell’ipotesi di ammortamento proporzionale al tempo trascorso, quanto vale la quota annua di ammortamento (QA) di un’attrezzatura costata 30.000 € se si prevede di utilizzarla per 5 anni e di ricavare 2.000 € dalla sua vendita a fine vita utile? Qual è il suo valore residuo contabile (VRC) dopo 5 anni?",
        o: [
          "QA=5.600 €, VRC=2.000 €", // 0
          "QA=5.600 €, VRC=0", // 1  ← corretta
          "QA=6.000 €, VRC=0", // 2
          "QA=6.000 €, VRC=2.000 €", // 3
        ],
        a: 1,
        d: 1,
      },
      // C3 #20
      {
        s: "Nell’ipotesi di ammortamento proporzionale al tempo trascorso, quanto vale la quota annua di ammortamento (QA) di un’attrezzatura costata 36.000 € se si prevede di utilizzarla per 4 anni e di ricavare 2.000 € dalla sua vendita a fine vita utile? Qual è il suo valore residuo contabile (VRC) dopo 4 anni?",
        o: [
          "QA=9.000 €, VRC=0", // 0
          "QA=8.500 €, VRC=2.000 €", // 1  ← corretta
          "QA=8.500 €, VRC=0", // 2
          "QA=9.000 €, VRC=2.000 €", // 3
        ],
        a: 1,
      },
      // C3 #21
      {
        s: "Se acquisto un’attrezzatura a 48.000 euro e prevedo di utilizzarla per 12.000 ore nell’arco di 4 anni, quanto vale la quota di ammortamento nel secondo anno, in cui è stata utilizzata per 5.000 ore, nell’ipotesi di ammortamento proporzionale al tempo di funzionamento e di valore residuo a fine vita utile di 600 euro?",
        o: [
          "11.850 euro", // 0
          "12.000 euro", // 1
          "19.750 euro", // 2  ← corretta
        ],
        a: 2,
      },
      // C3 #22
      {
        s: "Se acquisto un macchinario al prezzo di 110 e prevedo di utilizzarlo per 10 anni, al termine dei quali stimo di ricavare 10 dalla sua vendita, quanto vale la quota annua di ammortamento nell’ipotesi di ammortamento proporzionale al tempo trascorso?",
        o: [
          "11", // 0
          "12", // 1
          "10", // 2  ← corretta
          "5", // 3
        ],
        a: 2,
      },
      // C3 #23
      {
        s: "Se acquisto un macchinario al prezzo di 120 e prevedo di utilizzarlo per 10 anni, al termine dei quali stimo di ricavare 10 dalla sua vendita, quanto vale la quota annua di ammortamento nell’ipotesi di ammortamento proporzionale al tempo trascorso?",
        o: [
          "11", // 0  ← corretta
          "12", // 1
          "10", // 2
          "5", // 3
        ],
        a: 0,
      },
      // C3 #24
      {
        s: "Quale delle seguenti affermazioni è vera?",
        o: [
          "Un bene strumentale è sempre di proprietà dell’azienda che lo utilizza.", // 0
          "Un bene strumentale è un qualsiasi bene utilizzato per la realizzazione di altri beni.", // 1
          "Un bene strumentale è un bene tangibile a utilizzo ripetuto.", // 2
          "Un bene strumentale è un qualsiasi bene a utilizzo ripetuto.", // 3  ← corretta
        ],
        a: 3,
        d: 1,
        v: 1,
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════════
  // C4A — Determinanti dei costi: costi variabili e fissi  (15 domande)
  // ═══════════════════════════════════════════════════════════════
  {
    code: "C4A",
    title: "Determinanti dei costi: costi variabili e fissi",
    q: [
      // C4A #1
      {
        s: "I costi variabili sono quei costi:",
        o: [
          "il cui ammontare unitario varia al variare del volume di attività.", // 0
          "il cui ammontare unitario varia per variazioni anche minime del volume di attività, qualunque sia il volume di partenza.", // 1
          "il cui ammontare complessivo varia per variazioni anche minime del volume di attività, qualunque sia il volume di partenza.", // 2  ← corretta
        ],
        a: 2,
      },
      // C4A #2
      {
        s: "Quale delle seguenti affermazioni non è sempre vera?",
        o: [
          "I costi variabili sono costi il cui ammontare complessivo varia al variare del tempo.", // 0  ← corretta
          "I costi fissi sono costi il cui ammontare complessivo non cambia per variazioni, entro certi limiti, del volume di attività.", // 1
          "I costi variabili sono costi il cui ammontare complessivo varia per variazioni anche minime del volume di attività, qualunque sia il volume di partenza.", // 2
        ],
        a: 0,
      },
      // C4A #3
      {
        s: "Quale delle seguenti affermazioni è falsa? Le lavorazioni presso terzisti sono:",
        o: [
          "un costo industriale.", // 0
          "un costo variabile.", // 1
          "un costo variabile solo se non esistono vincoli sull’entità del lotto che il terzista è disposto a produrre.", // 2  ← corretta
        ],
        a: 2,
      },
      // C4A #4
      {
        s: "Quale delle seguenti affermazioni è falsa? I costi di materia prima consumata sono:",
        o: [
          "un costo industriale.", // 0
          "un costo variabile solo se non esistono vincoli sul lotto di acquisto della materia prima.", // 1  ← corretta
          "un costo variabile.", // 2
        ],
        a: 1,
      },
      // C4A #5
      {
        s: "Quali delle seguenti affermazioni è falsa?",
        o: [
          "I costi variabili sono quelli dei fattori produttivi perfettamente divisibili all’impiego.", // 0
          "Un fattore produttivo perfettamente divisibile all’impiego può essere sempre acquistato esattamente nella quantità necessaria ad aumentare di uno il volume di attività.", // 1  ← corretta
          "La quantità consumata di un fattore produttivo perfettamente divisibile all’impiego cambia per variazioni anche minime del volume di attività, qualunque sia il volume di partenza.", // 2
        ],
        a: 1,
      },
      // C4A #6
      {
        s: "Quale delle seguenti affermazioni è falsa?",
        o: [
          "I costi variabili totali progressivi crescono in modo più che proporzionale al volume di attività.", // 0
          "I costi variabili totali degressivi diminuiscono al crescere del volume di attività.", // 1  ← corretta
          "I costi variabili totali lineari sono caratterizzati da un valore del rispettivo costo unitario che non dipende dal volume di attività.", // 2
        ],
        a: 1,
      },
      // C4A #7
      {
        s: "Quale delle seguenti affermazioni è sempre vera?",
        o: [
          "I costi variabili totali variano nel tempo.", // 0
          "I costi fissi totali non variano nel tempo.", // 1
          "I costi fissi totali non variano entro un certo intervallo di volumi di attività.", // 2  ← corretta
        ],
        a: 2,
      },
      // C4A #8
      {
        s: "Quale delle seguenti affermazioni è falsa? Le provvigioni di vendita sono:",
        o: [
          "un costo non industriale.", // 0
          "un costo variabile con il volume di produzione.", // 1  ← corretta
          "un costo variabile con il volume di vendita.", // 2
        ],
        a: 1,
      },
      // C4A #9
      {
        s: "I costi fissi sono quei costi:",
        o: [
          "il cui ammontare unitario non cambia per variazioni, entro certi limiti, del volume di attività.", // 0
          "il cui ammontare complessivo non varia mai.", // 1
          "il cui ammontare complessivo non cambia per variazioni, entro certi limiti, del volume di attività.", // 2  ← corretta
        ],
        a: 2,
      },
      // C4A #10
      {
        s: "Quale delle seguenti affermazioni è falsa?",
        o: [
          "I costi fissi sono quelli dei fattori produttivi non perfettamente divisibili all’impiego.", // 0
          "La quantità consumata di un fattore produttivo non perfettamente divisibile all’impiego non cambia per variazioni, entro certi limiti, del volume di attività.", // 1
          "Un fattore produttivo che non può essere acquistato esattamente nella quantità necessaria ad aumentare di uno il volume di attività è sicuramente un fattore produttivo non perfettamente divisibile all’impiego.", // 2  ← corretta
        ],
        a: 2,
      },
      // C4A #11
      {
        s: "Quale delle seguenti affermazioni è vera?",
        o: [
          "Il costo fisso unitario diminuisce sempre al crescere del volume di attività.", // 0
          "Il costo variabile unitario non diminuisce mai al crescere del volume di attività.", // 1
          "Il costo fisso unitario diminuisce al crescere del volume di attività all’interno di un certo intervallo di significatività.", // 2  ← corretta
        ],
        a: 2,
      },
      // C4A #12
      {
        s: "Quale delle seguenti affermazioni non è sicuramente vera?",
        o: [
          "In un’azienda monoprodotto, la capacità produttiva può essere espressa univocamente in termini di output prodotto in un certo intervallo di tempo.", // 0
          "In un contesto multiprodotto, la capacità produttiva può essere espressa univocamente in termini di output prodotto in un certo intervallo di tempo.", // 1  ← corretta
          "Nel breve periodo, la capacità produttiva non è modificabile.", // 2
        ],
        a: 1,
      },
      // C4A #13
      {
        s: "Quale delle seguenti affermazioni è vera?",
        o: [
          "Nel lungo periodo tutti i costi sono variabili.", // 0
          "Nel lungo periodo tutti i costi variano con il volume di attività.", // 1  ← corretta
          "Nel lungo periodo la nozione di costo fisso perde di senso.", // 2
        ],
        a: 1,
      },
      // C4A #14
      {
        s: "Quale dei seguenti costi è variabile?",
        o: [
          "Riscaldamento.", // 0
          "Ammortamento a quote annue costanti di un macchinario.", // 1
          "Illuminazione.", // 2
          "Ammortamento di un’attrezzatura in proporzione al tempo di utilizzo.", // 3  ← corretta
        ],
        a: 3,
      },
      // C4A #15
      {
        s: "Quale dei seguenti costi è fisso?",
        o: [
          "Consumi di una materia prima per la quale il fornitore richiede un lotto minimo di acquisto.", // 0
          "Lavorazione esterna per la quale il terzista richiede un lotto minimo di acquisto.", // 1
          "Ammortamento di un utensile in proporzione al tempo di utilizzo.", // 2
          "Ammortamento a quote annue costanti di un bene strumentale.", // 3  ← corretta
        ],
        a: 3,
        d: 1,
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════════
  // C4B — Determinanti dei costi: costi misti, costo unitario di breve periodo ed economie di scala  (14 domande)
  // ═══════════════════════════════════════════════════════════════
  {
    code: "C4B",
    title: "Determinanti dei costi: costi misti, costo unitario di breve periodo ed economie di scala",
    q: [
      // C4B #1
      {
        s: "Quale delle seguenti affermazioni è vera?",
        o: [
          "I costi semivariabili sono costi variabili a gradini.", // 0
          "I costi semivariabili sono costi fissi con intervalli di significatività relativamente limitati rispetto a quello del fattore produttivo che determina la capacità produttiva.", // 1
          "I costi semivariabili possono essere scomposti in una componente variabile e una fissa.", // 2  ← corretta
        ],
        a: 2,
      },
      // C4B #2
      {
        s: "Quale delle seguenti affermazioni è falsa?",
        o: [
          "Gli straordinari sono una componente variabile del costo della manodopera diretta.", // 0
          "Il costo del lavoro ordinario della manodopera diretta è un costo variabile a gradini al crescere del volume di attività.", // 1
          "Il costo del lavoro ordinario della manodopera diretta è sempre un costo variabile a gradini al diminuire del volume di attività.", // 2  ← corretta
        ],
        a: 2,
      },
      // C4B #3
      {
        s: "Quale delle seguenti affermazioni è falsa?",
        o: [
          "I costi fissi possono essere diretti o indiretti.", // 0
          "I costi variabili sono sempre diretti.", // 1  ← corretta
          "I costi variabili possono essere diretti o indiretti.", // 2
        ],
        a: 1,
      },
      // C4B #4
      {
        s: "Quale delle seguenti affermazioni è vera?",
        o: [
          "I costi indiretti sono sempre fissi.", // 0
          "I costi diretti sono sempre variabili.", // 1
          "I costi indiretti possono essere fissi o variabili.", // 2  ← corretta
        ],
        a: 2,
      },
      // C4B #5
      {
        s: "Con riferimento a un’azienda monoprodotto, quale delle seguenti affermazioni è falsa?",
        o: [
          "Il costo pieno unitario di breve periodo è sempre minimo in corrispondenza del pieno utilizzo della capacità produttiva.", // 0  ← corretta
          "Il costo pieno unitario di breve periodo è minimo in corrispondenza del pieno utilizzo della capacità produttiva se i costi variabili totali sono lineari e non esistono costi misti variabili a gradini.", // 1
          "Quando ci si avvicina al pieno utilizzo della capacità produttiva, i costi variabili totali iniziano a crescere in modo più che proporzionale al volume di produzione e vendita.", // 2
        ],
        a: 0,
        d: 1,
      },
      // C4B #6
      {
        s: "In un’azienda monoprodotto, il costo pieno unitario di breve periodo sicuramente diminuisce in maniera monotona al crescere del volume di produzione se si assume che:",
        o: [
          "i costi variabili totali siano lineari.", // 0
          "non esistano costi misti.", // 1
          "i costi variabili totali siano lineari e non esistano costi misti variabili a gradini.", // 2  ← corretta
          "non esistano costi misti variabili a gradini.", // 3
        ],
        a: 2,
      },
      // C4B #7
      {
        s: "Si consideri un’azienda monoprodotto con capacità produttiva pari a 100.000 pz/anno, costi fissi totali annui pari a 150.000 € e un costo variabile unitario pari a 2 €/pz indipendentemente dal volume di produzione. Quale volume di produzione (V*) minimizza il costo pieno unitario di breve periodo e quanto vale tale minimo (ct*)?",
        o: [
          "V*=80.000 pz e ct*=3,5 €/pz", // 0
          "V*=100.000 pz e ct*=2 €/pz", // 1
          "V*=100.000 pz e ct*=3,5 €/pz", // 2
          "V*=80.000 pz e ct*=3,875 €/pz", // 3  ← corretta
        ],
        a: 3,
        d: 1,
      },
      // C4B #8
      {
        s: "Si consideri un’azienda monoprodotto con capacità produttiva pari a 100.000 pz/anno, costi fissi totali annui pari a 50.000 € e un costo variabile unitario pari a 2 €/pz indipendentemente dal volume di produzione. Quale volume di produzione (V*) minimizza il costo pieno unitario di breve periodo e quanto vale tale minimo (ct*)?",
        o: [
          "V*=80.000 pz e ct*=2,5 €/pz", // 0
          "V*=80.000 pz e ct*=2,625 €/pz", // 1
          "V*=100.000 pz e ct*=2 €/pz", // 2
          "V*=100.000 pz e ct*=2,5 €/pz", // 3  ← corretta
        ],
        a: 3,
        d: 1,
      },
      // C4B #9
      {
        s: "Si consideri un’azienda monoprodotto con capacità produttiva pari a 50.000 pz/anno, costi fissi totali annui pari a 100.000 € e un costo variabile unitario pari a 2 €/pz indipendentemente dal volume di produzione. Quale volume di produzione (V*) minimizza il costo pieno unitario di breve periodo e quanto vale tale minimo (ct*)?",
        o: [
          "V*=40.000 pz e ct*=4 €/pz", // 0
          "V*=50.000 pz e ct*=2 €/pz", // 1
          "V*=50.000 pz e ct*=4 €/pz", // 2  ← corretta
        ],
        a: 2,
      },
      // C4B #10
      {
        s: "Perché, nell’ipotesi di costi variabili totali lineari e assenza di costi misti variabili a gradini, il costo pieno unitario di breve periodo è minimo in corrispondenza della saturazione al 100% della capacità produttiva?",
        o: [
          "Perché si sfruttano le economie di scala.", // 0
          "Perché la capacità produttiva è data e non modificabile.", // 1
          "Perché il costo variabile unitario varia con il grado di utilizzo della capacità produttiva.", // 2
          "Perché i costi fissi si distribuiscono sul maggior numero possibile di unità prodotte.", // 3  ← corretta
        ],
        a: 3,
        d: 1,
      },
      // C4B #11
      {
        s: "Quale delle seguenti affermazioni è falsa? Una tecnologia produttiva è caratterizzata da economie di scala se:",
        o: [
          "i costi fissi di un impianto basato su quella tecnologia crescono meno che proporzionalmente alla capacità produttiva dell’impianto.", // 0
          "il costo pieno unitario di un prodotto realizzato con quella tecnologia diminuisce al crescere del volume di produzione, a parità di capacità produttiva.", // 1  ← corretta
          "a parità di prezzi dei fattori produttivi, il minimo della curva di costo pieno unitario di breve periodo di un prodotto realizzato con quella tecnologia diminuisce all’aumentare della capacità produttiva.", // 2
        ],
        a: 1,
      },
      // C4B #12
      {
        s: "Si considerino due impianti produttivi, A e B, che per realizzare lo stesso prodotto utilizzano la stessa tecnologia, caratterizzata da economie di scala. Se l’impianto A ha capacità produttiva doppia di B, quale delle seguenti affermazioni è falsa?",
        o: [
          "Il costo pieno unitario del prodotto realizzato con l’impianto A è sempre inferiore al costo pieno unitario del prodotto realizzato con l’impianto B.", // 0  ← corretta
          "Il costo pieno unitario minimo del prodotto realizzato con l’impianto A è inferiore al costo pieno unitario minimo del prodotto realizzato con l’impianto B.", // 1
          "Il costo fisso dell’impianto A è meno che doppio rispetto a quello dell’impianto B.", // 2
        ],
        a: 0,
      },
      // C4B #13
      {
        s: "Si considerino due impianti produttivi, A e B, che per realizzare lo stesso prodotto utilizzano la stessa tecnologia, caratterizzata da economie di scala. Se l’impianto A ha capacità produttiva doppia di B, quale delle seguenti affermazioni è vera?",
        o: [
          "Il costo pieno unitario del prodotto realizzato con l’impianto A è sempre inferiore al costo pieno unitario del prodotto realizzato con l’impianto B", // 0
          "Il minimo del costo pieno unitario del prodotto realizzato con l’impianto A è inferiore al minimo del costo pieno unitario del prodotto realizzato con l’impianto B.", // 1  ← corretta
          "Il costo fisso dell’impianto A è doppio rispetto a quello dell’impianto B.", // 2
        ],
        a: 1,
      },
      // C4B #14
      {
        s: "Quale delle seguenti affermazioni è vera? Una tecnologia produttiva è caratterizzata da economie di scala se:",
        o: [
          "il costo pieno unitario del prodotto realizzato con tale tecnologia diminuisce al crescere del volume di produzione nel breve periodo.", // 0
          "il costo pieno unitario del prodotto realizzato con tale tecnologia cresce al crescere del volume di produzione nel breve periodo.", // 1
          "il minimo del costo pieno unitario di breve periodo di un prodotto realizzato con quella tecnologia diminuisce al crescere della capacità produttiva, a parità di prezzi dei fattori produttivi.", // 2  ← corretta
        ],
        a: 2,
        d: 1,
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════════
  // C5 — Analisi costi-volumi-profitti  (30 domande)
  // ═══════════════════════════════════════════════════════════════
  {
    code: "C5",
    title: "Analisi costi-volumi-profitti",
    q: [
      // C5 #1
      {
        s: "Quale dei seguenti non è un assunto sottostante la formula: volume di pareggio=costi fissi totali/(prezzo- costo variabile unitario)?",
        o: [
          "Azienda monoprodotto.", // 0
          "Capacità produttiva non modificabile.", // 1
          "Assenza di qualsiasi tipo di costo misto.", // 2  ← corretta
          "Costi variabili totali direttamente proporzionali al volume di produzione/vendita.", // 3
          "Ricavi totali lineari.", // 4
        ],
        a: 2,
      },
      // C5 #2
      {
        s: "Quale dei seguenti non è un assunto per l’esistenza del “Volume di pareggio = costi fissi totali/(prezzo – costo variabile unitario)”?",
        o: [
          "Prezzo superiore al costo variabile unitario.", // 0
          "Costi fissi totali minori o eguali alla differenza fra ricavi totali e costi totali calcolata in corrispondenza del pieno utilizzo della capacità produttiva.", // 1  ← corretta
          "Costi fissi totali minori o eguali alla differenza fra ricavi totali e costi variabili totali calcolata in corrispondenza del pieno utilizzo della capacità produttiva.", // 2
        ],
        a: 1,
      },
      // C5 #3
      {
        s: "Si consideri un’azienda monoprodotto con costi fissi totali mensili pari a 100, costo variabile unitario pari a 8 e prezzo unitario di vendita pari a 10. Il volume mensile di pareggio vale:",
        o: [
          "10", // 0
          "13", // 1
          "50", // 2  ← corretta
        ],
        a: 2,
      },
      // C5 #4
      {
        s: "Si consideri un’azienda monoprodotto con costi fissi totali mensili pari a 1.000, costo variabile unitario pari a 6 e prezzo unitario di vendita pari a 16. Il volume mensile di pareggio vale:",
        o: [
          "167", // 0
          "100", // 1  ← corretta
          "63", // 2
        ],
        a: 1,
      },
      // C5 #5
      {
        s: "Si consideri un’azienda monoprodotto con costi fissi totali mensili pari a 2.000, costo variabile unitario pari a 7 e prezzo unitario di vendita pari a 9. Il volume mensile di pareggio vale:",
        o: [
          "1.000", // 0  ← corretta
          "286", // 1
          "223", // 2
        ],
        a: 0,
      },
      // C5 #6
      {
        s: "Si consideri un’azienda monoprodotto con costi fissi totali mensili pari a 200, costo variabile unitario pari a 12 e prezzo unitario di vendita pari a 20. Il volume mensile di pareggio vale:",
        o: [
          "17", // 0
          "10", // 1
          "25", // 2  ← corretta
        ],
        a: 2,
        d: 1,
      },
      // C5 #7
      {
        s: "Un’impresa venderà il suo unico prodotto a 250€/pz e prevede di sostenere i seguenti costi annui:\nenergia FM (€/pz)                           20\nmaterie prime (€/pz)                        70\nmanodopera diretta (€/pz)                   35\nammortamenti industriali (k€)               90\nprovvigioni di vendita (€/pz)               25\ncosti amministrativi (k€)                   10\nQuanto vale il volume annuo di pareggio se si considera la manodopera diretta un costo variabile?",
        p: 1,
        o: [
          "400", // 0
          "667", // 1
          "1.000", // 2  ← corretta
        ],
        a: 2,
        d: 1,
      },
      // C5 #8
      {
        s: "Un’impresa venderà il suo unico prodotto a 200€/pz e prevede di sostenere i seguenti costi annui:\nenergia FM (€/pz)                           20\nmaterie prime (€/pz)                        80\nmanodopera diretta (k€)                     40\nammortamenti industriali (k€)               90\nprovvigioni di vendita (€/pz)               30\ncosti amministrativi (k€)                   10\nQuanto vale il volume annuo di pareggio se si considera la manodopera diretta un costo fisso?",
        p: 1,
        o: [
          "2.000", // 0  ← corretta
          "700", // 1
          "1.077", // 2
        ],
        a: 0,
        d: 1,
      },
      // C5 #9
      {
        s: "Un’impresa venderà il suo unico prodotto a 170€/pz e prevede di sostenere i seguenti costi annui:\nmaterie prime (€/pz)                        50\nenergia FM (€/pz)                            5\nlavorazioni presso terzisti (€/pz)          15\nmanodopera diretta (k€)                     90\nammortamenti industriali (k€)               80\ncosti amministrativi (k€)                   10\nQuanto vale il volume annuo di pareggio se si considera la manodopera diretta un costo fisso?",
        p: 1,
        o: [
          "1.059", // 0
          "1.800", // 1  ← corretta
          "2.572", // 2
        ],
        a: 1,
        d: 1,
      },
      // C5 #10
      {
        s: "Un’impresa venderà il suo unico prodotto a 160€/pz e prevede di sostenere i seguenti costi annui:\nenergia FM (€/pz)                           10\nmaterie prime (€/pz)                        60\nmanodopera diretta (€/pz)                   30\nammortamenti industriali (k€)               80\nforza vendita diretta (k€)                  30\ncosti amministrativi (k€)                   10\nQuanto vale il volume annuo di pareggio se si considera la manodopera diretta un costo variabile?",
        p: 1,
        o: [
          "750", // 0
          "1.200", // 1
          "2.000", // 2  ← corretta
        ],
        a: 2,
        d: 1,
      },
      // C5 #11
      {
        s: "Quale delle seguenti affermazioni è falsa?",
        o: [
          "Sotto opportuni assunti, il grado di leva operativa vale 1/{1-[CF/(p-cv)]}.", // 0  ← corretta
          "Ceteris paribus, più elevato è il grado di leva operativa, più perdite l’impresa fa sotto il volume di pareggio.", // 1
          "Il grado di leva operativa permette di capire quanto varia percentualmente il risultato economico d’esercizio per effetto di una certa variazione percentuale del volume di vendita.", // 2
        ],
        a: 0,
      },
      // C5 #12
      {
        s: "Quale delle seguenti affermazioni è falsa?",
        o: [
          "Il grado di leva operativa permette di capire quanto varia percentualmente il risultato economico d’esercizio per effetto di una certa variazione percentuale del volume di vendita.", // 0
          "Sotto opportuni assunti, il grado di leva operativa vale 1/{1-[CF/(p-cv)V0]}.", // 1
          "Ceteris paribus, più elevato è il grado di leva operativa, meno utili l’impresa fa sopra il volume di pareggio.", // 2  ← corretta
        ],
        a: 2,
      },
      // C5 #13
      {
        s: "Quale delle seguenti affermazioni è falsa?",
        o: [
          "Il grado di leva operativa dipende dall’incidenza dei costi fissi sui costi totali dell’azienda.", // 0
          "Sotto opportuni assunti, il grado di leva operativa vale 1/[CF/(p-cv)V0].", // 1  ← corretta
          "Ceteris paribus, più elevato è il grado di leva operativa, più utili l’impresa fa sopra il volume di pareggio.", // 2
        ],
        a: 1,
      },
      // C5 #14
      {
        s: "Quale delle seguenti affermazioni è falsa?",
        o: [
          "Il grado di leva operativa è il rapporto fra la variazione percentuale del risultato economico d’esercizio e la variazione percentuale del volume di vendita.", // 0
          "Sotto opportuni assunti, il grado di leva operativa vale 1/[1-(CF/V0)].", // 1
          "Ceteris paribus, più elevato è il grado di leva operativa, più perdite l’impresa fa sotto il volume di pareggio.", // 2  ← corretta
        ],
        a: 2,
        d: 1,
      },
      // C5 #15
      {
        s: "Un’impresa venderà il suo unico prodotto a 100 €/pz e prevede di sostenere i seguenti costi annui:\nmaterie prime (€/pz)                        25\nlavorazioni esterne (€/pz)                  15\nmanodopera diretta (k€)                     40\nammortamenti industriali (k€)               85\nprovvigioni di vendita (€/pz)               10\ncosti amministrativi (k€)                   25\nConsiderando la manodopera diretta un costo fisso di capacità, calcolare il volume di pareggio (Vp) e il grado\ndi leva operativa (GdLO) in corrispondenza di un volume di produzione pari a 3 volte il volume di pareggio.",
        p: 1,
        o: [
          "Vp =3.000, GdLO =1,5", // 0  ← corretta
          "Vp =15.000, GdLO =1,5", // 1
          "Vp =3.750, GdLO =3", // 2
          "Vp =3.000, GdLO =3", // 3
        ],
        a: 0,
        d: 1,
      },
      // C5 #16
      {
        s: "Un’impresa venderà il suo unico prodotto a 100 €/pz e prevede di sostenere i seguenti costi annui:\nmaterie prime (€/pz)                        20\nlavorazioni esterne (€/pz)                  10\nmanodopera diretta (€/pz)                   30\nammortamenti industriali (k€)               90\nprovvigioni di vendita (€/pz)               10\ncosti amministrativi (k€)                   30\nConsiderando la manodopera diretta un costo variabile, calcolare il volume di pareggio (Vp) e il grado di leva\noperativa (GdLO) in corrispondenza di un volume di produzione pari a 1,5 volte il volume di pareggio.",
        p: 1,
        o: [
          "Vp =2.500, GdLO =3", // 0
          "Vp =4.000, GdLO =3", // 1  ← corretta
          "Vp =4.000, GdLO =1.5", // 2
        ],
        a: 1,
        d: 1,
      },
      // C5 #17
      {
        s: "Quale delle seguenti affermazioni è falsa?",
        o: [
          "Con una struttura di costo elastica, il risultato economico di esercizio è più sensibile alle variazioni del volume di vendita.", // 0  ← corretta
          "Con una struttura di costo elastica, il risultato economico di esercizio è meno sensibile alle variazioni del volume di vendita.", // 1
          "Una struttura di costo è tanto più rigida quanto maggiore è l’incidenza dei costi fissi sui costi totali a un volume normale di produzione/vendita.", // 2
        ],
        a: 0,
      },
      // C5 #18
      {
        s: "Quale delle seguenti affermazioni è falsa?",
        o: [
          "L’esternalizzazione di attività produttive fa diminuire il grado di leva operativa.", // 0
          "L’integrazione verticale a monte fa diminuire il grado di leva operativa.", // 1  ← corretta
          "Il grado di leva operativa è l’elasticità del risultato economico d’esercizio rispetto al volume di vendita.", // 2
        ],
        a: 1,
      },
      // C5 #19
      {
        s: "Attualmente un’azienda produce e vende 250 pz/mese del suo unico prodotto al prezzo di 500 €/pz. Sapendo che i suoi costi fissi totali ammontano 20.000 €/mese e il costo variabile unitario del prodotto è pari a 300 €/pz, quale delle seguenti affermazioni è falsa?",
        o: [
          "Il margine di sicurezza è del 60%.", // 0
          "Il margine di sicurezza è del 150%.", // 1  ← corretta
          "L’azienda può ridurre il suo fatturato del 60% senza andare in perdita.", // 2
        ],
        a: 1,
        d: 1,
      },
      // C5 #20
      {
        s: "Attualmente un’azienda produce e vende 80 pz/mese del suo unico prodotto al prezzo di 500 €/pz. Sapendo che i suoi costi fissi totali ammontano 20.000 €/mese a e il costo variabile unitario del prodotto è pari a 300 €/pz, quale delle seguenti affermazioni è vera?",
        o: [
          "Il margine di sicurezza è del 20%.", // 0  ← corretta
          "Il margine di sicurezza è del 25%.", // 1
          "L’azienda può ridurre il suo fatturato del 25% senza andare in perdita.", // 2
        ],
        a: 0,
      },
      // C5 #21
      {
        s: "Si consideri un’azienda il cui unico prodotto è venduto a 500 €/pz e ha un costo variabile unitario di 300 €/pz. Sapendo che i costi fissi totali dell’azienda ammontano 20.000 €/mese, quale delle seguenti affermazioni non è sicuramente vera?",
        o: [
          "Il volume mensile di pareggio ammonta a 100.", // 0
          "L’azienda deve vendere 150 pz/mese se vuole realizzare utili per 10.000 €/mese.", // 1
          "Il margine di sicurezza è del 50%.", // 2  ← corretta
        ],
        a: 2,
      },
      // C5 #22
      {
        s: "Quale dei seguenti non è un obiettivo dell’analisi costi-volumi-profitti?",
        o: [
          "Determinare l’elasticità del risultato economico d’esercizio rispetto al volume di vendita.", // 0
          "Determinare l’elasticità del risultato economico d’esercizio rispetto al prezzo di vendita.", // 1
          "Capire se esistono economie di scala.", // 2  ← corretta
          "Determinare il punto di pareggio.", // 3
        ],
        a: 2,
      },
      // C5 #23
      {
        s: "Quale delle seguenti affermazioni è falsa?",
        o: [
          "Sotto opportuni assunti, il grado di leva operativa vale: MdCs(V0)/RE(V0).", // 0
          "Sotto opportuni assunti, il volume di pareggio vale: costi fissi totali diviso margine di contribuzione semplice percentuale.", // 1  ← corretta
          "Sotto opportuni assunti, il grado di leva operativa vale: 1/{1-[Vp /V0]}.", // 2
        ],
        a: 1,
      },
      // C5 #24
      {
        s: "Sotto opportuni assunti, quale delle seguenti eguaglianze è falsa in corrispondenza del punto di pareggio di un’impresa monoprodotto?",
        o: [
          "ricavi totali = costi totali", // 0
          "margine di contribuzione semplice unitario = costi fissi totali", // 1  ← corretta
          "fatturato di pareggio = costi fissi totali diviso margine di contribuzione semplice percentuale", // 2
        ],
        a: 1,
      },
      // C5 #25
      {
        s: "Quale delle seguenti affermazioni è falsa?",
        o: [
          "Sotto opportuni assunti, il grado di leva operativa vale: MdCs(V0)/(MdCs(V0) - CF).", // 0
          "Sotto opportuni assunti, il grado di leva operativa vale: 1/{1-[CF /mdcs*V0]}.", // 1
          "Sotto opportuni assunti, il grado di leva operativa vale: MdCs(V0)/(MdCs(V0) + CF).", // 2  ← corretta
        ],
        a: 2,
        d: 1,
      },
      // C5 #26
      {
        s: "Quale delle seguenti affermazioni è falsa?",
        o: [
          "Se positivo, il margine di contribuzione semplice unitario di un prodotto è il contributo che la vendita di un’unità del prodotto dà alla copertura dei costi fissi totali dell’azienda ed, eventualmente, alla generazione di utili.", // 0
          "Se positivo, il margine di contribuzione semplice complessivo di un prodotto è il contributo che la vendita del prodotto dà alla copertura dei suoi costi variabili.", // 1
          "Se positivo, il margine di contribuzione semplice unitario di un prodotto è l’incremento del risultato economico di esercizio dovuto alla vendita di un’unità in più del prodotto.", // 2  ← corretta
        ],
        a: 2,
        d: 1,
      },
      // C5 #27
      {
        s: "Quale delle seguenti affermazioni è falsa?",
        o: [
          "Se negativo, il margine di contribuzione semplice unitario di un prodotto è il decremento del risultato economico d’esercizio dovuto alla vendita di un’unità in più del prodotto.", // 0
          "Se positivo, il margine di contribuzione semplice unitario di un prodotto è il contributo che la vendita di un’unità del prodotto dà alla copertura dei suoi costi fissi totali.", // 1  ← corretta
          "Il margine di contribuzione semplice complessivo di un prodotto è direttamente proporzionale al numero di unità del prodotto vendute.", // 2
        ],
        a: 1,
      },
      // C5 #28
      {
        s: "Quale delle seguenti affermazioni è sicuramente vera?",
        o: [
          "Se positivo, il margine di contribuzione semplice complessivo di un prodotto è il contributo che la vendita del prodotto dà alla generazione di utili.", // 0
          "Se positivo, il margine di contribuzione semplice complessivo di un prodotto è il contributo che la vendita del prodotto dà alla copertura dei costi fissi totali dell’azienda e, una volta coperti tutti questi costi, alla generazione di utili.", // 1
          "Se positivo, il margine di contribuzione semplice complessivo di un prodotto è il contributo che la vendita del prodotto dà alla copertura dei costi fissi totali dell’azienda e, una volta coperti tutti questi costi e nell’ipotesi di azienda monoprodotto, alla generazione di utili.", // 2  ← corretta
        ],
        a: 2,
      },
      // C5 #29
      {
        s: "Quale delle seguenti affermazioni è falsa?",
        o: [
          "Il margine di contribuzione semplice percentuale di un prodotto è l’incidenza del suo margine di contribuzione semplice complessivo sui ricavi totali della vendita del prodotto.", // 0
          "Il margine di contribuzione semplice percentuale di un prodotto è l’incidenza del suo margine di contribuzione semplice unitario sul prezzo di vendita del prodotto.", // 1
          "Se positivo, il margine di contribuzione semplice percentuale è il contributo che la vendita di un’unità del prodotto dà alla copertura dei costi fissi totali dell’azienda.", // 2  ← corretta
        ],
        a: 2,
      },
      // C5 #30
      {
        s: "A quale prezzo va venduto un prodotto il cui costo variabile unitario è pari a 300 €/pz se si vuole che ogni euro di fatturato del prodotto contribuisca a coprire il 25% dei costi fissi totali dell’azienda?",
        o: [
          "1200 €/pz", // 0
          "400 €/pz", // 1  ← corretta
          "375 €/pz", // 2
        ],
        a: 1,
        d: 1,
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════════
  // C6A — Costi per le decisioni di gestione corrente: decisioni di make or buy  (25 domande)
  // ═══════════════════════════════════════════════════════════════
  {
    code: "C6A",
    title: "Costi per le decisioni di gestione corrente: decisioni di make or buy",
    q: [
      // C6A #1
      {
        s: "Quale delle seguenti affermazioni non è sempre vera?",
        o: [
          "Una decisione di gestione corrente è attuabile nel breve periodo.", // 0
          "Una decisione di gestione corrente riguarda l’utilizzo della capacità produttiva scarsa esistente.", // 1  ← corretta
          "Una decisione d’investimento (relativa alla gestione caratteristica di un’impresa industriale) modifica la capacità produttiva.", // 2
        ],
        a: 1,
      },
      // C6A #2
      {
        s: "Quale delle seguenti affermazioni è falsa?",
        o: [
          "Una decisione di gestione corrente è immediatamente reversibile.", // 0
          "Una decisione d’investimento (relativa alla gestione caratteristica di un’impresa industriale) non è attuabile nel breve periodo.", // 1  ← corretta
          "Una decisione di gestione corrente con capacità produttiva scarsa riguarda solo le piccole imprese.", // 2
        ],
        a: 1,
        d: 1,
      },
      // C6A #3
      {
        s: "Quale delle seguenti affermazioni è falsa?",
        o: [
          "In una decisione di convenienza economica, l’alternativa di base consiste nel non fare nulla.", // 0
          "In una decisione di convenienza economica fra alternative a obiettivo identico, i ricavi sono sempre irrilevanti per la decisione.", // 1
          "Una decisione di convenienza economica dipende sempre e solo dai ricavi e costi differenziali.", // 2
          "I costi totali differenziali sono i costi dell’alternativa di cambiamento meno quelli dell’alternativa di base.", // 3  ← corretta
        ],
        a: 3,
        d: 1,
      },
      // C6A #4
      {
        s: "Quale delle seguenti affermazioni è sicuramente vera?",
        o: [
          "Se i costi totali differenziali sono positivi, l’alternativa di base è economicamente più conveniente.", // 0
          "Se i costi totali differenziali sono positivi, conviene mantenere lo status quo.", // 1
          "Se i costi totali differenziali sono positivi e le alternative sono a obiettivo identico, cambiare lo status quo fa diminuire il risultato economico d’esercizio.", // 2  ← corretta
        ],
        a: 2,
      },
      // C6A #5
      {
        s: "Quale delle seguenti affermazioni è falsa? Una decisione di convenienza economica fra due alternative dipende sempre e solo:",
        o: [
          "dai costi e ricavi rilevanti per la decisione.", // 0
          "dai ricavi e costi che assumono valori diversi nelle alternative in esame.", // 1
          "dai ricavi e dai costi variabili.", // 2  ← corretta
        ],
        a: 2,
      },
      // C6A #6
      {
        s: "Nella decisione di make or buy relativa a un prodotto finito, ci si basa solo su:",
        o: [
          "margine di contribuzione semplice del prodotto", // 0
          "margine di contribuzione evoluto del prodotto", // 1
          "costi cessanti e costi sorgenti", // 2  ← corretta
          "costi diretti e costi indiretti del prodotto", // 3
        ],
        a: 2,
      },
      // C6A #7
      {
        s: "Quale delle seguenti affermazioni è sicuramente vera? Nelle decisioni di gestione corrente relative al make or buy (da fornitore) di un componente (non un prodotto finito) sono rilevanti, in condizioni di capacità produttiva abbondante:",
        o: [
          "i costi variabili del componente, i suoi costi fissi diretti e la quota di costi fissi indiretti attribuita al componente.", // 0
          "i costi variabili del componente e la quota di costi fissi indiretti attribuita al componente.", // 1
          "i costi variabili del componente.", // 2  ← corretta
          "i costi variabili del componente e i suoi costi fissi diretti.", // 3
        ],
        a: 2,
        d: 1,
        v: 1,
      },
      // C6A #8
      {
        s: "Con riferimento alle decisioni di gestione corrente relative al make or buy (da fornitore) di un componente (non un prodotto finito) in condizioni di capacità produttiva scarsa, quale delle seguenti affermazioni è falsa?",
        o: [
          "I costi variabili del componente sono sempre rilevanti.", // 0
          "I costi fissi diretti discrezionali del componente possono essere rilevanti.", // 1
          "I costi fissi diretti di capacità del componente possono essere rilevanti.", // 2  ← corretta
        ],
        a: 2,
      },
      // C6A #9
      {
        s: "Quale delle seguenti affermazioni è falsa?",
        o: [
          "In una decisione di make or buy con capacità produttiva non modificabile e abbondante, le alternative sono a obiettivo identico.", // 0
          "In una decisione di make or buy con capacità produttiva non modificabile e scarsa, le alternative sono a obiettivo identico.", // 1  ← corretta
          "In una decisione di make or buy con capacità produttiva non modificabile, i costi cessanti sono quelli che l’azienda smette di sostenere se cambia lo status quo.", // 2
        ],
        a: 1,
      },
      // C6A #10
      {
        s: "Con riferimento alle decisioni di make or buy di breve periodo, quale delle seguenti affermazioni è falsa?",
        o: [
          "I costi cessanti sono quelli che cessano per effetto della decisione di mutare lo status quo.", // 0
          "I costi sorgenti sono quelli che sorgono per effetto della decisione di mutare lo status quo.", // 1
          "I costi sorgenti sono sempre quelli che sorgono se si decide di acquistare il componente all’esterno.", // 2  ← corretta
        ],
        a: 2,
      },
      // C6A #11
      {
        s: "Con riferimento alle decisioni di make or buy di breve periodo, quale delle seguenti affermazioni è falsa?",
        o: [
          "I costi totali differenziali sono pari ai costi sorgenti meno i costi cessanti.", // 0
          "Il risultato economico d’esercizio differenziale è pari ai costi sorgenti meno i costi cessanti.", // 1  ← corretta
          "I costo cessanti sono quelli che cessano se si decide di cambiare lo status quo.", // 2
        ],
        a: 1,
      },
      // C6A #12
      {
        s: "Con riferimento alle decisioni di make or buy in condizioni di capacità produttiva non modificabile, flessibile e scarsa, quale delle seguenti affermazioni non è sempre vera?",
        o: [
          "I costi opportunità di mancata vendita sono sempre rilevanti.", // 0
          "I costi opportunità di mancata vendita dipendono dal margine di contribuzione semplice unitario del prodotto di cui si perde la vendita.", // 1  ← corretta
          "I costi opportunità di mancata vendita sono direttamente proporzionali alle unità di prodotto di cui si perde la vendita.", // 2
        ],
        a: 1,
        d: 1,
      },
      // C6A #13
      {
        s: "Con riferimento alle decisioni di make or buy in condizioni di capacità produttiva non modificabile, flessibile e scarsa, quale delle seguenti affermazioni è vera?",
        o: [
          "I costi opportunità di mancata vendita sono sempre costi cessanti.", // 0
          "I costi opportunità di mancata vendita sono sempre costi sorgenti.", // 1  ← corretta
          "I costi opportunità di mancata vendita sono costi sorgenti se al momento di prendere la decisione il componente è prodotto all’esterno dell’azienda.", // 2
        ],
        a: 1,
      },
      // C6A #14
      {
        s: "Con riferimento alla decisione di gestione corrente relativa al make or buy di un componente, quale delle seguenti affermazioni è vera?",
        o: [
          "Il costo di acquisto del componente è sicuramente un costo sorgente.", // 0
          "Il costo di acquisto delle materie prime per produrre il componente è sicuramente un costo cessante.", // 1
          "Il costo di acquisto del componente è un costo sorgente se al momento di prendere la decisione il componente è prodotto all’interno dell’azienda.", // 2  ← corretta
        ],
        a: 2,
        d: 1,
      },
      // C6A #15
      {
        s: "Con riferimento a una decisione di gestione corrente, quale delle seguenti affermazioni è vera?",
        o: [
          "I costi variabili sono sempre rilevanti.", // 0  ← corretta
          "I costi fissi non sono mai rilevanti.", // 1
          "I costi fissi diretti sono sempre rilevanti.", // 2
          "I costi fissi di capacità non sono mai rilevanti.", // 3
          "I costi indiretti sono sempre irrilevanti.", // 4
        ],
        a: 0,
        d: 1,
      },
      // C6A #16
      {
        s: "Quale delle seguenti affermazioni è falsa?",
        o: [
          "I costi fissi di capacità non possono essere eliminati o attivati senza modificare la capacità produttiva.", // 0
          "I costi fissi discrezionali possono essere eliminati o attivati senza modificare la capacità produttiva.", // 1
          "I costi fissi indiretti sono sempre irrilevanti nelle decisioni di gestione corrente.", // 2
          "I costi fissi discrezionali sono sempre rilevanti nelle decisioni di gestione corrente.", // 3  ← corretta
        ],
        a: 3,
        d: 1,
      },
      // C6A #17
      {
        s: "Quale delle seguenti affermazioni è falsa?",
        o: [
          "Tutti i costi variabili sono sempre rilevanti nelle decisioni di gestione corrente.", // 0  ← corretta
          "I costi fissi di capacità non sono mai rilevanti per le decisioni di gestione corrente.", // 1
          "I costi fissi discrezionali possono essere rilevanti per le decisioni di gestione corrente.", // 2
        ],
        a: 0,
      },
      // C6A #18
      {
        s: "I costi unitari di un componente attualmente costruito in casa siano i seguenti:\nmanodopera diretta                                       20\nmaterie prime                                            35\nammortamenti industriali diretti rispetto al componente 5\nammortamenti industriali indiretti                       10\ncosti amministrativi                                     10\nQual è il prezzo di acquisto del componente al di sotto del quale conviene cessare la produzione del\ncomponente e acquistarlo da un fornitore? Si assuma che a) la capacità produttiva sia abbondante e non\nmodificabile e b) la manodopera diretta sia un costo variabile con il volume di produzione.",
        p: 1,
        o: [
          "55", // 0
          "60", // 1
          "70", // 2
          "80", // 3  ← corretta
        ],
        a: 3,
        d: 1,
      },
      // C6A #19
      {
        s: "I costi unitari di un componente attualmente costruito in casa siano i seguenti:\nmanodopera diretta                                       20\nmaterie prime                                            35\nammortamenti industriali diretti rispetto al componente 5\nammortamenti industriali comuni                          10\ncosti amministrativi                                     10\nQual è il prezzo di acquisto del componente al di sotto del quale conviene cessare la produzione del\ncomponente e acquistarlo da un fornitore? Si assuma che a) la capacità produttiva sia abbondante e non\nmodificabile e b) la manodopera diretta sia un costo fisso di capacità.",
        p: 1,
        o: [
          "55", // 0
          "60", // 1
          "35", // 2
          "80", // 3  ← corretta
        ],
        a: 3,
        d: 1,
      },
      // C6A #20
      {
        s: "I costi unitari di un componente attualmente costruito in casa siano i seguenti:\ncosti amministrativi                                     10\nmanodopera diretta                                       20\nmaterie prime                                            35\nenergia FM                                                 2\nammortamenti industriali indiretti rsp. al componente 10\nammortamenti industriali diretti risp. al componente       5\nQual è il prezzo di acquisto del componente al di sotto del quale conviene cessare la produzione del\ncomponente e acquistarlo da un fornitore? Si assuma che a) la capacità produttiva sia non modificabile e\nabbondante e b) la manodopera diretta sia un costo variabile con il volume di produzione.",
        p: 1,
        o: [
          "55", // 0
          "62", // 1
          "72", // 2
          "57", // 3  ← corretta
        ],
        a: 3,
        d: 1,
      },
      // C6A #21
      {
        s: "Un terzista si propone di realizzare per conto nostro un prodotto finito che attualmente produciamo in\ncasa con i seguenti costi unitari:\nmaterie prime                                   55\nmanodopera diretta                              50\nenergia FM                                       5\nammortamenti industriali diretti                10\ncosti amministrativi                            10\nQual è il prezzo di acquisto della lavorazione esterna al di sotto del quale conviene cessare la produzione\ninterna del prodotto? Si assuma che a) la capacità produttiva sia abbondante e non modificabile e b) la\nmanodopera diretta sia un costo variabile con il volume di produzione.",
        p: 1,
        o: [
          "130", // 0
          "110", // 1
          "55", // 2
          "60", // 3  ← corretta
          "120", // 4
        ],
        a: 3,
        d: 1,
      },
      // C6A #22
      {
        s: "Un fornitore si propone di realizzare per conto nostro un prodotto finito che attualmente produciamo in\ncasa con i seguenti costi unitari:\nmaterie prime                                    55\nmanodopera diretta                               50\nenergia FM                                        5\nammortamenti industriali diretti                 10\ncosti amministrativi                             10\nQual è il prezzo di acquisto del prodotto al di sotto del quale conviene cessarne la produzione interna? Si\nassuma che a) la capacità produttiva sia abbondante e non modificabile e b) la manodopera diretta sia un\ncosto variabile con il volume di produzione.",
        p: 1,
        o: [
          "130", // 0
          "110", // 1  ← corretta
          "120", // 2
          "55", // 3
          "60", // 4
        ],
        a: 1,
        d: 1,
      },
      // C6A #23
      {
        s: "Siano dati i seguenti valori di costo unitario di un prodotto attualmente realizzato in casa:\nmanodopera diretta                               55\nmaterie prime                                    50\nenergia FM                                         5\nammortamenti industriali diretti                 10\ncosti amministrativi                             10\nprovvigioni di vendita                           15\nQual è il prezzo di acquisto del prodotto al di sotto del quale conviene cessare la produzione interna del\nprodotto e acquistarlo da un fornitore? Si assuma che a) la capacità produttiva sia abbondante e non\nmodificabile e b) la manodopera diretta sia un costo fisso di capacità.",
        p: 1,
        o: [
          "135", // 0
          "120", // 1
          "55", // 2  ← corretta
          "110", // 3
          "70", // 4
        ],
        a: 2,
        d: 1,
      },
      // C6A #24
      {
        s: "Un terzista si propone di realizzare per conto nostro un prodotto finito che attualmente produciamo in\ncasa con i seguenti costi unitari:\nmanodopera diretta                              50\nmaterie prime                                   40\nenergia FM                                       5\nammortamenti industriali diretti                10\ncosti amministrativi                            10\nprovvigioni di vendita                           8\nQual è il prezzo di acquisto della lavorazione esterna al di sotto del quale conviene cessare la produzione\ninterna del prodotto? Si assuma che a) la capacità produttiva sia abbondante e non modificabile e b) la\nmanodopera diretta sia un costo variabile col volume di produzione.",
        p: 1,
        o: [
          "113", // 0
          "103", // 1
          "95", // 2
          "55", // 3  ← corretta
          "63", // 4
        ],
        a: 3,
        d: 1,
      },
      // C6A #25
      {
        s: "Siano dati i seguenti valori di costo unitario di un componente attualmente fabbricato in casa:\nmanodopera diretta                                  50\nmaterie prime                                       40\nenergia FM                                          10\nammortamenti industriali diretti                      5\ncosti amministrativi                                10\nQual è il prezzo di acquisto del componente al di sotto del quale conviene cessarne la produzione interna e\nacquistarlo da un fornitore? Si assuma che a) la capacità produttiva sia abbondante e non modificabile e b) la\nmanodopera diretta sia un costo fisso di capacità.",
        p: 1,
        o: [
          "115", // 0
          "105", // 1
          "50", // 2  ← corretta
          "45", // 3
        ],
        a: 2,
        d: 1,
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════════
  // C6B — Costi per le decisioni di gestione corrente: decisioni di vendita  (23 domande)
  // ═══════════════════════════════════════════════════════════════
  {
    code: "C6B",
    title: "Costi per le decisioni di gestione corrente: decisioni di vendita",
    q: [
      // C6B #1
      {
        s: "Con riferimento a un prodotto venduto da un’azienda, quale delle seguenti affermazioni è falsa?",
        o: [
          "Il margine di contribuzione evoluto è sempre maggiore del margine di contribuzione semplice.", // 0  ← corretta
          "Il margine di contribuzione evoluto è sempre minore o eguale al margine di contribuzione semplice.", // 1
          "Se il margine di contribuzione semplice è positivo, esso esprime il contributo che il prodotto dà alla copertura dei costi fissi totali dell’azienda e, una volta coperti questi costi e nell’ipotesi di azienda monoprodotto, alla generazione di utili.", // 2
        ],
        a: 0,
      },
      // C6B #2
      {
        s: "Con riferimento a un prodotto venduto da un’azienda, quale delle seguenti affermazioni è vera?",
        o: [
          "Il margine di contribuzione semplice è sempre maggiore del margine di contribuzione evoluto.", // 0
          "Il margine di contribuzione semplice è sempre maggiore o eguale al margine di contribuzione evoluto.", // 1  ← corretta
          "Un margine di contribuzione evoluto positivo esprime il contributo che il prodotto dà alla copertura di tutti i costi fissi totali dell’azienda e, eventualmente, alla generazione di utili.", // 2
        ],
        a: 1,
      },
      // C6B #3
      {
        s: "Con riferimento a un prodotto venduto da un’azienda, quale delle seguenti affermazioni è vera?",
        o: [
          "Il margine di contribuzione evoluto è sempre maggiore del margine di contribuzione semplice.", // 0
          "Il margine di contribuzione evoluto è sempre minore del margine di contribuzione semplice.", // 1
          "Un margine di contribuzione evoluto positivo esprime il contributo che il prodotto dà alla copertura dei costi fissi totali dell’azienda.", // 2
          "Se il margine di contribuzione evoluto è positivo, esprime il contributo che la vendita del prodotto dà alla copertura dei costi fissi totali dell’azienda non direttamente attribuibili al prodotto.", // 3  ← corretta
        ],
        a: 3,
      },
      // C6B #4
      {
        s: "Qual è la definizione di margine di contribuzione complessivo evoluto di un prodotto?",
        o: [
          "Ricavi totali di un prodotto meno costi totali del prodotto.", // 0
          "Ricavi totali di un prodotto meno costi variabili totali del prodotto.", // 1
          "Ricavi totali di un prodotto meno costi fissi diretti totali del prodotto.", // 2
          "Ricavi totali di un prodotto meno costi variabili totali e costi fissi diretti totali del prodotto.", // 3  ← corretta
        ],
        a: 3,
      },
      // C6B #5
      {
        s: "Quale delle seguenti affermazioni è falsa?",
        o: [
          "Il margine di contribuzione evoluto non è mai superiore al margine di contribuzione semplice.", // 0
          "Conviene sempre produrre e vendere un prodotto con margine di contribuzione semplice positivo.", // 1  ← corretta
          "In condizioni di capacità produttiva non modificabile e abbondante, se il margine di contribuzione evoluto di un prodotto è positivo, conviene sicuramente produrre e vendere il prodotto.", // 2
        ],
        a: 1,
        d: 1,
      },
      // C6B #6
      {
        s: "Quale delle seguenti affermazioni è sicuramente vera?",
        o: [
          "Conviene sempre produrre e vendere un prodotto con margine di contribuzione evoluto positivo.", // 0
          "Conviene sempre produrre e vendere un prodotto con margine di contribuzione evoluto positivo se tutti i suoi costi fissi diretti sono discrezionali.", // 1  ← corretta
          "Conviene sempre produrre e vendere un prodotto con margine di contribuzione evoluto positivo se la capacità produttiva è non modificabile e abbondante.", // 2
        ],
        a: 1,
        d: 1,
      },
      // C6B #7
      {
        s: "In condizioni di capacità produttiva non modificabile e abbondante, conviene sicuramente produrre e vendere un prodotto che ha:",
        o: [
          "margine di contribuzione semplice positivo, indipendentemente dal segno del margine di contribuzione evoluto.", // 0
          "margine di contribuzione semplice positivo e margine di contribuzione evoluto negativo.", // 1
          "margine di contribuzione evoluto positivo.", // 2  ← corretta
        ],
        a: 2,
      },
      // C6B #8
      {
        s: "Se la capacità produttiva è non modificabile e abbondante, allora conviene produrre e vendere qualsiasi prodotto con margine di contribuzione evoluto positivo perché il prodotto:",
        o: [
          "contribuisce a coprire i costi fissi totali dell’azienda anche se non copre appieno i suoi costi diretti totali.", // 0
          "contribuisce a coprire i costi fissi totali dell’azienda anche se non copre appieno i suoi costi variabili totali.", // 1
          "copre appieno i propri costi variabili totali e i propri costi fissi diretti totali e contribuisce a coprire i costi fissi totali non direttamente attribuibili al prodotto.", // 2  ← corretta
        ],
        a: 2,
      },
      // C6B #9
      {
        s: "In condizioni di capacità produttiva non modificabile e abbondante, conviene sicuramente non produrre e vendere un prodotto che ha:",
        o: [
          "margine di contribuzione evoluto negativo.", // 0
          "margine di contribuzione evoluto negativo, margine di contribuzione semplice positivo e costi fissi diretti totali solo di capacità.", // 1
          "margine di contribuzione semplice negativo.", // 2  ← corretta
        ],
        a: 2,
      },
      // C6B #10
      {
        s: "Supponendo che il margine di contribuzione semplice di un prodotto sia positivo e il suo margine di contribuzione evoluto sia negativo, quale delle seguenti affermazioni è falsa nell’ipotesi di capacità produttiva non modificabile e abbondante?",
        o: [
          "Conviene produrre e vendere il prodotto se i suoi costi fissi diretti totali sono solo discrezionali.", // 0  ← corretta
          "Conviene produrre e vendere il prodotto se i suoi costi fissi diretti totali sono solo di capacità.", // 1
          "Non è possibile decidere sulla base dei segni dei due margini di contribuzione se i costi fissi diretti totali del prodotto sono in parte discrezionali e in parte di capacità.", // 2
        ],
        a: 0,
      },
      // C6B #11
      {
        s: "Se un’azienda con capacità produttiva non modificabile e abbondante smette di produrre e vendere un prodotto il cui margine di contribuzione evoluto complessivo è positivo, quale delle seguenti affermazioni non è sempre vera?",
        o: [
          "La diminuzione del risultato economico d’esercizio è pari, in valore assoluto, al margine di contribuzione evoluto del prodotto.", // 0  ← corretta
          "La diminuzione del risultato economico d’esercizio è pari, in valore assoluto, al margine di contribuzione evoluto del prodotto se i suoi costi fissi diretti totali sono solo discrezionali.", // 1
          "La diminuzione del risultato economico d’esercizio è, in valore assoluto, maggiore o eguale al margine di contribuzione evoluto del prodotto.", // 2
        ],
        a: 0,
      },
      // C6B #12
      {
        s: "Quale delle seguenti affermazioni è vera?",
        o: [
          "Se positivo, il margine di contribuzione semplice di un prodotto per unità di fattore produttivo scarso esprime il contributo che la vendita del prodotto dà alla copertura dei costi fissi totali dell’azienda.", // 0
          "Se positivo, il margine di contribuzione semplice di un prodotto per unità di fattore produttivo scarso esprime il contributo che un’unità di fattore produttivo scarso dedicata a realizzare il prodotto dà alla copertura dei costi fissi totali dell’azienda non direttamente attribuibili al prodotto.", // 1
          "Se positivo, il margine di contribuzione semplice di un prodotto per unità di fattore produttivo scarso esprime il contributo che un’unità di fattore produttivo scarso dedicata a realizzare il prodotto dà alla copertura dei costi fissi totali dell’azienda.", // 2  ← corretta
        ],
        a: 2,
      },
      // C6B #13
      {
        s: "Quale delle seguenti affermazioni è falsa?",
        o: [
          "Per la decisione economica sui prodotti cui destinare una capacità produttiva non modificabile e scarsa si utilizza il margine di contribuzione semplice dei prodotti per unità di fattore produttivo scarso.", // 0
          "La decisione economica sui prodotti cui destinare una capacità produttiva scarsa è una decisione di make or buy.", // 1  ← corretta
          "La decisione economica sui prodotti cui destinare una capacità produttiva scarsa è una decisione di vendita.", // 2
        ],
        a: 1,
      },
      // C6B #14
      {
        s: "Il margine di contribuzione semplice di un prodotto per unità di fattore produttivo scarso è dato da:",
        o: [
          "margine di contribuzione semplice complessivo del prodotto per numero di unità del prodotto realizzate con un’unità di fattore produttivo scarso.", // 0
          "margine di contribuzione semplice unitario del prodotto per numero di unità di fattore produttivo scarso necessarie per realizzare un’unità di prodotto finito.", // 1
          "margine di contribuzione semplice unitario del prodotto per produttività del fattore produttivo scarso se dedicato a realizzare il prodotto.", // 2  ← corretta
        ],
        a: 2,
      },
      // C6B #15
      {
        s: "Quale delle seguenti affermazioni è vera? Per massimizzare il risultato economico d’esercizio in condizioni di capacità produttiva non modificabile e scarsa, il fattore produttivo scarso va allocato ai prodotti finiti:",
        o: [
          "in ordine decrescente di margine di contribuzione semplice complessivo.", // 0
          "in ordine decrescente di margine di contribuzione evoluto complessivo.", // 1
          "in ordine decrescente di margine di contribuzione semplice per unità di fattore produttivo scarso.", // 2  ← corretta
          "in ordine crescente di margine di contribuzione semplice per unità di fattore produttivo scarso.", // 3
        ],
        a: 2,
      },
      // C6B #16
      {
        s: "Quale delle seguenti affermazioni è sicuramente vera? Se la capacità produttiva è scarsa e non modificabile:",
        o: [
          "conviene produrre e vendere qualsiasi prodotto con un margine di contribuzione semplice positivo.", // 0
          "conviene produrre e vendere qualsiasi prodotto con un margine di contribuzione evoluto positivo.", // 1
          "conviene produrre e vendere qualsiasi prodotto con un margine di contribuzione semplice per unità di fattore produttivo scarso positivo.", // 2
          "nessuna delle precedenti.", // 3  ← corretta
        ],
        a: 3,
      },
      // C6B #17
      {
        s: "Se un prodotto ha un costo variabile unitario pari a 10, un costo fisso diretto unitario pari a 90 e una quota attribuita di costi fissi indiretti pari a 30, qual è il prezzo di vendita sotto il quale è sicuramente conveniente, da un punto di vista economico, smettere di produrlo e venderlo, nell’ipotesi di capacità produttiva non modificabile e abbondante?",
        o: [
          "100", // 0  ← corretta
          "130", // 1
          "10", // 2
        ],
        a: 0,
        d: 1,
      },
      // C6B #18
      {
        s: "Se un prodotto ha un costo variabile unitario pari a 10, un costo fisso diretto unitario pari a 90 e una quota attribuita di costi fissi indiretti pari a 30, qual è il prezzo minimo di vendita sopra il quale è sicuramente conveniente, dal punto di vista economico, continuare a produrlo e venderlo nell’ipotesi di capacità produttiva non modificabile e abbondante?",
        o: [
          "100", // 0  ← corretta
          "130", // 1
          "10", // 2
        ],
        a: 0,
        d: 1,
      },
      // C6B #19
      {
        s: "Sulla base dei dati riportati di seguito, un’azienda deve decidere se accettare o meno la commessa di un\ncliente per 100 pezzi/anno di un prodotto da realizzare su specifiche del cliente stesso.\nCosto materie prime                                   50 €/pz\nCosto energia FM                                      20 €/pz\nConsumo manodopera diretta                            1 h/pz\nCosto orario manodopera diretta                       20€/h\nQuota di ammortamento attrezzature comuni             1.000€/anno\nSi tenga presente che a) la capacità produttiva dell’azienda è abbondante e non modificabile e b) la\nmanodopera diretta è un costo fisso di capacità.\nQual è il prezzo minimo di vendita del prodotto affinché sia economicamente conveniente accettare la\ncommessa?",
        p: 1,
        o: [
          "80", // 0
          "90", // 1
          "70", // 2  ← corretta
          "100", // 3
        ],
        a: 2,
      },
      // C6B #20
      {
        s: "Sulla base dei dati riportati di seguito, un’azienda deve decidere se accettare o meno la commessa di un\ncliente per 100 unità/anno di un prodotto da realizzare su specifiche del cliente stesso.\nCosto materie prime                                   50 €/pz\nCosto energia FM                                      20 €/pz\nConsumo manodopera diretta                            1 h/pz\nCosto orario manodopera diretta                       20€/h\nQuota di ammortamento attrezzature comuni             1.000€/anno\nSi tenga presente che a) la capacità produttiva dell’azienda è abbondante e non modificabile e b) la\nmanodopera diretta è un costo variabile con il volume di produzione.\nQual è il prezzo minimo di vendita del prodotto affinché sia economicamente conveniente accettare la\ncommessa?",
        p: 1,
        o: [
          "80", // 0
          "90", // 1
          "70", // 2  ← corretta
          "100", // 3
        ],
        a: 2,
      },
      // C6B #21
      {
        s: "Un’azienda che assembla manualmente un prodotto a partire da componenti di acquisto ha capacità\nproduttiva scarsa, pari a 1.600 h/anno, nel reparto di montaggio e ha una domanda annua di 1.000 pz del\nprodotto A e 2.000 pz del prodotto B. Si tenga presente che la manodopera diretta è un costo fisso di capacità\ne la capacità produttiva non è modificabile. Inoltre:\n                                                   Prodotto A                        Prodotto B\n Costo materie prime                                  70€/pz                            80€/pz\n Consumo manodopera diretta                           0,5h/pz                            1h/pz\n Costo orario manodopera diretta                       20€/h                             20€/h\n Prezzo di vendita                                   100€/pz                           120€/pz\nQuali sono, per ciascun prodotto, i volumi prodottivi che l’azienda dovrebbe decidere di realizzare\nconsiderando esclusivamente aspetti di tipo economico?",
        p: 1,
        o: [
          "0 (zero) pz di A e 1.600pz di B", // 0  ← corretta
          "1.000 pz di A e 1.100 pz di B", // 1
          "500 pz di A e 1.000 pz di B", // 2
        ],
        a: 0,
        d: 1,
      },
      // C6B #22
      {
        s: "Un’azienda che assembla manualmente un prodotto a partire da componenti di acquisto ha capacità\nproduttiva scarsa, pari a 1.600 h/anno, nel reparto di montaggio e ha una domanda annua di 1.000 pz del\nprodotto A e 2.000 pz del prodotto B. Si tenga presente che la manodopera diretta è un costo fisso di capacità\ne la capacità produttiva non è modificabile. Inoltre:\n                                                   Prodotto A                        Prodotto B\n Costo materie prime                                  70€/pz                            80€/pz\n Consumo manodopera diretta                           0,8h/pz                            1h/pz\n Costo orario manodopera diretta                       20€/h                             20€/h\n Prezzo di vendita                                   100€/pz                           120€/pz\nQuali sono, per ciascun prodotto, i volumi prodottivi che l’azienda dovrebbe decidere di realizzare\nconsiderando esclusivamente aspetti di tipo economico?",
        p: 1,
        o: [
          "0 (zero) pz di A e 1.600 pz di B", // 0  ← corretta
          "1.000 pz di A e 800 pz di B", // 1
          "500 pz di A e 1.000 pz di B", // 2
        ],
        a: 0,
        d: 1,
      },
      // C6B #23
      {
        s: "Un prodotto ha un costo variabile unitario pari a 10, un costo fisso diretto unitario pari a 90 e una quota attribuita di costi fissi indiretti pari a 30. Quale delle seguenti affermazioni non è sicuramente vera nell’ipotesi di capacità produttiva non modificabile e abbondante?",
        o: [
          "È economicamente conveniente continuare a produrre e vendere il prodotto se il suo prezzo di vendita è maggiore di 10.", // 0  ← corretta
          "È economicamente conveniente continuare a produrre e vendere il prodotto se il suo prezzo di vendita è maggiore di 10 e i suoi costi fissi diretti sono solo di capacità.", // 1
          "È economicamente conveniente continuare a produrre e vendere il prodotto se il suo prezzo di vendita è maggiore di 130.", // 2
          "È economicamente conveniente continuare a produrre e vendere il prodotto se il suo prezzo di vendita è maggiore di 100 e i suoi costi fissi diretti sono solo discrezionali.", // 3
        ],
        a: 0,
        d: 1,
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════════
  // C7A — Analisi degli scostamenti: definizioni e caso semplificato  (18 domande)
  // ═══════════════════════════════════════════════════════════════
  {
    code: "C7A",
    title: "Analisi degli scostamenti: definizioni e caso semplificato",
    q: [
      // C7A #1
      {
        s: "Quale delle seguenti affermazioni è falsa?",
        o: [
          "I costi di formazione del personale sono costi controllabili dal responsabile risorse umane.", // 0
          "L’ammortamento di un pacchetto software acquistato nel passato è un costo controllabile dal responsabile sistemi informativi.", // 1  ← corretta
          "I costi pubblicitari sono un costo controllabile dal responsabile commerciale.", // 2
        ],
        a: 1,
      },
      // C7A #2
      {
        s: "Quale delle seguenti affermazioni è falsa?",
        o: [
          "I costi controllabili parametrici sono predeterminabili sia a livello unitario che a livello complessivo.", // 0
          "L’ammontare complessivo dei costi controllabili parametrici varia linearmente con il volume di produzione previsto.", // 1
          "I costi controllabili parametrici sono tutti relativi a fattori produttivi perfettamente divisibili all’impiego.", // 2  ← corretta
        ],
        a: 2,
      },
      // C7A #3
      {
        s: "Quale delle seguenti affermazioni è falsa?",
        o: [
          "I costi variabili lineari sono costi controllabili parametrici.", // 0
          "I costi controllabili non parametrici sono predeterminabili solo a livello complessivo.", // 1
          "I costi di ammortamento non sono mai controllabili.", // 2  ← corretta
        ],
        a: 2,
      },
      // C7A #4
      {
        s: "Quale delle seguenti affermazioni è falsa?",
        o: [
          "Il costo della materia prima consumata è un costo controllabile dal responsabile del reparto che la utilizza.", // 0
          "L’ammortamento a quote annue costanti di un macchinario acquistato nel passato è un costo controllabile dal responsabile del reparto che lo utilizza.", // 1  ← corretta
          "Il costo della manodopera diretta è un costo controllabile dal responsabile del reparto che la utilizza.", // 2
        ],
        a: 1,
      },
      // C7A #5
      {
        s: "Quale delle seguenti affermazioni è falsa?",
        o: [
          "Il costo della materia prima consumata è un costo controllabile parametrico.", // 0
          "Il costo dell’energia forza motrice è un costo controllabile parametrico.", // 1
          "Il costo delle campagne pubblicitarie è un costo controllabile parametrico.", // 2  ← corretta
        ],
        a: 2,
      },
      // C7A #6
      {
        s: "Quale delle seguenti affermazioni è falsa?",
        o: [
          "Il costo della manodopera diretta è un costo controllabile non parametrico.", // 0  ← corretta
          "Il costo di sviluppo di nuovi prodotti è un costo controllabile non parametrico.", // 1
          "I costi pubblicitari sono costi controllabili non parametrici.", // 2
        ],
        a: 0,
      },
      // C7A #7
      {
        s: "Quale delle seguenti affermazioni è vera?",
        o: [
          "Uno scostamento totale positivo denota un incremento dei costi rispetto al previsto.", // 0
          "Lo scostamento totale è sempre la somma algebrica degli scostamenti di volume, efficienza e prezzo.", // 1
          "Lo scostamento totale è la somma algebrica degli scostamenti di volume, efficienza e prezzo se i costi inclusi nel costo standard totale sono solo parametrici.", // 2  ← corretta
        ],
        a: 2,
      },
      // C7A #8
      {
        s: "Nell’ipotesi che tutti i costi inclusi nel costo standard totale siano parametrici, quale delle seguenti\n   affermazioni è vera?",
        p: 1,
        o: [
          "Lo scostamento di volume si misura in unità di prodotto finito.", // 0
          "Lo scostamento di volume quantifica la variazione di costi che si sarebbe osservata se impieghi unitari e prezzi non fossero variati fra budget e consuntivo.", // 1  ← corretta
          "Lo scostamento di prezzo si misura in euro per unità di fattore produttivo.", // 2
        ],
        a: 1,
      },
      // C7A #9
      {
        s: "Con riferimento all’analisi degli scostamenti dei costi in produzione, quale delle seguenti affermazioni è\n   vera?",
        p: 1,
        o: [
          "Uno scostamento negativo indica sempre un incremento di costi rispetto al previsto.", // 0  ← corretta
          "Uno scostamento positivo è sempre motivo di soddisfazione per l’azienda.", // 1
          "Lo scostamento di volume è calcolato come costo standard flessibilizzato totale meno costo standard totale.", // 2
        ],
        a: 0,
      },
      // C7A #10
      {
        s: "Ceteris paribus, quale fra i seguenti errori causa sicuramente una variazione di efficienza:",
        o: [
          "un errore nella stima dei volumi di vendita.", // 0
          "un errore nella stima del fabbisogno di lavoro straordinario.", // 1
          "un errore nella rilevazione dei consumi effettivi di materie prime.", // 2  ← corretta
          "nessuno dei precedenti.", // 3
        ],
        a: 2,
      },
      // C7A #11
      {
        s: "Ceteris paribus, quale fra i seguenti errori causa sicuramente una variazione di prezzo:",
        o: [
          "un errore nella rilevazione delle ore effettivamente lavorate dagli addetti alla produzione per un prodotto.", // 0
          "un errore nella stima del fabbisogno di lavoro straordinario.", // 1  ← corretta
          "un errore nella rilevazione dei consumi effettivi di materie prime.", // 2
        ],
        a: 1,
        d: 1,
      },
      // C7A #12
      {
        s: "Ceteris paribus, quale fra i seguenti errori causa sicuramente una variazione di volume negativa:",
        o: [
          "una sovrastima della domanda di mercato.", // 0
          "una sottostima della domanda di mercato.", // 1  ← corretta
          "una sovrastima del fabbisogno di lavoro straordinario.", // 2
        ],
        a: 1,
      },
      // C7A #13
      {
        s: "Ceteris paribus, se un reparto che produce un semilavorato per il reparto di assemblaggio finale non riesce a completare il suo programma di lavoro giornaliero, quale delle seguenti affermazioni è sicuramente vera?",
        o: [
          "Il ritardo produrrà una variazione di efficienza negativa del reparto di assemblaggio finale.", // 0  ← corretta
          "Il ritardo produrrà una variazione di volume negativa.", // 1
          "Il ritardo produrrà una variazione di volume positiva.", // 2
          "Il ritardo produrrà una variazione di prezzo negativa.", // 3
          "Nessuna delle precedenti.", // 4
        ],
        a: 0,
        d: 1,
        v: 1,
      },
      // C7A #14
      {
        s: "Ceteris paribus, se una linea di assemblaggio finale si ferma per un guasto, quale delle seguenti affermazioni è sicuramente vera?",
        o: [
          "Il guasto produrrà una variazione di volume negativa.", // 0
          "Il guasto produrrà una variazione di volume positiva.", // 1
          "Il guasto produrrà una variazione di efficienza negativa della manodopera addetta all’assemblaggio finale.", // 2  ← corretta
          "Il guasto produrrà una variazione di efficienza negativa se comporterà il ricorso a lavoro straordinario non previsto per recuperare il tempo di fermo della linea a causa del guasto.", // 3
          "Nessuna delle precedenti.", // 4
        ],
        a: 2,
        d: 1,
        v: 1,
      },
      // C7A #15
      {
        s: "Un centro di costo utilizza una sola materia prima (MP) per realizzare un unico prodotto. I dati a budget e\nquelli a consuntivo relativi al mese di dicembre 2017 sono riportati nella seguente tabella.\n                                     Budget Consuntivo\n Volume di produzione               1.400 pz       1.200 pz\n Consumo unitario/totale di MP 1 kg/pz            1.056 kg\n Prezzo della MP                     0,5 €/kg      0,6 €/kg\nCon riferimento al costo totale della MP, quale delle seguenti affermazioni è vera?",
        p: 1,
        o: [
          "ΔVol = 200", // 0
          "ΔEff = 72", // 1
          "ΔPre = 105,6", // 2  ← corretta
          "ΔTot = 377,6", // 3
        ],
        a: 2,
      },
      // C7A #16
      {
        s: "Un centro di costo utilizza una sola materia prima (MP) per realizzare un unico prodotto. I dati a budget e\nquelli a consuntivo relativi al mese di dicembre 2017 sono riportati nella seguente tabella.\n                                     Budget Consuntivo\n Volume di produzione               1.400 pz       1.200 pz\n Consumo unitario/totale di MP 1 kg/pz            1.056 kg\n Prezzo della MP                     0,5 €/kg      0,6 €/kg\nCon riferimento al costo totale della MP, quale delle seguenti affermazioni è vera?",
        p: 1,
        o: [
          "ΔVol = -100", // 0
          "ΔEff = -72", // 1
          "ΔPre = -105,6", // 2  ← corretta
          "ΔTot = -277,6", // 3
        ],
        a: 2,
      },
      // C7A #17
      {
        s: "Un centro di costo utilizza una sola materia prima (MP) per realizzare un unico prodotto. I dati a budget e\nquelli a consuntivo relativi al mese di dicembre 2017 sono riportati nella seguente tabella.\n                                     Budget Consuntivo\n Volume di produzione               1.400 pz       1.200 pz\n Consumo unitario/totale di MP 1 kg/pz            1.056 kg\n Prezzo della MP                     0,5 €/kg      0,6 €/kg\nCon riferimento al costo totale della MP, quale delle seguenti affermazioni è vera?",
        p: 1,
        o: [
          "ΔVol = 200", // 0
          "ΔEff = 0,12", // 1
          "ΔPre = -0,1", // 2
          "ΔTot = 66,4", // 3  ← corretta
        ],
        a: 3,
      },
      // C7A #18
      {
        s: "Un centro di costo utilizza una sola materia prima (MP) per realizzare un unico prodotto. I dati a budget e\nquelli a consuntivo relativi al mese di dicembre 2017 sono riportati nella seguente tabella.\n                                     Budget Consuntivo\n Volume di produzione               1.400 pz       1.200 pz\n Consumo unitario/totale di MP 1 kg/pz            1.056 kg\n Prezzo della MP                     0,5 €/kg      0,6 €/kg\nCon riferimento al costo totale della MP, quale delle seguenti affermazioni è vera?",
        p: 1,
        o: [
          "ΔVol = 100", // 0
          "ΔEff = -70", // 1
          "ΔPre = 105,6", // 2  ← corretta
          "ΔTot = 135,6", // 3
        ],
        a: 2,
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════════
  // C7B — Analisi degli scostamenti: caso generale e approfondimenti  (15 domande)
  // ═══════════════════════════════════════════════════════════════
  {
    code: "C7B",
    title: "Analisi degli scostamenti: caso generale e approfondimenti",
    q: [
      // C7B #1
      {
        s: "Quanto vale la variazione di efficienza per la manodopera diretta?",
        c: "Un terzista con un solo reparto produttivo compie delle lavorazioni manuali a favore di due prodotti, A e B,\ndi un’altra impresa. I dati a budget e quelli a consuntivo relativi all’attività del terzista nel 2017 sono riportati\nnella seguente tabella.\n                           Budget                                        Consuntivo\n  Prodotto                 A                 B                           A                B\n  Volume di                1.000 pz          300 pz                      1.200 pz         250 pz\n  produzione\n                           Impiego unitario               Prezzo         Impiego totale                  Prezzo\n  Manodopera diretta       5,5 h/pz          3,1 h/pz     27 €/h          6.720 h         760 h          28 €/h\nSapendo che nel 2017 nel reparto hanno lavorato 5 operai 8 ore al giorno per 220 giorni lavorativi,\nrispondere alle seguenti due domande.",
        o: [
          "-2.835 €", // 0  ← corretta
          "-38.475 €", // 1
          "-0,04 h/pz", // 2
          "-1.566 €", // 3
        ],
        a: 0,
        d: 1,
      },
      // C7B #2
      {
        s: "Quanto vale la variazione di prezzo per la manodopera diretta?",
        c: "Un terzista con un solo reparto produttivo compie delle lavorazioni manuali a favore di due prodotti, A e B,\ndi un’altra impresa. I dati a budget e quelli a consuntivo relativi all’attività del terzista nel 2017 sono riportati\nnella seguente tabella.\n                           Budget                                        Consuntivo\n  Prodotto                 A                 B                           A                B\n  Volume di                1.000 pz          300 pz                      1.200 pz         250 pz\n  produzione\n                           Impiego unitario               Prezzo         Impiego totale                  Prezzo\n  Manodopera diretta       5,5 h/pz          3,1 h/pz     27 €/h          6.720 h         760 h          28 €/h\nSapendo che nel 2017 nel reparto hanno lavorato 5 operai 8 ore al giorno per 220 giorni lavorativi,\nrispondere alle seguenti due domande.",
        o: [
          "-1 €/h", // 0
          "-12.528 €", // 1  ← corretta
          "-8.800 €", // 2
          "-7.480 €", // 3
        ],
        a: 1,
        d: 1,
      },
      // C7B #3
      {
        s: "Quanto vale la variazione di efficienza per la manodopera diretta?",
        c: "Un terzista con un solo reparto produttivo compie delle lavorazioni manuali a favore di due prodotti, A e B,\ndi un’altra impresa. I dati a budget e quelli a consuntivo relativi all’attività del terzista nel 2017 sono riportati\nnella seguente tabella.\n                                            Budget                                       Consuntivo\n  Prodotto                       A                B                            A                B\n  Volume di                   3.000 pz        5.000 pz                     4.000 pz         4.500 pz\n  produzione\n                                Impiego unitario            Prezzo              Impiego totale            Prezzo\n  Manodopera diretta           2 h/pz           1 h/pz      30 €/h          8.400 h          4.320 h      31 €/h\nSapendo che nel 2017 nel reparto hanno lavorato 8 operai 8 ore al giorno per 220 giorni lavorativi,\nrispondere alle seguenti due domande.",
        o: [
          "-6.600 €", // 0  ← corretta
          "-47.400 €", // 1
          "-15.300 €", // 2
          "-0,06 h/pz", // 3
        ],
        a: 0,
        d: 1,
      },
      // C7B #4
      {
        s: "Quanto vale la variazione di prezzo per la manodopera diretta?",
        c: "Un terzista con un solo reparto produttivo compie delle lavorazioni manuali a favore di due prodotti, A e B,\ndi un’altra impresa. I dati a budget e quelli a consuntivo relativi all’attività del terzista nel 2017 sono riportati\nnella seguente tabella.\n                                            Budget                                       Consuntivo\n  Prodotto                       A                B                            A                B\n  Volume di                   3.000 pz        5.000 pz                     4.000 pz         4.500 pz\n  produzione\n                                Impiego unitario            Prezzo              Impiego totale            Prezzo\n  Manodopera diretta           2 h/pz           1 h/pz      30 €/h          8.400 h          4.320 h      31 €/h\nSapendo che nel 2017 nel reparto hanno lavorato 8 operai 8 ore al giorno per 220 giorni lavorativi,\nrispondere alle seguenti due domande.",
        o: [
          "-1 €/h", // 0
          "-26.010 €", // 1  ← corretta
          "-14.080 €", // 2
          "-12.720 €", // 3
        ],
        a: 1,
        d: 1,
      },
      // C7B #5
      {
        s: "Quanto vale la variazione di efficienza per la manodopera diretta?",
        c: "Un terzista con un solo reparto produttivo compie delle lavorazioni manuali a favore di due prodotti, A e B,\ndi un’altra impresa. I dati a budget e quelli a consuntivo relativi all’attività del terzista nel 2017 sono riportati\nnella seguente tabella.\n                                            Budget                                       Consuntivo\n  Prodotto                       A                B                            A                B\n  Volume di                   6.000 pz        2.500 pz                     5.800 pz         3.000 pz\n  produzione\n                                Impiego unitario            Prezzo              Impiego totale            Prezzo\n  Manodopera diretta           1 h/pz           2 h/pz      35 €/h          5.452 h          6.480 h      33 €/h\nSapendo che nel 2017 nel reparto hanno lavorato 7 operai 8 ore al giorno per 220 giorni lavorativi,\nrispondere alle seguenti due domande.",
        o: [
          "-18.200 €", // 0  ← corretta
          "-30.800 €", // 1
          "-4.620 €", // 2
          "-0,1 h/pz", // 3
        ],
        a: 0,
        d: 1,
      },
      // C7B #6
      {
        s: "Quanto vale la variazione di prezzo per la manodopera diretta?",
        c: "Un terzista con un solo reparto produttivo compie delle lavorazioni manuali a favore di due prodotti, A e B,\ndi un’altra impresa. I dati a budget e quelli a consuntivo relativi all’attività del terzista nel 2017 sono riportati\nnella seguente tabella.\n                                            Budget                                       Consuntivo\n  Prodotto                       A                B                            A                B\n  Volume di                   6.000 pz        2.500 pz                     5.800 pz         3.000 pz\n  produzione\n                                Impiego unitario            Prezzo              Impiego totale            Prezzo\n  Manodopera diretta           1 h/pz           2 h/pz      35 €/h          5.452 h          6.480 h      33 €/h\nSapendo che nel 2017 nel reparto hanno lavorato 7 operai 8 ore al giorno per 220 giorni lavorativi,\nrispondere alle seguenti due domande.",
        o: [
          "54.560 €", // 0
          "24.640 €", // 1  ← corretta
          "2 €/h", // 2
          "23.864 €", // 3
        ],
        a: 1,
        d: 1,
      },
      // C7B #7
      {
        s: "Quanto vale la variazione di efficienza per la manodopera diretta?",
        c: "Un terzista con un solo reparto produttivo compie delle lavorazioni manuali a favore di due prodotti, A e B,\ndi un’altra impresa. I dati a budget e quelli a consuntivo relativi all’attività del terzista nel 2017 sono riportati\nnella seguente tabella.\n                                            Budget                                       Consuntivo\n  Prodotto                        A               B                            A                B\n  Volume di                   2.000 pz        1.500 pz                     2.200 pz         1.800 pz\n  produzione\n                                 Impiego unitario           Prezzo              Impiego totale            Prezzo\n  Manodopera diretta           0,5 h/pz        0,8 h/pz     30 €/h           990 h           1.350 h      35 €/h\nSapendo che nel 2017 nel reparto hanno lavorato 2 operai 8 ore al giorno per 220 giorni lavorativi,\nrispondere alle seguenti due domande.",
        o: [
          "6.000 €", // 0  ← corretta
          "0,1h/pz", // 1
          "12.000 €", // 2
          "-29.400 €", // 3
        ],
        a: 0,
        d: 1,
      },
      // C7B #8
      {
        s: "Quanto vale la variazione di prezzo per la manodopera diretta?",
        c: "Un terzista con un solo reparto produttivo compie delle lavorazioni manuali a favore di due prodotti, A e B,\ndi un’altra impresa. I dati a budget e quelli a consuntivo relativi all’attività del terzista nel 2017 sono riportati\nnella seguente tabella.\n                                            Budget                                       Consuntivo\n  Prodotto                        A               B                            A                B\n  Volume di                   2.000 pz        1.500 pz                     2.200 pz         1.800 pz\n  produzione\n                                 Impiego unitario           Prezzo              Impiego totale            Prezzo\n  Manodopera diretta           0,5 h/pz        0,8 h/pz     30 €/h           990 h           1.350 h      35 €/h\nSapendo che nel 2017 nel reparto hanno lavorato 2 operai 8 ore al giorno per 220 giorni lavorativi,\nrispondere alle seguenti due domande.",
        o: [
          "-17.600 €", // 0
          "-5 €/h", // 1  ← corretta
          "-22.000 €", // 2
          "-11.700 €", // 3
        ],
        a: 1,
        d: 1,
      },
      // C7B #9
      {
        s: "Quanto vale la variazione di efficienza per la manodopera diretta?",
        c: "Un terzista con un solo reparto produttivo compie delle lavorazioni manuali a favore di due prodotti, A e B,\ndi un’altra impresa. I dati a budget e quelli a consuntivo relativi all’attività del terzista nel 2017 sono riportati\nnella seguente tabella.\n                                            Budget                                       Consuntivo\n Prodotto                         A               B                            A                B\n Volume di                     1.000 pz         900 pz                      1.200 pz         800 pz\n produzione\n                                 Impiego unitario           Prezzo               Impiego totale           Prezzo\n Manodopera diretta           0,75 h/pz        0,9 h/pz     33 €/h            912 h           728 h       30 €/h\nSapendo che nel 2017 nel reparto ha lavorato 1 operaio 8 ore al giorno per 220 giorni lavorativi, rispondere\nalle seguenti due domande.",
        o: [
          "-4.620 €", // 0  ← corretta
          "-660 €", // 1
          "-0,02 h/pz", // 2
          "-1.320 €", // 3
        ],
        a: 0,
        d: 1,
      },
      // C7B #10
      {
        s: "Quanto vale la variazione di prezzo per la manodopera diretta?",
        c: "Un terzista con un solo reparto produttivo compie delle lavorazioni manuali a favore di due prodotti, A e B,\ndi un’altra impresa. I dati a budget e quelli a consuntivo relativi all’attività del terzista nel 2017 sono riportati\nnella seguente tabella.\n                                            Budget                                       Consuntivo\n Prodotto                         A               B                            A                B\n Volume di                     1.000 pz         900 pz                      1.200 pz         800 pz\n produzione\n                                 Impiego unitario           Prezzo               Impiego totale           Prezzo\n Manodopera diretta           0,75 h/pz        0,9 h/pz     33 €/h            912 h           728 h       30 €/h\nSapendo che nel 2017 nel reparto ha lavorato 1 operaio 8 ore al giorno per 220 giorni lavorativi, rispondere\nalle seguenti due domande.",
        o: [
          "3 €/h", // 0
          "10.020 €", // 1  ← corretta
          "5.280 €", // 2
          "4.920 €", // 3
        ],
        a: 1,
        d: 1,
      },
      // C7B #11
      {
        s: "Quanto vale la variazione di efficienza per la manodopera diretta?",
        c: "Un terzista con un solo reparto produttivo compie delle lavorazioni manuali a favore di due prodotti, A e B,\ndi un’altra impresa. I dati a budget e quelli a consuntivo relativi all’attività del terzista nel 2019 sono riportati\nnella seguente tabella.\n                                            Budget                                       Consuntivo\n  Prodotto                        A               B                            A                B\n  Volume di                   4.400 pz        1.980 pz                     4.180 pz         2.200 pz\n  produzione\n                                 Impiego unitario           Prezzo              Impiego totale            Prezzo\n  Manodopera diretta           0,7 h/pz        0,9 h/pz     32 €/h          2.717 h          2.024 h      33 €/h\nSapendo che nel 2019 nel reparto hanno lavorato 3 operai 8 ore al giorno per 220 giorni lavorativi,\nrispondere alle seguenti due domande.",
        o: [
          "5.280 €", // 0  ← corretta
          "6.124,8 €", // 1
          "0,03 h/pz", // 2
          "-11.968 €", // 3
        ],
        a: 0,
        d: 1,
      },
      // C7B #12
      {
        s: "Quanto vale la variazione di prezzo per la manodopera diretta?",
        c: "Un terzista con un solo reparto produttivo compie delle lavorazioni manuali a favore di due prodotti, A e B,\ndi un’altra impresa. I dati a budget e quelli a consuntivo relativi all’attività del terzista nel 2019 sono riportati\nnella seguente tabella.\n                                            Budget                                       Consuntivo\n  Prodotto                        A               B                            A                B\n  Volume di                   4.400 pz        1.980 pz                     4.180 pz         2.200 pz\n  produzione\n                                 Impiego unitario           Prezzo              Impiego totale            Prezzo\n  Manodopera diretta           0,7 h/pz        0,9 h/pz     32 €/h          2.717 h          2.024 h      33 €/h\nSapendo che nel 2019 nel reparto hanno lavorato 3 operai 8 ore al giorno per 220 giorni lavorativi,\nrispondere alle seguenti due domande.",
        o: [
          "-1 €/h", // 0
          "-5.280 €", // 1  ← corretta
          "-4.741 €", // 2
          "10.016,6 €", // 3
        ],
        a: 1,
        d: 1,
      },
      // C7B #13
      {
        s: "Supponendo che non tutte le ore di manodopera diretta lavorate in un reparto siano state utilizzate a fini produttivi, quale delle seguenti affermazioni è sicuramente vera?",
        o: [
          "Ignorare le ore inutilizzate a fini produttivi porta a sovrastimare la variazione di efficienza del reparto presa col suo segno.", // 0  ← corretta
          "Ignorare le ore inutilizzate a fini produttivi porta a sottostimare la variazione di efficienza del reparto presa col suo segno.", // 1
          "Ignorare le ore inutilizzate a fini produttivi porta a sovrastimare la variazione di efficienza del reparto presa in valore assoluto.", // 2
        ],
        a: 0,
      },
      // C7B #14
      {
        s: "Supponendo che non tutte le ore di manodopera diretta lavorate in un reparto siano state utilizzate a fini produttivi e che il costo orario effettivo della manodopera diretta sia stato diverso da quello previsto a budget, quale delle seguenti affermazioni è sicuramente vera?",
        o: [
          "Ignorare le ore inutilizzate a fini produttivi porta a sottostimare la variazione di prezzo del lavoro diretto presa in valore assoluto.", // 0  ← corretta
          "Ignorare le ore inutilizzate a fini produttivi porta a sottostimare la variazione di prezzo del lavoro diretto presa col suo segno.", // 1
          "Ignorare le ore inutilizzate a fini produttivi porta a sovrastimare la variazione di prezzo del lavoro diretto presa col suo segno.", // 2
        ],
        a: 0,
      },
      // C7B #15
      {
        s: "Quale delle seguenti affermazioni è falsa?",
        o: [
          "La variazione di efficienza di un reparto produttivo dipende dalla variazione di efficienza nell’uso dei fattori produttivi in quel reparto.", // 0
          "L’analisi della variazione di efficienza nell’uso di un fattore produttivo in un reparto produttivo può essere sempre fatta a livello di singoli prodotti finiti.", // 1  ← corretta
          "L’analisi della variazione di efficienza nell’uso di un fattore produttivo in un reparto produttivo può essere fatta a livello di singoli prodotti finiti solo a condizione di rilevare l’impiego effettivo di fattore produttivo per ciascun prodotto finito.", // 2
        ],
        a: 1,
      },
    ],
  },
];
