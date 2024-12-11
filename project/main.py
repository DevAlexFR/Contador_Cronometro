import eel

eel.init('project\\web')

@eel.expose
def iniciar_contador():
    print("Contador iniciado no Python!")

if __name__ == '__main__':
    eel.start('index.html', size=(800, 400), mode='edge')
