import { initializeApp } from 'firebase/app';
import {
    getAuth,
    signInWithPopup,
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
} from 'firebase/auth';

import {
    getFirestore,
    doc,
    getDoc,
    setDoc,
    collection,
    writeBatch,
    query,
    getDocs,
} from 'firebase/firestore';

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

export const signInWithGooglePopup = async () =>
    await signInWithPopup(auth, googleAuthProvider);

export const db = getFirestore();

export const addCollectionAndDocuments = async (
    collectionKey,
    objectsToAdd
) => {
    const collectionRef = collection(db, collectionKey);
    const batch = writeBatch(db);

    objectsToAdd.forEach((object) => {
        const docRef = doc(collectionRef, object.title.toLowerCase());
        batch.set(docRef, object);
    });

    await batch.commit();
    console.log(`done`);
};

export const getCategoriesAndDocuments = async () => {
    const collectionRef = collection(db, 'categories');
    const q = query(collectionRef);

    const querySnapshot = await getDocs(q);
    const categoryMap = querySnapshot.docs.reduce((acc, docSnapshot) => {
        const { title, items } = docSnapshot.data();
        acc[title.toLowerCase()] = items;
        return acc;
    }, {});

    return categoryMap;
};

export const createUserDocumentFromAuth = async (userAuth, rest = {}) => {
    const userDocRef = doc(db, 'users', userAuth.uid); //use Auth Credentials to fetch user Document reference from firestore

    const userSnapshot = await getDoc(userDocRef); //fetch user data (snapshot) from our db

    //if user data does not exist create new user doc
    if (!userSnapshot.exists()) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt,
                ...rest,
            });
        } catch (error) {
            console.error(error);
        }
    }

    return userDocRef;
};

export const createNewUserAuthWithEmail = async (email, password) => {
    if (!email || !password) return;

    return await createUserWithEmailAndPassword(auth, email, password);
};

export const signInUserWithEmail = async (email, password) => {
    if (!email || !password) return;

    return await signInWithEmailAndPassword(auth, email, password);
};

export const signOutUser = () => signOut(auth);

export const onAuthStateChangedListener = (callback) => {
    if (!callback) return;
    onAuthStateChanged(auth, callback);
};
