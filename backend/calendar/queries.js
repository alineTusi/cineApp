
export const listCalendarQuery = 'SELECT * FROM calendar';
export const getCalendarByIdQuery = 'SELECT * FROM calendar WHERE id = $1';
export const createCalendarQuery = 'INSERT INTO calendar (title, age) VALUES ($1, $2)';
export const updateCalendarQuery = 'UPDATE calendar SET title = $1 where id = $2';
export const deleteCalendarQuery = 'DELETE FROM calendar where id = $1';