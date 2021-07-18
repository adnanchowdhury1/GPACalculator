function calculate(){
    let totalGradePoints = 0;

    let grade1 = document.getElementById('grades1');
    let grade2 = document.getElementById('grades2');
    let grade3 = document.getElementById('grades3');
    let grade4 = document.getElementById('grades4');
    let grade5 = document.getElementById('grades5');
    let grade6 = document.getElementById('grades6');
    let grade7 = document.getElementById('grades7');
    let grade8 = document.getElementById('grades8');
    let grade9 = document.getElementById('grades9');
    let grade10 = document.getElementById('grades10');

    totalGradePoints += addPoints(grade1, 1);
    totalGradePoints += addPoints(grade2, 2);
    totalGradePoints += addPoints(grade3, 3);
    totalGradePoints += addPoints(grade4, 4);
    totalGradePoints += addPoints(grade5, 5);
    totalGradePoints += addPoints(grade6, 6);
    totalGradePoints += addPoints(grade7, 7);
    totalGradePoints += addPoints(grade8, 8);
    totalGradePoints += addPoints(grade9, 9);
    totalGradePoints += addPoints(grade10, 10);

    let credit1 = document.getElementById('credits1');
    let credit2 = document.getElementById("credits2");
    let credit3 = document.getElementById("credits3");
    let credit4 = document.getElementById("credits4");
    let credit5 = document.getElementById("credits5");
    let credit6 = document.getElementById("credits6");
    let credit7 = document.getElementById("credits7");
    let credit8 = document.getElementById("credits8");
    let credit9 = document.getElementById("credits9");
    let credit10 = document.getElementById("credits10");

    let totalCredits = Number(credit1.value) + Number(credit2.value) + Number(credit3.value) +
    Number(credit4.value) + Number(credit5.value) + Number(credit6.value) + Number(credit7.value)
    + Number(credit8.value) + Number(credit9.value) + Number(credit10.value);

    let gpa = totalGradePoints / totalCredits;
    document.getElementById('result').innerHTML
                = gpa.toFixed(2);

    
}

function addPoints(id, number){
    let credits = 0;
    if (id.value === 'A'){
        if (number === 1){
            credits = document.getElementById("credits1").value;
        }
        else if (number === 2) {
            credits = document.getElementById("credits2").value;
        }
        else if (number === 3) {
            credits = document.getElementById("credits3").value;
        }
        else if (number === 4) {
            credits = document.getElementById("credits4").value;
        }
        else if (number === 5) {
            credits = document.getElementById("credits5").value;
        }
        else if (number === 6) {
            credits = document.getElementById("credits6").value;
        }
        else if (number === 7) {
            credits = document.getElementById("credits7").value;
        }
        else if (number === 8) {
            credits = document.getElementById("credits8").value;
        }
        else if (number === 9) {
            credits = document.getElementById("credits9").value;
        }
        else if (number === 10) {
            credits = document.getElementById("credits10").value;
        }
        
        return 4.0 * credits;
    }
    else if (id.value === 'A-'){
        if (number === 1){
            credits = document.getElementById("credits1").value;
        }
        else if (number === 2) {
            credits = document.getElementById("credits2").value;
        }
        else if (number === 3) {
            credits = document.getElementById("credits3").value;
        }
        else if (number === 4) {
            credits = document.getElementById("credits4").value;
        }
        else if (number === 5) {
            credits = document.getElementById("credits5").value;
        }
        else if (number === 6) {
            credits = document.getElementById("credits6").value;
        }
        else if (number === 7) {
            credits = document.getElementById("credits7").value;
        }
        else if (number === 8) {
            credits = document.getElementById("credits8").value;
        }
        else if (number === 9) {
            credits = document.getElementById("credits9").value;
        }
        else if (number === 10) {
            credits = document.getElementById("credits10").value;
        }
        return 3.7 * credits;
    }
    else if (id.value === 'B+'){
        if (number === 1){
            credits = document.getElementById("credits1").value;
        }
        else if (number === 2) {
            credits = document.getElementById("credits2").value;
        }
        else if (number === 3) {
            credits = document.getElementById("credits3").value;
        }
        else if (number === 4) {
            credits = document.getElementById("credits4").value;
        }
        else if (number === 5) {
            credits = document.getElementById("credits5").value;
        }
        else if (number === 6) {
            credits = document.getElementById("credits6").value;
        }
        else if (number === 7) {
            credits = document.getElementById("credits7").value;
        }
        else if (number === 8) {
            credits = document.getElementById("credits8").value;
        }
        else if (number === 9) {
            credits = document.getElementById("credits9").value;
        }
        else if (number === 10) {
            credits = document.getElementById("credits10").value;
        }
        return 3.3 * credits;
    }
    else if (id.value === 'B'){
        if (number === 1){
            credits = document.getElementById("credits1").value;
        }
        else if (number === 2) {
            credits = document.getElementById("credits2").value;
        }
        else if (number === 3) {
            credits = document.getElementById("credits3").value;
        }
        else if (number === 4) {
            credits = document.getElementById("credits4").value;
        }
        else if (number === 5) {
            credits = document.getElementById("credits5").value;
        }
        else if (number === 6) {
            credits = document.getElementById("credits6").value;
        }
        else if (number === 7) {
            credits = document.getElementById("credits7").value;
        }
        else if (number === 8) {
            credits = document.getElementById("credits8").value;
        }
        else if (number === 9) {
            credits = document.getElementById("credits9").value;
        }
        else if (number === 10) {
            credits = document.getElementById("credits10").value;
        }
        return 3.0 * credits;
    }
    else if (id.value === 'B-'){
        if (number === 1){
            credits = document.getElementById("credits1").value;
        }
        else if (number === 2) {
            credits = document.getElementById("credits2").value;
        }
        else if (number === 3) {
            credits = document.getElementById("credits3").value;
        }
        else if (number === 4) {
            credits = document.getElementById("credits4").value;
        }
        else if (number === 5) {
            credits = document.getElementById("credits5").value;
        }
        else if (number === 6) {
            credits = document.getElementById("credits6").value;
        }
        else if (number === 7) {
            credits = document.getElementById("credits7").value;
        }
        else if (number === 8) {
            credits = document.getElementById("credits8").value;
        }
        else if (number === 9) {
            credits = document.getElementById("credits9").value;
        }
        else if (number === 10) {
            credits = document.getElementById("credits10").value;
        }
        return 2.7 * credits;
    }
    else if (id.value === 'C+'){
        if (number === 1){
            credits = document.getElementById("credits1").value;
        }
        else if (number === 2) {
            credits = document.getElementById("credits2").value;
        }
        else if (number === 3) {
            credits = document.getElementById("credits3").value;
        }
        else if (number === 4) {
            credits = document.getElementById("credits4").value;
        }
        else if (number === 5) {
            credits = document.getElementById("credits5").value;
        }
        else if (number === 6) {
            credits = document.getElementById("credits6").value;
        }
        else if (number === 7) {
            credits = document.getElementById("credits7").value;
        }
        else if (number === 8) {
            credits = document.getElementById("credits8").value;
        }
        else if (number === 9) {
            credits = document.getElementById("credits9").value;
        }
        else if (number === 10) {
            credits = document.getElementById("credits10").value;
        }
        return 2.3 * credits;
    }
    else if (id.value === 'C'){
        if (number === 1){
            credits = document.getElementById("credits1").value;
        }
        else if (number === 2) {
            credits = document.getElementById("credits2").value;
        }
        else if (number === 3) {
            credits = document.getElementById("credits3").value;
        }
        else if (number === 4) {
            credits = document.getElementById("credits4").value;
        }
        else if (number === 5) {
            credits = document.getElementById("credits5").value;
        }
        else if (number === 6) {
            credits = document.getElementById("credits6").value;
        }
        else if (number === 7) {
            credits = document.getElementById("credits7").value;
        }
        else if (number === 8) {
            credits = document.getElementById("credits8").value;
        }
        else if (number === 9) {
            credits = document.getElementById("credits9").value;
        }
        else if (number === 10) {
            credits = document.getElementById("credits10").value;
        }
        return 2.0 * credits;
    }
    else if (id.value === 'C-'){
        if (number === 1){
            credits = document.getElementById("credits1").value;
        }
        else if (number === 2) {
            credits = document.getElementById("credits2").value;
        }
        else if (number === 3) {
            credits = document.getElementById("credits3").value;
        }
        else if (number === 4) {
            credits = document.getElementById("credits4").value;
        }
        else if (number === 5) {
            credits = document.getElementById("credits5").value;
        }
        else if (number === 6) {
            credits = document.getElementById("credits6").value;
        }
        else if (number === 7) {
            credits = document.getElementById("credits7").value;
        }
        else if (number === 8) {
            credits = document.getElementById("credits8").value;
        }
        else if (number === 9) {
            credits = document.getElementById("credits9").value;
        }
        else if (number === 10) {
            credits = document.getElementById("credits10").value;
        }
        return 1.7 * credits;
    }
    else if (id.value === 'D+'){
        if (number === 1){
            credits = document.getElementById("credits1").value;
        }
        else if (number === 2) {
            credits = document.getElementById("credits2").value;
        }
        else if (number === 3) {
            credits = document.getElementById("credits3").value;
        }
        else if (number === 4) {
            credits = document.getElementById("credits4").value;
        }
        else if (number === 5) {
            credits = document.getElementById("credits5").value;
        }
        else if (number === 6) {
            credits = document.getElementById("credits6").value;
        }
        else if (number === 7) {
            credits = document.getElementById("credits7").value;
        }
        else if (number === 8) {
            credits = document.getElementById("credits8").value;
        }
        else if (number === 9) {
            credits = document.getElementById("credits9").value;
        }
        else if (number === 10) {
            credits = document.getElementById("credits10").value;
        }
        return 1.3 * credits;
    }
    else if (id.value === 'D'){
        if (number === 1){
            credits = document.getElementById("credits1").value;
        }
        else if (number === 2) {
            credits = document.getElementById("credits2").value;
        }
        else if (number === 3) {
            credits = document.getElementById("credits3").value;
        }
        else if (number === 4) {
            credits = document.getElementById("credits4").value;
        }
        else if (number === 5) {
            credits = document.getElementById("credits5").value;
        }
        else if (number === 6) {
            credits = document.getElementById("credits6").value;
        }
        else if (number === 7) {
            credits = document.getElementById("credits7").value;
        }
        else if (number === 8) {
            credits = document.getElementById("credits8").value;
        }
        else if (number === 9) {
            credits = document.getElementById("credits9").value;
        }
        else if (number === 10) {
            credits = document.getElementById("credits10").value;
        }
        return 1.0 * credits;
    }
    else if (id.value === 'D-'){
        if (number === 1){
            credits = document.getElementById("credits1").value;
        }
        else if (number === 2) {
            credits = document.getElementById("credits2").value;
        }
        else if (number === 3) {
            credits = document.getElementById("credits3").value;
        }
        else if (number === 4) {
            credits = document.getElementById("credits4").value;
        }
        else if (number === 5) {
            credits = document.getElementById("credits5").value;
        }
        else if (number === 6) {
            credits = document.getElementById("credits6").value;
        }
        else if (number === 7) {
            credits = document.getElementById("credits7").value;
        }
        else if (number === 8) {
            credits = document.getElementById("credits8").value;
        }
        else if (number === 9) {
            credits = document.getElementById("credits9").value;
        }
        else if (number === 10) {
            credits = document.getElementById("credits10").value;
        }
        return 0.7 * credits;
    }
    else if (id.value === 'F'){
        if (number === 1){
            credits = document.getElementById("credits1").value;
        }
        else if (number === 2) {
            credits = document.getElementById("credits2").value;
        }
        else if (number === 3) {
            credits = document.getElementById("credits3").value;
        }
        else if (number === 4) {
            credits = document.getElementById("credits4").value;
        }
        else if (number === 5) {
            credits = document.getElementById("credits5").value;
        }
        else if (number === 6) {
            credits = document.getElementById("credits6").value;
        }
        else if (number === 7) {
            credits = document.getElementById("credits7").value;
        }
        else if (number === 8) {
            credits = document.getElementById("credits8").value;
        }
        else if (number === 9) {
            credits = document.getElementById("credits9").value;
        }
        else if (number === 10) {
            credits = document.getElementById("credits10").value;
        }
        return 0.0 * credits;
    }
    else {
        return 0.0;
    }

}
