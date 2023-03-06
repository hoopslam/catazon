import { initializeApp } from 'firebase/app';
import {
    getAuth,
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider,
} from 'firebase/auth';

import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: 'AIzaSyD9t-hpGB5ooKA1LCLo3mnCdDoNTyVlcJU',
    authDomain: 'catazon-db.firebaseapp.com',
    projectId: 'catazon-db',
    storageBucket: 'catazon-db.appspot.com',
    messagingSenderId: '651855611801',
    appId: '1:651855611801:web:1021a534e8c5e3e7a0b508',
};

const firebaseApp = initializeApp(firebaseConfig);

const googleAuthProvider = new GoogleAuthProvider();

googleAuthProvider.setCustomParameters({
    prompt: 'select_account',
});

export const auth = getAuth();
export const signInWithGooglePopup = () =>
    signInWithPopup(auth, googleAuthProvider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
    const userDocRef = doc(db, 'users', userAuth.uid); //use Auth Credentials to fetch user Document reference from firestore

    const userSnapshot = await getDoc(userDocRef); //get snapshot of document data from reference
    console.log(userSnapshot.exists());

    //if user data does not exist
    if (!userSnapshot.exists()) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt,
            });
        } catch (error) {
            console.error(error);
        }
    }

    //if user data exists
    return userDocRef;
};
