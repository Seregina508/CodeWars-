//https://www.codewars.com/kata/580a094553bd9ec5d800007d
function apple(x){
    let y = typeof x === "string" ? +x : x;
    if (y * y > 1000) {
        return 'It\'s hotter than the sun!!';
    } else {
        return 'Help yourself to a honeycomb Yorkie for the glovebox.';
    }
}