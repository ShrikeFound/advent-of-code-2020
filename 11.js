//day 11!

const input = 
`L#LL.LL.LL
LLLLLLL.LL
L.L.L..L..
LLLL.LL.LL
L.LL.LL.LL
L.LLLLL.LL
..L.L.....
LLLLLLLLLL
L.LLLLLL.L
L.LLLLL.LL`.split("\n")

const seats = input.map(function (v) {
  return v.split("")
});

const seatEmpty = (row, col) =>{
  if (seats[row]) {
    if (seats[row][col]) {
      if (seats[row][col] !== "#") {
        console.log("seat ", row," ",col, "is empty");
      } else {
        console.log("seat ", row," ",col, "is NOT empty");
      }
    }
  }
  // console.log("seat ", row," ",col, "is empty");
}

const adjacentSeatsEmpty = (row,col) => {
  console.log(seats[row][col]) //center
  seatEmpty(row-1,col) // console.log(seat[row-1][col])   // top
  seatEmpty(row,col-1) // console.log(seats[row][col-1])   // left
  seatEmpty(row,col+1) // console.log(seats[row][col + 1]) // right
  seatEmpty(row+1,col) // console.log(seats[row+1][col])   // bottom

  seatEmpty(row + 1,col + 1) // console.log(seats[row + 1][col + 1]) // bottom right
  seatEmpty(row + 1,col - 1) // console.log(seats[row + 1][col - 1]) // bottom left
  seatEmpty(row - 1,col - 1) // console.log(seats[row - 1][col - 1]) // top left
  seatEmpty(row - 1,col + 1) // console.log(seats[row - 1][col + 1]) // top right

}


for (let row = 0; row < seats.length; row++){
  for (let col = 0; col < seats[row].length; col++){
    console.log(row, col);
    if (seats[row][col] === "L") {
      adjacentSeatsEmpty(row, col);
    } else if (seats[row][col] === "#") {
      // console.log("seat's occupied!");
    }
      break    
  }
  break
}