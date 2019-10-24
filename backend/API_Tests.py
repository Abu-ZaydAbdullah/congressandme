import requests
import json
import unittest

url = "https://api.congressand.me/"

class ApiTests(unittest.TestCase):
    def test1(self):
        response = requests.request("GET", url)
        assert(not response.ok)

    def test2(self):
        response = requests.request("GET", url + "api/Representatives")
        assert(response.ok)

    def test3(self):
        response = requests.request("GET", url + "api/States")
        assert(response.ok)

    def test4(self):
        response = requests.request("GET", url + "api/Issues")
        assert(response.ok)

if __name__ == "__main__":
    unittest.main()

