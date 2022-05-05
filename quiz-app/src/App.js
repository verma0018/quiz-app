import React, { useEffect } from 'react'
import { BrowserRouter as Router , Route, Routes , Navigate} from 'react-router-dom'
import Auth from './components/Auth/Auth';
import Dashboard from './components/Dashboard/Dashboard';
import store from './store';

function App(){

  useEffect(() =>{
    if(localStorage.getItem('_ID')){
      axios.get(`/api/users/${localStorage.getItem('_ID')}`).then(res => {
        store.dispatch({
          user: res.data.user,
          type: 'set_user'
        })
      }).catch((er) => {
        console.log(er)
      })
    }
  })

    return (  
      <div className="App">
        <Router>
          <Routes>
              <Route exact path="/" element={<Auth />}/>
              <Route path="/dashboard" element={<Dashboard />}/>
              
              <Route exact path="*" element={<Navigate to="/" />}></Route>
          </Routes>
        </Router>
      </div>
    );
  }

  


export default App;
