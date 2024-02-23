import { ThumbsUp, Trash } from 'phosphor-react'
import styles from './Comment.module.css'

export function Comment() {
  return (
    <div className={styles.comment}>
      <img
        src="https://avatars.githubusercontent.com/u/98029329?v=4"
      />
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Alan Fabrício</strong>
              <time title='23 de Fevereiro às 26:50' dateTime='2024-02-23 16:50'>
                Cerca de 1h atrás
              </time>
            </div>
            <button title='Deletar comentário'>
              <Trash size={24}/>
            </button>
          </header>
          <p>Muito bom, prabéns!!</p>
        </div>
        <footer>
          <button>
            <ThumbsUp/>
            Aplaudir
            <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  )
}