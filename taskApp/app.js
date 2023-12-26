document.getElementById("taskdate").setAttribute("min",new Date().toISOString().split("T")[0]);
function setTask()
{
    const taskName=document.getElementById('taskinput').value;
    const taskdescription=document.getElementById('taskdescription').value;
    console.log(taskdescription);
    const taskdate=document.getElementById('taskdate').value;
    if(taskName && taskdate)
    {
        const taskList=document.getElementById('taskList');
        const li=document.createElement('li');
        li.innerHTML=`
        <span class='taskName'><strong>Task:</strong><span class="editable-field">${taskName}</span> </span>
        <span class='taskdescription'><strong>Description:</strong><span class="editable-field">${taskdescription}</span> </span>
        <span class='taskDate'><strong>Date:</strong><span class="editable-field">${taskdate}</span> </span>
        <button class="edit-btn" onclick="editTask(this)><h1>pressme</h1></button>
        <button class="delete-btn" onclick="deleteTask(this)>delete</button>
        `
        taskList.append(li);
     document.getElementById('taskinput')="";
     document.getElementById('taskdescription')="";
     document.getElementById('taskdate')="";
    sortTasks();
    }
    else{
        alert("Please fill in the task and date field")
    }

}