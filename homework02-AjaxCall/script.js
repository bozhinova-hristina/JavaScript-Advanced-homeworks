console.log('running');

// Exercise 2
// Create a button When the button is clicked, call the StarWars api for the first person.
// Print the person name in an h1 tag.
// Print the person stats in a table:

// Height
// Weight
// Eye color
// Hair color
// URL: https://swapi.dev/api/people/1
// NOTE: JQuery will autmatically parse this call (js will not).

console.log('*******AJAX CALL******')

let showPersonBtn = document.getElementById("callPerson");
let container = document.querySelector("#containerInfo");

function tableInfo(personInfo) {
    let result = `
    <table>
        <thead>
            <tr> 
                <th>Height</th>
                <th>Weight</th>
                <th>Eye color</th>
                <th>Hair color</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>${personInfo.height}cm</td>
                <td>${personInfo.mass}kg</td>
                <td>${personInfo.eye_color}</td>
                <td>${personInfo.hair_color}</td>
            </tr>
        </tbody>
    </table>`;
    return result;
}

callPerson.addEventListener("click", () => {
    container.innerHTML = "";

    $.ajax({
        url: "https://swapi.dev/api/people/1",
        success: function (response) {
            console.log(response)
            container.innerHTML = `<h1>Star Wars character : ${response.name}</h1>`;
            container.innerHTML += tableInfo(response);
        },
        error: function (response) {
            console.log('The request failed!');
            console.log(response.responseText);
        }
    });

})
