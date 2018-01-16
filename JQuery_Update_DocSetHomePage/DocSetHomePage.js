/* ************************************************************************************************************ /
 * PURPOSE: This script wraps the long text of 'Custom Description' column after every 4 , or any other non word character.
 * Created By:	Sanjay Pathak
/**************************************************************************************************************/

function wrapText()
{
	try{
		var description = jQuery('table h3:contains(Custom Description)').closest('td').next('td').next('td').text();
		var newDesc = '';
		// description format "10001,10002,10003,10004,10005,10006||10007,10008,10009,10010,10011,10012,10013,10014||10015,10016,10017"; 
		//check if description has || to split.
		if (description.indexOf("||") >= 0 )
		{			
			var result = description.split('||'); // array of string split by ||			
			
			$.each(result, function(k){              			  	
				  result[k] = splitValue(result[k]);			  
				  newDesc += result[k] + '<br/>';
			   });
			   //console.log(newDesc);		   
			jQuery('table h3:contains(Custom Description)').closest('td').next('td').next('td').html(newDesc);		
		}
		else
		{
			newDesc = splitValue(description);
			jQuery('table h3:contains(Custom Description)').closest('td').next('td').next('td').html(newDesc);		
		}			
			
	}catch(e){
		alert(e);
	}
}

// RegEx to split string after every 4th comma
function splitValue(str) {
	var modifiedStr = '';
	//var splited = str.match(/\b[\w']+(?:[^\w\n]+[\w']+){0,3}\b/g);
	var splited = str.match(/[\w]+([^\w]+[\w]+){0,4}/g); 
	//console.log(splited); 
	if(splited != null)
	{
		for(var i = 0; i< splited.length; i++)
		{
			modifiedStr += splited[i] + "<br/>";
		}
	}	
    return modifiedStr;
}
