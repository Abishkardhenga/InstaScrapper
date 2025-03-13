import time
import logging
from django.http import JsonResponse
from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from webdriver_manager.chrome import ChromeDriverManager

# Set up logging
logging.basicConfig(level=logging.DEBUG)

def scrape_instagram_hashtags(request, search_term):
    try:
        logging.info(f"Starting to scrape Instagram for hashtags related to: {search_term}")

        chrome_options = Options()
        chrome_options.add_argument("--headless")  # Run in the background (without GUI)
        chrome_options.add_argument("--disable-blink-features=AutomationControlled")

        # Initialize the Chrome WebDriver
        service = Service(ChromeDriverManager().install())
        driver = webdriver.Chrome(service=service, options=chrome_options)

        url = f"https://www.instagram.com/explore/tags/{search_term}/"
        driver.get(url)
        logging.info(f"Navigating to: {url}")

        # Wait for posts to load (Waiting for images to appear)
        WebDriverWait(driver, 10).until(EC.presence_of_all_elements_located((By.CSS_SELECTOR, "article img")))

        # Extract hashtags from the page
        hashtags = []
        related_hashtags = driver.find_elements(By.CSS_SELECTOR, "a[href^='/explore/tags/']")

        # Scrape the related hashtags
        for hashtag in related_hashtags[:10]:  # Scraping first 10 related hashtags
            hashtags.append(hashtag.text)

        # Quit the driver
        driver.quit()
        logging.info(f"Successfully scraped {len(hashtags)} hashtags.")

        # Return hashtags as a JSON response
        return JsonResponse({"hashtags": hashtags}, safe=False)

    except Exception as e:
        logging.error(f"Error while scraping Instagram: {e}")
        return JsonResponse({"error": f"Error while scraping Instagram: {str(e)}"}, status=500)
