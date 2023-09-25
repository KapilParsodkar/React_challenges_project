import { useState } from "react";

const initialFriends = [
  {
    id: 118836,
    name: "stuart",
    image: "https://i.pravatar.cc/48?u=112249",
    balance: -7,
  },
  {
    id: 933372,
    name: "williams",
    image: "https://i.pravatar.cc/48?u=935572",
    balance: 20,
  },
  {
    id: 499476,
    name: "tom",
    image: "https://i.pravatar.cc/48?u=345652",
    balance: 0,
  },
];

export default function App() {
  const [friends, setfriends] = useState(initialFriends);
  const [showfriend, setshowfriend] = useState(false);
  const [selfri, setselfri] = useState(null);

  function handleShowaddFriend() {
    setshowfriend((a) => !a);
  }

  function handleAddFreind(friend) {
    setfriends((friends) => [...friends, friend]);
    setshowfriend(false);
  }

  function handleselfri(friend) {
    setselfri((cur) => (cur?.id === friend.id ? null : friend));
    setshowfriend(false);
  }
  function splitbill(value) {
    setfriends((friends) =>
      friends.map((friend) =>
        friend.id === selfri.id
          ? { ...friend, balance: friend.balance + value }
          : friend
      )
    );
    setselfri(null);
  }

  return (
    <div className="app">
      <div className="sidebar">
        <FreindsList
          friends={friends}
          onselfri={handleselfri}
          selfri={selfri}
        />
        {showfriend && <Formaddfreind onaddfriend={handleAddFreind} />}

        <Button onclick={handleShowaddFriend}>
          {showfriend ? "Close" : "Add friend"}
        </Button>
      </div>
      {selfri && <FormSplitBill selfri={selfri} onsplitbill={splitbill} />}
    </div>
  );
}

function FreindsList({ friends, onselfri, selfri }) {
  return (
    <ul>
      {friends.map((f) => (
        <Freind friend={f} key={f.id} onselfri={onselfri} selfri={selfri} />
      ))}
    </ul>
  );
}

function Freind({ friend, onselfri, selfri }) {
  const issel = selfri?.id === friend.id;
  return (
    <li className={issel ? "selected" : ""}>
      <img src={friend.image} alt={friend.name} />
      <h3>{friend.name}</h3>

      {friend.balance < 0 && (
        <p className="red">
          You owe {friend.name} ${Math.abs(friend.balance)}
        </p>
      )}
      {friend.balance > 0 && (
        <p className="green">
          {friend.name} owes you ${Math.abs(friend.balance)}
        </p>
      )}
      {friend.balance === 0 && <p> you and {friend.name} are even</p>}
      <Button onclick={() => onselfri(friend)}>
        {issel ? "Close" : "Select"}
      </Button>
    </li>
  );
}
function Button({ children, onclick }) {
  return (
    <button className="button" onClick={onclick}>
      {children}
    </button>
  );
}

function Formaddfreind({ onaddfriend }) {
  const [name, setname] = useState("");
  const [image, setimage] = useState("https://i.pravatar.cc/48");
  function handlesubmit(e) {
    e.preventDefault();
    if (!name || !image) return;
    const id = crypto.randomUUID();
    const newFriend = {
      id,
      name,
      image: `${image}?=${id}`,
      balance: 0,
    };
    onaddfriend(newFriend);
    setname("");
  }
  return (
    <form className="form-add-friend" onSubmit={handlesubmit}>
      <label>🧑‍🤝‍🧑 Freind name</label>
      <input
        type="text"
        value={name}
        onChange={(e) => setname(e.target.value)}
      />
      <label>🌅 Image url</label>
      <input
        type="text"
        value={image}
        onChange={(e) => setimage(e.target.value)}
      />
      <Button>Add</Button>
    </form>
  );
}

function FormSplitBill({ selfri, onsplitbill }) {
  const [bill, setbill] = useState("");
  const [paidbyuser, setpaid] = useState("");
  const paidbyfriend = bill ? bill - paidbyuser : "";
  const [whoispaying, setwho] = useState("user");
  function handleSubmit(e) {
    e.preventDefault();

    if (!bill || !paidbyuser) return;

    onsplitbill(whoispaying === "user" ? paidbyfriend : -paidbyuser);
  }

  return (
    <form className="form-split-bill" onSubmit={handleSubmit}>
      <h2>Split a bill with {selfri.name}</h2>

      <label> 💵 Bill value</label>
      <input
        type="text"
        value={bill}
        onChange={(e) => setbill(Number(e.target.value))}
      />

      <label> 💂 your expense</label>
      <input
        type="text"
        value={paidbyuser}
        onChange={(e) =>
          setpaid(
            Number(e.target.value) > bill ? paidbyuser : Number(e.target.value)
          )
        }
      />

      <label> 🧑‍🤝‍🧑 {selfri.name}'s expense</label>
      <input type="text" disabled value={paidbyfriend} />
      <label> Who is paying bill</label>
      <select value={whoispaying} onChange={(e) => setwho(e.target.value)}>
        <option value="user">You</option>
        <option value="friend">{selfri.name}</option>
      </select>

      <Button>Split bill</Button>
    </form>
  );
}
