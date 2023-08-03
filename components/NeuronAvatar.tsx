import { Avatar, AvatarImage } from "./ui/avatar"

const NeuronAvatar = () => {
  return (
    <div>
        <Avatar>
            <AvatarImage className="p-1" src="/logo.png"/>
        </Avatar>
    </div>
  )
}

export default NeuronAvatar