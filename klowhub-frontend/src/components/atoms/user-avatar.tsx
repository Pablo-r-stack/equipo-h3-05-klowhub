import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'
interface avatarProps {
    avatarUrl?: string,
    name?: string
}
const UserAvatar = ({ avatarUrl, name }: avatarProps) => {
    return (
        <Avatar>
            {avatarUrl ? (
                <AvatarImage src={`/assets/avatars/${avatarUrl}`} />
            ) : (
                <AvatarImage src={"/assets/klowhub-logo.png"} />
            )}
            <AvatarFallback>{name?.charAt(0).toUpperCase() || 'U'}</AvatarFallback>
        </Avatar>
    )
}

export default UserAvatar