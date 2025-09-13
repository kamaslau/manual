# MongoDB

## Common Commands

### Read

```bash
use nobelpress
db.nobelPrizes.countDocuments({ i18n: { $exists: true } });
db.nobelPrizes.countDocuments({ prizeSlug: { $exists: false } });
```

### Delete

```bash
db.nobelPrizes.countDocuments({ i18n: { $exists: true } });
```
