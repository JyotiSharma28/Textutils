import React,{useState} from 'react'

export default function Textform(props) {

    const handleUpClick=()=>{
        let newtext=text.toUpperCase()
        setText(newtext)
    }

    const handleLoClick=()=>{
        let newtext=text.toLowerCase();
        setText(newtext)
    }

    const handleCleClick=()=>{
        let newtext='';
        setText(newtext)
    }

    const handleOnChange=(event)=>{
        setText(event.target.value)
    }


  const [text,setText]=useState("enter text here");

  return (
    <div className={`text-${props.mode==='light' ? 'dark':'light'}`}>
    <div className='container my-3'>
        <h1>{props.heading}</h1>
     
            <label for="exampleFormControlTextarea1">Example textarea</label>
            <textarea className="form-control" id="exampleFormControlTextarea1" rows="6" value={text} onChange={handleOnChange}></textarea>

        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to Upper case</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleLoClick} style={{marginLeft:'10px'}}>Convert to Lower case</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCleClick} style={{marginLeft:'10px'}}>Clear Text</button>
   
    </div>
    <div className="container">
        <h1>Your text summry</h1>
        <p>{text.split(" ").filter((ele)=>{return ele.length!==0 }).length} words and {text.length} characters</p>
        <p>{0.008 *text.split(" ").filter((ele)=>{return ele.length!==0 }).length} minutes read</p>
        <h2>Preview</h2>
        <p>{text.length>0? text:"enter something so preview it here"}</p>
    </div>
    </div>

  )
}
