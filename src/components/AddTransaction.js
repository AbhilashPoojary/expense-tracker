import React, { useState, useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import uuid from "react-uuid";

export default function AddTransaction() {
  const { addTransaction } = useContext(GlobalContext);
  const [track, setTrack] = useState({
    text: "",
    amount: 0,
  });
  function handleChange(e) {
    const { name, value } = e.target;
    setTrack({
      ...track,
      [name]: value,
    });
  }
  const onSubmit = (e) => {
    e.preventDefault();
    if (track.text) {
      const newTransaction = {
        id: uuid(),
        text: track.text,
        amount: +track.amount,
      };

      addTransaction(newTransaction);
      setTrack({
        ...track,
        text: "",
        amount: 0,
        textError: "",
      });
    } else {
      setTrack({
        ...track,
        textError: "field cannot be blank",
      });
    }
  };

  return (
    <>
      <h3>Add new transaction</h3>
      <form onSubmit={onSubmit}>
        <div className='form-control'>
          <label htmlFor='text'>Text</label>
          <input
            type='text'
            name='text'
            value={track.text}
            onChange={handleChange}
            placeholder='Enter text...'
          />
          <p>{track.textError}</p>
        </div>
        <div className='form-control'>
          <label htmlFor='amount'>
            Amount <br />
            (negative - expense, positive - income)
          </label>
          <input
            type='number'
            name='amount'
            value={track.amount}
            onChange={handleChange}
            placeholder='Enter amount...'
          />
        </div>
        <button className='btn'>Add transaction</button>
      </form>
    </>
  );
}
