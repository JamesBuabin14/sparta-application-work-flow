// Chapter One //
var name = prompt("Hello, enter your name: ");
alert ("hello, " + name);

var choice = prompt("Do you want to apply for Sparta Global?: (1)Yes (2)No");

if (choice == "1") {
  alert("congratulations " + name + " we are very interested in your CV and would like to take you to the next stage of a phone interview! We will phone you next week!");
} else if (choice == "2") {
  alert("Not sure why you would say no...");
  throw "goodbye";
}

// Chapter Two //
var phone_ring = prompt("*ring, ring, ring!!* " + name + " answers the call. Do you tell them?:(1)I just want the money, (2)Tell them your experiences and your passion to work at Sparta (3)Decide to hang up the phone");

if (phone_ring == "2") {
  alert("Congratulations " + name + " you are invited to our sparta day!")
} else if (phone_ring == "1") {
  alert("Unfortunately you did not make it to the next stage :( ")
  throw "try again in the next 3 months";
} else if (phone_ring == "3") {
  alert("Decide to hang up the phone");
  throw "try again in the next 3 months";
}
// Chapter 3 //
var global_day = prompt("You attend the Sparta Global day assessment. Do you decide?:(1)To walk out during the assessment, (2)Take part in the group activities and answer all questions as best as you can (3)Choose to sweet talk the assessment leader");

if (global_day == "1") {
  alert("Bye")
  throw "Bye";
} else if (global_day == "2") {
  alert("You made it to the next stage " + name + " Congratulations!")
} else if (global_day == "3") {
  alert ("Highly inappropriate " + name + " I have a partner... Please leave!");
  throw "Rejected";
}
// Chapter 4 //
var psychometric = prompt("You recieve the psychometric test online and a question asks... What is 1 + 1? Do you: (1)answer 2, (2)not answer the question, (3)answer 3, (4)have a panic attack and closes down the computer");

switch (psychometric == "1") {
  case "1": expression:
    alert("You Passed!");

    case "2":
      alert("You failed");
      break;

      case "3":
        alert("...");
        break;

        case "4":
          alert("You failed");

            break;
  default:
  alert("Great job");

}

//Chapter 5 //
var congrats = prompt("Congratulations " + name + " We would to like to take you onto to our academy!")
