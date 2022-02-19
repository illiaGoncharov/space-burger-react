import React from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';

import { ingredients, construct } from '../../utils/data'

import './App.module.css';
import AppStyles from './App.module.css'

import AppHeader from '../AppHeader/AppHeader';

import BurgerConstructor from '../BurgerConstructor/BurgerConstructor'
import BurgerIngredients from '../BurgerIngredients/BurgerIngredients'

function App() {
  return (
    <>
      <AppHeader />
      <main className={`${AppStyles.main}`}>
        <BurgerIngredients ingredients={ingredients} />
        <BurgerConstructor construct={construct} />
      </main>
    </>
  );
}

export default App;
