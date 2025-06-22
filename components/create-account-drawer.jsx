"use client"

import React, { useState } from "react";
import { Drawer, DrawerHeader, DrawerContent, DrawerTitle, DrawerDescription, DrawerTrigger } from "./ui/drawer";

const CreateAccountDrawer = ({ children }) => {
    const [open, setOpen] = useState(false);
    return (
        <Drawer open={open} onOpenChange={setOpen}>
            <DrawerTrigger asChild>{children}</DrawerTrigger>
            <DrawerContent>
                <DrawerHeader>
                    <DrawerTitle>Create New Account</DrawerTitle>
                    <DrawerDescription>This action cannot be undone.</DrawerDescription>
                </DrawerHeader>
                <div>
                    <form ></form>
                </div>
            </DrawerContent>
        </Drawer >
    )
};

export default CreateAccountDrawer;