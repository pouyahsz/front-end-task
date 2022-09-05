import Card from "./UI/card";
import './styles/index.scss';
import styles from './styles/cardStyle.module.scss';
function App() {
  const DUMMY_INFO = [
    {
      id:"m1",
      title: "Jane Doe",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a volutpat mauris, at molestie lacus. Nam vestibulum sodales odio ut pulvinar",
      level:13,
      points:5312,
      awards:2,
      matches: 27,
      pals:123,
      coffee:"∞",
      color:"linear-gradient(#dE685E, #EE786E)"
    },
    {
      id:"m2",
      title: "Jane Doe",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a volutpat mauris, at molestie lacus. Nam vestibulum sodales odio ut pulvinar",
      level:13,
      points:5312,
      awards:2,
      matches: 27,
      pals:123,
      coffee:"∞",
      color:"linear-gradient(#92bCa6, #A2CCB6)"
    }
    
  ]

  return (
    <div className={styles.cards}>
      {DUMMY_INFO.map((element)=><Card key={element.id} data={element}/>)}
      
    </div>
  );
}

export default App;