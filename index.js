//ask for the meal information
let cost = prompt('How much cost the meal?');
let percentage = prompt('How much is the tip percentage?');
let group = prompt('How many are going to split the bill?');

//calculate the total cost and share
let total = parseInt(cost) * (1 + (parseInt(percentage) / 100));
let share = total / parseInt(group);

//show to the user
alert('Meal cost: U$' + cost +
    '\r\nTotal cost: U$' + total.toFixed(2) +
    '\r\nUser share: U$' + share.toFixed(2));