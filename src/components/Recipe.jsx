import React from "react"
import ReactMarkdown from 'react-markdown'
import remarkGfm from "remark-gfm";
function Recipe(props)
{
    return( 
        <main>
        <div className="suggested-recipe-container">
        <h2>Here's Your Recipe!</h2>
        <div ><ReactMarkdown remarkPlugins={[remarkGfm]}>
                {props.cook}
            </ReactMarkdown></div>
            <h3>Enjoy Your foodddd!!!</h3>
            </div>
            </main>
    )
}
export default Recipe