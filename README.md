# KYMO ONE Website

## Algemene info
Er is een soort mini-database in `src/data`. Deze bestanden vind je daar:

- `general.yml`: algemene info zoals de naam van de site, je contactgegevens etc.
- `categories.yml`: de categorieën (nu grafisch, murals en vrij werk)
- `portfolio.yml`: de items van je portfolio

De belangrijkste regels van de syntax:
- Zorg dat de indenting juist is; als je een onderverdeling maakt voeg je
  telkens 2 spaties toe in het begin van de lijn
- Het stukje voor de dubbelpunt in elke lijn is de sleutelwaarde. Die moet uniek
  zijn voor dat niveau

## Nieuw portfolio-item toevoegen

Open `src/data/portfolio.yml` en voeg een nieuwe entry toe, bijvoorbeeld

```yml
anonymous_skull:
  name: Anonymous Skull
  short_name: anonymous-skull
  category: murals
  thumbnail: anonymous-skull-1.jpg
  photos:
    - anonymous-skull-1.jpg
    - anonymous-skull-2.jpg
    - anonymous-skull-3.jpg
    - anonymous-skull-4.jpg
```

De elementen hier zijn:

- `name`: de naam die verschijnt als je met je muis over jet item gaat
- `short_name`: de naam die gebruikt wordt in URL's (onder andere de naam van de
  map met foto's van dit project)
- `category`: de sleutelwaarde van de categorie van dit project (zie `categories.yml`)
- `thumbnail`: de bestandsnaam van de foto die als thumbnail moet worden gebruikt
- `photos`: een lijst met bestandsnamen van alle foto's van dit project

Plaats de afbeeldingen als `src/assets/img/{{short_name}}/{{photo}}`, waarbij
`{{photo}}` een waarde voorstelt die je bij `thumbnail` of `photos` hebt ingevuld.



## De site bouwen

De site wordt op je computer gegenereerd. Daarna heb je een mapje dat je gewoon
naar je webserver kan kopiëren.

### Installatie
Nodig: node.js.

Dit hoef je maar één keer te doen. Open je terminal en ga naar deze map. Voer de
volgende commando's uit.

```sh
npm install --global foundation-cli
npm install
bower install
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

**Vergeet niet** de waarde `website_root` in `general.yml` te veranderen! Anders
gaan er links kapot. Laat een `/` aan het einde staan.
