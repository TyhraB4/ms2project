import React from "react";
import "./index.css";


function home() {
  return (
    <main>
      <div>
        <h1>ATTCK Recipe's ™</h1>
      </div>
      <hr></hr>
      <h2 className="trending">New Recipes Trending Now</h2>
      <br></br>
      <div
        id="carouselExampleCaptions"
        class="carousel slide"
        data-bs-ride="carousel"
      >
        <div class="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            class="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img
              src="my-app\public\images\Chocolate-Chip-Cookie-Icebox-Cake-07-1089x1624_1.jpg"
              class="d-block w-100"
              alt="Yummy Chocolate Cake Pic"
            />
            <div class="carousel-caption d-none d-md-block">
              <h5>Chocolate Chip Espresso Icebox Cake</h5>
              <p>Yummy chocolate cake...no oven required.</p>
            </div>
          </div>
          <div class="carousel-item">
            <img
              src="my-app\public\images\Kale_Chorizo_tacos.webp"
              class="d-block w-100"
              alt="Chorizo and Kale Taco Pic"
            />
            <div class="carousel-caption d-none d-md-block">
              <h5>Kale Chorizo Tacos</h5>
              <p>
                Quick and easy spicy chorizo tacos with kale, mushrooms and
                avacado crema.
              </p>
            </div>
          </div>
          <div class="carousel-item">
            <img
              src="my-app\public\images\Strawberry-Jalapeno-Ribs-6-of-8-1076x1624.jpg"
              class="d-block w-100"
              alt="Strawberry Jalapeno Ribs Pic"
            />
            <div class="carousel-caption d-none d-md-block">
              <h5>Strawberry Jalapeno Baby Back Ribs</h5>
              <p>
                Awesome ribs with a little heat and a little sweet.
              </p>
            </div>
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </main>
  );
}

module.exports = home;
