// // void main() {

// //     findVolume(10, 5, 20);
// // }

// // int findVolume(int? length, int? breadth, int? height) {

// //     print("Length is $length");
// //     print("Breadth is $breadth");
// //     print("Height is $height");

// //     print("Volume is ${length * breadth * height}");
// // }

// // Exception Handling

// import 'dart:html';
// import 'dart:io';

// void main() {
//   // print("CASE 1");
//   // // CASE 1: When you know the exception to be thrown, use ON Clause

//   // try {
//   //     int result = 12 ~/ 0;
//   //     print("The result is $result");
//   // } on IntegerDivisionByZeroException {
//   //     print("Cannot be divided by Zero");
//   // }

//   // print(""); print("CASE 2");
//   // // CASE 2: When you do not know the exception use Catch Clause

//   //  try {
//   //     int result = 12 ~/ 0;
//   //     print("The result is $result");
//   // } catch(e) {
//   //     print("The exception thrown is $e");
//   // }

//   //  print(""); print("CASE 3");
//   // // CASE 3: Using STACK TRACE to know the events occurred before Exception was thrown

//   //  try {
//   //     int result = 12 ~/ 0;
//   //     print("The result is $result");
//   // } catch(e, s) {
//   //     print("The exception thrown is $e");
//   //     print("STACK TRACE \n $s");
//   // }

//   //  print(""); print("CASE 4");
//   // // CASE 4: Whether there is an Exception or not, FINALLY Clause is always Executed

//   //  try {
//   //     int result = 12 ~/ 3;
//   //     print("The result is $result");
//   // } catch(e) {
//   //     print("The exception thrown is $e");
//   // } finally {
//   //     print("This is FINALLY Clause and is always executed.");
//   // }

//   print("");
//   print("CASE 5");
//   // CASE 4: Whether there is an Exception or not, FINALLY Clause is always Executed
//   try {
//     depositMoney(int.parse(stdin.readLineSync()!));
//   } on DepositException catch (e) {
//     print(e.errorMessage());
//   }
// }

// class DepositException implements Exception {
//   String? errorMessage() {
//     print('you cannot enter a number less than 0');
//     return null;
//   }
// }

// class AccountLimitException implements Exception {
//   String? errorMessage() {
//     print('Account Limit has been reached');
//     return null;
//   }
// }

// void getElement() {
//   var data = querySelector('#myId') as ParagraphElement;
//   data.text = 'Jesse dan';
// }



// void depositMoney(int amount) {
//   if (amount < 0) {
//     throw new DepositException();
//   }
// }
import 'dart:html';

function main() {
  querySelector('#myId').text = 'Wake up, sleepy head!';
}