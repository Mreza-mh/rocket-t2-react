import axios from 'axios'; 
import moment from 'moment/moment';
import DeleteAlert from '../../packages/DeleteAlret';
import { notifyError} from '../../packages/Notify';

//ADD DELETE EDIT 

export const  handleDelete = async (iid, refetchData) => {
    DeleteAlert.confirmDelete(iid, refetchData);
}


export const handleSaveEdit = async (iid , refetchData ,editedTitle , setEditingItemId , setEditedTitle ) => {
    try {
        await axios.put(`https://6613263953b0d5d80f66e461.mockapi.io/data/${iid}`, { Title: editedTitle });
        setEditingItemId(null);
        setEditedTitle(""); 
        refetchData();

    } catch (error) {
        console.error('Failed to save edit:', error);
        notifyError(error.message);
    }
};

export const handleSavePost = async (refetchData, PostTitle, setPostTitle) => {
    const currentDate = moment().format("YYYY/MM/DD" + "  " + "(" + "HH:mm" + ")");

    try {
        await axios.post(`https://6613263953b0d5d80f66e461.mockapi.io/data`, { Title: PostTitle, Date: currentDate });
        setPostTitle(""); 
        refetchData();
    } catch (error) {
        console.error('Failed to save post:', error);
        notifyError(error.message);
    }
}