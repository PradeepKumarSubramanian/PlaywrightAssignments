/*
1. Create a function named `calculateGrade` that takes a student's score as a parameter.

2. Use `switch` statement inside the function - 
   - Use a `switch` statement with the condition `true`.
   - Use `case` statements to check different score ranges and return the corresponding grade.

3. Declare and initialize the variable

4. Call the function and print the result


*/

function calculateGrade(studentScore)
{
   switch (true) {
      case studentScore >= 90:
        return "A";
      case studentScore >= 80:
        return "B";
      case studentScore >= 70:
        return "C";
      case studentScore >= 60:
        return "D";
      default:
        return "F";
   }
}

const studentScore = 85;
const studentGrade = calculateGrade(studentScore);
console.log(`The student's grade is: ${studentGrade}`);