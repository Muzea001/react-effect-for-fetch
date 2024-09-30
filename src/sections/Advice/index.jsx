import { useState } from "react";
import AdviceSlip from "./components/AdviceSlip";
import FavouriteSlipsList from "./components/FavouriteSlipsList";
function AdviceSection() {


  const [advice, setAdvice] = useState(null);
  const [favourites, setFavourites] = useState([
    "Generic advice 1",
    "Generic advice 2",
    "Generic advice 3",
  ]);

  const fetchAdvice = async () => {

    try {
      const response = await fetch("https://api.adviceslip.com/advice");
      const data = await response.json(); 
      setAdvice(data.slip.advice);
    }
    catch(error) {
      console.error("Error fetching data",error);
    }
  };


  const saveFavourites = () => {

    if(!favourites.includes(advice)) {
      setFavourites([...favourites, advice]);
    }
  };

  return (
    <section>
      <h2>Advice Section</h2>
      <section className="adivce-slip"></section>
      <section className="favourtite-slips-list"></section>
      <AdviceSlip advice={advice} fetchAdvice={fetchAdvice} saveToFavorites={saveFavourites}/>
      <FavouriteSlipsList favorites={favourites}/>

    </section>
  )
  
}

export default AdviceSection
