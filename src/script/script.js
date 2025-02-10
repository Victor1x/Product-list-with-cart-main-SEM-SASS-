const menu = [
  {
    image: {
      thumbnail: "src/assets/images/image-waffle-thumbnail.jpg",
      mobile: "src/assets/images/image-waffle-mobile.jpg",
      tablet: "src/assets/images/image-waffle-tablet.jpg",
      desktop: "src/assets/images/image-waffle-desktop.jpg",
    },
    name: "Waffle with Berries",
    category: "Waffle",
    price: " $ 6.50",
  },
  {
    image: {
      thumbnail: "src/assets/images/image-creme-brulee-thumbnail.jpg",
      mobile: "src/assets/images/image-creme-brulee-mobile.jpg",
      tablet: "src/assets/images/image-creme-brulee-tablet.jpg",
      desktop: "src/assets/images/image-creme-brulee-desktop.jpg",
    },
    name: "Vanilla Bean Crème Brûlée",
    category: "Crème Brûlée",
    price: "  $ 7.00",
  },
  {
    image: {
      thumbnail: "src/assets/images/image-macaron-thumbnail.jpg",
      mobile: "src/assets/images/image-macaron-mobile.jpg",
      tablet: "src/assets/images/image-macaron-tablet.jpg",
      desktop: "src/assets/images/image-macaron-desktop.jpg",
    },
    name: "Macaron Mix of Five",
    category: "Macaron",
    price: " $ 8.00",
  },
  {
    image: {
      thumbnail: "src/assets/images/image-tiramisu-thumbnail.jpg",
      mobile: "src/assets/images/image-tiramisu-mobile.jpg",
      tablet: "src/assets/images/image-tiramisu-tablet.jpg",
      desktop: "src/assets/images/image-tiramisu-desktop.jpg",
    },
    name: "Classic Tiramisu",
    category: "Tiramisu",
    price: " $ 5.50",
  },
  {
    image: {
      thumbnail: "src/assets/images/image-baklava-thumbnail.jpg",
      mobile: "src/assets/images/image-baklava-mobile.jpg",
      tablet: "src/assets/images/image-baklava-tablet.jpg",
      desktop: "src/assets/images/image-baklava-desktop.jpg",
    },
    name: "Pistachio Baklava",
    category: "Baklava",
    price: "$ 4.00",
  },
  {
    image: {
      thumbnail: "src/assets/images/image-meringue-thumbnail.jpg",
      mobile: "src/assets/images/image-meringue-mobile.jpg",
      tablet: "src/assets/images/image-meringue-tablet.jpg",
      desktop: "src/assets/images/image-meringue-desktop.jpg",
    },
    name: "Lemon Meringue Pie",
    category: "Pie",
    price: "$ 5.00",
  },
  {
    image: {
      thumbnail: "src/assets/images/image-cake-thumbnail.jpg",
      mobile: "src/assets/images/image-cake-mobile.jpg",
      tablet: "src/assets/images/image-cake-tablet.jpg",
      desktop: "src/assets/images/image-cake-desktop.jpg",
    },
    name: "Red Velvet Cake",
    category: "Cake",
    price: "$ 4.50 ",
  },
  {
    image: {
      thumbnail: "src/assets/images/image-brownie-thumbnail.jpg",
      mobile: "src/assets/images/image-brownie-mobile.jpg",
      tablet: "src/assets/images/image-brownie-tablet.jpg",
      desktop: "src/assets/images/image-brownie-desktop.jpg",
    },
    name: "Salted Caramel Brownie",
    category: "Brownie",
    price: "$ 4.50",
  },
  {
    image: {
      thumbnail: "src/assets/images/image-panna-cotta-thumbnail.jpg",
      mobile: "src/assets/images/image-panna-cotta-mobile.jpg",
      tablet: "src/assets/images/image-panna-cotta-tablet.jpg",
      desktop: "src/assets/images/image-panna-cotta-desktop.jpg",
    },
    name: "Vanilla Panna Cotta",
    category: "Panna Cotta",
    price: "$ 6.50 ",
  },
];
menu.forEach((item) => {
  const list = document.querySelector(".list");

  // Criando o <li>

  const listItem = document.createElement("li");
  listItem.setAttribute("role", "listitem");
  listItem.classList.add("list__item");
  listItem.setAttribute("aria-label", item.name);

  // Criando a div da imagem
  const imageDiv = document.createElement("div");
  imageDiv.classList.add("list__item__image", "image__waffle");

  // Criando a imagem principal
  const image = document.createElement("img");
  image.classList.add("img_item");
  image.src = item.image.desktop;
  image.alt = item.name;

  // Criando a div do botão "Add to cart"
  const addCartDiv = document.createElement("div");
  addCartDiv.classList.add("add__cart");

  // Criando o ícone do carrinho
  const cartIcon = document.createElement("img");
  cartIcon.src = "src/assets/images/icon-add-to-cart.svg";
  cartIcon.alt = "icon-add-to-cart";
  cartIcon.classList.add("add__cart__icon");

  // Criando o texto "Add to cart"
  const cartText = document.createElement("p");
  cartText.textContent = "Add to cart";

  // Adicionando o ícone e o texto ao botão do carrinho
  addCartDiv.appendChild(cartIcon);
  addCartDiv.appendChild(cartText);

  // Adicionando a imagem e o botão do carrinho à div principal da imagem
  imageDiv.appendChild(image);
  imageDiv.appendChild(addCartDiv);

  // Criando a div da descrição
  const descriptionDiv = document.createElement("div");
  descriptionDiv.classList.add("list__item__decription");

  // Criando os elementos de texto
  const categorySpan = document.createElement("span");
  categorySpan.textContent = item.category;

  const nameParagraph = document.createElement("p");
  nameParagraph.classList.add("name");
  nameParagraph.textContent = item.name;

  const priceParagraph = document.createElement("p");
  priceParagraph.classList.add("price");
  priceParagraph.textContent = item.price;

  // Adicionando os textos à div da descrição
  descriptionDiv.appendChild(categorySpan);
  descriptionDiv.appendChild(nameParagraph);
  descriptionDiv.appendChild(priceParagraph);

  // Adicionando as divs ao <li>
  listItem.appendChild(imageDiv);
  listItem.appendChild(descriptionDiv);

  // Adicionando o <li> à lista
  list.appendChild(listItem);

  document.querySelectorAll(".add__cart").forEach((button) => {
    button.addEventListener("click", () => {
      button.innerHTML = "";
      button.classList.add("active");
      const icon_de_menos = document.createElement("p");
      icon_de_menos.classList.add("icon__cart");
      icon_de_menos.classList.add("icone_de_menos");
      icon_de_menos.textContent = "-";

      const quantity = document.createElement("p");
      quantity.classList.add("quantity");
      quantity.textContent = 1;

      const icon_de_mais = document.createElement("p");
      icon_de_mais.classList.add("icon__cart");
      icon_de_mais.classList.add("icone_de_mais");
      icon_de_mais.textContent = "+";

      button.append(icon_de_menos, quantity, icon_de_mais);

      createCart(item ,quantity.textContent);

      icon_de_mais.addEventListener("click", (e) => {
        e.stopPropagation(); // Impede que o clique seja propagado para o botão pai
        quantity.textContent = Number(quantity.textContent) + 1;
      });

      // Se desejar implementar a funcionalidade de diminuir a quantidade:
      icon_de_menos.addEventListener("click", (e) => {
        e.stopPropagation();
        let currentQuantity = Number(quantity.textContent);
        if (currentQuantity > 1) {
          quantity.textContent = currentQuantity - 1;
        } else {
          // Se a quantidade chegar a 0 (ou 1 e o usuário clicar em "-"), restaura o botão original
          button.innerHTML = "";
          button.classList.remove("active");

          const cartIcon = document.createElement("img");
          cartIcon.src = "src/assets/images/icon-add-to-cart.svg";
          cartIcon.alt = "icon-add-to-cart";
          cartIcon.classList.add("add__cart__icon");

          const cartText = document.createElement("p");
          cartText.textContent = "Add to cart";

          button.append(cartIcon, cartText);
        }
      });
    });
  });
});

// document.querySelectorAll(".add__cart").forEach((button) => {
//   button.addEventListener("click", () => {
//     button.innerHTML = "";
//     button.classList.add("active");
//     const icon_de_menos = document.createElement("p");
//     icon_de_menos.classList.add("icon__cart");
//     icon_de_menos.classList.add("icone_de_menos");
//     icon_de_menos.textContent = "-";

//     const quantity = document.createElement("p");
//     quantity.classList.add("quantity");
//     quantity.textContent = 1;

//     const icon_de_mais = document.createElement("p");
//     icon_de_mais.classList.add("icon__cart");
//     icon_de_mais.classList.add("icone_de_mais");
//     icon_de_mais.textContent = "+";

//     button.append(icon_de_menos, quantity, icon_de_mais);

//     icon_de_mais.addEventListener("click", (e) => {
//       e.stopPropagation(); // Impede que o clique seja propagado para o botão pai
//       quantity.textContent = Number(quantity.textContent) + 1;
//     });

//     // Se desejar implementar a funcionalidade de diminuir a quantidade:
//     icon_de_menos.addEventListener("click", (e) => {
//       e.stopPropagation();
//       let currentQuantity = Number(quantity.textContent);
//       if (currentQuantity > 1) {
//         quantity.textContent = currentQuantity - 1;
//       } else {
//         // Se a quantidade chegar a 0 (ou 1 e o usuário clicar em "-"), restaura o botão original
//         button.innerHTML = "";
//         button.classList.remove("active");

//         const cartIcon = document.createElement("img");
//         cartIcon.src = "src/assets/images/icon-add-to-cart.svg";
//         cartIcon.alt = "icon-add-to-cart";
//         cartIcon.classList.add("add__cart__icon");

//         const cartText = document.createElement("p");
//         cartText.textContent = "Add to cart";

//         button.append(cartIcon, cartText);
//       }
//     });
//   });
// });
function createCart(item ,quantity) {
  // Cria o container principal da seção do carrinho com a classe "cart"
  const cart = document.querySelector(".cart");

  // 1. Criação da lista de itens (ul com class "cart__list")
  const ulCart = document.querySelector(".cart__list");

  // 1.1 Criação de um item do carrinho (li com class "li__item__cart")
  const liItemCart = document.createElement("li");
  liItemCart.classList.add("li__item__cart");

  // 1.1.1 Criação da div de descrição do item
  const divDescription = document.createElement("div");
  divDescription.classList.add("item__cart__description");

  // Nome do item
  const pName = document.createElement("p");
  pName.classList.add("name");
  pName.textContent = item.name;

  // Div que agrupa quantidade e preços
  const divQuantityPrice = document.createElement("div");
  divQuantityPrice.classList.add("quantity_price_item");

  // Parágrafo para a quantidade
  const pQuantityCart = document.createElement("p");
  pQuantityCart.classList.add("quantity_cart");

  // Span que mostra a quantidade (valor unitário)
  const spanCartPriceTotal = document.createElement("span");
  spanCartPriceTotal.classList.add("cart__price__total");
  spanCartPriceTotal.textContent = quantity.textContent;

  // Adiciona o span e o "x" indicando quantidade
  pQuantityCart.appendChild(spanCartPriceTotal);
  pQuantityCart.insertAdjacentText("beforeend", "x");

  // Parágrafo para o preço unitário do item
  const pPriceItemCart = document.createElement("p");
  pPriceItemCart.classList.add("price_item_cart");
  pPriceItemCart.textContent = item.price;

  // Parágrafo para o total do item (com span interno)
  const pTotalItemCart = document.createElement("p");
  pTotalItemCart.classList.add("total_item_cart");

  // Cria e adiciona o texto "$"
  const textDollar = document.createTextNode("$");
  pTotalItemCart.appendChild(textDollar);

  // Cria o <span> com a classe e o conteúdo "13"
  const spanTotal = document.createElement("span");
  spanTotal.classList.add("span_total_item_cart");
  spanTotal.textContent = Number(quantity.textContent) * item.price;
  pTotalItemCart.appendChild(spanTotal);

  // Cria e adiciona o texto ".00"
  const textDecimals = document.createTextNode(".00");
  pTotalItemCart.appendChild(textDecimals);

  // Agrupa os parágrafos de quantidade, preço unitário e total
  divQuantityPrice.appendChild(pQuantityCart);
  divQuantityPrice.appendChild(pPriceItemCart);
  divQuantityPrice.appendChild(pTotalItemCart);

  // Adiciona o nome e a div de quantidade/preço na descrição do item
  divDescription.appendChild(pName);
  divDescription.appendChild(divQuantityPrice);

  // 1.1.2 Cria a imagem para remover o item
  const imgRemove = document.createElement("img");
  imgRemove.classList.add("icon__remove__item__cart");
  imgRemove.src = "src/assets/images/icon-remove-item.svg";
  imgRemove.alt = "";

  // Monta o item do carrinho (li)
  liItemCart.appendChild(divDescription);
  liItemCart.appendChild(imgRemove);

  // Adiciona o item (li) à lista (ul)
  ulCart.appendChild(liItemCart);

  // 2. Criação da seção de "Order Total"
  // <div class="div__price__total">
  const divPriceTotal = document.createElement("div");
  divPriceTotal.classList.add("div__price__total");

  const pOrderTotal = document.createElement("p");
  pOrderTotal.textContent = "Order Total";

  const h4PriceTotal = document.createElement("h4");
  h4PriceTotal.classList.add("price__total");
  h4PriceTotal.textContent = "$45.90";

  divPriceTotal.appendChild(pOrderTotal);
  divPriceTotal.appendChild(h4PriceTotal);

  // 3. Criação da seção "carbon neutral"
  // <div class="div__carbon__neutral">
  const divCarbonNeutral = document.createElement("div");
  divCarbonNeutral.classList.add("div__carbon__neutral");

  const imgCarbonNeutral = document.createElement("img");
  imgCarbonNeutral.src = "src/assets/images/icon-carbon-neutral.svg";
  imgCarbonNeutral.alt = "";

  const pCarbonNeutral = document.createElement("p");
  pCarbonNeutral.innerHTML =
    'This is a <span class="span__carbon__neutral">carbon-neutral</span> delivery';

  divCarbonNeutral.appendChild(imgCarbonNeutral);
  divCarbonNeutral.appendChild(pCarbonNeutral);

  // 4. Criação do botão de checkout
  const buttonCheckout = document.createElement("button");
  buttonCheckout.classList.add("button__checkout");
  buttonCheckout.textContent = "Cofirm Order";

  // 5. Monta a estrutura dentro da div "cart"
  // Adiciona a lista de itens (ul) e as demais seções à div "cart"
  cart.appendChild(ulCart);
  cart.appendChild(divPriceTotal);
  cart.appendChild(divCarbonNeutral);
  cart.appendChild(buttonCheckout);
}
