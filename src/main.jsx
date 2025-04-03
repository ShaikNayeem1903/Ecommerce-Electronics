import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
import { store } from './pages/store.js'
import { ToastContainer } from 'react-toastify'
import Context from './pages/context.jsx'


createRoot(document.getElementById('root')).render(

    <Provider store={store}>
 
    <Context>
    <App />
    <ToastContainer/>
    </Context>

    </Provider>

)
