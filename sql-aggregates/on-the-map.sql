select "countries"."name",
       count("cities"."name") as "allCities"
  from "countries"
  join "cities" using ("countryId")
 group by "countries"."name";
