import dark from './scss/Dark/app.scss'
import light from './scss/Light/app.scss'
import Header from "./components/Header";
import React, {createContext} from "react";
import {Route, Routes} from "react-router-dom";
import Home from "./Pages/Home";
import Game from "./Pages/Game";
import Check from "./Pages/Check";
import NotFound from "./components/NotFound/NotFound";

export const Context = createContext('')

function App() {
  const [theme, setTheme] = React.useState('')
  let text = 'HTML-элемент шаблона контента это механизм для отложенного создания клиентского контента, который не отображается во время загрузки страницы, но может быть инициализирован при помощи JavaScript.'
  return (
    <Context.Provider  value={{theme, setTheme}}>
      <div className="wrapper" >
        <Header />
        <div className="content">
          <Routes>
            <Route path={'/'} element={<Home />}/>
            <Route path={'/game'} element={<Game text={text}/>}/>
            <Route path={'/check'} element={<Check/>}/>
            <Route path={'*'} element={<NotFound/>}/>
          </Routes>
        </div>
      </div>
    </Context.Provider>
      );
}

export default App;
