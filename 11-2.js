//day 11!
//Copied for Part 2

const input = 
`L.LL.LL.LL
LLLLLLL.LL
L.L.L..L..
LLLL.LL.LL
L.LL.LL.LL
L.LLLLL.LL
..L.L.....
LLLLLLLLLL
L.LLLLLL.L
L.LLLLL.LL`.split("\n")

let seats = input.map(function (v) {
  return v.split("")
});

// console.log(seats);

const seatEmpty = (row, col) =>{
  if (seats[row]) {
    if (seats[row][col]) {
      if (seats[row][col] === "#") {
        return false
      }
    }
  }
  return true
  
}

const numEmptySeats = (row, col) => {
  let numEmpty = 0
  if (seatEmpty(row - 1, col)) numEmpty += 1; // console.log(seat[row-1][col])   // top
  if (seatEmpty(row, col - 1)) numEmpty += 1; // console.log(seats[row][col-1])   // left
  if (seatEmpty(row, col + 1)) numEmpty += 1; // console.log(seats[row][col + 1]) // right
  if (seatEmpty(row + 1, col)) numEmpty += 1; // console.log(seats[row+1][col])   // bottom

  if (seatEmpty(row + 1,col + 1)) numEmpty += 1; // console.log(seats[row + 1][col + 1]) // bottom right
  if (seatEmpty(row + 1,col - 1)) numEmpty += 1; // console.log(seats[row + 1][col - 1]) // bottom left
  if (seatEmpty(row - 1,col - 1)) numEmpty += 1; // console.log(seats[row - 1][col - 1]) // top left
  if (seatEmpty(row - 1,col + 1)) numEmpty += 1; // console.log(seats[row - 1][col + 1]) // top right
  return numEmpty
}
let newSeats = []
let changing = true

while (changing) {
  changing = false;
  for (let row = 0; row < seats.length; row++){

    newSeats.push([])
    // console.log(newSeats)
    for (let col = 0; col < seats[row].length; col++) {
      // console.log(seats[row][col]);
      seat = seats[row][col]
      newSeat = ""
      //if seat is empty and
      //there are no occupied seats adjacent, now occupied
      if (seat === "L" && numEmptySeats(row, col) === 8) {
        newSeat = "#"
        changing = true;
      //if seat is occupied and >4 seats are occupied, now empty.
      } else if (seat === "#" && numEmptySeats(row, col) <= 4) {
        newSeat = "L"
        changing = true;
      //else copy as is
      } else {
        newSeat = seat
      }
      newSeats[row][col] = newSeat
    } 

  }
  seats = newSeats
  newSeats = []
}
console.log(seats.join("").match(/#/g).length)
console.log("finished!");