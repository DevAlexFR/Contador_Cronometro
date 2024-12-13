import time
import eel

from threading import Thread

class CounterTimer:
    def __init__(self):
        self.counter = 0
        self.timer_seconds = 0
        self.timer_running = False

    def get_counter(self):
        return self.counter

    def update_counter(self, action):
        if action == 'increment':
            self.counter += 1
        elif action == 'decrement':
            self.counter -= 1
        elif action == 'reset':
            self.counter = 0
        return self.counter



    def get_timer(self):
        return self.timer_seconds

    def run_timer(self):
        while self.timer_running:
            time.sleep(1)
            self.timer_seconds += 1
            eel.updateTimerDisplay(self.get_timer())

    def start_timer(self):
        if not self.timer_running:
            self.timer_running = True
            Thread(target=self.run_timer).start()

    def stop_timer(self):
        self.timer_running = False

