import './index.css'
import Ex1 from "./Ex1/Ex1";
import {Fragment} from "react";

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
          <Ex1></Ex1>
      </Fragment>
    )
}

export default App;