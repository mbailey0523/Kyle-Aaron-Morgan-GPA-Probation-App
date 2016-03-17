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
function calcSemesterGPA()
{
    // for 3 credit hours
    // get input
    switch(getInput()) {
        case 0:
            if ((char = "A") OR (char = "a")) {
                input = 12.0;
            }
            break;
        case 1:
            if ((char = "A-") OR (char = "a-")) {
                input = 11.1;
            }
            break;
        case 2:
            if ((char = "B+") OR (char = "b+")) {
                input = 9.9;
            }
            break;
        case 3:
            if ((char = "B") OR (char = "b")) {
                input = 9.0;
            }
            break;
        case 4:
            if ((char = "B-") OR (char = "b-")) {
                input = 8.1;
            }
            break;
        case 5:
            if ((char = "C+") OR (char = "c+")) {
                input = 6.9;
            }
            break;
        case 6:
            if ((char = "C") OR (char = "c")) {
                input = 6.0;
            }
            break;
        case 7:
            if ((char = "C-") OR (char = "c-")) {
                input = 5.1;
            }
            break;
        case 8:
            if ((char = "D+") OR (char = "d+")) {
                input = 3.9;
            }
            break;
        case 9:
            if ((char = "D") OR (char = "d")) {
                input = 3.0;
            }
            break;
        case 10:
            if ((char = "F") OR (char = "f")) {
                input = 0.0;
            }
            break;
        default:
            // alert to enter a letter grade
            break;
    }
    // points/credits = GPA;
    // call calcNeededGPA();
}
