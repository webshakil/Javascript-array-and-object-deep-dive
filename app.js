function uuid() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, 
    function(c) {
      var r = Math.random() * 16 | 0, 
      v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  }
  var userId=uuid();

  //console.log(userId);

  const students=[
    {
      id: '18c3acd7-e568-4675-9155-1f5b4fea2fb0',
      name: 'John',
      email: 'john@gmail.com'
    },
    {
      id: 'ba5fc8be-daa6-4cda-8262-796268e99374',
      name: 'shakil',
      emil: 'jane@gmail'
    },
    {
      id: 'dc2a126f-d5c3-44a7-a081-93c3bca4bf8f',
      name: 'Bob',
      email: 'bob@gmail.com'
    }
  ];
// console.log(students);
// console.log(students[0].name);
// console.log(students[1].name);
// console.log(students[2].email);

students.unshift({
    id: uuid(),
    name: 'Labib',
    email:'labib@gmail.com'
})
// console.log(students);


const idToupdate ='7432c824-431e-47fd-8ecb-7d89f235e519nod';
const updatedData={  
    name: 'saida afrin nepu',
    email:'sadia@gmail.com',
};
const updatedIndex = students.findIndex((item)=>item.id===idToupdate);
// console.log(updatedIndex);

// for (i=0; i<=10; i++){
//     console.log(i);
// }
// for(let i in students){
//     console.log(students[i]);
// }

for (let shakil of students){ 
    console.log(shakil.email);
}