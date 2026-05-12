"use client";
import { Envelope } from "@gravity-ui/icons";
import { Button, FieldError, Input, Label, ListBox, Modal, Surface, TextArea, Select, TextField } from "@heroui/react";
import { CiEdit } from 'react-icons/ci';

const EditButton = () => {
    return (
        <div>
            <Modal>
                {/* Trigger Button */}
                <Button variant="outline" className="flex items-center gap-2">
                    <CiEdit /> Edit
                </Button>

                <Modal.Backdrop>
                    <Modal.Container placement="center">
                        <Modal.Dialog className="sm:max-w-2xl">
                            <Modal.CloseTrigger />

                            <Modal.Header>
                                <Modal.Heading className="text-xl font-semibold">Update Travel Package</Modal.Heading>
                                <p className="text-sm text-gray-500">Make changes to the travel package details below</p>
                            </Modal.Header>

                            <Modal.Body className="p-6">
                                <form className="space-y-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                                        {/* Destination Name - Full Width */}
                                        <div className="md:col-span-2">
                                            <TextField name="destinationName" isRequired className="w-full">
                                                <Input placeholder="Bali Paradise" className="rounded-md" />
                                                <FieldError />
                                            </TextField>
                                        </div>

                                        {/* Country */}
                                        <TextField name="country" isRequired>
                                            <Label>Country</Label>
                                            <Input placeholder="Indonesia" className="rounded-md" />
                                            <FieldError />
                                        </TextField>

                                        {/* Category */}
                                        <div className="flex flex-col gap-2">
                                            <Label>Category</Label>
                                            <Select name="category" isRequired placeholder="Select category">
                                                <Select.Trigger className="rounded-md">
                                                    <Select.Value />
                                                    <Select.Indicator />
                                                </Select.Trigger>
                                                <Select.Popover>
                                                    <ListBox>
                                                        <ListBox.Item id="Beach">Beach</ListBox.Item>
                                                        <ListBox.Item id="Mountain">Mountain</ListBox.Item>
                                                        <ListBox.Item id="City">City</ListBox.Item>
                                                    </ListBox>
                                                </Select.Popover>
                                            </Select>
                                        </div>

                                        {/* Price */}
                                        <TextField name="price" type="number" isRequired>
                                            <Label>Price (USD)</Label>
                                            <Input placeholder="e.g., 1299" className="rounded-md" />
                                            <FieldError />
                                        </TextField>

                                        {/* Duration */}
                                        <TextField name="duration" isRequired>
                                            <Label>Duration</Label>
                                            <Input placeholder="e.g., 7 Days / 6 Nights" className="rounded-md" />
                                            <FieldError />
                                        </TextField>

                                        {/* Departure Date - Full Width */}
                                        <div className="md:col-span-2">
                                            <TextField name="departureDate" type="date" isRequired>
                                                <Label>Departure Date</Label>
                                                <Input type="date" className="rounded-md" />
                                                <FieldError />
                                            </TextField>
                                        </div>

                                        {/* Image URL - Full Width */}
                                        <div className="md:col-span-2">
                                            <TextField name="imageUrl" isRequired>
                                                <Label>Image URL</Label>
                                                <Input type="url" placeholder="https://example.com/image.jpg" className="rounded-md" />
                                                <FieldError />
                                            </TextField>
                                        </div>

                                        {/* Description - Full Width */}
                                        <div className="md:col-span-2">
                                            <TextField name="description" isRequired>
                                                <Label>Description</Label>
                                                <TextArea placeholder="Describe the travel experience..." className="rounded-md min-h-[100px]" />
                                                <FieldError />
                                            </TextField>
                                        </div>
                                    </div>

                                    {/* Action Buttons */}
                                    <div className="flex justify-end gap-3 mt-8">
                                        <Button variant="outline" className="text-red-500 border-red-500 hover:bg-red-50 rounded-md px-6">
                                            Cancel
                                        </Button>
                                        <Button type="submit" className="bg-cyan-500 text-white hover:bg-cyan-600 rounded-md px-6">
                                            Save Changes
                                        </Button>
                                    </div>
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