import React from 'react'


function Search (props)
{  const { handleInput, chercher } = props;
    return(

<section className="searchbox-wrap">
<input type="text" placeholder="Search for a movie..." className="searchbox" onChange={handleInput}	onKeyPress={chercher}/>

</section>
)

}
export default Search