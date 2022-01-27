select "filmId",
        "title",
        "description",
        "releaseYear",
        "languageId",
        "originalLanguageId",
        "rentalDuration",
        "rentalRate",
        "length",
        "replacementCost",
        "rating",
        "updatedAt",
        "specialFeatures",
        "fulltext"
  from "films"
order by "replacementCost" desc
limit 10;
