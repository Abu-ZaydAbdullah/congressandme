from selenium import webdriver
from unittest import TestCase, main

class TestClass(TestCase):

    browser = webdriver.Firefox()

    def test_0(self):
        self.browser.get('http://localhost:3000')
        self.assertEqual(self.browser.title, "Congress and Me")

    def test_1(self):
        self.browser.get('http://localhost:3000/representatives')
        home_page = self.browser.find_element_by_class_name("page-title")
        self.assertEqual(home_page.text, "Representatives")

    def test_2(self):
        self.browser.get('http://localhost:3000/states')
        home_page = self.browser.find_element_by_class_name("page-title")
        self.assertEqual(home_page.text, "States")

    def test_3(self):
        self.browser.get('http://localhost:3000/issues')
        home_page = self.browser.find_element_by_class_name("page-title")
        self.assertEqual(home_page.text, "Issues")

    def test_4(self):
        self.browser.get('http://localhost:3000/about')
        self.assertEqual(self.browser.title, "Congress and Me")

if __name__ == '__main__':
    main()
    browser.quit()
