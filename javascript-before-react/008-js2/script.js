function handleMouseMove(event) {
  const clientX = event.clientX;
  const clientY = event.clientY;
  console.log(clientX, clientY);
}

function handleMouseMove(event) {
  const { clientX, clientY } = event;
  console.log(clientX, clientY);
}

function handleMouseMove({ clientX, clientY }) {
  console.log(clientX, clientY);
}

document.documentElement.addEventListener('mousemove', handleMouseMove);
