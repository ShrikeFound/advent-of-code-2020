const Ship = (() => {
  let heading = "east"
  const move = () => {
    console.log(heading)
  }

  return {
    move
  }
})();

Ship.move();