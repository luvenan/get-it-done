import { ref } from "vue";

//firebase imports
import { auth } from '../firebase/config'
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";

const error = ref(null)
const isPending = ref(false)

const signup = async (email, password, displayName) => {
    error.value = null
    isPending.value = true

    try {
        const res = await createUserWithEmailAndPassword(auth, email, password)
        if (!res) {
            throw new Error('Could not complete sign up')
        }

        //This updates the profile so that the user has an displayName
        updateProfile(res.user, {
            displayName: displayName
        })

        error.value = null
        isPending.value = false
    }
    catch (err) {
        console.log(err.message)
        error.value = err.message
        isPending.value = false
    }
}

const useSignup = () => {
    return { error, isPending, signup }
}

export default useSignup