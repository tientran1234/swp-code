import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    
    <App />
    </BrowserRouter>
  </React.StrictMode>,
)

// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import { Provider } from 'react-redux'

// import App from './App.jsx'
// import store from './redux/store.jsx'


// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.Fragment>
//     <Provider store={store}>
//     <BrowserRouter>
//     <App />
//     </BrowserRouter>
//     </Provider>
//   </React.Fragment>,
// )
