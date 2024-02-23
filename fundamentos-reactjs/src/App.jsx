import { Header } from './Components/Header'
import { Post } from './Components/Post'
import { Sidebar } from './Components/Sidebar'
import './global.css'
import styles from './App.module.css'

function App() {

  return (
    <>
      <Header/>
      <section className={styles.wrapper}>
        <aside>
          <Sidebar/>
        </aside>
        <main>
        <section>
        <Post/>
        <Post/>
      </section>
        </main>
      </section>
    </>
  )
}

export default App
