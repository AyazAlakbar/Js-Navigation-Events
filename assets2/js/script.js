const companies=[
    {name:"Company One", category: "Finance", start: 1981, end: 2003},
    {name:"Company Two", category: "Retail", start: 1991, end: 2013},
    {name:"Company Three", category: "Auto", start: 1989, end: 2010},
    {name:"Company Four", category: "Technology", start: 1995, end: 2010},
    {name:"Company Five", category: "Finance", start: 1981, end: 1989},
    {name:"Company Six", category: "Finance", start: 1986, end: 1996},
    {name:"Company Seven", category: "Retail", start: 1981, end: 2003},
    {name:"Company Eight", category: "Technology", start: 2011, end: 2016},
    {name:"Company Nine", category: "Auto", start: 2009, end: 2014},
]

const ages=[33, 58, 25, 46, 15, 29, 5, 18, 22, 36, 17, 34, 66]

// for (let i = 0; i < companies.length; i++) {
//     console.log(companies[i]);
    
// }

// companies.forEach(function(company){
//     console.log(company.name);
// });


// let canDrink=[];
// for (let i = 0; i < ages.length; i++) {
//     if (agees[i]>=21) {
//         canDrink.push(ages[i]);
        
//     }
    
// }

// const canDrink=ages.filter(function(age){
//  if(age>=21){
//     return true;
//  }
// });

const canDrink=ages.filter(age=>age>=21);
console.log(canDrink);
