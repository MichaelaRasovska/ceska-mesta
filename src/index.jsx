import React from 'react';
import { render } from 'react-dom';
import './style.css';

import { City } from './components/City';
import { cities } from './cz-cities';

const App = () => (
  <div className="city">
    {cities.map((mesto) => (
      <City
        name={mesto.name}
        key={mesto.name}
        population={mesto.population}
        area={mesto.area}
        district={mesto.district}
        photo={mesto.photo}
      />
    ))}
  </div>
);

render(<App />, document.querySelector('#app'));
