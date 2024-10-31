
let title = document.getElementById('title');
let description = document.getElementById('description');
let status = document.getElementById('status');
let dueDate = document.getElementById('dueDate');
let priority = document.getElementById('priority');

// pop up form 

let Ajout = document.getElementById('Ajoute');
function closeModal() {
    Ajoute.style.display = 'none';
}

function openAjout() {
  
    Ajoute.style.display = 'flex';
    title.value = '';
    description.value = '';
    status.value = '';
    dueDate.value = '';
    priority.value = '';
    
}

// array
let dataTask 
if(localStorage.Tasks != null){
   dataTask = JSON.parse(localStorage.Tasks); 
}else{
  dataTask = [];
}

//Ajout Task
function getData(){
let newobj = {
  title : title.value,
  description : description.value,
  status : status.value,
  dueDate : dueDate.value,
  priority : priority.value
}
 dataTask.push(newobj);
 localStorage.setItem('Tasks',JSON.stringify(dataTask));
 console.log(dataTask)
 cleardata();
 showdata();
}

// Clear Data

function cleardata(){
 title.value = '';
 description.value = '';
 status.value = '';
 dueDate.value = '';
 priority.value = '';

}

// show data
function showdata(){
  let todo = document.getElementById('todo');
  let doing = document.getElementById('doing');
  let done = document.getElementById('done');

  // Clear existing content
  todo.innerHTML = '';
  doing.innerHTML = '';
  done.innerHTML = '';
   
for(let i = 0 ; i < dataTask.length ; i++){
  //change color priority
  let ChangeColor = dataTask[i].priority == 'P1' ? 
  'bg-red-300 text-red-700 border-red-700' : 
  (dataTask[i].priority == 'P2' ? 
  'bg-yellow-200 text-orange-700 border-yellow-600' : 
  'bg-green-200 text-green-700 border-green-700');

       // Card template
       let cards = `<div class="bg-cardsColor w-j h-5/6 mt-1 rounded-xl border-[1px] shadow-xl border-black" draggable="true">
       <div class="flex items-center justify-around">
           <h3 class="mr-3 text-[18px]">${dataTask[i].title}</h3>
           <i class="cursor-pointer fa-solid fa-ellipsis text-indigo-950 ml-28 text-1xl transition-all duration-[500ms] hover:scale-105"></i>
       </div>
       <div class="mt-1 w-full h-[60px] text-[13px] text-descpcolor text-start ml-1">
           <h6>${dataTask[i].description}</h6>
       </div>
       <div class="mt-[2px] h-7 flex justify-around items-center">
           <h3 class="${ChangeColor} w-10 h-[23px] rounded-2xl text-center border-2 text-[13px] font-medium">
               ${dataTask[i].priority}
           </h3>
           <h3 class="ml-32"><i class="fas fa-clock text-[12px]"></i><span class="ml-2 text-[12px]">${dataTask[i].dueDate}</span></h3>
       </div>
       <button class="bg-red" onclick="deletdata(${i})">Remove</button>
   </div>`;

    switch (dataTask[i].status) {
      case '1':
          todo.innerHTML += cards;
          break;
      case '2':
          doing.innerHTML += cards;
          break;
      case '3':
          done.innerHTML += cards;
          break;
  }
}    
}

// delet tasks
function deletdata(i){
  dataTask.splice(i,1)
 localStorage.Tasks = JSON.stringify(dataTask);
 showdata();
}
showdata();

// //regex for validation data 
//   let titleRegex = /^[a-zA-Z\s]{1,30}$/;
//   let descriptionRegex = /^[\w\s.,-]{1,50}$/; 
//   let dueDateRegex = /^\d{4}-\d{2}-\d{2}$/;
     
//     if (!titleRegex.test(title.value)) {
//         alert("Title can only contain letters, and spaces.");
//         return;
//     }

//     if (!descriptionRegex.test(description.value)) {
//         alert("Description must be between 1 and 50 characters long.");
//         return;
//     }

//     if (!dueDateRegex.test(dueDate.value)) {
//         alert("Due date must be in YYYY-MM-DD format.");
//         return;
//     }
//       //change color priority
//     let ChangeColor = priority.value == 'P1' ? 'bg-red-300 text-red-700  border-red-700' : (priority.value == 'P2' ? 'bg-yellow-200 text-orange-700  border-yellow-600' :'bg-green-200 text-green-700  border-green-700'); 
//       // add task and remplacer les taches (todo-doing-done) 
//     let cards =`
    
    
//     <div class="bg-cardsColor w-j h-5/6 mt-1 rounded-xl border-[1px] shadow-xl border-black" draggable="true" id="mm">
//               <!------- title task ---------->
//               <div class="flex items-center justify-around">
//                 <h3 class="mr-3 text-[18px]">${title.value}</h3>
//                 <i
//                   class=" cursor-pointer fa-solid fa-ellipsis  text-indigo-950 ml-28  text-1xl transition-all duration-[500ms] hover:scale-105"></i>
//               </div>
//               <!----Description-->
//               <div class="mt-1 w-full h-[60px] text-[13px] text-descpcolor text-start ml-1">
//                 <h6>${description.value}</h6>
//               </div>
//               <!----- Periority ----->
//               <div class="mt-[2px] h-7 flex justify-around items-center">
               
//                 <h3
//                 class="${ChangeColor} w-10 h-[23px]  rounded-2xl text-center border-2 text-[13px] font-medium">
//                 ${priority.value}</h3>
//                 <h3 class="ml-32"><i class="fas fa-clock text-[12px]"></i><span class="ml-2 text-[12px]">${dueDate.value}</span>
                
//                 </h3>
  
//               </div>
//               <button class="bg-red" onclick="remove(this)">add</button>
//             </div>
    
    
//     `
//  






// //fonction delet 
// function remove(e){
// document.getElementById("mm").style.di
// }