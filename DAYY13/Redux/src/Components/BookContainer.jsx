import React from 'react'
import{useSelector,useDispatch} from "react-redux"
import { buyBook,saleBook } from './BookAction'

function BookContainer() {

  const noOfBooks = useSelector((state)=>state.NumberOfBooks)
  const dispatch = useDispatch();


  return (
   <>
     <div>Book Container</div>
     <h2>No Of books - {noOfBooks}</h2>

     <button onClick={()=> dispatch(buyBook())}>Buy BOOk</button>
     <button onClick={()=> dispatch(saleBook())}>sale BOOK</button>
   </>
  )
}

export default BookContainer