//day 8!

const input =
`nop +0
acc +1
jmp +4
acc +3
jmp -3
acc -99
acc +1
jmp -4
acc +6`

const instructions = input.split("\n")


const gameConsole = (() => {
  let accumulator = 0
  let memory = [];
  let line;
  const display = () => {
    return accumulator
  }
  const acc = (arg) => {
    accumulator += arg;
    console.log(accumulator);
  }

  const jmp = (arg) => {
    line += arg
  }

  const nop = (arg) => {
    //do nothing
  }

  const play = (instructions) =>{
    for (line = 0; line < instructions.length; line++){

      if (memory.includes(line)) {
        console.log(memory, " is duplicate");
        console.log(accumulator);
        return accumulator;
      }
      memory.push(line);

      let instruction = instructions[line] 
      command  = instruction.slice(0, 3);
      argument = Number(instruction.slice(instruction.indexOf(" ")))
      // console.log(command, argument);
      switch (command) {
        case "acc":
          acc(argument);
          break;
        case "jmp":
          jmp(argument-1);
          break;
        case "nop":
          nop(argument);
          break;
        default:
          console.log("couldn't understand command ",command,", argument ",argument)
      }
    }
  }

  return {
    play
  }

})();

gameConsole.play(instructions);

//for part 2...

//I need to run the code, then as long as it comes back without running the final line
//switch each nop and jmp line
//until the final line is run