import { collection, onSnapshot } from "firebase/firestore"
import type Blog from "../types/Blog"

export default function useBlogResource(collectionName:string){
    
    const blogs = reactive<Blog[]>([])
    const nuxtApp:any = useNuxtApp()

    const fetchData = ()=>{
        try {
        onSnapshot(collection(nuxtApp.$db, collectionName), (querySnapshot) => {
             // Clear the existing data in jobsData
             querySnapshot.forEach((doc) => {
                blogs.push({
              id:doc.id,
              title:doc.data().title,
              subject:doc.data().subject,
              coverImage:doc.data().coverImage,
              body:doc.data().body
               });
             });
           });
     
     
        // quering firestore
     
     } catch(error){
         console.error('Error fetching data from Firestore:', error)
     }
     
     
      } //fetchData function
     

      fetchData()

      
 return {
    
    blogs
   }
}


