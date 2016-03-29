/*
calcSemesterGPA.js
By: Kyle, Morgan, Aaron
This page runs the semester GPA calculations from letter grades to GPA.

Licensed to the Apache Software Foundation (ASF) under one
or more contributor license agreements.  See the NOTICE file
distributed with this work for additional information
regarding copyright ownership.  The ASF licenses this file
to you under the Apache License, Version 2.0 (the
"License"); you may not use this file except in compliance
with the License.  You may obtain a copy of the License at

  http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing,
software distributed under the License is distributed on an
"AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, either express or implied.  See the License for the
specific language governing permissions and limitations
under the License.
*/
// Takes letter grades of classes and outputs the GPA calculated the letter grades

var totalPoints = 0;
var totalCredits = 0;
var points;
var input;
var classgrade1 = parseFloat(document.getElementById('classGrade1').value);
var classgrade2 = parseFloat(document.getElementById('classGrade2').value);
//var classgrade3 = document.getElementById('classGrade3');
//var classgrade4 = document.getElementById('classGrade4');
//var classgrade5 = document.getElementById('classGrade5');
//var classgrade6 = document.getElementById('classGrade6');

function switchToNumber(document.getElementById())
{
    // for 3 credit hours
    input = document.getElementById();
    // get input
    switch(input) {
        case 0:
            if (input == "A") {
                points = 12.0;
                outputDiv1.innerHTML = 'Points for an A are: ' + points + '.';
            }
            break;
        case 1:
            if (input == "A-") {
                points = 11.1;
                outputDiv1.innerHTML = 'Points for an A- are: ' + points + '.';
            }
            break;
        case 2:
            if (input == "B+") {
                points = 9.9;
                outputDiv1.innerHTML = 'Points for an B+ are: ' + points + '.';
            }
            break;
        case 3:
            if (input == "B") {
                points = 9.0;
                outputDiv1.innerHTML = 'Points for an B are: ' + points + '.';
            }
            break;
        case 4:
            if (input == "B-") {
                points = 8.1;
                outputDiv1.innerHTML = 'Points for an B- are: ' + points + '.';
            }
            break;
        case 5:
            if (input == "C+") {
                points = 6.9;
                outputDiv1.innerHTML = 'Points for an C+ are: ' + points + '.';
            }
            break;
        case 6:
            if (input == "C") {
                points = 6.0;
                outputDiv1.innerHTML = 'Points for an C are: ' + points + '.';
            }
            break;
        case 7:
            if (input == "C-") {
                points = 5.1;
                outputDiv1.innerHTML = 'Points for an C- are: ' + points + '.';
            }
            break;
        case 8:
            if (input == "D+") {
                points = 3.9;
                outputDiv1.innerHTML = 'Points for an D+ are: ' + points + '.';
            }
            break;
        case 9:
            if (input == "D") {
                points = 3.0;
                outputDiv1.innerHTML = 'Points for an D are: ' + points + '.';
            }
            break;
        case 10:
            if (input == "F") {
                points = 0.0;
                outputDiv1.innerHTML = 'Points for an F are: ' + points + '.';
            }
            break;
        default:
            outputDiv1.innerHTML = 'Could not calculate. Please enter valid letter grades.';
    }
}

//function calcPoints() {
    switchToNumber(classgrade1);
    switchToNumber(classgrade2);
    totalPoints = totalPoints + points;
    totalCredits = totalCredits + 3;
}//

//function calcSemesterGPA() {
//    calcPoints(classgrade1);
//    calcPoints(classgrade2);
    //calcPoints(classgrade3);
    //calcPoints(classgrade4);
    //calcPoints(classgrade5);
    //calcPoints(classgrade6);
    var semesterGPA = totalPoints/totalCredits;
    outputDiv1.innerHTML = 'Your semester GPA is ' + semesterGPA + '.';
}
