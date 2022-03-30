import { useState, useEffect } from 'react';
import { firebaseDB } from '../firebase-config';
import { set, ref, onValue } from 'firebase/database';

const useFirebaseDB = (userId) => {
    const [userActivityCount, setUserActivityCount] = useState([]);

    useEffect(() => {
        const userActivityCountRef = ref(firebaseDB, 'users/' + userId + '/activityCount');
        onValue(userActivityCountRef, (snapshot) => {
            const data = snapshot.val();
            setUserActivityCount(data);
        });
    }, [userId, userActivityCount]);

    const initializeUserData = () => {
        set(ref(firebaseDB, 'users/' + userId), {
            activityCount: 0,
            // lastResetDate: lastResetDate
        });
    };

    const updateUserData = (activityCount) => {
        set(ref(firebaseDB, 'users/' + userId), {
            activityCount: activityCount,
        });
    };

    // const resetUserData = (userId, lastResetDate) => {
    //     set(ref(firebaseDB, 'users/' + userId), {
    //         activityCount: 0,
    //         lastResetDate: lastResetDate
    //     });
    // };

    return { userActivityCount, initializeUserData, updateUserData };
};

export default useFirebaseDB;
