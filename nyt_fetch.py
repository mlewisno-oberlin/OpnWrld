#!/usr/bin/python
import requests, json, pprint

def main():
	api_key = "a5b6d9051976110fda3d0563f0a7cc1e:6:67761527"
	nyt_url = "http://api.nytimes.com/svc/news/v3/content/all/all/.json.json.json.json"

	payload = {
		'limit': 4,
		'api-key': api_key
	}

	r = requests.get(nyt_url, params=payload)
	content = json.loads(r.content)
	pprint.pprint(content)

	for story in content['results']:
		print story['title']

main()


