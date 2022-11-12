from time import sleep
from flask import Flask, render_template, Response
from utils.getData import *
from utils.getTime import *

app = Flask(__name__)
app.config["SECRET_KEY"] = "hard to guess!!!"


@app.route('/')
def hello_world():  # put application's code here
    return render_template("index.html")


@app.route("/time")
def time_stream():
    def event_stream():
        while True:
            sleep(1)
            yield f"data:{get_server_time()}\n\n"

    return Response(event_stream(), mimetype="text/event-stream")


@app.route("/chinaTotal")
def return_china_total():
    """返回所有确诊死亡人数数据"""
    return get_china_total()


@app.route("/nowConfirm")
def return_china_all():
    """按每个省份和城市返回累计感染人数"""
    return get_china_now_confirm()


@app.route("/liveBroad")
def return_live_broadcast():
    """获取疫情实时播报"""
    return get_live_broadcast()


@app.route("/getBaiduData")
def return_confirm_seemingly_cure_die():
    """获取百度数据"""
    return get_baidu_data()


@app.route("/geoJson")
def return_geo_json():
    """
    获取地理数据
    :return: None
    """
    return get_geo_json()


@app.route("/topAddCountry")
def return_top_add_country_data():
    """
    获取top10无症状感染的地区
    :return:
    """
    return get_top_add_country_data()


@app.route("/area/<name>")
def get_area(name):
    if name == "内蒙古自治区":
        name = name[:3]
    elif name == "黑龙江省":
        name = name[:3]
    else:
        name = name[:2]
    return render_template("area.html", name=name)


@app.route("/areaData/<areaName>")
def get_area_data_by_name(areaName):
    return get_area_data(areaName)


if __name__ == '__main__':
    app.run(debug=True)
