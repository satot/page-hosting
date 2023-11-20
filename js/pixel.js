function trigger(eventName) {
  alert(eventName);
  ttq.instance('CLDNAF3C77U0UTSA761G').track(eventName);
  console.log(`Web event: ${eventName} is triggerd.`);
  return true
}
