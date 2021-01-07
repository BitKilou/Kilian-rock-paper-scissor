// I will declare here all my variables.
let userScore = 0;
let computerScore = 0;
let userScore_span = document.getElementById("user-score");
let computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const scissors_div = document.getElementById("scissors");
const paper_div = document.getElementById("paper");
const rock_div = document.getElementById("rock");

const openBtn = document.getElementById("open");
const closeBtn = document.getElementById("close");
const modal = document.getElementById("modal");

// Getting the random choice from the computer.
function getComputerChoice()
  {
    const choices = ["rock", "paper", "scissors"];
    const randomNumber = Math.floor(Math.random()*3);
    return choices[randomNumber];
  }

//Win function.
  function Win(userChoice, computerChoice)
    {
      //let's display who picks what!
      const smallUserTag = "user".fontsize(3).sup();
      const smallCompTag = "comp".fontsize(3).sup();
      const userChoice_div = document.getElementById(userChoice);
      const computerChoice_div = document.getElementById(getComputerChoice());
      userScore++;
      userScore_span.innerHTML = userScore;
      computerScore_span.innerHTML = computerScore;
      result_p.innerHTML = userChoice + smallUserTag + " beats " + computerChoice + smallCompTag + " You WIN !!!";
        // wanted to use a function for the colors, tried but didn't work(see end);
      document.getElementById(userChoice).classList.add("green-glow");
      document.getElementById(computerChoice).classList.add("red-glow");
      setTimeout(function()
        {
          document.getElementById(userChoice).classList.remove("green-glow");
          document.getElementById(computerChoice).classList.remove("red-glow");
        }, 800);
    }

//Lose function.
  function Lose(userChoice, computerChoice)
    {
      const smallUserTag = "user".fontsize(3).sup();
      const smallCompTag = "comp".fontsize(3).sup();
      const userChoice_div = document.getElementById(userChoice);
      const computerChoice_div = document.getElementById(getComputerChoice());
      computerScore++;
      userScore_span.innerHTML = userScore;
      computerScore_span.innerHTML = computerScore;
      result_p.innerHTML = userChoice + smallUserTag + " loses to " + computerChoice + smallCompTag + " You lost....";
      // wanted to use a function for the colors, tried but didn't work(see end);
      document.getElementById(userChoice).classList.add("red-glow");
      document.getElementById(computerChoice).classList.add("green-glow");
      setTimeout(function()
        {
          document.getElementById(userChoice).classList.remove("red-glow");
          document.getElementById(computerChoice).classList.remove("green-glow");
        }, 800);
    }


  function Draw(userChoice, computerChoice)
    {
      const smallUserTag = "user".fontsize(3).sup();
      const smallCompTag = "comp".fontsize(3).sup();
      const userChoice_div = document.getElementById(userChoice);
      const computerChoice_div = document.getElementById(getComputerChoice());
      result_p.innerHTML = userChoice + smallUserTag + " equals " + computerChoice + smallCompTag + " It's a draw...";
      // wanted to use a function for the colors, tried but didn't work(see end);
      document.getElementById(userChoice).classList.add("yellow-glow");
      document.getElementById(computerChoice).classList.add("yellow-glow");
      setTimeout(function()
        {
          document.getElementById(userChoice).classList.remove("yellow-glow");
          document.getElementById(computerChoice).classList.remove("yellow-glow");
        }, 800);
    }

//let's create the game using cases and concatenating;
function game(userChoice)
  {
    const computerChoice = getComputerChoice();
  switch (userChoice + computerChoice)
    {
      case "rockscissors":
      case "paperrock":
      case "scissorspaper":
      Win(userChoice, computerChoice);
        break;
      case "rockpaper":
      case "paperscissors":
      case "scissorsrock":
      Lose(userChoice, computerChoice);
        break;
      case "rockrock":
      case "paperpaper":
      case "scissorsscissors":
      Draw(userChoice, computerChoice);
        break;
    }
  }


function main()
{
  rock_div.addEventListener("click", function()
    {
      game("rock");
    });

  paper_div.addEventListener("click", function()
    {
      game("paper");
    });

  scissors_div.addEventListener("click", function()
    {
      game("scissors");
    });
}

main();


 // Create the rules display buttons
openBtn.addEventListener("click", function()
{
  modal.style.display = "flex";
  openBtn.style.display = "none";
});

closeBtn.addEventListener("click", function()
{
  modal.style.display = "none";
  openBtn.style.display = "flex";
});

  // Hate how i made the function reset, but it works haha!
function reset()
{
  resetBtn.addEventListener("click", function()
        {
          userScore = " ";
          computerScore = " ";
          userScore = 0;
          computerScore = 0;
          userScore_span.innerHTML = userScore;
          computerScore_span.innerHTML = computerScore;
         })
}
  reset();

  /*  I tried for 2 days to get this function right.... Do you know what is wrong ?
      I am trying to display the color green for the winner and red for loser.
      Tried to debug. Everything seems to work but the color won't change....
      Managed to do it directly in the functions Win, lose, draw, but i wanted to do it cleaner with a specific function.
  function getColorGlow(winner, loser)
    {
      if (winner === loser)
      {
         rock.classList.add("blue-glow");
         scissors.classList.add("blue-glow");
         paper.classList.add("blue-glow");
      }
      else
      {
        if (winner === "rock")
          {rock.classList.add("green-glow");
          console.log("A win")}
        if (winner === "paper")
          {paper.classList.add("green-glow");
          console.log("B win")}
        if (winner === "scissors")
          {scissors.classList.add("green-glow");
        console.log("C win")}

        if (loser === "rock")
          {rock.classList.add("red-glow");
          console.log("A loser")}
        if (loser === "paper")
          {paper.classList.add("red-glow");
          console.log("B loser")}
        if (loser === "scissors")
          {scissors.classList.add("red-glow");
        console.log("C loser")}
      }

      setTimeout(function()
            {
              console.log("aaaa");
              rock.classList.add("yellow-glow");
              paper.classList.add("yellow-glow");
              scissors.classList.add("yellow-glow");
            }, 2000);
    }
  */
