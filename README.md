# KYMO ONE Website

## Nieuw portfolio-item toevoegen

### Nieuwe entry

Open `src/data/portfolio.yml` en voeg een nieuwe entry toe, bijvoorbeeld

```yml
anonymous_skull:
  name: Anonymous Skull
  short_name: anonymous-skull
  thumbnail: anonymous-skull-1.jpg
  photos:
    - anonymous-skull-1.jpg
    - anonymous-skull-2.jpg
    - anonymous-skull-3.jpg
    - anonymous-skull-4.jpg
```

### De pagina

Maak een nieuw bestand `src/pages/portfolio/{{short_name}}.html` aan (vervang
`{{short_name}}` door wat je daar net hebt ingevuld). De inhoud van dat bestand
is:

```html
{{> portfolio-item project=portfolio.{{soort}}.{{@key}}}}
```

met `{{soort}}` één van 'graffiti', 'grafisch' of 'graag' en `{{@key}}` wat er
voor de eerste dubbelpunt staat, hier `anonymous_skull`. (Daar mag geen minteken
instaan, bijvoorbeeld. Best gewoon kleine letters en underscores---er is toch
niemand die het ooit zal zien. Bij de `short_name` heb je meer vrijheid.)

### Afbeeldingen

Plaats de afbeeldingen als `src/assets/img/{{short_name}}/{{photo}}`, waarbij
`{{photo}}` een waarde voorstelt die je bij `thumbnail` of `photos` hebt ingevuld.



## De site bouwen

### Installatie
Nodig: node.js.

Dit hoef je maar één keer te doen. Open je terminal en ga naar deze map. Voer de
volgende commando's uit.

```sh
npm i -g foundation-cli
npm i
```

### Bekijken
```sh
npm start
```

Als je aanpassingen maakt, wordt de pagina automatisch herladen. Aanpassingen in
de `yml`-bestanden worden niet opgepikt, daarvoor zal je moeten stoppen (Ctrl+C)
en opnieuw het commando uitvoeren.

### Bouwen om te uploaden
```sh
npm run build
```

Als dat klaar is, gewoon de `dist/`-map ergens naar uploaden.
