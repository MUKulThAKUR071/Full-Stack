
const div=document.querySelector('div');

function AddTask()
{
    const input=document.querySelector('#task');

    const li=document.createElement('li');

    

    li.innerHTML=input.value;

    div.appendChild(li);
    
    const deleteBtn =document.createElement('button');

    deleteBtn.innerHTML='Delete';

    li.appendChild(deleteBtn);

    deleteBtn.addEventListener('click',()=>{
        li.remove();
    })
    
    const edit=document.createElement('button');

    edit.innerHTML='Edit';

    li.appendChild(edit);

    edit.addEventListener('click',()=>{

       li.innerHTML='<input type="text" placeholder="enter the new task" id="edited"></input><button id="save">Save</button>'
       const save=document.querySelector("#save");
       const editedInput=document.querySelector('#edited');
       save.addEventListener("click",()=>{
        li.innerHTML=editedInput.value;
        li.appendChild(deleteBtn);
        li.appendChild(edit);
       })

          
    })

}

function deleteAll()
{
    div.remove();
}
