select "genres"."name",
  count("films"."title") as "filmCount"
  from "actors"
  join "castMembers" using("actorId")
  join "films" using("filmId")
  join "filmGenre" using("filmId")
  join "genres" using("genreId")
  where  "actors"."firstName" = 'Lisa' and "lastName" = 'Monroe'
  group by "genres"."name";
