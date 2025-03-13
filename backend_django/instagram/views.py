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

def scrape_instagram_hashtag(request, hashtag):
    try:
        logging.info(f"Starting to scrape Instagram for hashtag: {hashtag}")

        # Set up Chrome options for headless browsing
        chrome_options = Options()
        chrome_options.add_argument("--headless")  # Run in the background (without GUI)
        chrome_options.add_argument("--disable-blink-features=AutomationControlled")  # To avoid detection of automation

        # Initialize the Chrome WebDriver using the WebDriver Manager
        service = Service(ChromeDriverManager().install())
        driver = webdriver.Chrome(service=service, options=chrome_options)

        # The URL to scrape Instagram posts for the given hashtag
        url = f"https://www.instagram.com/explore/tags/{hashtag}/"
        driver.get(url)
        logging.info(f"Navigating to: {url}")

        # Wait for images to appear (adjust waiting time if needed)
        WebDriverWait(driver, 10).until(EC.presence_of_all_elements_located((By.CSS_SELECTOR, "article img")))

        # Extract posts data
        posts = []
        images = driver.find_elements(By.CSS_SELECTOR, "article img")

        # Scrape up to 10 images and their captions
        for img in images[:10]:
            caption = img.get_attribute("alt") or "No caption"  # Get caption (alt text)
            post_data = {
                "image": img.get_attribute("src"),  # Get image URL
                "caption": caption,  # Get caption text
            }
            posts.append(post_data)

        # Quit the driver once done
        driver.quit()
        logging.info(f"Successfully scraped {len(posts)} posts.")

        # Return the list of posts as a JSON response
        return JsonResponse(posts, safe=False)

    except Exception as e:
        logging.error(f"Error while scraping Instagram: {e}")
        # Return an error response with details if scraping fails
        return JsonResponse({"error": f"Error while scraping Instagram: {str(e)}"}, status=500)
