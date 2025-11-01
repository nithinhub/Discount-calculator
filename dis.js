function calculateTotal(isMember, price){
    let discount = isMember ? 0.2 : 0;
    let discountAmount = price * discount;
    let total = price - discountAmount;

    return {
        original: price,
        discount: discount * 100 + "%",
        discountAmount: discountAmount,
        total: total
    };
   

}

function calculateAndDisplay(){
    const price = parseFloat(document.getElementById('price').value);
    const isMember = document.getElementById('isMember').checked;

    if (isNaN(price) || price < 0) {
        alert('Please enter a valid price.');
        return;

    }

    const result = calculateTotal(isMember, price);
    displayResult(result);

}

function displayResult(result){
    document.getElementById('originalPrice').textContent = '$' + result.original.toFixed(2);
    document.getElementById('discountRate').textContent = result.discount;
    document.getElementById('discountAmount').textContent = '$' + result.discountAmount.toFixed(2);
    document.getElementById('finalPrice').textContent = '$' + result.total.toFixed(2);

    document.getElementById('result').style.display = 'block';



const discountElement = document.getElementById('discountRate');
if (result.discount !== '0%'){
    discountElement.innerHTML = '<span class="discount-badge">' + result.discount + 'OFF</span>';
}else {
    discountElement.innerHTML = '<span class= "discount-badge no-discount">' + result.discount + '</span>';
}

}

function runTest(isMember, price){
    document.getElementById('price').value = price;
    document.getElementById('isMember').checked = isMember;

    calculateAndDisplay();


    const result = calculateTotal(isMember, price);
    console.log('Test Result:', result);


}

window.onload = function(){
    calculateAndDisplay();

};

console.log('=== Price Calculator Tests ===');

let result1 = calculateTotal(true, 10);
console.log('Member, $10:', result1);

let result2 = calculateTotal(false, 10);
console.log('Non-Member, $10:', result2);

let result3 = calculateTotal(true, 50);
console.log('Member, $50:', result3);

let result4 = calculateTotal(false, 50);
console.log('Non-Member, $50:', result4);


