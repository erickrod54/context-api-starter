import React from "react";
import { AppContext } from "../context";

/** Context-api-app version 2 - 'FirstComponent' Component -
 *  Features: 
 *  
 *          ---> Getting props by destructure them
 *               throught the provider and render them.
 * 
 * Notes: a single piece of data can be render just place in
 * it.
 * 
 * A data set instead have to be mapped because is and array
 * of data, elements, objects, etc.
 * 
 * */

const FirstComponent = () => {

    /**here i destructure the data */
   const { dataSet, singleData } = React.useContext(AppContext)

    console.log('this is provided on FirstComponent ==> ', dataSet )
    
    return(
        <>
            <h2 className="title-span">First Component</h2>
            <h3> I provided a data using context:</h3>
            {/**here i place it to render */}
            <h4><span className="single-data-span">A single data: </span>{singleData}</h4>

            <h4>A 'dataSet' data: </h4>
            {/**here i mapped to render the data set */}
            {dataSet.map((item) => {
                const { id, text, comment } = item;
                return(
                    <div key={id}>
                        <h5> Item # {id}</h5>
                        <h5> <span className="description-span">the content is:</span></h5>
                        <h6>{text}</h6>
                        <h5> A comment for the item: {comment}</h5>
                    </div>
                )
            })}
        </>
    )
}

export default FirstComponent