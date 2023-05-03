import React from 'react';
class Counter extends React.Component{
    constructor(props){
      super(props);
      this.state={
        dummystate:'dummy',
        count:0,
        user:{},
      };
      console.log('inside constructor');
      this.increment=this.increment.bind(this);
    }
    componentDidMount(){
        console.log("rendering componentdidmount.......")
        fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then((response )=> response.json())
      .then((data) => {
        if(!data){
            return;
        }
        this.setState({
            user:data,
        });
      });
    }
    componentDidUpdate(){
        console.log("rendering  componentDidUpdate.......")
        const {count} = this.state ;
        if(count>10){
            alert("stopppppp");
        }
        else if (count<0) {
            alert("ehhe negative");
        }
       
    }
    increment(incrementBy){
    //we should avoid this when update state is dependent on the prevous state
    // this.setState({
    //    count: this.state.count+3,
    // });
    // this.setState({
    //     count: this.state.count+incrementBy,
    //  });
    if(this.state.count + incrementBy>10){
        alert("cant be proceed");
        return;
    }
 
        this.setState((prevstate)=>({
                ...prevstate,
                count : prevstate.count+incrementBy
        
        }))
        console.log("updating state",this.state)

    }
render(){
   
    console.log('renderingggg');
    const{count,user}=this.state;
    const {componentName} = this.props;
    return (
    <div>
       <h1>{componentName}</h1> 
        <div>
            <button onClick={() => this.increment(1)}>+</button>
            <p>{count}</p>
            <button onClick={() => this.increment(-1)}>-</button>
            <p>{`Title is ${user.title}`}</p>
        </div>
    </div>

    );
}

}
export default Counter;