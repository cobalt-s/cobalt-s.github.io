// Wait until the DOM is fully loaded
document.addEventListener("DOMContentLoaded", function () {
    const follower = document.getElementById("follower");
    let targetX = 0, targetY = 0;
    let currentX = 0, currentY = 0;
    const ease = 0.1; // Lower values create a slower trailing effect
    
    // Update target position on every mouse move
    document.addEventListener("mousemove", function (event) {
      targetX = event.pageX;
      targetY = event.pageY;
    });
    
    // The animation loop: update current position and reposition the follower element
    function animate() {
      // Gradually move current values toward target values
      currentX += (targetX - currentX) * ease;
      currentY += (targetY - currentY) * ease;
      
      // Optionally offset to center the element under the cursor
      const offsetX = follower.offsetWidth / 2;
      const offsetY = follower.offsetHeight / 2;
      follower.style.left = (currentX - offsetX) + "px";
      follower.style.top = (currentY - offsetY) + "px";
      
      // Request the next animation frame
      requestAnimationFrame(animate);
    }
    
    // Start the animation loop
    animate();
  });
  