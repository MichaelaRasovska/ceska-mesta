import React from 'react';
import '../../cz-cities';

export const City = (props) => (
  <>
    <section className="container">
      <div className="city">Mesto: {props.name}</div>
      <div className="population">Populace: {props.population}</div>
      <div className="area">Rozloha: {props.area}</div>
      <div className="district">Kraj: {props.district}</div>
      <img src={props.photo}></img>
    </section>
  </>
);
