import { ref } from "vue";

//firebase imports
import { auth } from '../firebase/config'
import { createUserWithEmailAndPassword } from "firebase/auth";

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

        //This doesn't work on firebase 9, look for what does
        // await res.user.updateProfile({ displayName })

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