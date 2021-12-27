import { data } from '../mock/data';
export const requestSearchFilms = (name) => {
  const films = data.films;
  const lowerName = name.toLowerCase();
  const result = films.filter((film) => {
    return film.name.toLowerCase().includes(lowerName);
  });
  return result;
};
