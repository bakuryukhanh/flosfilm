import { data } from '../mock/data';
export const requestSearchFilms = (name) => {
  const films = data.films;
  const lowerName = name.toLowerCase();
  const result = films.filter((film) => {
    return film.name.toLowerCase().includes(lowerName);
  });
  return result;
};

export const requestWatchedFilms = () => {
  const { films } = data;
  return films.slice(0, 5);
};

export const requestHolidayFilms = () => {
  const { films } = data;
  return films.slice(3, 8);
};
export const requestHollywoodFilms = () => {
  const { films } = data;
  return films.slice(4, 9);
};
