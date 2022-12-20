import { useLocation, useNavigate } from 'react-router-dom';
import queryString from'query-string';
import { useForm } from '../../hooks/useForm';
import { HeroCard } from'../components';
import { getHeroesByName } from '../helpers';

export const SearchPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const {q = ''} = queryString.parse(location.search);
  const heroes = getHeroesByName(q);

  const showsearch = (q.length === 0);
  const showError = (q.length > 0) && heroes.length === 0;

  const {searchText,onInputChange} = useForm({
    searchText: q
  });

  const onSearchSubmit = (event) => {
    event.preventDefault();
    // if (searchText.trim().length <= 1) return;
    navigate(`?q=${searchText}`);
    
  }
  return (
    <>
      <div className="row">
        <h1>Search</h1>
        <hr />
        <div className="col-5">
          <h4>Searching</h4>
          <hr />
          <form onSubmit={onSearchSubmit}>
            <input type="text"
              placeholder="Buscar un heroe"
              className="form-control"
              name="searchText"
              autoComplete="off" 
              value={searchText}
              onChange={onInputChange}/>
            <button className="btn btn-outline-primary mt-2">
              Buscar
            </button>
          </form>
        </div>

        <div className="col-7">
          <h4 className='text-center'>Resultado</h4>
          <hr />
    
          <div className="alert alert-primary animate__animated animate__fadeIn" 
               style={{display: showsearch ? '' : 'none'}}>
            Busca tu heroe favorito...
          </div>
          <div className="alert alert-danger animate__animated animate__fadeIn" 
               style={{display: showError ? '' : 'none'}}> 
            No hay coincidencias en tu búsqueda <b>{q}</b>
          </div>
          {
            heroes.map( heroe => (
              <HeroCard key={heroe.id} {...heroe}/>
            ))
          }
        </div>
      </div>
    </>
  )
}
