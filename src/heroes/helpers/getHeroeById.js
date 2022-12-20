import { heroes } from "../data/Heroes"


export const getHeroeById = (id) => {
  return heroes.find( heroe => heroe.id  === id);
}
