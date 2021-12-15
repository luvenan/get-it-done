import { db } from '../firebase/config'
import { addDoc, collection } from 'firebase/firestore'

const addTask = async (task, targetCol) => {
    const colRef = collection (db, targetCol)

    
    if(task.collection === 'ToDo' && targetCol === 'Standby') {
        await addDoc(colRef, {
            title: task.title,
            collection: 'Standby',
            userUid: task.userUid
        })

    } else if (task.collection === 'Standby' && targetCol === 'ToDo') {
        await addDoc(colRef, {
            title: task.title,
            collection: 'ToDo',
            userUid: task.userUid
        })
    } else {
        await addDoc(colRef, {
            title: task.title,
            collection: task.collection,
            userUid: task.userUid
        })
    }
}

export default addTask