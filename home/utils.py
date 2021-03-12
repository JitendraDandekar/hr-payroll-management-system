from selenium import webdriver
from bs4 import BeautifulSoup
from selenium.webdriver.chrome.options import Options
from threading import *

global news
news = []


def news_fetcher():
    options = Options()
    options.add_argument('--headless')
    options.add_argument('--disable-gpu')

    driver = webdriver.Chrome(
        "/home/jitendrad/Downloads/chromedriver", options=options)
    driver.get("https://www.ndtv.com/latest")

    content = driver.page_source
    soup = BeautifulSoup(content, 'html.parser')

    for div in soup.findAll("div", attrs={"class": "news_Itm"}):
        try:
            img = div.find("img")
            a = div.find("a")
            heading = div.find("h2", attrs={"class": "newsHdng"})
            body = {"image": img.get("src"),
                    "heading": heading.text, "link": a.get("href")}
            if body not in news:
                news.append(body)
        except AttributeError:
            pass


