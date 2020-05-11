//https://www.codewars.com/kata/57e921d8b36340f1fd000059

function shark(pontoonDistance, sharkDistance, youSpeed, sharkSpeed, dolphin){
    if (dolphin){
        sharkSpeed /= 2;
    }
    if (sharkDistance / sharkSpeed > pontoonDistance / youSpeed){
        return "Alive!";
    } else {
        return "Shark Bait!";
    }
}