document.addEventListener("DOMContentLoaded", function() {
  // Elementos do contador
  var countDisplay = document.getElementById("count");
  var incrementButton = document.getElementById("increment");
  var decrementButton = document.getElementById("decrement");
  var resetButton = document.getElementById("reset");

  // Atualizar a exibição do contador
  function updateDisplay(count) {
    countDisplay.textContent = count;
  }

  // Função para enviar requisições ao servidor
  function sendCounterRequest(action) {
    eel.update_counter_exposed(action)(updateDisplay);
  }

  // Eventos dos botões do contador
  incrementButton.addEventListener("click", function() {
    sendCounterRequest('increment');
  });

  decrementButton.addEventListener("click", function() {
    sendCounterRequest('decrement');
  });

  resetButton.addEventListener("click", function() {
    sendCounterRequest('reset');
  });



  // Elementos do timer
  var timerDisplay = document.getElementById("timer");
  var startTimerButton = document.getElementById("start-timer");
  var stopTimerButton = document.getElementById("stop-timer");
  var resetTimerButton = document.getElementById("reset-timer");

  // Atualizar a exibição do timer
  function updateTimerDisplay(seconds) {
    timerDisplay.textContent = formatTime(seconds);
  }

  // Formatar o tempo em HH:MM:SS
  function formatTime(seconds) {
    var hrs = String(Math.floor(seconds / 3600)).padStart(2, "0");
    var mins = String(Math.floor((seconds % 3600) / 60)).padStart(2, "0");
    var secs = String(seconds % 60).padStart(2, "0");
    return hrs + ":" + mins + ":" + secs;
  }

  // Eventos dos botões do timer
  startTimerButton.addEventListener("click", function() {
    eel.start_timer_exposed();
  });

  stopTimerButton.addEventListener("click", function() {
    eel.stop_timer_exposed();
  });

  resetTimerButton.addEventListener("click", function() {
    eel.update_timer_exposed();
  });

  // Atualiza a exibição inicial do contador e do timer
  eel.get_counter_exposed()(updateDisplay);
  eel.get_timer_exposed()(updateTimerDisplay);

  // Expor a função de atualização do timer para o Python
  eel.expose(updateTimerDisplay);
});
