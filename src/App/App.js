import React from "react"
import '../common/style/reset.css'
import '../common/style/base.css'

import Header from './Header/Header'
import Menu from './Menu/Menu'
import Main from './Main/Main'
const App = () => {
    return (
        <div>
            <Header />
            <Menu />
            <Main />
        </div>
    )
    
}
export default App