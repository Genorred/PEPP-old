import {LibraryIcon, LogInIcon, Plus} from "lucide-react";

export const navGeneralItems = [
    {
        title: 'Create',
        Icon: Plus,
        path: '/create'
    },
    {
        title: 'My posts',
        Icon: LibraryIcon,
        path: 'my-posts'
    }
]
export type NavGeneralItemsType = typeof navGeneralItems