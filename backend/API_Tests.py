import requests
import json
import unittest

url = "https://api.congressand.me/api/"


class ApiTests(unittest.TestCase):
    def test1(self):
        response = requests.request("GET", url)
        assert not response.ok

    def test2(self):
        response = requests.request("GET", url + "Representatives")
        assert response.ok

    def test3(self):
        response = requests.request("GET", url + "States")
        assert response.ok

    def test4(self):
        response = requests.request("GET", url + "Issues")
        assert response.ok

    def test5(self):
        response = requests.request("GET", url + "megaTable")
        assert response.ok

    def test6(self):
        response = requests.request("GET", url + "Representatives?page=1")
        assert response.ok

    def test7(self):
        response = requests.request("GET", url + "States?page=1")
        assert response.ok

    def test8(self):
        response = requests.request("GET", url + "Issues?page=1")
        assert response.ok

    def test9(self):
        response = requests.request("GET", url + "megaTable?page=1")
        assert response.ok

    def test10(self):
        response = requests.request("GET", url + "Representatives?results_per_page=1")
        assert response.ok

    def test11(self):
        response = requests.request("GET", url + "States?results_per_page=1")
        assert response.ok

    def test12(self):
        response = requests.request("GET", url + "Issues?results_per_page=1")
        assert response.ok

    def test13(self):
        response = requests.request("GET", url + "megaTable?results_per_page=1")
        assert response.ok

    def test14(self):
        response = requests.request(
            "GET",
            url
            + 'Representatives?q={"filters":[{"name":"state","op":"==","val":"Texas"}]}',
        )
        assert response.ok

    def test15(self):
        response = requests.request(
            "GET",
            url + 'States?q={"filters":[{"name":"abbreviation","op":"==","val":"TX"}]}',
        )
        assert response.ok

    def test16(self):
        response = requests.request(
            "GET",
            url
            + 'Issues?q={"filters":[{"name":"name","op":"==","val":"Agriculture"}]}',
        )
        assert response.ok

    def test17(self):
        response = requests.request(
            "GET",
            url + 'megaTable?q={"filters":[{"name":"state","op":"==","val":"Texas"}]}',
        )
        assert response.ok

    def test18(self):
        response = requests.request("GET", url + "Mentions")
        assert response.ok

    def test19(self):
        response = requests.request(
            "GET",
            url + 'Mentions?q={"filters":[{"name":"state","op":"==","val":"TX"}]}',
        )
        assert response.ok

    def test20(self):
        response = requests.request("GET", url + "stateIssues")
        assert response.ok

    def test21(self):
        response = requests.request(
            "GET",
            url + 'stateIssues?q={"filters":[{"name":"state","op":"==","val":"TX"}]}',
        )
        assert response.ok


if __name__ == "__main__":
    unittest.main()
