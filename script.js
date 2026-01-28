// ============================
// Question 1: Print numbers 1 to 10
// ============================

function printNumbers() {
    // Loop from 1 to 10
    for (let i = 1; i <= 10; i++) {
        console.log(i); // Print current number
    }
}
printNumbers();





// ============================
// Question 2: Multiplication table of a number
// ============================

function printTable() {
    // Take number input from user
    let num = parseInt(prompt("Enter a number for multiplication table:"));

    // Loop from 1 to 10
    for (let i = 1; i <= 10; i++) {
        console.log(num + " x " + i + " = " + (num * i)); // Print multiplication line
    }
}
printTable();





// ============================
// Question 3: Check prime number
// ============================

function checkPrime() {
    // Take number input from user
    let num = parseInt(prompt("Enter a number to check prime:"));
    let isPrime = true; // Assume number is prime initially

    // Numbers less than or equal to 1 are not prime
    if (num <= 1) {
        isPrime = false;
    } else {
        // Loop to check divisibility
        for (let i = 2; i <= num - 1; i++) {
            if (num % i === 0) {
                isPrime = false;
                break; // Stop loop
            }
        }
    }

    // Display result
    if (isPrime) {
        console.log(num + " is a Prime Number");
    } else {
        console.log(num + " is NOT a Prime Number");
    }
}
checkPrime();





// ============================
// Question 4: Function to return square of a number
// ============================

function square(num) {
    return num * num;
}
console.log("Square is:", square(6)); // Calling function and printing result





// ============================
// Question 5: Function for sum, subtraction, multiplication
// ============================

function calculate(a, b) {
    console.log("Sum:", a + b);             // Sum of two numbers
    console.log("Subtraction:", a - b);     // Subtract second from first
    console.log("Multiplication:", a * b);  // Multiply numbers
}
calculate(20, 4); // Calling function with sample numbers





// ============================
// Question 6: Take five numbers, calculate total and average
// ============================

function totalAndAverage() {
    let total = 0; // Initialize total

    // Loop to take 5 numbers from user
    for (let i = 1; i <= 5; i++) {
        let num = parseInt(prompt("Enter number: " + i ));
        total += num; // Add to total
    }

    let average = total / 5; // Calculate average

    // Display total and average
    console.log("Total:", total);
    console.log("Average:", average);
}
totalAndAverage();





// ============================
// Question 7: Student grading system
// ============================

function gradingSystem() {
    let marks = parseInt(prompt("Enter student marks:")); // Take marks as input
    let grade;

    // Check grade according to marks
    if (marks >= 80) {
        grade = "A";
    } else if (marks >= 60) {
        grade = "B";
    } else if (marks >= 40) {
        grade = "C";
    } else {
        grade = "Fail";
    }

    console.log("Grade:", grade); // Display grade
}
gradingSystem();
