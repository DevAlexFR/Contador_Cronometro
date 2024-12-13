import time
import eel
from threading import Thread

class CounterTimer:
    """
    Classe para gerenciar um contador e um temporizador.
    """

    def __init__(self):
        """
        Inicializa o contador e o temporizador.
        """
        self.counter = 0
        self.timer_seconds = 0
        self.timer_running = False

    def get_counter(self):
        """
        Retorna o valor atual do contador.
        """
        return self.counter

    def update_counter(self, action):
        """
        Atualiza o valor do contador com base na ação fornecida.

        Args:
            action (str): A ação a ser realizada no contador ('increment', 'decrement', 'reset').

        Returns:
            int: O valor atualizado do contador.
        """
        if action == 'increment':
            self.counter += 1
        elif action == 'decrement':
            self.counter -= 1
        elif action == 'reset':
            self.counter = 0
        return self.counter

    def get_timer(self):
        """
        Retorna o valor atual do temporizador em segundos.
        """
        return self.timer_seconds

    def run_timer(self):
        """
        Executa o temporizador, incrementando o valor a cada segundo enquanto estiver ativo.
        """
        while self.timer_running:
            time.sleep(1)
            if self.timer_running:
                self.timer_seconds += 1
                eel.updateTimerDisplay(self.get_timer())

    def start_timer(self):
        """
        Inicia o temporizador se ele não estiver em execução.
        """
        if not self.timer_running:
            self.timer_running = True
            Thread(target=self.run_timer).start()

    def stop_timer(self):
        """
        Para o temporizador.
        """
        self.timer_running = False

    def update_timer(self):
        """
        Reseta o temporizador e atualiza a exibição.
        """
        self.timer_running = False
        self.timer_seconds = 0
        eel.updateTimerDisplay(self.get_timer())

# if __name__ == '__main__':
#     timer_seconds = 0
#     timer_running = False

#     def run_timer():
#         global timer_seconds
#         global timer_running

#         while timer_running:
#             time.sleep(1)
#             if timer_running:
#                 timer_seconds += 1
#                 print(timer_seconds)

#     def start_timer():
#         global timer_running

#         if not timer_running:
#             timer_running = True
#             Thread(target=run_timer).start()

#     start_timer()