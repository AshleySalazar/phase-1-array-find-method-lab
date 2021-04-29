function superbowlWin(wins){ 
    const result = wins.find(win => win.result === "W" );
   if (result){
       return result.year 
   }
   else return undefined;
  
   
}
 
