const products = {
    "CO":[
       {
          "product-name":"MEN'S BETTER THAN NAKED&trade; JACKET",
          "product-image-url":"http://images.thenorthface.com/is/image/TheNorthFace/236x204_CLR/mens-better-than-naked-jacket-AVMH_LC9_hero.png",
          "header-top-right-text":"Shop All",
          "header-top-left-text":"Men's",
          "product-url":"http://www.thenorthface.com/catalog/sc-gear/men-39-s-better-than-naked-8482-jacket.html",
          "header-top-right-url":"http://www.thenorthface.com/en_US/shop-mens/",
          "product-cta-text":"Shop Now",
          "price": '123.123'
       },
       {
          "product-name":"WOMEN'S BETTER THAN NAKED&trade; JACKET",
          "product-image-url":"http://images.thenorthface.com/is/image/TheNorthFace/236x204_CLR/womens-better-than-naked-jacket-AVKL_NN4_hero.png",
          "header-top-right-text":"Shop All",
          "header-top-left-text":"Women's",
          "product-url":"http://www.thenorthface.com/catalog/sc-gear/women-39-s-better-than-naked-8482-jacket.html",
          "header-top-right-url":"http://www.thenorthface.com/en_US/shop-womens/",
          "product-cta-text":"Shop Now",
          "price": '123.123'
       },
       {
          "product-name":"WOMEN'S SINGLE-TRACK SHOE",
          "product-image-url":"http://images.thenorthface.com/is/image/TheNorthFace/236x204_CLR/womens-single-track-shoe-ALQF_JM3_hero.png",
          "header-top-right-text":"Shop All",
          "header-top-left-text":"Running Shoes",
          "product-url":"http://www.thenorthface.com/catalog/sc-gear/womens-single-track.html",
          "header-top-right-url":"http://www.thenorthface.com/webapp/wcs/stores/servlet/TNFSearchResult?langId=-1&amp;storeId=207&amp;catalogId=10201&amp;searchTerm=running%20shoes",
          "product-cta-text":"Shop Now",
          "price": '123.123'
       },
       {
          "product-name":"Enduro Boa&reg; Hydration Pack",
          "product-image-url":"http://images.thenorthface.com/is/image/TheNorthFace/236x204_CLR/enduro-boa-hydration-pack-AJQZ_JK3_hero.png",
          "header-top-right-text":"Shop All",
          "header-top-left-text":"Equipment",
          "product-url":"http://www.thenorthface.com/catalog/sc-gear/enduro-boa.html",
          "header-top-right-url":"http://www.thenorthface.com/en_US/shop-equipment/",
          "product-cta-text":"Shop Now",
          "price": '123.123'
       }
    ],
    "WI":[
       {
          "product-name":"MEN'S BETTER THAN NAKED&trade; JACKET",
          "product-image-url":"http://images.thenorthface.com/is/image/TheNorthFace/236x204_CLR/mens-better-than-naked-jacket-AVMH_LC9_hero.png",
          "header-top-right-text":"Shop All",
          "header-top-left-text":"Men's",
          "product-url":"http://www.thenorthface.com/catalog/sc-gear/men-39-s-better-than-naked-8482-jacket.html",
          "header-top-right-url":"http://www.thenorthface.com/en_US/shop-mens/",
          "product-cta-text":"Shop Now",
          "price": '123.123'
       },
       {
          "product-name":"WOMEN'S BETTER THAN NAKED&trade; JACKET",
          "product-image-url":"http://images.thenorthface.com/is/image/TheNorthFace/236x204_CLR/womens-better-than-naked-jacket-AVKL_NN4_hero.png",
          "header-top-right-text":"Shop All",
          "header-top-left-text":"Women's",
          "product-url":"http://www.thenorthface.com/catalog/sc-gear/women-39-s-better-than-naked-8482-jacket.html",
          "header-top-right-url":"http://www.thenorthface.com/en_US/shop-womens/",
          "product-cta-text":"Shop Now",
          "price": '123.123'
       },
       {
          "product-name":"WOMEN'S SINGLE-TRACK SHOE",
          "product-image-url":"http://images.thenorthface.com/is/image/TheNorthFace/236x204_CLR/womens-single-track-shoe-ALQF_JM3_hero.png",
          "header-top-right-text":"Shop All",
          "header-top-left-text":"Running Shoes",
          "product-url":"http://www.thenorthface.com/catalog/sc-gear/womens-single-track.html",
          "header-top-right-url":"http://www.thenorthface.com/webapp/wcs/stores/servlet/TNFSearchResult?langId=-1&amp;storeId=207&amp;catalogId=10201&amp;searchTerm=running%20shoes",
          "product-cta-text":"Shop Now",
          "price": '123.123'
       },
       {
          "product-name":"Enduro Boa&reg; Hydration Pack",
          "product-image-url":"http://images.thenorthface.com/is/image/TheNorthFace/236x204_CLR/enduro-boa-hydration-pack-AJQZ_JK3_hero.png",
          "header-top-right-text":"Shop All",
          "header-top-left-text":"Equipment",
          "product-url":"http://www.thenorthface.com/catalog/sc-gear/enduro-boa.html",
          "header-top-right-url":"http://www.thenorthface.com/en_US/shop-equipment/",
          "product-cta-text":"Shop Now",
          "price": '123.123'
       }
    ]
 }

 $(document).ready(function() {
   // set active tab
   const tabItem = $('.nav__item');
   $(tabItem).on('click', function(e) {
      const currentClassName = 'nav__item--active'; 
      e.preventDefault();
      $(tabItem).removeClass(currentClassName);
      $(this).addClass(currentClassName);
   })

   // change fav heart button 
   $('.product__fav-button').on('click', function() {
      $(this).html('<i class="fas fa-heart"></i>');
   })

   Object.values(products['CO']).forEach(el => {
     let template = `
      <li class="products__item product">
         <button type="button" class="product__fav-button"><i class="far fa-heart"></i></button>
         <a href="${el['product-url']}" class="product__link">
               <div class="product__image-wrapper">
                  <img class="product__image" src="${el['product-image-url']}" alt="">
               </div>
               <span class="product__price">${el['price']}</span>
               <span class="product__title">${el['product-name']}</span>
         </a>
      </li>`;

     $('#products').prepend(template);
   });
});
