document.addEventListener("DOMContentLoaded", function() {
    fetch('products.json')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            return response.json();
        })
        .then(data => {
            const productList = document.getElementById('productList');

            data.forEach(product => {
                const productItem = document.createElement('div');
                productItem.className = 'product-item';

                productItem.innerHTML = `
                    <img src="${product.image}" alt="${product.name}">
                    <h3>${product.name}</h3>
                    <p>${product.price}</p>
                `;

                productList.appendChild(productItem);
            });
        })
        .catch(error => console.error('Fetch error:', error));
});
