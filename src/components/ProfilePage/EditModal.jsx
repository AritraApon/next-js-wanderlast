"use client";
import { Edit } from 'lucide-react';
import { Envelope } from "@gravity-ui/icons";
import { Button, Input, Label, Modal, Spinner, Surface, TextField } from "@heroui/react";
import { authClient, useSession } from '@/lib/auth-client';
import Image from 'next/image';

const EditModal = () => {

    const { data, isPending } = useSession()
    if (isPending) {
        return <div>
            <div className="flex items-center gap-4">
                <Spinner />
            </div>
        </div>
    }
    const user = data?.user;

    const onSubmit = async (event) => {
        event.preventDefault()
        const fromData = new FormData(event.target)
        const userData = Object.fromEntries(fromData.entries())

        const { email, name, image } = userData;

        await authClient.updateUser({
            image: image,
            name: name,
        })




    }


    return (
        <div className='mt-4'>
            <Modal>
                <Button variant="secondary" size='lg' className='w-70'>  <Edit size={18} /> Edit Profile</Button>
                <Modal.Backdrop>
                    <Modal.Container placement="auto">
                        <Modal.Dialog className="sm:max-w-md">
                            <Modal.CloseTrigger />
                            <Modal.Header>
                                <Modal.Heading>Update Your Profile</Modal.Heading>
                                <Image
                                    src={(user?.image && user.image.includes('@') === false) ? user.image : "/avatar.png"}
                                    alt={user.name}
                                    width={300}
                                    height={300}
                                    className="w-32 h-32 rounded-full object-cover border-4 border-white shadow-lg"
                                />
                            </Modal.Header>
                            <Modal.Body className="p-6">
                                <Surface variant="default">
                                    <form onSubmit={onSubmit} className="flex flex-col gap-4">
                                        <TextField j defaultValue={user?.name} className="w-full" type="text">
                                            <Label>Name</Label>
                                            <Input
                                                name="name"

                                            />
                                        </TextField>


                                        {/* Image URL Input */}
                                        <TextField isRequired defaultValue={user?.image} className="w-full" type="text">
                                            <Label>Image url</Label>
                                            <Input
                                                name="image" />
                                        </TextField>



                                        <Modal.Footer>
                                            <Button slot="close" variant="secondary">
                                                Cancel
                                            </Button>
                                            <Button type='submit' slot="close">Update</Button>
                                        </Modal.Footer>

                                    </form>
                                </Surface>
                            </Modal.Body>

                        </Modal.Dialog>
                    </Modal.Container>
                </Modal.Backdrop>
            </Modal>
        </div>
    );
};

export default EditModal;