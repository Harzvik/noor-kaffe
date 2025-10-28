[Arbeidskrav3.pdf](https://github.com/user-attachments/files/23184563/Arbeidskrav3.pdf)

Beskrivelse
I dette arbeidskravet skal dere som gruppe ta designet dere laget i Arbeidskrav 2 og kode
det som en fungerende nettside. Målet er å oversette prototypen dere har laget i Figma til
ekte kode ved hjelp av HTML, CSS og vanilla JavaScript (ingen rammeverk eller
biblioteker er tillatt).

Nettsiden skal samsvare med designet, men dere skal også legge til interaktivitet gjennom
JavaScript-funksjonalitet. Oppgaven vil gi dere erfaring med å strukturere kode, samarbeide
i grupper, og utvikle en løsning fra et design som skal fungerer teknisk. Dersom dere har
laget et veldig avansert design som blir vanskelig å gjennomføre innen tidsfristen, må dere
ta avgjørelser for å forenkle uttrykket slik at dere rekker å utvikle en helhetlig nettside med
HTML, CSS og JS i tide.

Det er veldig viktig at dere setter realistiske mål for hvor langt dere klarer å komme i forhold
til deres design. Husk at bare HTML/CSS potensielt kan ta lang tid, dere må passe på at
dere kommer helt i mål med Javascript-funksjonaliteten også.

Oppgaven dere skal løse:

Dere skal kode en funksjonell nettside for kafébaren dere designet i Arbeidskrav 2.

  1. Forside - introduksjon, hero-seksjon og lenke til meny.
  2. Meny-side - Påkrevd! - oversikt med 6-8 kaffesorter.
  3. Bestillingsside - Påkrevd! - Sammendrag av ordre og et skjema for bestilling.
  4. Takkeside - bekreftelse etter bestilling.
     
  (Valgfritt: utvid med «Om oss» eller «Kontakt»-side.)

Minimumskrav avhengig av gruppestørrelse:

  ● 2 medlemmer - Dere må kode menyside og bestillingsside.
  
  ● 3 medlemmer - Dere må kode menyside, bestillingsside + minst én ekstra side.
  
  ● 4-5 medlemmer - Alle fire obligatoriske sider skal være kodet.

Gruppeorganisering

  ● Du skal jobbe i samme gruppe som i Arbeidskrav 2. Gruppene består av 2-5
    medlemmer, se oversikt på MinGA..

  ● Sidebasert oppdeling: Hvert gruppemedlem har hovedansvar for å lage én side.
    Gruppen som helhet har ansvar for å hjelpe hverandre, avhengig av designet deres
    så kan noen sider være langt mer krevende enn andre.

  ● Gruppene må sikre at koden er optimalisert og følger samme struktur på tvers av
    sider. For eksempel:

  ○ Navngivning av klasser, id’er, funksjoner og variabler skal følge lik struktur
  
  ○ CSS burde optimaliseres så man ikke må duplisere kode på tvers av sider
  
  ○ Sidenes oppbygging skal være lik i koden der det er hensiktsmessig.
  

  ● Gruppene burde ha et felles gruppemøte i oppstartsfasen for å fordele sider og
    oppgaver mellom seg, bli enige om navngivning i koden, kodestruktur m.m.

  ● I det felles oppstartsmøte burde gruppen sette realistiske mål for hvor langt dere kan
    komme på utviklingen basert på designet deres og funksjonaliteten som kreves av
    oppgaven. Husk at HTML/CSS/Javascript tar lang tid, og alt skal på plass i oppgaven
    innen tidsfristen. Forenkle heller designet slik at HTML/CSS biten ikke blir like
    tidkrevende, slik at Javascript kommer på plass.

  ● Arbeidsoppgaver burde brytes ned i overkommelige bolker og kan opp i et
    oppgaveverktøy som f.eks Trello, slik at alle gruppemedlemmene har oversikt over
    hva som gjøres og jobbes med til enhver tid. Her kan dere dele opp i tre enkle
    kategorier med “To do”, “Doing” og “Done” for å kategorisere oppgavene. Dette er
    bare anbefaling, gruppen velger selv hvordan de ønsker å arbeide.

  ● Det burde holdes jevnlig kommunikasjon i gruppen for å forsikre dere om at alle
    kommer i mål med side sider, samt at retningslinjene for kodeoptimalisering som
    nevnt over blir opprettholdt.
  
  ● Det forventes at man sjekker innom gruppen sin jevnlig på Teams (eller valgt
    kommunikasjonskanal) for å opprettholde god og smidig gruppedynamikk. Rammer
    rundt dette burde dere bli enige om på oppstartsmøtet.

Krav til JavaScript-funksjonalitet:

Hver side stiller noen tekniske krav for å legge til Javascript i tillegg til at HTML/CSS, til den
grad det er mulig innen tidsfristen, speile designet deres. Dere skal også legge til én ekstra
valgfri Javascript-funksjonalitet per side, knyttet til deres design og historie. Følgende
Javascript-funksjonalitet er påkrevd:

Forside:

  ● Et easter egg (bruk gjerne onclick, keydown eller lignende). Her forventer sensorene
    å bli imponert av kreativitet, omfang og kompleksitet på easter-egget! Husk også å
    dokumentere i refleksjonsnotatet hvordan easter-egget kan aktiveres.

  ● En valgfri Javascript-funksjonalitet tilknyttet deres design
    Menyside (Denne siden er påkrevd å utvikle):
  
  ● Lag et kaffe-array med produktene til kaféen og loop gjennom arrayet for å vise frem
    alle produktene.
  
  ● Funksjon: Brukeren kan markere favoritter blant varer (toggle med boolean et
    hjerte/ikon/lignende).

  ○ Bruk if/else til å bytte tilstand
  
  ○ Gi en alert og visuell tilbakemelding ved å toggle hjerte/ikon/lignende når en
      favoritt er valgt/valgt bort
    
  ● En valgfri Javascript-funksjonalitet tilknyttet deres design

Bestillingsside (Denne siden er påkrevd å utvikle):

  ● Lag en counter som gjør at brukeren kan øke/redusere antall varer.

  ● Vis frem totalpris på bestilling. Denne skal øke/reduseres når brukeren endrer på
    antall varer, totalpris skal være korrekt til enhver tid.

  ● En knapp for å tømme bestillingssiden for varer.
  
  ● En knapp som trigger en prompt() for å legge til bordnummer. Vis frem bordnummer
    på nettsiden.
  
  ● En valgfri Javascript-funksjonalitet tilknyttet deres design

Takkeside:

  ● Bruk en for-loop for å vise frem alle gruppemedlemmer og deres Navn og E-post fra
    et array.
  
  ● Legg til en "Kontakt meg"-knapp ved hvert gruppemedlem -> trykk trigger skal trigge
    et form hvor man kan skrive en melding. Dersom man trykker på send, skal det trigge
    en alert “Din meldinger sendt!”.
  
  ● Legg til en ekstra JS-funksjon som passer til deres design

Tekniske krav

  ● HTML: Bruk semantisk oppmerking og god struktur.

  ● CSS: Bruk til layout, typografi og responsivitet (ingen rammeverk).

  ● Vanilla JavaScript: Brukes til funksjonalitet på hver side (se krav over).

  ● Responsivitet: Nettsiden skal fungere på både mobil og desktop.

  ● Universell utforming: Husk kontraster, lesbarhet og alt-tekster.

Refleksjonsnotat

Dere leverer et felles refleksjonsnotat (2-3 sider) som beskriver:

  ● Hvordan dere opplevde å kode designet fra Figma.

  ● Hvilke utfordringer dere møtte med HTML, CSS og JS.

  ● Hvordan dere løste fordeling av oppgaver og samarbeid i gruppa.

  ● Hva dere ville gjort annerledes med mer tid/kompetanse.

I tillegg skal hver student levere et individuelt refleksjonsnotat (200-300 ord).

Innlevering

  ● Nettsiden leveres som en zip-fil med HTML-, CSS- og JS-filer.

  ● Grupperefleksjonsnotat i PDF skal også legges i zip-filen.

  ● Individuelt refleksjonsnotat leveres separat.

Frist: 30. november kl. 23:59 på MinGA.

Vurderingskriterier

Teknisk kvalitet

  ● HTML er semantisk og ryddig.

  ● CSS er godt strukturert og konsekvent.

  ● JavaScript-funksjonaliteten fungerer som beskrevet.

Visuell kvalitet

  ● Nettsiden samsvarer med designet i Arbeidskrav 2.

  ● Farger, typografi og layout er brukt bevisst.

  ● Responsivitet fungerer på ulike enheter.

Brukervennlighet og tilgjengelighet

  ● Sidene fungerer selv uten å kunne bruke datamus (man skal kunne bruke keyboard
til navigering).

  ● Universell utforming er ivaretatt.

Refleksjon

  ● Gruppen viser evne til å beskrive og evaluere prosessen.

  ● Individuelle refleksjoner belyser personlig læring.

Vurderingskategorier

  ● Godkjent

  ● Betinget godkjent

  ● Ikke godkjent
