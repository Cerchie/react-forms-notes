import React from 'react';
import ShoppingList from './ShoppingList'
import UserForm from './UserForm'
import './App.css';
import { fireEvent } from '@testing-library/react';



function App() {
  return (
    <div className="App">
      <ShoppingList />
      <UserForm />
    </div>
  );
}

export default App;
