# MongoDB

## Common Commands

### Meta Ops

```bash
use nobelpress
```

### Read

```bash
db.nobelPrizes.countDocuments({ i18n: { $exists: true } });
db.nobelPrizes.countDocuments({ prizeSlug: { $exists: false } });
```

### Update

```bash
db.laureates.updateMany(
  {}, // ← every doc
  {
    $unset: {
      /* top-level fields */
      nobelPrizes: "",
      knownName: "",
      sameAs: "",
      wikipedia: "",
      wikidata: "",

      /* birth.place sub-fields */
      "birth.place.country": "",
      "birth.place.countryNow.no": "",
      "birth.place.countryNow.sameAs": "",
      "birth.place.city": "",
      "birth.place.cityNow.no": "",
      "birth.place.cityNow.sameAs": "",
      "birth.place.continent.no": "",
      "birth.place.locationString.no": "",

      /* death.place sub-fields */
      "death.place.country": "",
      "death.place.countryNow.no": "",
      "death.place.countryNow.sameAs": "",
      "death.place.city": "",
      "death.place.cityNow.no": "",
      "death.place.cityNow.sameAs": "",
      "death.place.continent.no": "",
      "death.place.locationString.no": "",

      /* founded.place sub-fields */
      "founded.place.country": "",
      "founded.place.countryNow.no": "",
      "founded.place.countryNow.sameAs": "",
      "founded.place.city": "",
      "founded.place.cityNow.no": "",
      "founded.place.cityNow.sameAs": "",
      "founded.place.continent.no": "",
      "founded.place.locationString.no": "",
      "orgName.no": "",
    }
  }
);
```
