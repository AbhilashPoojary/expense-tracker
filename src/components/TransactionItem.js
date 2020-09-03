import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export default function TransactionItem({ list }) {
  const { deleteTransaction } = useContext(GlobalContext);
  return (
    <div>
      <li className={`${list.amount > 0 ? "plus" : "minus"}`} key={list.id}>
        {list.text}{" "}
        <button
          onClick={() => deleteTransaction(list.id)}
          className='delete-btn'
        >
          x
        </button>
        {list.amount}
      </li>
    </div>
  );
}
