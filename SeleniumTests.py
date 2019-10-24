from selenium import webdriver
from unittest import TestCase, main
from pyvirtualdisplay import Display

class TestClass(TestCase):

    display = Display(visible=0, size=(800, 600))
    display.start()
    browser = webdriver.Firefox()

    def test_0(self):
        self.browser.get('https://congressand.me')
        self.assertEqual(self.browser.title, "Congress and Me")

    def test_1(self):
        self.browser.get('https://congressand.me/representatives')
        home_page = self.browser.find_element_by_class_name("page-title")
        self.assertEqual(home_page.text, "Representatives")

    def test_2(self):
        self.browser.get('https://congressand.me/states')
        home_page = self.browser.find_element_by_class_name("page-title")
        self.assertEqual(home_page.text, "States")

    def test_3(self):
        self.browser.get('https://congressand.me/issues')
        home_page = self.browser.find_element_by_class_name("page-title")
        self.assertEqual(home_page.text, "Issues")

    def test_4(self):
        self.browser.get('https://congressand.me/about')
        self.assertEqual(self.browser.title, "Congress and Me")

if __name__ == '__main__':
    main()
    browser.quit()
    display.stop()
