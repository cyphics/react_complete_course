import './index.css'
import Ex1 from "./Ex1/Ex1";

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
      <div>
          {/*<NavBar selector={pageSelectionHandler}/>*/}
          {/*<ExpensesApp></ExpensesApp>*/}
          {/*<Tasks></Tasks>*/}
          <Ex1></Ex1>
      </div>
    )
}

export default App;