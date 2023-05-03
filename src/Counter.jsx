import React from 'react';
class Counter extends React.Component{
    constructor(props){
      super(props);
      this.state={
        dummystate:'dummy',
        count:0,
      };
      console.log('inside constructor');
      this.increment=this.increment.bind(this);
    }
    increment(){
    //   const previousCount=this.state.count;
        this.setState((prevstate)=>({
                ...prevstate,
                count : prevstate.count+1
        
        }))
        console.log("updating state",this.state)

    }
render(){
   
    console.log('renderingggg');
    const{count}=this.state;
    const {componentName} = this.props;
    return (
    <div>
       <h1>{componentName}</h1> 
        <div>
            <button onClick={this.increment}>+</button>
            <p>{count}</p>
            <button>-</button>
        </div>
    </div>

    );
}

}
export default Counter;