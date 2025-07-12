import execjs
import requests


headers = {
    "^accept": "application/json, text/plain, */*^",
    "^accept-language": "zh-CN,zh;q=0.9^",
    "^cache-control": "no-cache^",
    "^dnt": "1^",
    "^isencrypt": "encrypt^",
    "^origin": "https://www.cbaleague.com^",
    "^pragma": "no-cache^",
    "^priority": "u=1, i^",
    "^referer": "https://www.cbaleague.com/^",
    "^sec-ch-ua": "^\\^Google",
    "^sec-ch-ua-mobile": "?0^",
    "^sec-ch-ua-platform": "^\\^Windows^^^",
    "^sec-fetch-dest": "empty^",
    "^sec-fetch-mode": "cors^",
    "^sec-fetch-site": "same-site^",
    "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/137.0.0.0 Safari/537.36"
}
url = "https://data-server.cbaleague.com/api/teams/29136"
response = requests.get(url, headers=headers)
print(response.json())

s = response.json()

js = execjs.compile(open("cba分析.js", mode="r", encoding="utf-8").read())
data = js.call("eIe", s)


print(data)
# print(response)