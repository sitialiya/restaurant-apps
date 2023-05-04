import UrlParser from '../../routes/url-parser';
import DicodingRestaurantAPI from '../../data/restaurant-source';
import { createRestaurantDetailTemplate } from '../templates/template-creator';

const DetailRestaurant = {
  async render() {
    return `
        <div id="detailRestaurant" class="detailRestaurant"></div>
        <div id="likeButtonContainer"></div>
        `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurant = await DicodingRestaurantAPI.detailRestaurant(url.id);
    const restaurantContainer = document.querySelector('#detailRestaurant');
    restaurantContainer.innerHTML = createRestaurantDetailTemplate(restaurant);
  },
};

export default DetailRestaurant;
