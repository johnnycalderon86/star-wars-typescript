import React,{useState} from 'react'
import Navbar from './Navbar'
import People from './People'
import Planets from './Planets'



const Header = () => {


 const [page, setPage] = useState("People")

    return (
        <div className="header">
        <h1 className="headerTitle">Star Wars</h1>
        <Navbar page={page} setPage={setPage} />
        <div className="content">
  
          {page === "People" ? <People /> : <Planets />}
  
  
        </div>
        </div>
    )
}

export default Header