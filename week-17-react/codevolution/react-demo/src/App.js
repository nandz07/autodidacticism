
import './App.css';
// import Form from './components/Form';
import './components/appStyle.css'
import PostList from './components/PostList'
// import styles from './components/appStyle.module.css'
// import Inline from './components/Inline';
// import NameList from './components/NameList';
// import Sheet from './components/Sheet';
// import Greet from './components/Great'
// import Message from './components/Message'
// import ClickHandler from './components/ClickHandler'
// import ParantComponent from "./components/ParentComponent"
// import UserGreeting from './components/UserGreeting';

function App() {
  return (
    <div className="App">
      {/* <Greet name='chottu' age='17' />
      <Greet name='appu' age='13' >
        <button>click</button>
      </Greet>
      <Greet name='kannan' age='25' >
        <p>this is children props</p>
      </Greet> */}

      {/* <ClickHandler></ClickHandler> */}
      {/* <ParantComponent></ParantComponent> */}
      {/* <UserGreeting></UserGreeting> */}
      {/* <NameList></NameList> */}
      {/* <Sheet></Sheet> */}
      {/* <Inline></Inline>
      <h1 className="error">error</h1>
      <h1 className={styles.success}>success</h1> */}
      {/* <Form></Form> */}
      <PostList></PostList>
      
      
    </div>
  );
}

export default App;
