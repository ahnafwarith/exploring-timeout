const addItem = () => {
    const nameField = document.getElementById('product-name')
    const name = nameField.value;
    //display in the ui
    displayProduct(name)
    //add to local storage
    addProductToCard(name)
    //
    nameField.value = ''
}
const displayProduct = (name) => {
    const ul = document.getElementById('products')
    const li = document.createElement('li')
    li.innerText = name;
    ul.appendChild(li)
}

const getCart = () => {
    const cart = localStorage.getItem('cart');
    let cardObj;
    if (cart) {
        cartObj = JSON.parse(cart)
    }
    else {
        cardObj = {};
    }
    return cardObj;
}
const addProductToCard = name => {
    const cart = getCart();
    cart[name] = 1
    const cartStringified = JSON.stringify(cart);
    localStorage.setItem('cart', cartStringified)
}