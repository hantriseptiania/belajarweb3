import React, { Component } from 'react';

class Registrasi extends Component {
	constructor(props){
		super(props)
		this.state = {
			// judul: 'Contoh Judul',
			// contohPerubahan:  'judul yang akan dirubah',
			// valueInput:'',
			// valueInput2:'',
			// valueInput3:'',
			// valueInput4:'',
			valueFirstName:'',
			valueLastName:'',
			valueAlamat:'',
			valueKodePos:''

		}
		// this.ubahState = this.ubahState.bind(this)
		// this.ubahState2 = this.ubahState2.bind(this)
		// this.ubahState3 = this.ubahState3.bind(this)
		// this.ubahState4 = this.ubahState4.bind(this)
		this.ubahState = this.ubahState.bind(this)
	}

	// ubahState(e){
	// 	e.preventDefault()
	// 	console.log(e.target.value)
	// 	this.setState({valueInput:e.target.value})
	// }
	// ubahState2(e){
	// 	e.preventDefault()
	// 	console.log(e.target.value)
	// 	this.setState({valueInput2:e.target.value})
	// }
	// ubahState3(e){
	// 	e.preventDefault()
	// 	console.log(e.target.value)
	// 	this.setState({valueInput3:e.target.value})

	// }
	// ubahState4(e){
	// 	e.preventDefault()
	// 	console.log(e.target.value)
	// 	this.setState({valueInput4:e.target.value})

	ubahState(namaValue,e){
		e.preventDefault()

		//perubahan state secara reguler
		// this.setState({[namaValue]:e.target.value})

		//perubahan state secara asynchonus
		var tampungData = e.tagert.value
		this.setState(function(state, props){
			return {
				[namaValue] : tampungData
			}
		});
	}
	
		// console.log(e.target.value)
		
		// perubahan state secara synchronous / reguler
		// this.setState({judul: 'Merubah Judul secara reguler'})
	

		// perubahan state secara asynchronous ditulis dengan cara arrow function
		// this.setState((state, props) =>({
		// 	judul: state.contohPerubahan
		// }))

			//perubahan state secara asynchronous ditulis dengan cara reguler function
			// this.setState(function(state, props){
// 			// 	return{
// 					judul :state.contohPerubahan
// 				}
// 			});
// )
	render(){
		return(
			<div>
			{
			// <button type="button" onClick={(e)=>this.ubahState(e)}Klik Untuk Berubah>/button>//
			// <input onChange={this.ubahState}/>
			
			// <h5> Contoh 1</h5>
	  //       <p>{this.state.valueInput}</p>
			// <input value={this.state.valueInput} onChange={(e)=>this.ubahState(e)}/>
			// <h5>==================</h5>

			// <h5>Contoh 2</h5>
			// <p>{this.state.valueInput2}</p>
			// <input value={this.state.valueInput2} onChange={(e)=>this.ubahState2(e)}/>
			// <h5>==================</h5>

			// <h5>Contoh 3</h5>
			// <p>{this.state.valueInput3}</p>
			// <input value={this.state.valueInput3} onChange={(e)=>this.ubahState3(e)}/>
			// <h5>==================</h5>
			
			// <h5>Contoh 4</h5>
			// <p>{this.state.valueInput4}</p>
			// <input value={this.state.valueInput4} onChange={(e)=>this.ubahState4(e)}/>
			// </div>
			}

			<h5>Contoh 1</h5>
			<p>{this.state.valueFirstName}</p>
			<input value={this.state.valueFirstName} onChange={(e)=>this.ubahState("valueFirstName", e)}/>
			<h5>==================</h5>

			<h5>Contoh 2</h5>
			<p>{this.state.valueLastName}</p>
			<input value={this.state.valueLastName} onChange={(e)=>this.ubahState("valueLastName", e)}/>
			<h5>==================</h5>

			<h5>Contoh 3</h5>
			<p>{this.state.valueAlamat}</p>
			<input value={this.state.valueAlamat} onChange={(e)=>this.ubahState("valueAlamat", e)}/>
			<h5>==================</h5>
			
			<h5>Contoh 4</h5>
			<p>{this.state.valueKodePos}</p>
			<input value={this.state.valueKodePos} onChange={(e)=>this.ubahState("valueKodePos", e)}/>
			</div>


			)
	}
}

export default Registrasi;