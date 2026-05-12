'use client'
import { Button, Modal , FieldError, Input, Label, ListBox, Select, TextArea, TextField} from '@heroui/react';
import React from 'react';
import { toast } from 'react-toastify';

const EditButton = ({detailsData}) => {


    const {_id, destinationName, country, price, duration, departureDate, imageUrl, description ,category} = detailsData;


    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData.entries());
        // console.log("Form Data:", data);

        const res = await fetch(` http://localhost:5000/destinations/${_id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })

        const destinationsData = await res.json();

       if(destinationsData.modifiedCount >0){
        toast('done')
       }


    };



    return (
        <div>
            <Modal>
      <Button variant="secondary">edit</Button>
      <Modal.Backdrop>
        <Modal.Container>
          <Modal.Dialog className="sm:max-w-2xl">
            <Modal.CloseTrigger />
            <Modal.Header>
              <Modal.Heading>Update Travel Package</Modal.Heading>
            </Modal.Header>
            <Modal.Body>
             <form onSubmit={handleSubmit} className=" p-5 bg-stone-50 space-y-8">
                           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                               {/* Destination Name */}
                               <div className="md:col-span-2">
                                   <TextField defaultValue={destinationName} name="destinationName" >
                                       <Label>Destination Name</Label>
                                       <Input  className="rounded-2xl" />
                                       <FieldError />
                                   </TextField>
                               </div>

                               {/* Country */}
                               <TextField name="country" defaultValue={country}>
                                   <Label>Country</Label>
                                   <Input placeholder="Indonesia" className="rounded-2xl" />
                                   <FieldError />
                               </TextField>

                               {/* Category - Updated Select Component */}
                               <div>
                                   <Select
                                   defaultValue={category}
                                       name="category"

                                       className="w-full"
                                       placeholder="Select category"
                                   >
                                       <Label>Category</Label>
                                       <Select.Trigger className="rounded-2xl">
                                           <Select.Value />
                                           <Select.Indicator />
                                       </Select.Trigger>
                                       <Select.Popover>
                                           <ListBox>
                                               <ListBox.Item id="Beach" textValue="Beach">
                                                   Beach
                                                   <ListBox.ItemIndicator />
                                               </ListBox.Item>
                                               <ListBox.Item id="Mountain" textValue="Mountain">
                                                   Mountain
                                                   <ListBox.ItemIndicator />
                                               </ListBox.Item>
                                               <ListBox.Item id="City" textValue="City">
                                                   City
                                                   <ListBox.ItemIndicator />
                                               </ListBox.Item>
                                               <ListBox.Item id="Adventure" textValue="Adventure">
                                                   Adventure
                                                   <ListBox.ItemIndicator />
                                               </ListBox.Item>
                                               <ListBox.Item id="Cultural" textValue="Cultural">
                                                   Cultural
                                                   <ListBox.ItemIndicator />
                                               </ListBox.Item>
                                               <ListBox.Item id="Luxury" textValue="Luxury">
                                                   Luxury
                                                   <ListBox.ItemIndicator />
                                               </ListBox.Item>
                                           </ListBox>
                                       </Select.Popover>
                                   </Select>
                               </div>

                               {/* Price */}
                               <TextField defaultValue={price} name="price" type="number" >
                                   <Label>Price (USD)</Label>
                                   <Input
                                       type="number"
                                       placeholder="1299"
                                       className="rounded-2xl"
                                   />
                                   <FieldError />
                               </TextField>

                               {/* Duration */}
                               <TextField defaultValue='duration' name="duration" >
                                   <Label>Duration</Label>
                                   <Input
                                       placeholder="7 Days / 6 Nights"
                                       className="rounded-2xl"
                                   />
                                   <FieldError />
                               </TextField>

                               {/* Departure Date */}
                               <div className="md:col-span-2">
                                   <TextField defaultValue='departureDate' name="departureDate" type="date" >
                                       <Label>Departure Date</Label>
                                       <Input type="date" className="rounded-2xl" />
                                       <FieldError />
                                   </TextField>
                               </div>

                               {/* Image URL - Removed preview */}
                               <div className="md:col-span-2">
                                   <TextField defaultValue={imageUrl} name="imageUrl" >
                                       <Label>Image URL</Label>
                                       <Input
                                           type="url"

                                           className="rounded-2xl"
                                       />
                                       <FieldError />
                                   </TextField>
                               </div>

                               {/* Description */}
                               <div className="md:col-span-2">
                                   <TextField defaultValue={description} name="description" >
                                       <Label>Description</Label>
                                       <TextArea
                                           placeholder="Describe the travel experience..."
                                           className="rounded-3xl"
                                       />
                                       <FieldError />
                                   </TextField>
                               </div>
                           </div>

                           {/* Buttons */}
                           {/* isLoading={isPending} */}
                           {/* {isPending ? "Adding Package..." : "Add Travel Package"} */}
                          <Modal.Footer>
              <Button slot="close" variant="secondary">
                Cancel
              </Button>
              <Button type='submit' slot="close">Save Change</Button>
            </Modal.Footer>
                       </form>
            </Modal.Body>

          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
        </div>
    );
};

export default EditButton;