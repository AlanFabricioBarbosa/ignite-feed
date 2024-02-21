import { Header } from './Components/Header'
import { Post } from './Post'
import './global.css'
import styles from './App.module.css'
import { Sidebar } from './Components/Sidebar'

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
        <Post 
          author="Alan Fabrício" 
          content="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum similique alias dolor nihil voluptatem eveniet, pariatur dignissimos tempore magnam consequuntur adipisci ut minus corrupti hic doloribus exercitationem, quis explicabo cum."
        />
        <Post
          author="Mando"
          content="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum similique alias dolor nihil voluptatem eveniet, pariatur dignissimos tempore magnam consequuntur adipisci ut minus corrupti hic doloribus exercitationem, quis explicabo cum."
        />
      </section>
        </main>
      </section>
    </>
  )
}

export default App
