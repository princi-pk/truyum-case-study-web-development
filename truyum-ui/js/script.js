function validate(){
		var jname=document.getElementById("iname").value;
		var jprice=document.getElementById("iprice").value;
		var jdateoflaunch=document.getElementById("idate-of-launch").value;
		var jcategory=document.getElementById("icategory").value;
		if(jname==="" || jname.length==0){
			alert("Title is required");
			return false;
		}
		if(jname.length < 2 || name.length > 65){
			alert("Title should have 2 to 65 characters");
			return false;
		}
		if(jprice===""){
			alert("Price is required");
			return false;
		}
		if(!(jprice.match(/^[0-9]+$/))){
			alert("Price has to be a number");
			return false;
		}
		if(jdateoflaunch===""){
			alert("Date of launch is required");
			return false;
		}
		if(jcategory==""){
			alert("Select one category");
			return false;
		}
}