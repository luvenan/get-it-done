import { ref } from "vue";

//firebase imports
import { auth } from '../firebase/config'
import { onAuthStateChanged } from "firebase/auth";

//ref for the user
const user = ref(auth.currentUser)

//auth changes - when auth state changes, updates ref. _user keeps track of current user
onAuthStateChanged(auth, (_user) => {
    console.log('User state changed. Current user is: ', _user) 
    user.value = _user
})

const getUser = () => {
    return { user }
}

export default getUser