import { User } from "../../redux/types"
import styles from "./FriendCard.module.css"

const FriendCard = ({user} : {user: User}) => {
  return (
    <div className={styles.friendCard}>
        <p>{user.first_name} {user.last_name}</p>
    </div>
  )
}

export default FriendCard