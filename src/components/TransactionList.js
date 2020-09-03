import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import TransactionItem from "./TransactionItem";

export default function TransactionList() {
  const { transactions } = useContext(GlobalContext);

  console.log(transactions);
  return (
    <>
      <h3>History</h3>
      <ul className='list'>
        {/* <li className='minus'>
          Cash <span>-$400</span>
          <button className='delete-btn'>x</button>
        </li> */}
        {transactions.map((list) => {
          return <TransactionItem key={list.id} list={list} />;
        })}
      </ul>
    </>
  );
}
