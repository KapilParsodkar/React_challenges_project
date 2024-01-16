import { useSelector } from "react-redux";

function Customer() {
  const c = useSelector((store) => store.customer.fullName);
  return <h2>👋 Welcome,{c}</h2>;
}

export default Customer;
