import React, {Component} from 'react';

const min = 1;
const max = 100;
const rand1 = min + Math.floor(Math.random()*(max-min)); 
const rand2 = min + Math.floor(Math.random()*(max-min)); 

class Add extends Component {
    
    render() {
        return(
            <div>
                <div className="add">
                    <p className='question'> Add the following two numbers : </p>
                    <div className='nums'>
                        <div className="num">{rand1} + {rand2} =  </div>                       
                        <div className="ans"><input type="number"/></div>
                    </div>
                </div>               
                <div className="submit">
                    <button>Submit</button>
                </div>
            </div>
        );
    }
}
export default Add;