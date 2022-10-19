from datetime import datetime

def get_server_time():
    return datetime.now().strftime("%Y年%m月%d日 %X")