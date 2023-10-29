import Item from "antd/es/list/Item";
import { firestore } from "../firebaseConfig";
import { addDoc, collection, onSnapshot} from 'firebase/firestore';
import { toast } from "react-toastify";

let dbRef = collection(firestore, "posts");
let userRef = collection(firestore, "users");

export const postStatus = (object) => {
    addDoc(dbRef, object)
    .then ((res) => {
        console.log('doc added successfully');
        toast.success("Post Submitted!")
    })
    .catch((err) => {
        console.log(err);
    });
};

export const getStatus = (setAllStatuses) => {
    onSnapshot(dbRef, (response) => {
        setAllStatuses(
            response.docs.map((docs) => {
                return {...docs.data(), id: docs.id};
            })
        );
    });
};

export const postUserData = (object) => {
    addDoc(userRef, object)
    .then (() => {})
    .catch((err) => {
        console.log(err);
    })
}

export const getCurrentUser = (setCurrentUser) => {
    onSnapshot(userRef, (response) => {
        setCurrentUser(
            response.docs.map((docs) => {
                return {...docs.data(), userId: docs.id};
            }).filter((item) => {
                return item.email === localStorage.getItem('userEmail');
            })[0]
        );
    });
}