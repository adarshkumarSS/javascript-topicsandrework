import './App.css';
// import Welcome from './component/Welcome';
// import Text from './component/Return';
// // import Greet from './component/Greet';
// import Message from './component/Message';
// import Counter from './component/Counter';
// import Function from './component/FunctionClick';
// import FunctionClick from './component/FunctionClick';
// import EventBind from './component/EventBind';
// import ParentComponent from './component/ParentComponent';
// import FunctionList from './component/FunctionList';
// import Stylesheet from './component/Stylesheet';
// import Inline from './component/Inline';
// import './component/Normal.css';
// import style from './component/Normal.module.css'
// import Form from './component/Form'
// import Fragment from './component/Fragment'
// import Table from './component/Table'
// import Purecomponent from './component/Purecomponent';
// import Refsdemo from './component/Refsdemo';
// import Focusinput from './component/Focusinput';
// import FRParentinput from './component/FRParentinput';
// import Portaldemo from './component/Portaldemo';
// import Hero from './component/Hero'
// import ErrorBoudary from './component/ErrorBoudary';
// import Clickcounter from './component/Clickcounter';
// import HoverCounter from './component/HoverCounter';
import Clickcounter2 from './component/Clickcounter2';
import Hovercounter2 from './component/Hovercounter2';
import User from './component/user'

function App() {
  return (
    <div className="App">
      <User render={(count,incrementCount)=>{
        <Clickcounter2 count={count} incrementCount={incrementCount}></Clickcounter2>
      }}></User>
      <User render={(count,incrementCount)=>{
        <Hovercounter2 count={count} incrementCount={incrementCount}></Hovercounter2>
      }}></User>
      {/* <Clickcounter2></Clickcounter2>
      <Hovercounter2></Hovercounter2>
      <User name={(isloggedin) => isloggedin ? 'Adarsh':'Guest'}></User> */}
      {/* <HoverCounter></HoverCounter>
      <Clickcounter></Clickcounter> */}
      {/* <ErrorBoudary>
        <Hero heroname="superman"></Hero>
        <Hero heroname="spiderman"></Hero>
        <Hero heroname="Joker"></Hero>
      </ErrorBoudary> */}
      {/* <Portaldemo></Portaldemo> */}
      {/* <FRParentinput></FRParentinput> */}
      {/* <Focusinput></Focusinput> */}
      {/* <Refsdemo></Refsdemo> */}
      {/* <Purecomponent></Purecomponent> */}
      {/* <Table></Table> */}
      {/* <Fragment></Fragment> */}
      {/* <Form></Form> */}
      {/* <h1 className='error'>Error</h1>
      <h1 className={style.success}>Success</h1>       */}
      {/* <Inline></Inline>
      <Stylesheet className={true}></Stylesheet> */}
      {/* <FunctionList></FunctionList> */}
      {/* <ParentComponent></ParentComponent> */}
      {/* <EventBind></EventBind> */}
      {/* <Counter></Counter>
      <Function></Function> */}
      {/* <Message></Message> */}
      {/* <Text></Text>
      <Greet name="Adarsh">
        <p>I'm Batman</p>
      </Greet>
      <Greet name="Kumar"></Greet>
        <button>Action</button>
      <Greet name="js"></Greet>

      <Welcome name="adarsh" hero="spiderman"> </Welcome>
      <Welcome name="chai" hero="pannerman"> </Welcome>
      <Welcome name="mithles" hero="techiman"> </Welcome> */}
    </div>
  );
}

export default App;
