[{
    name: "Ruins Greatsword", 
    description: "Originally rubble from a ruin which fell from the sky, this surviving fragment was honed into a weapon.",
    attack: 124
},
{
    name: "Eclipse Shotel", 
    description: "Storied sword and treasure of Castle Sol that depicts an eclipsed sun drained of color.",
    attack: 77, 
},
{
    name: "Grafted Blade Greatsword", 
    description: "Storied sword and treasure of Castle Sol that depicts an eclipsed sun drained of color.",
    attack: 157, 
},]


const array1 = [77, 124, 157,];

const map1 = array1.map(x => x * 4);

console.log(map1);


const weapons = ['Grafted Blade Greatsword', 'Eclipse Shotel', 'Ruins Greatsword'];
weapons.sort();
console.log(weapons);


const words = ['Grafted Blade Greatsword', 'Eclipse Shotel', 'Ruins Greatsword',];

const result = words.filter(word => word.length > 200);

console.log(result);

