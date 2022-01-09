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
export const requestFilmDetails = (slug) => {
  const { films } = data;
  const item = films.find((film) => film.id === slug);
  return {
    vnName: item.name,
    enName: item.originalName,
    rate: item.rate,
    time: item.time,
    type: item.categoryList[0].name,
    image: item.wallpaper,
    description: item.content,
    thumbImage: item.thumb,
    poster: item.poster,
    castList: item.castList,
    directerList: item.directerList,
    totalView: item.totalView,
    rateTime: item.rateTime,
    country: item.country,
  };
};
export const requestRelevantFilms = () => {
  const { films } = data;
  return films.slice(8, 11);
};
