const express=require('express')
const router =express.Router()
const {getAllTasks,createTask,getTask,updateTask,deleteTask}  =require("./controller/Tasks")
// const {
//     getPeople,
//     createPerson,
//     createPersonPostman,
//     updatePerson,
//     deletePerson,
// }=require("../")
// router.route('/').get(getPeople).post(createPerson);
// router.route('/postman').post(createPersonPostman);
// router.route('/:id').put(updatePerson).delete(deletePerson);
// module.exports=router;


router.route('/').get(getAllTasks).post(createTask)
router.route('/:id').get(getTask).patch(updateTask).delete(deleteTask)


module.exports=router