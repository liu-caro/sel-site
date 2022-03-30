import { useState, useEffect } from 'react';
import { firebaseDB } from '../firebase-config';
import { set, ref, onValue } from 'firebase/database';

const useFirebaseDB = (collection) => {
    const [docs, setDocs] = useState([]);

    useEffect(() => {
        const databaseRef = firebaseDB.ref(collection);
        databaseRef.on('value', (snapshot) => {
            let documents = [];
            snapshot.forEach((doc) => {
                const value = doc.val();
                if (value)
                    documents.push({
                        [value?.id]: {
                            activityCount: value.activityCount,
                        },
                    });
            });
            setDocs(documents);
        });
    }, [collection]);

    const writeUserData = (userId, progress) => {
        set(ref(firebaseDB, userId), {
            activityCount: progress,
        });
    };

    return { docs, writeUserData };
};

export default useFirebaseDB;
