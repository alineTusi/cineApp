export const getScheduleQuery = `
SELECT
	a.id,
	b.title,
	a.movie_id,
	date(start_time),
	SUBSTRING(start_time::text, 12, 5) as time,
	a.room,
	a. "language",
	a.three_dimensional,
	a.imax
FROM
	calendar a
	INNER JOIN movies b ON a.movie_id = b.id
WHERE
	a.movie_id = $1`;

