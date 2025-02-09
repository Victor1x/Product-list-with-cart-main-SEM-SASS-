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
});

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
  });
});
document.querySelectorAll(".icon__cart").forEach((icon) => {
  icon.addEventListener("click", () => {
    if (icon.classList.contains("icone_de_mais")) {
      console.log(typeof quantity.textContent);
      quantity.textContent = parseInt(quantity.textContent) + 1;
    } else if (icon.classList.contains("icone_de_menos")) {
      console.log(quantity.textContent, "icon_de_menos");
      quantity.textContent = parseInt(quantity.textContent) - 1;
    }
  });
});
