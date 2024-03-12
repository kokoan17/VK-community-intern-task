import { useState } from "react";
import { Group } from "../../redux/types";
import styles from "./GroupCard.module.css";
import FriendCard from "../FriendCard/FriendCard";

const GroupCard = ({ group }: { group: Group }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={styles.groupCard}>
      <div className={styles.groupCard__title}>
        <div
          style={{
            width: 100,
            height: 100,
            borderRadius: 1000,
            background: `${group?.avatar_color}`,
          }}
        ></div>
        <p>{group.name}</p>
      </div>
      <div className={styles.groupCard__closed}>
        <p>{group.closed}</p>
      </div>
      <div className={styles.groupCard__members}>
        <p>Count of members: {group.members_count}</p>
      </div>
      {group.friends?.length && (
        <div className={styles.groupCard__friends}>
          <p onClick={() => setIsOpen((prev) => (!prev))}>
            Count of friends: {group.friends?.length}
          </p>
          <div className={styles.groupCard__friends__list}>
            {isOpen && group.friends.map((friend) => (
              <FriendCard key={friend.first_name + friend.last_name} user={friend}/>
            )) || null}
          </div>
        </div>
      )}
    </div>
  );
};

export default GroupCard;
