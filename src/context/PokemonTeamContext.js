import React, {useState} from 'react';
export const PokemonContext = React.createContext();

export const TeamContextProvider = ({children}) => {
  const [team, setTeam] = useState([]);

  const addToTeam = pokemon => {
    isOnTeam(pokemon.name)
      ? sumarCantidad(item)
      : setTeam([...cart, {...item}]);
  };
  const isOnTeam = name => {
    return team.some(pokemon => pokemon.name === name);
  };
  const borrarPoke = name => {
    setCart(team.filter(pokemon => pokemon.name !== name));
  };

  const vaciarTeam = () => {
    setTeam([]);
  };
  return (
    <TeamContext.Provider
      value={{
        team,
        addToTeam,
        vaciarTeam,
        borrarPoke,
      }}>
      {children}
    </TeamContext.Provider>
  );
};
