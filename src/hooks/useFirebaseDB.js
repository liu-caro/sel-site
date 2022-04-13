import { useState, useEffect } from 'react';
import { firebaseDB } from '../firebase-config';
import { set, ref, onValue } from 'firebase/database';
import { useAuthState } from 'react-firebase-hooks/auth';
import { firebaseAuth } from '../firebase-config';

const useFirebaseDB = () => {
    const [user] = useAuthState(firebaseAuth);
    const [userActivityCount, setUserActivityCount] = useState([]);
    const [userNextResetDate, setUserNextResetDate] = useState();
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

    useEffect(() => {
        if (curUserId) {
            const userNextResetDatetRef = ref(
                firebaseDB,
                'users/' + curUserId + '/nextResetDate'
            );
            onValue(userNextResetDatetRef, (snapshot) => {
                const data = snapshot.val();
                setUserNextResetDate(data);
            });
        }
    }, [curUserId, userNextResetDate]);

    const initializeUserData = (userId) => {
        if (userId) {
            const date = new Date();
            const lastDay = new Date(
                date.getFullYear(),
                date.getMonth() + 1,
                0
            );

            set(ref(firebaseDB, 'users/' + userId), {
                activityCount: 0,
                nextResetDate: lastDay.getTime(),
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

    const monthlyReset = (userId, resetDate) => {
        const today = new Date();
        if (userId && resetDate < today.getTime()) {
            const date = new Date();
            const lastDay = new Date(
                date.getFullYear(),
                date.getMonth() + 1,
                0
            );

            set(ref(firebaseDB, 'users/' + userId), {
                activityCount: 0,
                nextResetDate: lastDay.getTime(),
            });
        }
    };

    return {
        userActivityCount,
        userNextResetDate,
        initializeUserData,
        updateUserData,
        monthlyReset,
    };
};

export default useFirebaseDB;
