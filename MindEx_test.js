// Question 1
    // Input: str_input
    // Output: print the reverse letters of Input
    

    let userInput_1 = prompt("Enter your words");
    let stringReverse = '';
    for (let value of userInput_1) {
        stringReverse = value + stringReverse;
    }
    console.log(stringReverse);

// Question 2:
    // input: str
    // Output: UpperCase First letter

    const wordsString = prompt("Enter Your Sentence");
    const byWords = wordsString.split(" ");

    for (let i = 0; i < byWords.length; i++) {
        byWords[i] = byWords[i][0].toUpperCase() + byWords[i].substr(1);
    }
    var FirstLetterUpper = byWords.join(" ");
    console.log(FirstLetterUpper);


// Question 3:
    // Input: An array with duplicate values/letters
    // Output: An array after eliminating duplicate values/letters
    const array = ["Apple", "Banana", "Apple", "Cucumbers", "Banana", "Dragon Fruit", "Dragon Fruit", "Cucumbers", "EggFruit"
                    ,"Farkleberry", "Grapes", "Farkleberry"];
    
    let uniqueArray = [... new Set(array)];
    console.log(uniqueArray);



// Question 4:
    // Create data for 3 MindEx employers 
    const MindExEmployees = [
        {
            name: "Hieu",
            age: 23,
            salary: '1500 USD',
            position: 'Teacher',
        },

        {
            name: 'Dang',
            age: 30,
            salary: '2300 USD',
            position: 'Manager',
        },

        {
            name: 'Duy',
            age: 24,
            salary: '5000 USD',
            position: 'Supervisor',
        };

        let ManageDataOption = prompt("Which option you choose (Read/Create/Update/Delete");
        const option = ManageDataOption.toLowerCase();
        while (option != undefined) {
            if (option == 'read') {
                selected_property = prompt("Which information about MinEx employers(name/age/salary/position");
                property_value = MindExEmployees['selected_property'];
                console.log(property_value);
            }
            if (option == 'update') {
                var update = prompt("Which data you want to update");

            }

        }

// Question 5
    // a. Write a script to check date time is valid
    let inputDay = Number(prompt("Enter your selected day"));
    let inputMonth = Number(prompt("Enter your selected month"));
    let inputYear = Number(prompt("Enter your selected year"));

    if (inputDay < 1 || inputDay > 31) {
        alert("Invalid value for day: " + inputDay);
    }

    if (inputMonth < 1 || )
        

    }

   


   

    



