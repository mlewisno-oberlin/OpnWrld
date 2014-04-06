#!/usr/bin/python
import requests, json, re
from config import config

def main():
	api_key = config['nyt_apikey']
	nyt_url = config['nyt_url']

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
			'author': story['byline'].title(),
			'location': story['geo_facet'][0] if story['geo_facet'] else '',
			'opening': story['abstract'],
			'link': story['url'],
			'pic': story['thumbnail_standard'],
			'date': re.match('..........', story['updated_date']).group(),
			'source': "NewYorkTimes"
			}

		stories.append(dict)
	
	with open('articles/nyt.json', 'w') as outfile:
  		json.dump({'result': stories}, outfile)

main()


