import ClickMe from "./components/ClickMe";
import Counter from "./components/counter/Counter";
import Search from "./components/customhooks/debouce/Search";
import Show from "./components/customhooks/Show";
import UseCustom from "./components/customhooks/useCustom";
import FetchComments from "./components/fetchdata/FetchComments";
import LoginForm from "./components/form/LoginForm";
import Profile from "./components/Profile";
import UseRef from "./components/UseRef";


export default function App(){

  return (
    <>
    <Profile />
    <UseRef />
    <ClickMe />
    <UseCustom />
    <Show />
    {/*<Counter />
    <FetchComments />
    <Search /> */}
    <LoginForm />
    </>
  )
}