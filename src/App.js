import './index.css'
import NavBar from "./Navbar";
import Tasks from "./Tasks/Tasks";

const App = () => {
    // const [page, setPage] = useState('tasks');
    const pageSelectionHandler = () => {
        // setPage(newPage)
        // console.log(newPage)
    }
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
          <NavBar selector={pageSelectionHandler}/>
          {/*<ExpensesApp></ExpensesApp>*/}
          <Tasks></Tasks>
      </div>
    )
}

export default App;