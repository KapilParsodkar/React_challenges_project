import { useCallback, useEffect, useState, useRef } from "react";

function App() {
  const [length, setlength] = useState(8);
  const [num, setnum] = useState(false);
  const [chars, setchars] = useState(false);
  const [pwd, setpwd] = useState("");

  const passwordRef = useRef(null);

  const pwdgenrator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (num) {
      str += "0123456789";
    }
    if (chars) {
      str += "!@#$%^&*";
    }

    for (let i = 0; i <= length; i++) {
      let c = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(c);
    }

    setpwd(pass);
  }, [length, num, setpwd, chars]);

  const copypwd = () => {
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(pwd);
  };

  useEffect(() => {
    pwdgenrator();
  }, [length, num, chars, pwdgenrator]);
  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md roubded-lg px-4 my-8 text-orange-500 bg-gray-700 ">
        <h1 className="text-white text_center my-3">Password genrator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            value={pwd}
            className="outline-none w-full py-1 px-3"
            placeholder="password"
            readOnly
            ref={passwordRef}
          />
          <button onClick={copypwd}>copy</button>
        </div>
        <div>
          <div>
            <input
              type="range"
              min={6}
              max={100}
              value={length}
              onChange={(e) => setlength(e.target.value)}
            />
            <label>Length:{length}</label>
          </div>
          <div>
            <input
              type="checkbox"
              defaultChecked={num}
              id="numbwerInput"
              onChange={() => {
                setnum((p) => !p);
              }}
            />
            <label>numbers</label>
            <br></br>
            <input
              type="checkbox"
              defaultChecked={chars}
              id="numberInput"
              onChange={() => {
                setchars((p) => !p);
              }}
            />
            <label>characters</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
