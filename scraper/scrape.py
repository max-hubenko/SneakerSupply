from selenium import webdriver
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys
from bs4 import BeautifulSoup
import time
import json

# Set up Chrome options
chrome_options = Options()
# chrome_options.add_argument('--headless')
chrome_options.add_argument('--disable-gpu')
chrome_options.add_argument('--no-sandbox')
chrome_options.add_argument('--disable-dev-shm-usage')
chrome_options.add_argument('user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36')

# Initialize the WebDriver
driver = webdriver.Chrome(options=chrome_options)

# Navigate to the webpage
driver.get("https://www.goat.com/search?sortBy=relevance&sortOrder=descending&web_groups=sneakers")

# Scroll to the bottom of the page multiple times to load content
for i in range(10):
    driver.find_element(By.TAG_NAME, 'body').send_keys(Keys.END)
    time.sleep(2)

# Get the page source after scrolling
html = driver.page_source

# Parse the page source with Beautiful Soup
soup = BeautifulSoup(html, 'html.parser')

# Find elements by class
sneaker_names = soup.find_all("div", class_="GridCellProductInfo__Name-sc-17lfnu8-3 iPovsV")
prices = soup.find_all("span", class_="LocalizedCurrency__Amount-sc-yoa0om-0 jDDuev")
images = soup.find_all("img", class_="BaseImage__StyledImage-sc-vydcjo-0 bccJtO Image__StyledImage-sc-1qwz99p-0 hNSrav GridCellProductImage__Image-sc-msqmrc-1 fyEOPv")

# Open the output file in write mode
with open("./scraper/catalog_scraped.json", "w") as f:
    sneakers = []
    for name, price, image in zip(sneaker_names, prices, images):
        price_string = price.get_text()
        
        sneaker_data = {
            'name': name.get_text(),
            'price': float(price_string[1:].replace(",", ".")),
            'imgSrc': image['src'],
            'inCart': False,
        }
        sneakers.append(sneaker_data)
    
    json_string = json.dumps(sneakers, indent=4)
    f.write(json_string)

# Close the WebDriver
driver.quit()
