#! /usr/bin/env node
import inquirer from "inquirer";

const emoj0=[
    "\u{1F9E1}","\u2704 ","\u{1F3C6}",
    "\u{1F3AE}","\u{1F3AF}","\u{1F3B2}",
    "\u{1F9F1}","\u{1F9FB}","\u2702"];
//emojis for intro
const x=Math.floor(Math.random() * 9)
const y=Math.floor(Math.random() * 9)
const z=Math.floor(Math.random() * 9)
console.log(
    '\n \t \t \t ',emoj0[z],emoj0[y],emoj0[x], '#',emoj0[0],
    ' Hi! Lets play Rock_Paper_Scissor together.',
    emoj0[0],'#' ,emoj0[x],emoj0[y],emoj0[z]);

// import emoji's for beautification of game
const emoj1 = ["\u{1F62E}", "\u{1F9F1}", "\u{1F9FB}", "\u2702"]; //tie0, rock1,paper2,scissors3
const emoj2 = [
    "\u{1F600}","\u{1F601}","\u{1F602}",
    "\u{1F603}","\u{1F604}","\u{1F605}",
    "\u{1F606}","\u{1F607}","\u{1F617}",
    "\u{1F609}","\u{1F60A}","\u{1F60B}",
    "\u{1F60D}","\u{1F60E}","\u{1F618}",
    "\u{1F619}","\u{1F61A}","\u{1F61B}",
    "\u{1F61C}","\u{1F61D}"
  ];  const emoj3 = [
      "\u{1F60C}","\u{1F60F}","\u{1F611}","\u{1F612}","\u{1F61E}",
      "\u{1F61F}","\u{1F620}","\u{1F622}","\u{1F623}","\u{1F625}",
      "\u{1F627}","\u{1F629}","\u{1F62A}","\u{1F62B}","\u{1F62C}",
      "\u{1F62D}","\u{1F631}","\u{1F632}","\u{1F633}","\u{1F634}",
      "\u{1F635}","\u{1F636}","\u{1F608}","\u{1F614}","\u{1F615}","\u{1F616}"
]; //random emoji selections
const emj2 = emoj2[Math.floor(Math.random() * 20)]; //happy emoji for comp
const emj3 = emoj3[Math.floor(Math.random() * 26)]; //sad emoji for comp
//for random number assumed by computer
const g_Ph = ["", "            rock   ", "           paper   ", "         scissors  "];
const x1 = Math.floor(Math.random() * 3 + 1);
const rNum = [g_Ph[x1]+ emoj1[x1]];
// console.log(rNum[0])
//for user response
const usrIn = await inquirer.prompt([
  {
    name: "rps",
    type: "list",
    message: "\n \n \t \t I've already selected mine, make your mind HurryUp!? ",
    choices: [g_Ph[1] + emoj1[1], g_Ph[2] + emoj1[2], g_Ph[3] + emoj1[3]],
  },
]);

if (rNum[0] === usrIn.rps) {
  //for tie conditions
  console.log(
    "\n \n \t  Scores is, Mine: ",rNum[0]," , Your's: ",usrIn.rps,//," ",rNum[1]
    "\n \n \t \t Ooo! It's a tie. ",emoj1[0]);
} else if (rNum[0] === g_Ph[1]+ emoj1[1] && usrIn.rps === g_Ph[3] + emoj1[3]) {
  // rock1 wins over scissors3
  console.log("\n \n \t Scores is, Mine: ",rNum[0]," , Your's: ",//" ",rNum[1],
    usrIn.rps,"\n \n \t \t O Yes! you loose. ",emj2
  );
} else if (rNum[0] === g_Ph[3]+ emoj1[3] && usrIn.rps === g_Ph[2] + emoj1[2]) {
  // secissors3 wins over paper2
  console.log("\n \n \t Scores is, Mine: ",rNum[0]," , Your's: ",//" ",rNum[1],
    usrIn.rps,"\n \n \t \t O Yes! you loose. ",emj2
  );
} else if (rNum[0] === g_Ph[2]+ emoj1[2] && usrIn.rps === g_Ph[1] + emoj1[1]) {
  // paper2 wins over rock1
  console.log("\n \n \t Scores is, Mine: ",rNum[0]," , Your's: ",//" ",rNum[1],
    usrIn.rps,"\n \n \t \t O Yes! you loose. ",emj2
  );
} else {
  // for other conditions
  console.log("\n \n \t Scores is, Mine: ",rNum[0],//" ",rNum[1],
    " , Your's: ",usrIn.rps,"\n \n \t \t O No! you win. ",emj3
  );
}
