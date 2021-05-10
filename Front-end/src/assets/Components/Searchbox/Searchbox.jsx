import React from 'react';
import {TextField,Button} from '@material-ui/core';
import {withStyles} from '@material-ui/styles';
import Autocomplete from '@material-ui/lab/Autocomplete';
import Axios from "axios"
import "../../css/components/Searchbox.css";


const ColorButton = withStyles((theme) => ({
  root: {
    backgroundColor: "#E2826F",
    '&:hover': {
      backgroundColor: "#E2826F",
    },
  },
}))(Button);

const CssTextField = withStyles({
  root: {
    '& label.Mui-focused': {
      color: '#E2826F',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: '#E2826F',
    },
    
  },
})(TextField);

export default function SearchBox({handleAddition}) {
  const [input,setInput]=React.useState('');

  const [result,setResult]=React.useState([]);

  const handleChange=(v)=>{
    setInput(v)
    if(v.length>1){
      Axios.get(`http://www.omdbapi.com/?s=${v}&apikey=1bacbed6&`)
            .then((res)=>{
              if(res.data.Search)
                setResult(res.data.Search);
            })
    }
    else
    setResult([]);
  }
  const handleClick=()=>{
    let temp= input.split(' : ', 2)
    result.map((item)=>{
      if(item.Title===temp[0]&& item.Year===temp[1])
        handleAddition(item)
    })
    setInput("")
  }
  return (
    <div className="searchbox" style={{display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center",marginTop:50}}>
    <Autocomplete
      id="combo-box-demo"
      freeSolo
      onInputChange={(e, v) => { handleChange(v) }}
      value={input}
      options={result.map((option) => option.Title+" : "+option.Year)}
      style={{ width: 300 }}
      renderInput={(params) => <CssTextField {...params} size="small" label="Search" variant="standard" />}
    />
    <ColorButton onClick={handleClick} variant="contained" color="primary"  style={{marginLeft:10,borderRadius:10,height:32,textTransform:"none",fontSize:15}}>Add</ColorButton>
    </div>
  );
}
