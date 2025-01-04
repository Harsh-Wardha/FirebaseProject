import {addDoc, app, collection,db,getDocs,updateDoc,doc,deleteDoc } from "./firebase.js"

// WRITE DATA
const addDataHandler = async()=>{
    try {
        const add = await addDoc(collection(db,"user"),{
            firstName : "Harsh",
            lastName : "Wardhan",
            age : 21
        })
        console.log("Data Fetching",add);
    } catch (error) {
        console.log("Error",error.code)
    }
}

//READ DATA
const getDataHandler = async ()=>{
    try {
        const querySnapshot = await getDocs(collection(db,"user"));
        querySnapshot.forEach((doc)=>{
            // console.log(`${doc.id} => ${doc.data()}`);
            console.log("Get Data",doc.data())
        })
    } catch (error) {
        console.log("Error",error.code);
           
    }
}
// UPDATE DATA
const updateDataHandler = async()=>{
   try {
    await updateDoc(doc(db,"user","fMmwueE3vf5BdT7njMR7"),{
        firstName : "Kamlesh"
    })
    console.log("Updated");
   } 
   catch (error) {
    console.log(error)
    
   }
    
}
//DELETE DATA
const deleteDataHandler = async()=>{
   try {
    await deleteDoc(doc(db,"user","fMmwueE3vf5BdT7njMR7"))
    
    console.log("DELETE DATA");
   }
   
    catch (error) {
    console.log("Error",error.code)
   }
}



//Event Handler
window.addDataHandler = addDataHandler
window.getDataHandler = getDataHandler
window.updateDataHandler = updateDataHandler
window.deleteDataHandler = deleteDataHandler