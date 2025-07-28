from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from bs4 import BeautifulSoup
import time

def extract_course_details(course_url, driver):
    data = {
        'course_url': course_url,
        'title': '',
        'level': '',
        'description': '',
        'topic_tags': '',
        'learning_path': ''
    }

    try:
        driver.get(course_url)
        WebDriverWait(driver, 10).until(
            EC.presence_of_element_located((By.CSS_SELECTOR, "h3.mb-3.font-weight-bold"))
        )
        time.sleep(2)
        soup = BeautifulSoup(driver.page_source, 'html.parser')

        # Title
        title_elem = soup.select_one("h3.mb-3.font-weight-bold")
        data['title'] = title_elem.get_text(strip=True) if title_elem else ''

        # Level
        level_elem = soup.select_one("a.underline-link.level-description")
        data['level'] = level_elem.get_text(strip=True) if level_elem else ''

        # Topic Tags
        badge_spans = soup.select("div.mb-3.d-flex.flex-wrap.align-items-center span.dcd-badge")
        data['topic_tags'] = ', '.join([span.get_text(strip=True) for span in badge_spans])

        # Learning Path
        learning_path_div = soup.select_one("div.d-flex.flex-wrap")
        if learning_path_div:
            path_tags = learning_path_div.find_all("a")
            data['learning_path'] = ', '.join([tag.get_text(strip=True) for tag in path_tags])

        # Description
        desc_div = soup.select_one("div#course-description div.fr-view")
        if desc_div:
            data['description'] = desc_div.get_text(strip=True, separator='\n')

    except Exception as e:
        print(f"[ERROR] Failed extracting from {course_url}: {type(e).__name__}: {e}")

    return data



# Setup Selenium
chrome_options = Options()
chrome_options.add_argument('--headless')  # comment to see browser
chrome_options.add_argument('--disable-gpu')
chrome_options.add_argument('--window-size=1920x1080')

service = Service()
driver = webdriver.Chrome(service=service, options=chrome_options)

test_url = 'https://www.dicoding.com/academies/423-menjadi-linux-system-administrator'
result = extract_course_details(test_url, driver)

print("\nScraped Data:")
for k, v in result.items():
    print(f"{k}: {v}")


driver.quit()
