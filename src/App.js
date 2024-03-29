import './index.css'
import {Fragment} from "react";
import DummyLogin from "./DummyLogin/DummyLogin";
import {AuthContextProvider} from "./DummyLogin/context/auth-context";
import FoodOrder from "./FoodOrder/FoodOrder";
import DBApiFetch from "./DBApiFetch/DBApiFetch";
import CustomHooks from "./CustomHooks/CustomHooks";
import MoreHooks from "./MoreHooks/MoreHooks";
import Forms from "./Forms/Forms";


const App = () => {
    // const [page, setPage] = useState('tasks');
    // let content;
    // switch (page) {
    //     case 'tasks':
    //         content = <div><h1>Tasks</h1></div>
    //         break;
    //     case 'expenses':
    //         content = <ExpensesApp/>
    //         break;
    // }

    return(
      <Fragment>
          {/*<NavBar selector={pageSelectionHandler}/>*/}
          {/*<ExpensesApp></ExpensesApp>*/}
          {/*<Tasks></Tasks>*/}
          {/*<Ex1></Ex1>*/}
          {/*<AuthContextProvider>*/}
          {/*    <DummyLogin/>*/}
          {/*</AuthContextProvider>*/}
          <FoodOrder/>
          {/*<DBApiFetch/>*/}
          {/*<CustomHooks/>*/}
          {/*<MoreHooks/>*/}
          {/*<Forms/>*/}
      </Fragment>
    )
}

export default App;