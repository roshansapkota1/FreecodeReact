import React from 'react';
import logo from './logo.svg';
import './App.css';
import Footer from './GreetingsAndTimeComponent/Footer'
import Header from './GreetingsAndTimeComponent/Header'

import Todo from './GreetingsAndTimeComponent/Todo'
import todosData from './GreetingsAndTimeComponent/todosData'


import GreetingsByTime from './GreetingsAndTimeComponent/GreetingsByTime';

import ContactCard from './jokesCardComponents/JokesCard'
import jokesData from './jokesCardComponents/jokesData'

import Products from "./ProductComponent/Products"
import ProductComponent from './ProductComponent/ProductComponent'



function App() {

const jokesComponent = jokesData.map((joke) => <ContactCard key={joke.id} question={joke.question} punchline={joke.punchLine}/>)


const productsComponentArray = Products.map(product=> <ProductComponent key={product.id} name={product.name} price={product.price} description={product.description} />)


const todosListArray = todosData.map(tod => <Todo key={tod.id} todosData={tod} />)
  
 

  return (
    <div className='root'>
            <Header />
            <div className='todo-list'>
            {todosListArray}
            </div>
            <GreetingsByTime/>
            <hr></hr>
            <hr></hr>
            <hr></hr>
            {jokesComponent}
            {productsComponentArray}
            <Footer />
        

            
        </div>  
  )
}

export default App;
