// import React from 'react'; /* Create New item with a form */
// function AddTaskForm(props) {
//     const object2Edit = props.object2Edit;
//     const formLabel = props.formLabel;
//
//     function saveButtonHandler(anobject) {
//         if (!anobject.taskID) anobject.taskID = Math.random() * 10;
//         document.getElementById('formEditAndSave').reset();
//         props.addTask(anobject);
//     }
//
//     return (<>
//         <form id="formEditAndSave">
//             <tr>
//                 <td></td>
//                 <td><h3> {formLabel} </h3></td>
//             </tr>
//             <tr>
//                 <td> Title:</td>
//                 <td><input defaultValue={object2Edit.taskTitle} maxLength="26"
//                            onChange={(e) => object2Edit.taskTitle = e.target.value}/></td>
//             </tr>
//             <tr>
//                 <td> Descr-n:</td>
//                 <td><input defaultValue={object2Edit.taskDescription}
//                            onChange={(e) => object2Edit.taskDescription = e.target.value}/></td>