function calculateDiscountedPrice (price, discountPercentage) {
    var discount = price * discountPercentage / 100;
    return price - discount;
}

const price = 100;
const discountPercentage = 15;
const discountedPrice = calculateDiscountedPrice(price, discountPercentage);
console.log(`Original price: ${price}`);
console.log(`Discount percentage: ${discountPercentage}%`);
console.log(`Discounted price: ${discountedPrice}`);
