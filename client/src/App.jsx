import styles from './index.module.css'
import sqlLogo from './assets/sql.png'
import sql2 from './assets/sql-server.png'
import spl3 from './assets/big-data.png'
import { useState } from 'react'

function App() {
  const[querydesc,setQueryDescription] = useState("")

  const onSubmit = (e)=>{
    e.preventDefault();
    console.log("form submitted: ",querydesc);
  }

  return (
    <main className={styles.main}>

      <div className={styles.logos}>
      <img src={sqlLogo} alt="logo of sql" className={styles.icon}/>
      <img src={sql2} alt="logo of sql" className={styles.icon}/>
      <img src={spl3} alt="logo of sql" className={styles.icon}/>
      </div>

      <h3>Generate SQL with AI</h3>

      <form onSubmit={onSubmit}>

        <input 
          type="text" 
          name='query-description'
          placeholder='Describe your query'
          onChange={(e)=> setQueryDescription(e.target.value)}

        />
        <input type="submit" value="Generate query" />

      </form>
      
    </main>
  )
}

export default App
