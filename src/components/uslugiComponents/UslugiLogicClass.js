import { data } from "../../state/data";
import { changeUrl } from "../../state/functions";

export class UslugiLogicClass {

  completedTeamCount = 0;

  constructor(team1 = [], team2 = []) {
    this.team1 = team1;
    this.team2 = team2;
    
    //this.paragraph1 = document.querySelector('.paragraph1');
    
    // this.func1Callback = function func1 (event)  {
    //   changeUrl('chartpage');
    // };
    
  }

  //---------------------------------------------------------------------------------
  getAllCivs(civs) {
    return civs;
  }
}