import DicodingRestaurantAPI from '../../data/restaurant-source';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const Home = {
  async render() {
    return `
    <section class="content-header">
      <article class="headline">
        <h1 tabindex="4" class="explore">Explore Restaurant</h1>
      </article>
    </section>
    <section id="content-list" class="content-list"></section>
      `;
  },

  async afterRender() {
    const restaurants = await DicodingRestaurantAPI.listRestaurant();
    const restaurantContainer = document.querySelector('#content-list');
    restaurants.forEach((restaurant) => {
      restaurantContainer.innerHTML += createRestaurantItemTemplate(restaurant);
    });
  },
};

export default Home;
