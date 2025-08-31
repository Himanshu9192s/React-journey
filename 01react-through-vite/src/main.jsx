import React, { Children } from 'react'
import ReactDOM from 'react-dom/client'
import Another from './Another.jsx'

function Myapp() {
    return(
      <div>
        <h1>you are me</h1>
        <h2>h2 tag ha</h2>

      </div>
    )
  
}


const Reactelement = React.createElement( 
    'a',
    {href: 'https://google.com', target: '_blank'},
         'click here to open google'
)


const Anotherelement = (

  <a href="https://google.com" target ='_blank' > visit goolgle</a>

)




const render = ReactDOM.createRoot(document.getElementById('root'));

render.render(
  // Reactelement
  <>
   
     <Another/>
    
</>
)

