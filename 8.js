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


instructions = input.split("\n")

const gameConsole = (() => {
  let acc = 0;
  let memory = [];

  const play = (instructions) =>{
    for (let i = 0; i < instructions.length;){
      if (memory.includes(i)) {
        return acc;
      }
      memory.push(i);
      const instruction = instructions[i]
      const command     = instruction.slice(0, instruction.indexOf(" "))
      const argument     = Number(instruction.slice(instruction.indexOf(" ")))
      console.log(command, ": ", argument);
      switch (command) {
        case "acc":
          acc += argument;
          i++;
          break;
        case "nop":
          i++;
          break;
        case "jmp":
          i += argument;
          break;
        default:
          console.log("I don't know what I'm doing.");
          return;
      }
    }
  }
  return {
    play
  }
})();


console.log(gameConsole.play(instructions));
