import requests, json

def main():
	api_key = "A5B6D9051976110FDA3D0563F0A7CC1E:6:67761527"
	nyt_url = "http://api.nytimes.com/svc/news/v3/content/all/all/.json.json.json.json"

	payload = {
		'limit': 4,
		'api-key': api_key
	}

	r = requests.get(nyt_url+api_key, params=payload)
	print(r.url)

main()


