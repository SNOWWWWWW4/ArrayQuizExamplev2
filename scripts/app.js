//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array  

// import{People} from '.quizdata.jaon';

const People = [
    {
        "name":"Louis Einhorn",
        "height":"70 inches",
        "age":37,
        "Active": false
    },
    {
        "name":"Micheal Baldwin",
        "height":"62 inches",
        "age":64,
        "Active": false
    },
    {
        "name":"John Koch",
        "height":"48 inches",
        "age":14,
        "Active": false
    },
    {
        "name":"Santino Jennings",
        "height":"64 inches",
        "age":18,
        "Active": false
    },
    {
        "name":"Wesley Cortez",
        "height":"72 inches",
        "age":19,
        "Active": false
    },
    {
        "name":"Ellen Wagner",
        "height":"61 inches",
        "age":25,
        "Active": true
    },
    {
        "name":"Dakota Rosario",
        "height":"64 inches",
        "age":34,
        "Active": false
    },
    {
        "name":"Seamus Roy",
        "height":"72 inches",
        "age":53,
        "Active": false
    },
    {
        "name":"Brent Harvey",
        "height":"68 inches",
        "age":87,
        "Active": false
    },
    {
        "name":"Leyla Calderon",
        "height":"70 inches",
        "age":44,
        "Active": false
    },
    {
        "name":"Bria Hammond",
        "height":"67 inches",
        "age":39,
        "Active": false
    },
    {
        "name":"Rhett Cox",
        "height":"67 inches",
        "age":35,
        "Active": false
    },
    {
        "name":"Winston Castro",
        "height":"52 inches",
        "age":16,
        "Active": false
    },
    {
        "name":"Triston Clarke",
        "height":"54 inches",
        "age":15,
        "Active": true
    },
    {
        "name":"Valerie Patterson",
        "height":"55 inches",
        "age":17,
        "Active": false
    },
    {
        "name":"Caroline Watkins",
        "height":"65 inches",
        "age":36,
        "Active": false
    },
    {
        "name":"Jaylene Ibarra",
        "height":"62 inches",
        "age":33,
        "Active": false
    },
    {
        "name":"Gustavo Adkins",
        "height":"63 inches",
        "age":37,
        "Active": false
    },
    {
        "name":"Annabel Park",
        "height":"66 inches",
        "age":27,
        "Active": true
    },
    {
        "name":"Gabriela Bradshaw",
        "height":"69 inches",
        "age":52,
        "Active": false
    },
    {
        "name":"Mia Cantrell",
        "height":"70 inches",
        "age":24,
        "Active": false
    },
    {
        "name":"Augustus Little",
        "height":"58 inches",
        "age":27,
        "Active": false
    },
    {
        "name":"Harold Dougherty",
        "height":"67 inches",
        "age":33,
        "Active": true
    },
    {
        "name":"Cristopher Mclean",
        "height":"70 inches",
        "age":35,
        "Active": false
    },
    {
        "name":"Destiny Jenkins",
        "height":"72 inches",
        "age":26,
        "Active": false
    },
    {
        "name":"Kierra Nicholson",
        "height":"73 inches",
        "age":25,
        "Active": false
    },
    {
        "name":"Chris Stevenson",
        "height":"63 inches",
        "age":22,
        "Active": false
    },
    {
        "name":"Nathalia Choi",
        "height":"66 inches",
        "age":20,
        "Active": false
    },
    {
        "name":"Makaila Hooper",
        "height":"72 inches",
        "age":18,
        "Active": false
    },
    {
        "name":"Graham Kirby",
        "height":"71 inches",
        "age":29,
        "Active": true
    },
    {
        "name":"Harper Padilla",
        "height":"68 inches",
        "age":16,
        "Active": true
    },
    {
        "name":"Jaron Park",
        "height":"52 inches",
        "age":15,
        "Active": false
    },
    {
        "name":"Aditya Mcguire",
        "height":"53 inches",
        "age":17,
        "Active": true
    }
]



// const ApiCall = async () => {
//     const promise = await fetch("../data/quizdata.json");
//     const data = await promise.text();
//     console.log(data);

// }

const peopleOver20 = People.filter((age) =>  19 < age < 30).length;
console.log(peopleOver20);

const peopleActive = People.filter((Active) => Active = true).length;
console.log(peopleActive);

// const shorterThan6 = People.map(height => height.split(" ").).length;
// console. log(shorterThan6);

// const firstOver52Inch = People.find((height) => height.split(" ").)












