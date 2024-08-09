
function getFormvalue(event) {
	event.preventDefault()
	let a=document.getElementById("fn").value
	let b=document.getElementById("sn").value
	let c=a.concat(" ",b)

	alert(c) // or alert(a+" " +b) 
    //Write your code here

}
