$(document).ready(function () {
  const envelope = $("#envelope");
  const btnOpen = $("#open");
  const btnClose = $("#reset");

  function openEnvelope() {
    envelope.removeClass("close").addClass("open");
  }

  function closeEnvelope() {
    envelope.removeClass("open").addClass("close");
  }

  // Click events
  envelope.on("click", openEnvelope);
  btnOpen.on("click", openEnvelope);
  btnClose.on("click", closeEnvelope);
});