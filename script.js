const products = {
   "CO": [
      {
         "productid": 1,
         "product-name": "MEN'S BETTER THAN NAKED&trade; JACKET",
         "product-image-url": "http://images.thenorthface.com/is/image/TheNorthFace/236x204_CLR/mens-better-than-naked-jacket-AVMH_LC9_hero.png",
         "header-top-right-text": "Shop All",
         "header-top-left-text": "Men's",
         "product-url": "http://www.thenorthface.com/catalog/sc-gear/men-39-s-better-than-naked-8482-jacket.html",
         "header-top-right-url": "http://www.thenorthface.com/en_US/shop-mens/",
         "product-cta-text": "Shop Now",
         "price": '123.123'
      },
      {
         "productid": 2,
         "product-name": "Enduro Boa&reg; Hydration Pack",
         "product-image-url": "http://images.thenorthface.com/is/image/TheNorthFace/236x204_CLR/enduro-boa-hydration-pack-AJQZ_JK3_hero.png",
         "header-top-right-text": "Shop All",
         "header-top-left-text": "Equipment",
         "product-url": "http://www.thenorthface.com/catalog/sc-gear/enduro-boa.html",
         "header-top-right-url": "http://www.thenorthface.com/en_US/shop-equipment/",
         "product-cta-text": "Shop Now",
         "price": '123.123'
      }
   ],
   "WI": [
      {
         "productid": 3,
         "product-name": "WOMEN'S BETTER THAN NAKED&trade; JACKET",
         "product-image-url": "http://images.thenorthface.com/is/image/TheNorthFace/236x204_CLR/womens-better-than-naked-jacket-AVKL_NN4_hero.png",
         "header-top-right-text": "Shop All",
         "header-top-left-text": "Women's",
         "product-url": "http://www.thenorthface.com/catalog/sc-gear/women-39-s-better-than-naked-8482-jacket.html",
         "header-top-right-url": "http://www.thenorthface.com/en_US/shop-womens/",
         "product-cta-text": "Shop Now",
         "price": '123.123'
      },
      {
         "productid": 4,
         "product-name": "WOMEN'S SINGLE-TRACK SHOE",
         "product-image-url": "http://images.thenorthface.com/is/image/TheNorthFace/236x204_CLR/womens-single-track-shoe-ALQF_JM3_hero.png",
         "header-top-right-text": "Shop All",
         "header-top-left-text": "Running Shoes",
         "product-url": "http://www.thenorthface.com/catalog/sc-gear/womens-single-track.html",
         "header-top-right-url": "http://www.thenorthface.com/webapp/wcs/stores/servlet/TNFSearchResult?langId=-1&amp;storeId=207&amp;catalogId=10201&amp;searchTerm=running%20shoes",
         "product-cta-text": "Shop Now",
         "price": '123.123'
      },
   ]
}

let favs = [];
if(localStorage.getItem('favs')){
   favs = JSON.parse(localStorage.getItem('favs'));
}

console.log(favs);
$(document).ready(function () {
   // set active tab
   const tabItem = $('.nav__item');
   $(tabItem).on('click', function (e) {
      const currentClassName = 'nav__item--active';
      e.preventDefault();
      $(tabItem).removeClass(currentClassName);
      $(this).addClass(currentClassName);
   })

   // change listing
   $(tabItem).on('click', function () {
      const categoryName = $(this).data('cat');
      if (categoryName == 'fav') {
         setFavs(favs);
         return;
      } 
      setListing(categoryName);

   })

   // change fav heart button 
   $('#products').on('click', '.add', function () {

      $(this).html('<i class="fas fa-heart"></i>');
      const productID = $(this).data('id');
      Object.values(products).map(current => {
         let product = current.findIndex(x => x.productid == productID);
         if (product >= 0) {
            favs.push(current[product]);
            localStorage.setItem('favs', JSON.stringify(favs));
         }
      })
   })
   // remove fav heart button 
   $('#products').on('click', '.remove', function () {
      favs = favs.filter(el => el.productid !== $(this).data('id'));
      localStorage.setItem('favs', JSON.stringify(favs));
      setFavs(favs)
   })

   function setFavs(favsArray) {
      const productsEl = $('#products');
      console.log(favsArray);
      if(favsArray.length == 0 || favsArray == null) {
         const emptyBox = `<div class="empty-box">There is no favs</div>`
         productsEl.html(emptyBox);
         return
      }
      productsEl.html('');
      favsArray.forEach(el => {
         let currency = new Intl.NumberFormat('pl-PL', { style: 'currency', currency: 'PLN' }).format(el['price'])

         let template = `
         <li class="products__item product">
            <button type="button" class="product__fav-button remove" data-id="${el['productid']}"><i class="far fa-heart"></i></button>
            <a href="${el['product-url']}" class="product__link">
                  <div class="product__image-wrapper">
                     <img class="product__image" src="${el['product-image-url']}" alt="">
                  </div>
                  <span class="product__price">${currency}</span>
                  <span class="product__title">${el['product-name']}</span>
            </a>
         </li>`;

         productsEl.prepend(template);
      });
   }

   // set mockup listing
   function setListing(name = 'CO') {
      const productsEl = $('#products');
      productsEl.html('');
      Object.values(products[name]).forEach(el => {
         let currency = new Intl.NumberFormat('pl-PL', { style: 'currency', currency: 'PLN' }).format(el['price'])
         let template = `
         <li class="products__item product">
            <button type="button" class="product__fav-button add" data-id="${el['productid']}"><i class="far fa-heart"></i></button>
            <a href="${el['product-url']}" class="product__link">
                  <div class="product__image-wrapper">
                     <img class="product__image" src="${el['product-image-url']}" alt="">
                  </div>
                  <span class="product__price">${currency}</span>
                  <span class="product__title">${el['product-name']}</span>
            </a>
         </li>`;

         productsEl.prepend(template);
      });
   }
   setListing();
});
