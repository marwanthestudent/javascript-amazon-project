import { formatCurrency } from "../scripts/utils/money.js";

console.log('test suite: formatCurrency');

console.log('converting cents to dollars');
if(formatCurrency(2095) === '20.95'){
    console.log('passed');
}else{
    console.log('failed');
}

console.log('converting 0 to dollars');
if(formatCurrency(0) === '0.00'){
    console.log('passed');
}else{
    console.log('failed');
}

console.log('rounds up to the nearest cent');
if(formatCurrency(2000.5) === '20.01'){
    console.log('passed');
}else{
    console.log('failed');
}

console.log('rounds down to the nearest cent');
if(formatCurrency(2000.4) === '20.00'){
    console.log('passed');
}else{
    console.log('failed');
}
