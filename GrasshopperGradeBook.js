//https://www.codewars.com/kata/55cbd4ba903825f7970000f5/

function getGrade (s1, s2, s3) {
    let mean = (s1 + s2 + s3) / 3;
    if (mean <= 100 && mean >= 90) {
        return "A";
    }
    if (mean < 90 && mean >= 80) {
        return "B";
    }
    if (mean < 80 && mean >= 70) {
        return "C";
    }
    if (mean < 70 && mean >= 60) {
        return "D";
    }
    if (mean < 60 && mean >= 0) {
        return "F";
    }
}