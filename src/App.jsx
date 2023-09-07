import { data } from "autoprefixer";
import { useState, useEffect } from "react";
import ListCard from "./components/Listcard";

// https://restcountries.com/v3.1/region/europe

function App() {
  const [Countries, setCountries] = useState();

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/region/europe") //appel API
      .then((data) => data.json()) // demander les donnée en format utilisable
      .then((data) => {
        console.log(data); // voir les données pour les utiliser
        data.sort((a, b) => {
          // trier les données
          if (a.name.common < b.name.common) {
            return -1;
          } else if (a.name.common > b.name.common) {
            return 1;
          } else {
            return 0;
          }
        });
        setCountries(data); // utiliser les données mises à jours
      });
  }, []);

  return (
    <div className="min-h-screen bg-slate-500">
      <div className="max-w-7xl mx-auto py-20 px-4">
        <h1 className="text-gray50 text-4xl">Eu DATA</h1>
        <p className="text-gray-100 text-xl mb8">
          Cliquer sur une carte pour réveler le pays.
        </p>
        {Countries && (
          <ul className="grid min-[450]:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 auto-rows-[200px]">
            {Countries.map((country, index) => (
              <ListCard key={index} country={country} />
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default App;
