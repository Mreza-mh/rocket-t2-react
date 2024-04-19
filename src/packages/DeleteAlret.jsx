// Class 2: DeleteAlert
import React from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import { notifyError} from '../packages/Notify';


class DeleteAlert extends React.Component {
  static confirmDelete = async (iid, refetchData) => {
    const result = await Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, cancel!',
      reverseButtons: true
    });

    if (result.isConfirmed) {
      try {
        await axios.delete(`https://6613263953b0d5d80f66e461.mockapi.io/data/${iid}`);
        Swal.fire({
          title: 'Deleted!',
          text: 'Your file has been deleted.',
          icon: 'success'
        });
        refetchData();
      } catch (error) {
        console.log(error);
        notifyError(error.message);
      }
    } else if (result.dismiss === Swal.DismissReason.cancel) {
      Swal.fire({
        title: 'Cancelled',
        text: 'Your imaginary file is safe :)',
        icon: 'error'
      });
    }
  };

}

export default DeleteAlert;
