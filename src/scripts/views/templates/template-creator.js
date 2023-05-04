import CONFIG from '../../globals/config';

const createRestaurantDetailTemplate = (restaurant) => `
  <h2 class="restaurant__title">${restaurant.name}</h2>
  <img class="restaurant__image" src="${CONFIG.BASE_IMAGE_URL}${restaurant.pictureId}" alt="${restaurant.name}" />
  <div class="restaurant__info">
    <h3>Information</h3>
    <h4>Description</h4>
    <p>${restaurant.description}</p>
    <h4>Address</h4>
    <p>${restaurant.address}</p>
    <h4>City</h4>
    <p>${restaurant.city}</p>
    <h4>Menu Makanan</h4>
    <ul>
      ${restaurant.menus.foods.map((foods) => `<li>${foods.name}</li>`).join('')}
    </ul>
    <h4>Menu Minuman</h4>
    <ul>
      ${restaurant.menus.foods.map((drinks) => `<li>${drinks.name}</li>`).join('')}
    </ul>
    <h4>Customer Reviews</h4>
    ${restaurant.customerReviews.map((review) => `
      <div class="review">
        <p class="review__name">${review.name}</p>
        <p class="review__date">${review.date}</p>
        <p class="review__text">${review.review}</p>
      </div>
    `).join('')}
  </div>
`;

const createRestaurantItemTemplate = (restaurants) => `
  <article class="content-item">
      <img src='${CONFIG.BASE_IMAGE_URL}${restaurants.pictureId}' alt='${restaurants.name}' tabindex="4">
      <p class='rating' tabindex="4">⭐️ ${restaurants.rating} </p>
      <p class='city' tabindex="4" >Kota : ${restaurants.city}</p>
      <h1 tabindex="4">${restaurants.name}</h1>
      <p tabindex="4">${restaurants.description}</p>
  </article>
`;

export { createRestaurantDetailTemplate, createRestaurantItemTemplate };
