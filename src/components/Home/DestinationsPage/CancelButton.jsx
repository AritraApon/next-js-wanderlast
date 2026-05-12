"use client";
import {AlertDialog, Button} from "@heroui/react";
import { redirect } from "next/navigation";
import { MdDelete } from "react-icons/md";
import { toast } from "react-toastify";

const CancelButton = ({detailsData}) => {
           const {_id} = detailsData ;

    const handleDelete =async ()=>{
          const res = await fetch(`http://localhost:5000/destinations/${_id}`,{
            method : 'DELETE' ,

          } )
          const data = await res.json()

          if(data.deletedCount >0){
            toast.success(`Successfully Delete ${detailsData.destinationName} Package`)
        redirect('/destinations')
          }
         

    }
    return (
        <div>
         <AlertDialog>
      <Button variant="danger-soft"> <MdDelete />Cancel</Button>
      <AlertDialog.Backdrop>
        <AlertDialog.Container>
          <AlertDialog.Dialog className="sm:max-w-[400px]">
            <AlertDialog.CloseTrigger />
            <AlertDialog.Header>
              <AlertDialog.Icon status="danger" />
              <AlertDialog.Heading>Delete Travel Package?</AlertDialog.Heading>
            </AlertDialog.Header>
            <AlertDialog.Body>
              <p>
                This will permanently delete <strong>{detailsData.destinationName}</strong> and all of its
                data. This action cannot be undone.
              </p>
            </AlertDialog.Body>
            <AlertDialog.Footer>
              <Button slot="close" variant="tertiary">
                Cancel
              </Button>
              <Button onClick={handleDelete} slot="close" variant="danger">
                Delete Package
              </Button>
            </AlertDialog.Footer>
          </AlertDialog.Dialog>
        </AlertDialog.Container>
      </AlertDialog.Backdrop>
    </AlertDialog>
        </div>
    );
};

export default CancelButton;