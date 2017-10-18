import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';


ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();


class HelloWorld extends React.Component{

	render(){
		return (
			<h1>HelloWorld </h1>
			)
	}
}

class FormModule extends React.Component{
	render(){
		return(
			<div>
				<input type="text" name="fname"  placeholder="password"/>
				<input type = "email" name="email" placeholder="password"/>
				<input type = "password" name="password" placeholder="password"/>
				<input type = "submit" value="submit" placeholder="submit"/>
			 </div>
		)
	}
}
ReactDOM.render( <FormModule />, document.getElementById('form1') );

class HelloWorld1 extends React.Component{
     getName(){
     	return "adarsha";
     }
	render(){
		return (
		    <div> 
			<h1>{this.getName()} </h1>
			<HelloWorld />
			</div>
			)
	}
}

ReactDOM.render(<HelloWorld1 /> , document.getElementById('root1'));