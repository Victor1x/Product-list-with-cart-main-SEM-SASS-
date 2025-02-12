// --- Variáveis Globais ---
const cartItems = {}; // Objeto que guardará os itens do carrinho, indexados (ex: pelo índice do menu)

// Função auxiliar para converter uma string de preço em número (removendo "$" e espaços)
function parsePrice(priceStr) {
  return parseFloat(priceStr.replace(/[^0-9.]/g, ""));
}

// Função para atualizar o Order Total (soma de todos os itens)

function updateCartCount() {
  let count = 0;
  for (let key in cartItems) {
    count += cartItems[key].quantity;
  }
  document.getElementById("cart-count").textContent = count;
}
function updateOrderTotal() {
  let total = 0;
  for (let key in cartItems) {
    const { item, quantity } = cartItems[key];
    total += quantity * parsePrice(item.price);
  }
  priceTotalElement.textContent = "$" + total.toFixed(2);
}

// Inicializa (ou cria) os elementos fixos do carrinho: lista, Order Total, seção carbon neutral e botão de checkout.
const cartContainer = document.querySelector(".cart");
let ulCart = document.querySelector(".cart__list");
if (!ulCart) {
  ulCart = document.createElement("ul");
  ulCart.classList.add("cart__list");
  cartContainer.appendChild(ulCart);
}
let priceTotalElement = document.querySelector(".price__total");
if (!priceTotalElement) {
  const divPriceTotal = document.createElement("div");
  divPriceTotal.classList.add("div__price__total");

  const pOrderTotal = document.createElement("p");
  pOrderTotal.textContent = "Order Total";

  priceTotalElement = document.createElement("h4");
  priceTotalElement.classList.add("price__total");
  priceTotalElement.textContent = "$0.00";

  divPriceTotal.append(pOrderTotal, priceTotalElement);
  cartContainer.appendChild(divPriceTotal);

  // Cria a seção "carbon neutral"
  const divCarbonNeutral = document.createElement("div");
  divCarbonNeutral.classList.add("div__carbon__neutral");
  const imgCarbonNeutral = document.createElement("img");
  imgCarbonNeutral.src = "src/assets/images/icon-carbon-neutral.svg";
  imgCarbonNeutral.alt = "";
  const pCarbonNeutral = document.createElement("p");
  pCarbonNeutral.innerHTML =
    'This is a <span class="span__carbon__neutral">carbon-neutral</span> delivery';

  divCarbonNeutral.append(imgCarbonNeutral, pCarbonNeutral);
  // divCarbonNeutral.appendChild();
  cartContainer.appendChild(divCarbonNeutral);

  // Cria o botão de checkout
  const buttonCheckout = document.createElement("button");
  buttonCheckout.classList.add("button__checkout");
  buttonCheckout.textContent = "Confirm Order";
  cartContainer.appendChild(buttonCheckout);
}

// --- Renderiza os Itens do Menu ---
const list = document.querySelector(".list");

menu.forEach((item, index) => {
  // Criação do <li> do menu
  const listItem = document.createElement("li");
  listItem.setAttribute("role", "listitem");
  listItem.classList.add("list__item");
  listItem.setAttribute("aria-label", item.name);

  // Criação da div da imagem
  const imageDiv = document.createElement("div");
  imageDiv.classList.add("list__item__image");

  const image = document.createElement("img");
  image.classList.add("img_item");
  image.src = item.image.desktop;
  image.alt = item.name;

  // Criação do botão "Add to cart"
  const addCartDiv = document.createElement("div");
  addCartDiv.classList.add("add__cart");
  // Conteúdo padrão do botão
  const cartIcon = document.createElement("img");
  cartIcon.src = "src/assets/images/icon-add-to-cart.svg";
  cartIcon.alt = "icon-add-to-cart";
  cartIcon.classList.add("add__cart__icon");

  const cartText = document.createElement("p");
  cartText.textContent = "Add to cart";

  addCartDiv.append(cartIcon, cartText);

  // Insere a imagem e o botão na div principal
  imageDiv.append(image, addCartDiv);

  // Cria a div de descrição
  const descriptionDiv = document.createElement("div");
  descriptionDiv.classList.add("list__item__description");

  const categorySpan = document.createElement("span");
  categorySpan.textContent = item.category;

  const nameParagraph = document.createElement("p");
  nameParagraph.classList.add("name");
  nameParagraph.textContent = item.name;

  const priceParagraph = document.createElement("p");
  priceParagraph.classList.add("price");
  priceParagraph.textContent = "$" + item.price;

  descriptionDiv.append(categorySpan, nameParagraph, priceParagraph);


  // Monta o <li> e insere na lista
  listItem.append(imageDiv, descriptionDiv);
  list.appendChild(listItem);

  // Evento do botão "Add to cart"
  addCartDiv.addEventListener("click", () => {
    // Se o botão não estiver ativo, cria o controle de quantidade e o item no carrinho
    if (!addCartDiv.classList.contains("active")) {
      // Transforma o botão: limpa o conteúdo e adiciona os controles “–”, quantidade e “+”
      addCartDiv.innerHTML = "";
      addCartDiv.classList.add("active");

      const minusBtn = document.createElement("p");
      minusBtn.classList.add("icon__cart", "icone_de_menos");
      minusBtn.textContent = "-";

      const quantityDisplay = document.createElement("p");
      quantityDisplay.classList.add("quantity");
      quantityDisplay.textContent = "1";

      const plusBtn = document.createElement("p");
      plusBtn.classList.add("icon__cart", "icone_de_mais");
      plusBtn.textContent = "+";

      addCartDiv.append(minusBtn, quantityDisplay, plusBtn);

      // Cria o item no carrinho e guarda a referência
      const cartItemElement = createCart(item, index, 1);

      cartItems[index] = {
        item: item,
        quantity: 1,
        dom: cartItemElement, // Objeto com referências do DOM (veja a função createCart)
        button: addCartDiv, // Guarda a referência ao botão para que possa ser restaurado
      };
      updateCartCount();
      updateOrderTotal();

      // Evento do botão "+"
      plusBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        let currentQuantity = Number(quantityDisplay.textContent);
        currentQuantity++;
        quantityDisplay.textContent = currentQuantity;
        cartItems[index].quantity = currentQuantity;
        updateCartItem(cartItems[index]);
        updateCartCount();
        updateOrderTotal();
      });

      // Evento do botão "–"
      minusBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        let currentQuantity = Number(quantityDisplay.textContent);
        if (currentQuantity > 1) {
          currentQuantity--;
          quantityDisplay.textContent = currentQuantity;
          cartItems[index].quantity = currentQuantity;
          updateCartItem(cartItems[index]);
          updateCartCount();
          updateOrderTotal();
        } else {
          // Se a quantidade chegar a 0, remove o item do carrinho e restaura o botão original
          removeCartItem(index);
          addCartDiv.innerHTML = "";
          addCartDiv.classList.remove("active");
          // Restaura o conteúdo original do botão
          const newCartIcon = document.createElement("img");
          newCartIcon.src = "src/assets/images/icon-add-to-cart.svg";
          newCartIcon.alt = "icon-add-to-cart";
          newCartIcon.classList.add("add__cart__icon");
          const newCartText = document.createElement("p");
          newCartText.textContent = "Add to cart";
          addCartDiv.append(newCartIcon, newCartText);
          updateCartCount();
          updateOrderTotal();
        }
      });
    }
  });
});

