from requests import post, get
from json import loads, dumps
from time import strftime, localtime
from lxml import etree


def get_china_total():
    request_url = 'https://api.inews.qq.com/newsqa/v1/query/inner/publish/modules/list?modules=statisGradeCityDetail,diseaseh5Shelf'
    resp = post(request_url)
    # print(resp.text)
    return loads(resp.text)["data"]["diseaseh5Shelf"]["chinaTotal"]


# print(get_china_total())

def get_china_now_confirm():
    """现有确诊"""
    request_url = 'https://api.inews.qq.com/newsqa/v1/query/inner/publish/modules/list?modules=statisGradeCityDetail,diseaseh5Shelf'
    resp = post(request_url)
    all_data = loads(resp.text)["data"]["diseaseh5Shelf"]["areaTree"][0]["children"]
    data = {}
    for item in all_data:
        name = item["name"]
        confirm = item["total"]["nowConfirm"]
        data[name] = int(confirm)
    return data


# print(get_china_all())

def get_live_broadcast():
    """疫情实时播报"""
    request_url = "https://opendata.baidu.com/data/inner?tn=reserved_all_res_tn&dspName=iphone&from_sf=1&dsp=iphone&resource_id=28565&alr=1&query=国内新型肺炎最新动态"
    resp = get(request_url)
    live_broadcast_data = loads(resp.text)["Result"][0]["items_v2"][0]["aladdin_res"]["DisplayData"]["result"]["items"]
    li_s = ""
    for li in live_broadcast_data:
        event_desc = li["eventDescription"]
        event_time = strftime("%m-%d %H:%M", localtime(int(li["eventTime"])))
        event_url = li["eventUrl"]
        li_s += f"<li><span>{event_time}</span>&nbsp;&nbsp;<a href='{event_url}' target='_blank'>{event_desc}</a></li><hr/>"

    return li_s


def get_baidu_data():
    """
    获取百度疫情数据
    """
    request_url = "https://voice.baidu.com/act/newpneumonia/newpneumonia"
    resp = get(request_url)
    json_data = loads(etree.HTML(resp.text).xpath("//script[@id='captain-config']/text()")[0])  # 加载疫情有关的数据
    return json_data["component"][0]["trend"]


def get_top_add_country_data():
    """
    获取topAddCountry数据
    :return:
    """
    request_url = "https://voice.baidu.com/act/newpneumonia/newpneumonia"
    resp = get(request_url)
    json_data = loads(etree.HTML(resp.text).xpath("//script[@id='captain-config']/text()")[0])  # 加载疫情有关的数据
    return dumps(json_data["component"][0]["topAddCountry"])


def get_geo_json():
    """
    获取百度地理数据
    :return: None
    """
    request_url = "https://geo.datav.aliyun.com/areas_v3/bound/100000_full.json"
    return loads(get(request_url).text)


def get_area_data(name):
    request_url = f"https://voice.baidu.com/newpneumonia/getv2?from=mola-virus&stage=publish&target=trend&isCaseIn=1&area={name}"
    resp = get(request_url)
    json_data = loads(resp.text)
    return json_data["data"][0]["trend"]