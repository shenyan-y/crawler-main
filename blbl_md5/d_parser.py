from datetime import datetime

def parse(item_list):
    parsed_data = []

    for item in item_list:
        video = {
            "id": item["id"],
            "title": item["title"],
            "view": item["stat"]["view"],
            "up_name": item["owner"]["name"],
            "pub_time": datetime.fromtimestamp(item["pubdate"]).strftime("%Y-%m-%d %H:%M:%S")
        }
        parsed_data.append(video)

    return parsed_data



