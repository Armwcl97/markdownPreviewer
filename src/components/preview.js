import React from 'react';
import {marked} from 'marked';

marked.setOptions({
  breaks:true
})

const renderer = new marked.Renderer();

function Preview({markdown}){
    return(
        <div id="preview" dangerouslySetInnerHTML={{__html: marked(markdown, {renderer:renderer}),}}>
            
        </div>
    )
}

export default Preview;