import { useState, useEffect } from 'react';
import { firebaseDB } from '../firebase-config';
import { set, ref, onValue } from 'firebase/database';
import { useAuthState } from 'react-firebase-hooks/auth';
import { firebaseAuth } from '../firebase-config';

const useFirebaseDB = () => {
    const [user] = useAuthState(firebaseAuth);
    const [userActivityCount, setUserActivityCount] = useState([]);
    const curUserId = user ? user.uid : '';

    useEffect(() => {
        if (curUserId) {
            const userActivityCountRef = ref(
                firebaseDB,
                'users/' + curUserId + '/activityCount'
            );
            onValue(userActivityCountRef, (snapshot) => {
                const data = snapshot.val();
                setUserActivityCount(data);
            });
        }
    }, [curUserId, userActivityCount]);

    const initializeUserData = (userId) => {
        if (userId) {
            set(ref(firebaseDB, 'users/' + userId), {
                activityCount: 0,
                // lastResetDate: lastResetDate
            });
        }
    };

    const updateUserData = (userId, activityCount) => {
        if (userId) {
            set(ref(firebaseDB, 'users/' + userId), {
                activityCount: activityCount + 1,
            });
        }
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
