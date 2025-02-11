// --- Funções para o Carrinho ---

// Cria um item no carrinho e retorna um objeto com referências dos elementos que serão atualizados
function createCart(item, index, quantity) {
  // Cria o <li> do item no carrinho e associa um data-index para referência
  const liItemCart = document.createElement("li");
  liItemCart.classList.add("li__item__cart");
  liItemCart.setAttribute("data-index", index);

  // Cria a div de descrição do item
  const divDescription = document.createElement("div");
  divDescription.classList.add("item__cart__description");

  const pName = document.createElement("p");
  pName.classList.add("name");
  pName.textContent = item.name;

  const divQuantityPrice = document.createElement("div");
  divQuantityPrice.classList.add("quantity_price_item");

  // Elemento de quantidade
  const pQuantityCart = document.createElement("p");
  pQuantityCart.classList.add("quantity_cart");
  const spanQuantity = document.createElement("span");
  spanQuantity.classList.add("cart__price__total");
  spanQuantity.textContent = quantity + "x"; // quantidade inicial
  pQuantityCart.appendChild(spanQuantity);

  // Preço unitário
  const pPriceItemCart = document.createElement("p");
  pPriceItemCart.classList.add("price_item_cart");
  pPriceItemCart.textContent = item.price;

  // Preço total do item (quantidade * preço unitário)
  const pTotalItemCart = document.createElement("p");
  pTotalItemCart.classList.add("total_item_cart");
  pTotalItemCart.textContent = "$";
  const spanTotal = document.createElement("span");
  spanTotal.classList.add("span_total_item_cart");
  const unitPrice = parsePrice(item.price);
  spanTotal.textContent = (quantity * unitPrice).toFixed(2);
  pTotalItemCart.appendChild(spanTotal);

  divQuantityPrice.append(pQuantityCart, pPriceItemCart, pTotalItemCart);

  // Adiciona a div de descrição ao <li>

  divDescription.append(pName, divQuantityPrice);

  // Ícone para remover o item (além dos controles “–” e “+”, o usuário pode clicar no ícone de remoção)
  const imgRemove = document.createElement("img");
  imgRemove.classList.add("icon__remove__item__cart");
  imgRemove.src = "src/assets/images/icon-remove-item.svg";
  imgRemove.alt = "Remove item";
  // evento para remover o item
  imgRemove.addEventListener("click", () => {
    removeCartItem(index);
    // Também restaura o botão "Add to cart" para este item
    console.log(cartItems[index].button);
    if (cartItems[index] && cartItems[index].button) {
      const btn = cartItems[index].button;
      console.log(btn);
      btn.innerHTML = "";
      btn.classList.remove("active");
      const newCartIcon = document.createElement("img");
      newCartIcon.src = "src/assets/images/icon-add-to-cart.svg";
      newCartIcon.alt = "icon-add-to-cart";
      newCartIcon.classList.add("add__cart__icon");
      const newCartText = document.createElement("p");
      newCartText.textContent = "Add to cart";
      btn.append(newCartIcon, newCartText);
    }
    updateOrderTotal();
  });

  liItemCart.appendChild(divDescription);
  liItemCart.appendChild(imgRemove);
  ulCart.appendChild(liItemCart);

  // Retorna um objeto com as referências dos elementos que serão atualizados futuramente
  return {
    li: liItemCart,
    spanQuantity: spanQuantity,
    spanTotal: spanTotal,
    item: item,
  };
}

// Atualiza os valores de quantidade e total de um item do carrinho
function updateCartItem(cartItem) {
  const { quantity, dom, item } = cartItem;
  dom.spanQuantity.textContent = quantity;
  const unitPrice = parsePrice(item.price);
  dom.spanTotal.textContent = (quantity * unitPrice).toFixed(2);
}

// Remove um item do carrinho e restaura o botão "Add to cart" correspondente
function removeCartItem(index) {
  if (cartItems[index]) {
    // Remove o elemento do carrinho do DOM
    const dom = cartItems[index].dom;
    if (dom && dom.li && dom.li.parentNode) {
      dom.li.parentNode.removeChild(dom.li);
    }
    // Restaura o botão "Add to cart"
    const btn = cartItems[index].button;
    if (btn) {
      btn.innerHTML = "";
      btn.classList.remove("active");
      const newCartIcon = document.createElement("img");
      newCartIcon.src = "src/assets/images/icon-add-to-cart.svg";
      newCartIcon.alt = "icon-add-to-cart";
      newCartIcon.classList.add("add__cart__icon");
      const newCartText = document.createElement("p");
      newCartText.textContent = "Add to cart";
      btn.append(newCartIcon, newCartText);
    }
    delete cartItems[index];
  }
}
