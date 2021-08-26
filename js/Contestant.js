class Contestant {
  constructor(){
    this.index = null;
    this.answer = 0;
    this.name = null;
  }

  getCount(){
    var contestantCountRef = database.ref('contestantCount');
    contestantCountRef.on("value",(data)=>{
      contestantCount = data.val();
    })
  }

  updateCount(count){
    database.ref('/').update({
      contestantCount: count
    });
  }

  getContestantsInfo(){
    if(allContestants !== undefined){
      fill(blue)
      textSize(20)
      text("*Note, Contestants who answered correct are highlight in green color", 130,230)
    }
    for(var plr in allContestants){
      var correctAns = 2
      if(correctAns === allContestants[plr].answer)
       fill("Green")
       else
       fill("Red")
    }
  }

  update(){
    var contestantIndex = "contestants/contestant" + this.index;
    database.ref(contestantIndex).set({
      name:this.name,
      answer:this.answer
    });
  }

  static getPlayerInfo(){
    var contestantInfoRef = database.ref('contestants');
    contestantInfoRef.on("value",(data)=>{
      allContestants = data.val();
    })
  }
}
