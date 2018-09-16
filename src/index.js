module.exports = function check(str, bracketsConfig) {

  let stAr = str.split('');

  for (let i = 0; i < stAr.length;i++){

   	if(stAr[i+1] != undefined && stAr[i] != undefined){

   		if ( (stAr[i] == '|' && stAr[i+1] == '|') || stAr[i] != stAr[i+1] || (stAr[i] == '8' && stAr[i+1] == '8') || (stAr[i] == '7' && stAr[i+1] == '7')){

   		for (let j = 0; j < bracketsConfig.length;j++){
   			for (let r = 0; r < bracketsConfig[j].length; r++){

   				if(stAr[i] == bracketsConfig[j][r] && stAr[i+1] == bracketsConfig[j][r+1]){
            stAr[i] = 0;
            stAr[i+1] = 0;
         
   			for (let g = 0; g <= stAr.length; g++){
         let a = stAr.indexOf(0);
         
   			if ( a >= 0){
          stAr.splice(a,1);
         }
   			}
   			i=-1;
   		}
   			}
   		}
   	}
   	}
   }

   if (stAr.length == 0){
   	return true;
   }else{
     return false;
    }
}