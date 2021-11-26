function printPerson(p)
{
  console.log("Name: "+p.FirstName);
  console.log("LastName: "+p['LastName']);
  console.log("OfficeAddress: "+p.OfficeAddress);
}

//person1'
const person1 = {
  FirstName: "Ayushi",
  LastName: "Gupta",
  OfficeAddress: "Varanasi, Uttar Pradesh",
};
printPerson(person1);


//person2
const person2=new Object(person1);
person2.FirstName="Adarsh";
person2.LastName="Gupta";
person2.OfficeAddress="Allahabad, UP";

printPerson(person2);

//person3
const person3 = {
  FirstName: "Jeshika",
  LastName: "Singh",
  OfficeAddress: "Sector-12, noida, Uttar Pradesh",
};
printPerson(person3);
