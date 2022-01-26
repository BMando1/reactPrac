export const getAllPokemon = (url) => {
    return fetch(url).then((resp) => {
      if (resp.status === 200) return resp.json();
      else throw new Error("Invalid Response");
    });
  };
  
  export const getPokemon = (props) => {
    const {
        name,
        url
    } = props
    return fetch(url)
      .then((resp) => {
        return resp.json();
      })
      .then((data) => {
        return data;
      });
  };
  