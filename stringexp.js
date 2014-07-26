 
var stringoperations = function () {
var optionarr = document.getElementById("options");
var optval = optionarr.options[optionarr.selectedIndex].text;
var strtind = document.getElementById("startindex");
var endind = document.getElementById("endindex");

var str1 = document.getElementById("ipstring1");
var str2 = document.getElementById("ipstring2");
var str3= document.getElementById("ipstring3");

var res = document.getElementById("opstring");
 
var s1 = new string_exp(str1.value);
var s2 = new string_exp(str2.value);
switch(optval)
    {
    	case "Length":		
    		res.value = s1.strlength;
	    break;
	    case "Concate":
	    	res.value = s1.concatenation(s2);
	    break;
	    case "SubString":
	   		res.value = s1.mysubstring(strtind.value,endind.value);
	     break;
	     case "CharAt":
	     res.value = s1.charat(strtind.value);
	     break;

	     case "indexof":
	     res.value = s1.indexof(str2.value);
	     break;

	     case "lastindexof":
	     res.value = s1.lastindexof(str2.value);
	     break;

	     case "Replace":
	     res.value = s1.myreplace(str2.value,str3.value);
	     break;


    }
}



function string_exp(value){
	this.value=value;
	this.strlength=strlength.call(this);
    
    this.concatenation = function(secondString) {
     return this.value + secondString.value;
 	}
 	this.mysubstring = function(start,end){
 		var i =0;
 		var temp="";
		
 		if(end==="")
 		{
 			end=this.strlength;
 		}
		
		if(start<0||end<0||start>end)
			throw "Incorrect value";
		
 		for (i=start;i<end;i++)
 			temp+=this.value[i];
 		return temp;
 	}

 	this.charat = function(strindex){
 		if (this.strlength<strindex || strindex<0)
 			throw "Enter proper index";
 		var temp = this.value[strindex];
 		return temp;
 	}

 	this.indexof= function (char){
		c = new string_exp(char);
 		var ind =0; 
		var j=0;
		
		for (var i = 0; this.value[i] !==undefined; i++) 
		{
			 if(this.value[i]===c.value[j])
			 {
				  ind=i;
					j++;
				  if(j===c.strlength)
				  {
					 break;
				  }
			 }

		}
		if(c.strlength>1){
				ind -=c.strlength-1;
		}

			return ind;
 		}

 	this.lastindexof = function(val){
 		var i =this.strlength;
 		var resultindex=0;
 		while(i>=0)
 		{
 			if(this.value[i]===val)
 				return i;
 			i--;
 		}
 	}


 	 this.myreplace = function(searchstr,replacestr){
 	 	var str = this.value;
        var ind = str.indexOf(searchstr);
        var newstr="";
        var temp = replacestr;
        var lastind = ind + searchstr.length;
        for(var i =0;i<ind;i++)
            newstr+=this.value[i];
        newstr += replacestr;
        for(var j = lastind;j<this.strlength;j++)
            newstr+= this.value[j];
        return newstr;
    }
 	
}

var strlength = function()
{
	var i=0;
    	 while(this.value[i]!==undefined)
    	   i++;
    return i;
}   



 
   


