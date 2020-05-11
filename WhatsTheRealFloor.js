//https://www.codewars.com/kata/574b3b1599d8f897470018f6/

function getRealFloor(n) {
    if (n > 13){
        return n - 2;
    } else if (n > 0) {
        return n - 1;
    } else {
        return n;
    }
}