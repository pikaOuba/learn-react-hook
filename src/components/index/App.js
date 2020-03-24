import React, { useContext } from 'react'
import { AppContext } from '../../stores/Index'
import styles from './App.scss'

function App() {
  const { book: {count}, addAction } = useContext(AppContext)

  return (
    <div className={styles.container}>
      计数器-----{count}
      <button onClick={()=>{addAction()}}>增加</button>
    </div>
  );
}

export default App;
