import { useReducer } from "react";
const initialState = {
  balance: 0,
  loan: 0,
  isActive: false,
  deposit: 150,
  withdraw: 50,
};

function reducer(state, action) {
  if (!state.isActive && action.type !== "open account") return state;

  switch (action.type) {
    case "open account":
      return { ...state, isActive: true, balance: 500, loan: 0 };

    case "deposit":
      return { ...state, balance: state.balance + state.deposit };
    case "withdraw":
      return { ...state, balance: state.balance - state.withdraw };
    case "request":
      if (state.loan === 5000) {
        return {
          ...state,
          balance: state.balance + 0,
          loan: state.loan + 0,
        };
      }
      return {
        ...state,
        balance: state.balance + 5000,
        loan: state.loan + 5000,
      };

    case "pay_loan":
      if (state.loan === 5000) {
        return {
          ...state,
          balance: state.balance - 5000,
          loan: state.loan - 5000,
        };
      }
      return {
        ...state,
        balance: state.balance + 0,
        loan: state.loan + 0,
      };
    case "close":
      if (state.loan === 0 && state.balance === 0) {
        return initialState;
      }
      return state;

    default:
      throw new Error("action unknown");
  }
}

export default function App() {
  const [{ balance, loan, isActive, deposit }, dispatch] = useReducer(
    reducer,
    initialState
  );

  return (
    <div className="App">
      <h1>useReducer Bank Account</h1>
      <p>Balance: {balance}</p>

      <p>Loan: {loan}</p>

      <p>
        <button
          onClick={() => {
            dispatch({ type: "open account" });
          }}
          disabled={isActive}
        >
          Open account
        </button>
      </p>
      <p>
        <button
          onClick={() => {
            dispatch({ type: "deposit" });
          }}
          disabled={!isActive}
        >
          Deposit 150
        </button>
      </p>
      <p>
        <button
          onClick={() => {
            dispatch({ type: "withdraw" });
          }}
          disabled={!isActive}
        >
          Withdraw 50
        </button>
      </p>
      <p>
        <button
          onClick={() => {
            dispatch({ type: "request" });
          }}
          disabled={!isActive}
        >
          Request a loan of 5000
        </button>
      </p>
      <p>
        <button
          onClick={() => {
            dispatch({ type: "pay_loan" });
          }}
          disabled={!isActive}
        >
          Pay loan
        </button>
      </p>
      <p>
        <button
          onClick={() => {
            dispatch({ type: "close" });
          }}
          disabled={!isActive}
        >
          Close account
        </button>
      </p>
    </div>
  );
}
