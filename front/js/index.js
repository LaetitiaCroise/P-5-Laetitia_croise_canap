
//c'est pour récupérer tous les élements (produits) de l'api
function getProductList() {
  fetch("http://localhost:3000/api/products")
    .then(function (res) {
      if (res.ok) {
        return res.json();
      }
    })

    .then(function(datas) {
      datas.forEach(product => {

          // je construis et définis le DOM grâce à la boucle
          let items = document.getElementById('items'); //---- Sélectionne la section item dans mon html ---
          let a = document.createElement('a'); //------ créé le lien qui va contenir les cartes des produits-----
          let article = document.createElement('article'); //------ créé la balise "article"----
          article.classList.add("productCard"); //------ ajoute une classe au article----
          let img = document.createElement('img'); //------ créé la balise "img"----
          img.classList.add("productImage") //------ ajoute une classe au img----
          let h3 = document.createElement('h3'); //---- créé la balise "h3"----
          h3.classList.add("productName"); //------ ajoute une classe au h3----
          let p = document.createElement('p'); //---- créé une balise "p"----
          p.classList.add("productDescription"); //---- ajoute une classe à mon "p"-----
          let productUrl = "./product.html?id=" + product._id; //---- attribue un lien a la balise "a"----

          a.setAttribute('href', productUrl); //---- attribue un lien a la balise "a"----
          
          img.src = product.imageUrl; //------ ajoute le lien de l'image source----
          img.alt = product.altTxt; //---- ajoute l'altTxt----
          h3.innerHTML = product.name; //------ ajoute le nom du produit----
          p.innerHTML = product.description; //------ ajoute la description du produit------
                    
          items.appendChild(a); //---- j'assigne les liens des articles (les enfants),au parent qui est la section "items" dans lesquels ils sont rangés  ------
          a.appendChild(article); //---- l'article c'est l'enfant la balise "a" c'est le parent ----
          article.appendChild(img); //---- j'assigne l'enfant a son parent (productImg (enfant) , article(parent))----
          article.appendChild(h3); //---- le nom du produit est l'enfant , l'article est le parent-----
          article.appendChild(p); //---- la description du produit est l'enfant , l'article est le parent----

          console.log(product);
      })
  })
}
getProductList()
