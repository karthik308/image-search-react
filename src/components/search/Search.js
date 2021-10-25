import React,{Component} from 'react';
import axios from 'axios';
import ImageResults from "../imageResults/imageResults";
import "./search.css"
class Search extends Component{
    state={
        searchText:'',
        apiUrl:'https://pixabay.com/api',
        apiKey:'24021082-0f0e9fa0b681349f6c1439a21',
        images:[]
    };
    onTextChange=(e)=>{
        const val=e.target.value;
        this.setState({[e.target.name]:val},()=>{
            if(val==='')
            {
                this.setState({images:[]});
            }
            else{
            axios
            .get(
                `${this.state.apiUrl}/?key=${this.state.apiKey}&q=${
                    this.state.searchText
                }&image_type=photo&safesearch=true`
            )
            .then(res=>this.setState({images:res.data.hits}))
            .catch(err=>console.log(err));
            }
        });
    };
    render(){
        console.log(this.state.images);
        return(
            <div>
            <input type="text" 
            className="searchipt"
        placeholder="Search for images"
        name="searchText"
        value={this.state.searchText}
        onChange={this.onTextChange}
             />
<br />
{this.state.images.length>0?(<ImageResults images={this.state.images}/>):null}
            </div>

        )
    }
}



export default Search;