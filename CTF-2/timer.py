import time

def countdown(t):
    while t > 0:
        hours, rem = divmod(t, 3600)
        minutes, seconds = divmod(rem, 60)
        timer = 'Time remaining: {:02d} hours {:02d} minutes {:02d} seconds'.format(hours, minutes, seconds)
        print(timer, end="\r")
        time.sleep(1)
        t -= 1
                                                                
    print('Time is Over!')

t = 7200
countdown(t)

