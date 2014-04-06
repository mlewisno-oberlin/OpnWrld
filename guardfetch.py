from datetime import datetime
from codecs import encode
from config import config
import requests, json, re



def getLocale(string):
    regions = config['regions']
    for m in range(0, len(regions)):    
        if (regions[m] in string):
            return regions[m]
    return "United Kingdom"

def getOpening(string):
    if re.match('.*?/p>', string) is not None:
        return re.match('.*?/p>', string).group()
    else:
        return "";

def APIgrab():
    url = config['guardian_url']
    api_key = config['guardian_apikey']
    now = datetime.now()
    date = (str)(now.year) + "-" + (str)(now.month) + "-" + (str)(now.day)
   
    APIcall = requests.get(
        url,
        params={
           'api-key': api_key,
           'page-size': 5,
           'show-fields': "body,body,thumbnail,byline",
           'from-date': date,
           'to-date': date,
           'section': 'world',
           'order-by': 'relevance',
           'format': 'json' 
        })

    content = json.loads(APIcall.content)
    stories = []
    for story in content['response']['results']:
        dict = {
            'title': story['webTitle'].encode('ascii', 'ignore'),
            'author': story['fields']['byline'].encode('ascii', 'ignore'),
            'location': getLocale(story['webTitle']),
            'opening': getOpening(story['fields']['body']),
            'link': story['webUrl'].encode('ascii', 'ignore'),
            'pic': re.match('".*"', story['fields']['thumbnail']).group(),
            'date': date
        }
        stories.append(dict)
        # print stories/
        with open('articles/guard.json', 'w') as outfile:
            json.dump({'result': stories}, outfile, skipkeys=True, ensure_ascii=False, check_circular=False, encoding="utf-8")
    
APIgrab()