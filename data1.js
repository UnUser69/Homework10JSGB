const productData =  
{ 
  src : './image/2106.jpg',
  title : 'Булкин с бэхой',
  text : 'Смешной видосик',
  alt : 'Булкин и бэшечка'
}



    const productBox = document.querySelector('.product-box');
    const productEl = document.createElement('div');
    productEl.classList.add('product');

    const productContent = document.createElement('div');
    productContent.classList.add('product_content');

    const productTitle = document.createElement('h1');
    productTitle.classList.add('product_title');
    productTitle.textContent = productData.title;
    
    const productImg = document.createElement('img');
    productImg.classList.add('product_img');
    productImg.setAttribute('alt', productData.alt);
    productImg.src = productData.src;

    const productPr = document.createElement('p');
    productPr.classList.add('product_pr');
    productPr.textContent = productData.text;

    
    productContent.appendChild(productTitle);
    productContent.appendChild(productPr);
    productEl.appendChild(productImg);
    productEl.appendChild(productContent);
    productBox.appendChild(productEl);