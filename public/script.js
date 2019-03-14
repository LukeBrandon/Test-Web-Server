function otherFunction() {
    console.log(100);
}
async function createPerson() {
    person = { height: "", weight: "" }
    person.height = document.getElementById('personHeight').value;
    person.weight = document.getElementById('personWeight').value;
    url = `${location.origin}/create/person`;
    console.log(person);
    const rawResponse = await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            'Accept': 'application/json'
        },
        body: JSON.stringify(person),
    });
    const response = await rawResponse.json();
    console.log("The response from the server is:  ");
    console.log(response);
}