import { firestore } from "../firebaseConfig";
import { addDoc, collection, onSnapshot} from 'firebase/firestore';
import { toast } from "react-toastify";

let dbRef = collection(firestore, "posts");

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