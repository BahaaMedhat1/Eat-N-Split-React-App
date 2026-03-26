import Button from "./Button";

export default function Friend({ friend, onSelection, selectedFriend }) {
  const isSelected = friend.id === selectedFriend?.id;
  return (
    <li className={isSelected ? "selected" : ""}>
      <img src={friend.image} alt={friend.name} />
      <div>
        <h3>{friend.name}</h3>

        {friend.balance === 0 && <p>You and {friend.name} are even</p>}

        {friend.balance > 0 && (
          <p className="green">
            {friend.name} owes you {friend.balance} €
          </p>
        )}

        {friend.balance < 0 && (
          <p className="red">
            You owes {friend.name} {Math.abs(friend.balance)}€
          </p>
        )}
      </div>

      <Button onClick={() => onSelection(friend)}>
        {isSelected ? "Close" : "Select"}
      </Button>
    </li>
  );
}
