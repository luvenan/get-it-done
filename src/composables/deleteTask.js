import { db } from '../firebase/config'
import { doc, deleteDoc } from 'firebase/firestore'


const deleteTask = (task, col) => {
    const docRef = doc(db, col, task.id)

    deleteDoc(docRef)
}

export default deleteTask