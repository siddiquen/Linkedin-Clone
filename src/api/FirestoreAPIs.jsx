import { firestore } from "../firebaseConfig";
import { addDoc, collection, onSnapshot, doc, updateDoc, query, where, setDoc} from 'firebase/firestore';
import { toast } from "react-toastify";

let postsRef = collection(firestore, "posts");
let dbRef = collection(firestore, "posts");
let userRef = collection(firestore, "users");
let likeRef = collection(firestore, "likes");

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
                return {...docs.data(), id: docs.id};
            }).filter((item) => {
                return item.email === localStorage.getItem('userEmail');
            })[0]
        );
    });
}

export const editProfile = (userId, payLoad) => {
    let userToEdit = doc(userRef, userId);

    updateDoc(userToEdit, payLoad)
    .then (() => {
        console.log('doc added successfully');
        toast.success("Change submitted!")
    })
    .catch((err) => {
        console.log(err);
    });
}

export const getSingleStatus = (setAllStatus, id) => {
    const singlePostQuery = query(postsRef, where("userId", "==", id));
    onSnapshot(singlePostQuery, (response) => {
      setAllStatus(
        response.docs.map((docs) => {
          return { ...docs.data(), id: docs.id };
        })
      );
    });
  };
  
  export const getSingleUser = (setCurrentUser, email) => {
    const singleUserQuery = query(userRef, where("email", "==", email));
    onSnapshot(singleUserQuery, (response) => {
      setCurrentUser(
        response.docs.map((docs) => {
          return { ...docs.data(), id: docs.id };
        })[0]
      );
    });
  };

export const likePost = (userId, postId) => {
    try {
        let docToLike = doc(likeRef, `${userId}_${postId}`);
        setDoc(docToLike, {userId, postId});
    } catch (err) {
        console.log(err);
    }
    
}

export const getLikeByUser = (userId, postId) => {
    try {
        let likesQuery = query(likeRef, where('postId', '==', postId));
        onSnapshot(likesQuery, (response) => {
            let likes = response.docs.map((doc) => doc.data());
            let likesCount = likes.length;

            const isLiked = likes.some((Like) => {
                Like.id === userId;
            })
        })
    } catch (err) {
        console.log(err);
    }
    
}