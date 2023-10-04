import { useState } from "react";

const initialFriends = [
  {
    id: 118836,
    name: "stuart",

    balance: -7,
  },
  {
    id: 933372,
    name: "williams",

    balance: 20,
  },
  {
    id: 499476,
    name: "tom",

    balance: 0,
  },
];

function App() {
  const [friends, setfriends] = useState(initialFriends);
  const [show, setshow] = useState(false);
  const [showbill, setshowBill] = useState(null);

  function addfriend(friend) {
    setfriends((friends) => [...friends, friend]);
  }
  function showfriend() {
    setshow((a) => !a);
  }
  function showbillform(friend) {
    setshowBill((cur) => (cur?.id === friend.id ? null : friend));
    setshow(false);
  }

  function splitbills(value) {
    setfriends((friends) =>
      friends.map((f) =>
        f.id === showbill.id ? { ...f, balance: f.balance + value } : f
      )
    );
    setshowBill(null);
  }
  return (
    <div>
      <div className="App">
        <FriendList
          friends={friends}
          showbill={showbill}
          showbillform={showbillform}
        />
        {show && <Addingfriend addfriend={addfriend} />}
        <button onClick={showfriend}>{show ? "close" : "add friend"}</button>
      </div>
      {showbill && <Splitbill showbill={showbill} splitbills={splitbills} />}
    </div>
  );
}
function FriendList({ friends, showbill, showbillform }) {
  return (
    <ul>
      {friends.map((f) => (
        <Frienddetails
          friend={f}
          showbill={showbill}
          showbillform={showbillform}
        />
      ))}
    </ul>
  );
}

function Frienddetails({ friend, showbill, showbillform }) {
  return (
    <li>
      <h3>{friend.name}</h3>
      {friend.balance > 0 && (
        <p style={{ color: "green" }}>
          {friend.name} owes you ${Math.abs(friend.balance)}
        </p>
      )}
      {friend.balance < 0 && (
        <p style={{ color: "red" }}>
          you owe {friend.name} by ${Math.abs(friend.balance)}
        </p>
      )}
      {friend.balance === 0 && (
        <p style={{ color: "blue" }}>you are even with {friend.name}</p>
      )}
      <button onClick={() => showbillform(friend)}>Select</button>
    </li>
  );
}

function Addingfriend({ addfriend }) {
  const [name, setname] = useState("");
  function handlesubmit(e) {
    e.preventDefault();
    if (!name) return;
    const id = crypto.randomUUID;
    const newfriends = {
      id,
      name,
      balance: 0,
    };
    addfriend(newfriends);
  }
  return (
    <form onSubmit={handlesubmit}>
      <p> Add a friend</p>
      <input
        type="text"
        value={name}
        onChange={(e) => setname(e.target.value)}
      />
      <button>add</button>
    </form>
  );
}

function Splitbill({ showbill, splitbills }) {
  const [bill, setbill] = useState("");
  const [upay, setupay] = useState("");
  const paidbyfriend = bill ? bill - upay : "";
  const [whopay, setwhopay] = useState("user");
  function hsub(e) {
    e.preventDefault();
    if (!bill || !upay) return;
    splitbills(whopay === "user" ? paidbyfriend : -paidbyfriend);
  }
  return (
    <div>
      <form onSubmit={hsub}>
        <label>Bill value</label>
        <input
          type="text"
          value={bill}
          onChange={(e) => setbill(Number(e.target.value))}
        />
        <label> your expense</label>
        <input
          type="text"
          value={upay}
          onChange={(e) =>
            setupay(
              Number(e.target.value) > bill ? upay : Number(e.target.value)
            )
          }
        />
        <label> {showbill.name} expense</label>
        <input type="text" disabled value={paidbyfriend} />
        <select value={whopay} onChange={(e) => setwhopay(e.target.value)}>
          <option value="user">user</option>
          <option value="friend">{showbill.name}</option>
        </select>
        <button>Split bill</button>
      </form>
    </div>
  );
}

export default App;
