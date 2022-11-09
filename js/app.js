let myCity = {
    name: `Edmonton`,
    population: 981280,
    isCapital: true,
};

// the DOT notation replaces the [``] with just .
// isCapital is a true statement already so don't need == true
if (myCity.isCapital){
    console.log(`City name: ${myCity[`name`]} Population: ${myCity.population}`);
} else {
    console.log(`Not important enough`);
}

// Adding new OBJECT within an ARRAY within an OBJECT
myCity.communities = [
    {
        name: `Rosslyn`,
        population: 50,
    }
]

// Adding new OBJECT within an ARRAY within an OBJECT using PUSH
myCity.communities.push(
        {
        name: `Griesbach`,
        population: 150,
        }
)

myCity.communities.push(
        {
        name: `Castle Downs`,
        population: 100,
        }
);

// PUSH the normal way without making an OBJECT
myCity.communities.push(`Castle Downs`);
myCity.communities.push(`Wellington`);
myCity.communities.push(`Londonderry`);

console.log(myCity.communities);

// i is a standard name for an index counter
    // putting the i next to COMMUNITIES it makes the communities print out one by one 
let i = 0;
console.log(`Large Communities`);
while(i < myCity.communities.length){
    if (myCity.communities[i].population >= 100){
        console.log(myCity.communities[i]);
    }
    i++;
}



// OFF TOPIC FROM WARMUP QUESTION EXAMPLES
let person = {
    fname: `Siobhan`,
    lname: `Bonardi`,
    pet: {
        name: `Bean`,
    }
}
// EXAMPLE of nested object variables and how to access them, just connect the pieces with the DOT notation
console.log(person.pet.name);

// YOU CAN'T USE DOT NOTATION WHEN YOU ARE TRYING TO USE A VARIABLE'S VALUE AS THE VALUE YOU'RE TRYING TO RETRIEVE
let query = `fname`;
// log(person.query) would not work because it would look for "query" under person Object (Above)
console.log(person[query]);
