import './index.css'
import {Fragment} from "react";
import DummyLogin from "./DummyLogin/DummyLogin";

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
          <DummyLogin/>
      </Fragment>
    )
}

export default App;