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
        self.browser.get('https://congressand.me/representatives/page/1')
        home_page = self.browser.find_element_by_class_name("page-title")
        self.assertEqual(home_page.text, "Representatives")

    def test_2(self):
        self.browser.get('https://congressand.me/states/page/1')
        home_page = self.browser.find_element_by_class_name("page-title")
        self.assertEqual(home_page.text, "States")

    def test_3(self):
        self.browser.get('https://congressand.me/issues/page/1')
        home_page = self.browser.find_element_by_class_name("page-title")
        self.assertEqual(home_page.text, "Issues")

    def test_4(self):
        self.browser.get('https://congressand.me/about')       
        self.assertEqual(self.browser.title, "Congress and Me")

    def test_5(self):
        self.browser.get('https://congressand.me/representatives/page/1')
        home_page = self.browser.find_element_by_class_name("navbar-brand")
        self.assertEqual(home_page.text, "Congress and Me")
    
    def test_6(self):
        self.browser.get('https://congressand.me/states/page/1')
        home_page = self.browser.find_element_by_class_name("navbar-brand")
        self.assertEqual(home_page.text, "Congress and Me")
    
    def test_7(self):
        self.browser.get('https://congressand.me/issues/page/1')
        home_page = self.browser.find_element_by_class_name("navbar-brand")
        self.assertEqual(home_page.text, "Congress and Me")
    
    def test_8(self):
        self.browser.get('https://congressand.me/')
        home_page = self.browser.find_element_by_class_name("navbar-brand")
        self.assertEqual(home_page.text, "Congress and Me")
    
    def test_9(self):
        self.browser.get('https://congressand.me/about')
        home_page = self.browser.find_element_by_class_name("navbar-brand")
        self.assertEqual(home_page.text, "Congress and Me")

    def test_10(self):
        self.browser.get('https://congressand.me/')
        home_page = self.browser.find_element_by_class_name("text-justify")
        self.assertEqual(home_page.text, "The six of us believe that a well-informed populace is crucial to a functioning democracy. We wanted a way for people to easily see what issues their representatives are and aren’t talking about in their tweets and on the Congress floor, and we wanted to highlight which issues are being discussed and which ones require attention on a nation-wide scale. To that end, we’ve built Congress and Me.")

    def test_11(self):
        self.browser.get('https://congressand.me/')
        home_page = self.browser.find_element_by_xpath("/html/body/div/div[2]/main/div[1]/div/div/div[2]/p")
        self.assertEqual(home_page.text, '"The ballot is stronger than the bullet." - Abraham Lincoln')

    def test_12(self):
        self.browser.get('https://congressand.me/representatives/page/1')
        home_page = self.browser.find_element_by_xpath("/html/body/div/div[2]/main/div[1]/div[1]/div/div[2]/p")
        self.assertEqual(home_page.text, 'Learn who represents your State!')

    def test_13(self):
        self.browser.get('https://congressand.me/states/page/1')
        home_page = self.browser.find_element_by_xpath("/html/body/div/div[2]/main/div[1]/div[1]/div/div[2]/p")
        self.assertEqual(home_page.text, 'Learn more about your State!')

    def test_14(self):
        self.browser.get('https://congressand.me/issues/page/1')
        home_page = self.browser.find_element_by_xpath("/html/body/div/div[2]/main/div[1]/div/div[2]/p")
        self.assertEqual(home_page.text, 'All the hottest topics being discussed')

    def test_15(self):
        self.browser.get('https://congressand.me/about')
        home_page = self.browser.find_element_by_xpath("/html/body/div/div[2]/main/section/div/p")
        self.assertEqual(home_page.text, 'Get to know the team responsible for creating and maintaining this site!')

if __name__ == '__main__':
    main()
    browser.quit()
    display.stop()
