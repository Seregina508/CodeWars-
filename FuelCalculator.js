//https://www.codewars.com/kata/57b58827d2a31c57720012e8
function fuelPrice(litres, pricePerLiter) {
    if (litres >= 10){
        return +(litres * (pricePerLiter - 0.25)).toFixed(2);
    }
    else if (litres >= 8){
        return +(litres * (pricePerLiter - 0.20)).toFixed(2);
    }
    else if (litres >= 6){
        return +(litres * (pricePerLiter - 0.15)).toFixed(2);
    }
    else if (litres >= 4){
        return +(litres * (pricePerLiter - 0.10)).toFixed(2);
    }
    else if (litres >= 2){
        return +(litres * (pricePerLiter - 0.05)).toFixed(2);
    }
}