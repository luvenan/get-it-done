import { db } from '../firebase/config'
import { addDoc, collection } from 'firebase/firestore'

const addTask = async (task, targetCol) => {
    const colRef = collection (db, targetCol)

    await addDoc(colRef, {
        title: task.title
    })
}

export default addTask