const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false
};

let num = 0;

while (num < 2) {

  const a = prompt("Один из последних просмотренных фильмов?", ""),
  b = prompt("На сколько его оцените?", "");

  num++;

  if (a != null && b != null && a != '' && b != '' && a.length < 50) {
  personalMovieDB[a] = b;

  } else {
  console.log('Error');
  num--;
  }

}