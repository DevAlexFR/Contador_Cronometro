import eel
from bll import CounterTimer

eel.init('project\\web')
ct = CounterTimer()

@eel.expose
def get_counter_exposed():
    return ct.get_counter()

@eel.expose
def update_counter_exposed(action):
    return ct.update_counter(action=action)

@eel.expose
def get_timer_exposed():
    return ct.get_timer()


@eel.expose
def start_timer_exposed():
    return ct.start_timer()

@eel.expose
def stop_timer_exposed():
    return ct.stop_timer()

@eel.expose
def update_timer_exposed():
    return ct.update_timer()

if __name__ == '__main__':
    eel.start('index.html', size=(800, 400), mode='edge')
