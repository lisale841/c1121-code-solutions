select "addresses"."line1",
       "addresses"."district",
       "cities"."name" as "cities",
       "countries"."name" as "countries"
from "cities"
join "addresses" using ("cityId")
join "countries" using ("countryId");
