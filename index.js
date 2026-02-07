OBR.onReady(async () => {
  const status = document.getElementById("status");
  status.textContent = "Hello from Owlbear!";
  
  // Example: show current room id in the UI.
  const room = await OBR.room.getMetadata();
  console.log("Room metadata:", room);
});
