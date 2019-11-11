/*
  {Name of Route}: {
    path: {the path you want the navigation to go to as a string},
    component: {the assigned identifier of the imported component from bellow},
    disabled: {if you want the element to be unclickable put the boolean value true, and null/fasle/don't include for clickable}
  }
*/
import GetName from './GetName'
import MainGame from './MainGame'

const ROUTES = {
  GetName: {
    path: "/",
    component: GetName,
    disabled: false,
  },
  MainGame: {
    path: "/game",
    component: MainGame,
    disabled: false,
  }
}

export default ROUTES
