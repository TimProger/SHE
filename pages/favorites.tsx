import React, {useEffect} from 'react';
import {useTypedSelector} from "../hooks/useTypedSelector";

const Favorites: React.FC = () => {

  const {products} = useTypedSelector(state => state.fav)

  useEffect(()=>{

  }, [])

  return (
    <div>
      {products.map((el, index: number)=>{
        return <div key={index}>{el.name}</div>
      })}
    </div>
  );
};

export default Favorites;