import styles from './page.module.scss'
import { projects } from '../../data';
import Double from '../../components/double';

export default function Project() {
  return (
    <div className={styles.main}>
      <h1 className={styles.text}>Experience.</h1>
      <div className={styles.gallery}>
        <Double projects={[projects[0], projects[1]]}/>
        <Double projects={[projects[2], projects[3]]} reversed={true}/>
        <Double projects={[projects[4], projects[5]]}/>
        <Double projects={[projects[6], projects[7]]} reversed={true}/>
        <Double projects={[projects[8], projects[9]]}/>
      </div>
    </div>
  );
}
