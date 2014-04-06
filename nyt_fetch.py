#!/usr/bin/python
import requests, json, pprint

def main():
	api_key = 'a5b6d9051976110fda3d0563f0a7cc1e:6:67761527'
	nyt_url = 'http://api.nytimes.com/svc/news/v3/content/all/all/.json.json.json.json'

	payload = {
		'limit': 8,
		'api-key': api_key
	}

	r = requests.get(nyt_url, params=payload)
	data = json.loads(r.content)
	stories = []

	for story in data['results']:

		dict = {
			'title': story['title'],
			'author': story['byline'],
			'location': story['geo_facet'][0] if story['geo_facet'] else '',
			'opening': story['abstract'],
			'link': story['url'],
			'pic': story['thumbnail_standard']
			}

		stories.append(dict)
	
	with open('articles/nyt.json', 'w') as outfile:
  		json.dump({'result': stories}, outfile)

main()


