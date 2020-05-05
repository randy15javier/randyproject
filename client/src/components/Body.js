import React from "react";

const Body = () => {
  return [
    // < class="row">
    <div class="col s12 m7" style={{ display: "flex", justifyContent: "space-between" }}>
      <div class="card" style={{ height: "335px", width: "250px" }}>
        <div class="card-image">
          <img src="https://images.unsplash.com/photo-1576072060548-105cb2a8e670?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"></img>
          <span class="card-title">PPMS</span>
        </div>
        <div class="card-content">
          <p>Le sirve para no quedar embarazada, es muy efectiva</p>
        </div>
        <div class="card-action">
          <a href="#">Comprar</a>
        </div>
      </div>

      <div class="card" style={{ height: "335px", width: "250px" }}>
        <div class="card-image">
          <img src="https://images.unsplash.com/photo-1576072060548-105cb2a8e670?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"></img>
          <span class="card-title">Artromed</span>
        </div>
        <div class="card-content">
          <p>Le sirve para cuando se lesione la rodilla y los meniscos</p>
        </div>
        <div class="card-action">
          <a href="#">Comprar</a>
        </div>
      </div>

      <div class="card" style={{ height: "335px", width: "250px" }}>
        <div class="card-image">
          <img src="https://images.unsplash.com/photo-1576072060548-105cb2a8e670?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"></img>
          <span class="card-title">Remdesivir</span>
        </div>
        <div class="card-content">
          <p>Le sirve para curar el coronavirus, SARS y más</p>
        </div>
        <div class="card-action">
          <a href="#">Comprar</a>
        </div>
      </div>
    </div>,
  ];
};

export default Body;
