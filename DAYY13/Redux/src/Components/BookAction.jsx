import React from 'react'
import { BUY_BOOK, SALE_BOOK } from './BookType'

export const  buyBook = () => {
  return{
    type : BUY_BOOK
  } 

}

export const  saleBook = () => {
  return{
    type : SALE_BOOK
  } 
}