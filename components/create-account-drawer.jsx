"use client"

import React from "react";
import { Drawer, DrawerHeader, DrawerContent, DrawerTitle, DrawerDescription, DrawerTrigger } from "./ui/drawer";

const CreateAccountDrawer = ({ children }) => {
    return (
        <Drawer>
            <DrawerTrigger>{children}</DrawerTrigger>
            <DrawerContent>
                <DrawerHeader>
                    <DrawerTitle>Are you absolutely sure?</DrawerTitle>
                    <DrawerDescription>This action cannot be undone.</DrawerDescription>
                </DrawerHeader>
            </DrawerContent>
        </Drawer>
    )
};

export default CreateAccountDrawer;