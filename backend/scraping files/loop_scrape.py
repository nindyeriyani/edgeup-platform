import pandas as pd
import csv
from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from bs4 import BeautifulSoup
import time

# extract course info 
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
        print(f"Scraping {course_url}")
        driver.get(course_url)

        # wait until main title appears
        WebDriverWait(driver, 10).until(
            EC.presence_of_element_located((By.CSS_SELECTOR, "h3.mb-3.font-weight-bold"))
        )
        time.sleep(1)

        soup = BeautifulSoup(driver.page_source, 'html.parser')
        # Title
        title_elem = soup.select_one('h3.mb-3.font-weight-bold')
        data['title'] = title_elem.get_text(strip=True) if title_elem else ''

        # Level
        level_elem = soup.select_one('a.underline-link.level-description')
        data['level'] = level_elem.get_text(strip=True) if level_elem else ''

        # Description
        desc_div = soup.select_one('div#course-description div.fr-view')
        if desc_div:
            data['description'] = desc_div.get_text(strip=True, separator='\n')

        # Tags
        badges = soup.find_all('span', class_='dcd-badge')
        data['topic_tags'] = ', '.join([b.get_text(strip=True) for b in badges])

        # Learning Path
        learning_path_div = soup.select_one("div.d-flex.flex-wrap")
        if learning_path_div:
            path_tags = learning_path_div.find_all("a")
            data['learning_path'] = ', '.join([tag.get_text(strip=True) for tag in path_tags])       

    except Exception as e:
        print(f"[ERROR] Failed extracting from {course_url}: {e}")
    return data

# Setup headless Chrome
chrome_options = Options()
chrome_options.add_argument('--headless')
chrome_options.add_argument('--disable-gpu')
chrome_options.add_argument('--window-size=1920x1080')
service = Service()
driver = webdriver.Chrome(service=service, options=chrome_options)

# Load URLs from CSV
df = pd.read_csv('dicoding_courses.csv') 
all_data = []

for idx, row in df.iterrows():
    course_url = row['course_url']  
    result = extract_course_details(course_url, driver)
    all_data.append(result)


# save to new CSV
df_out = pd.DataFrame(all_data)
df_out.to_csv('dicoding_course_details.csv', index=False)
print("Scraping complete. Saved to dicoding_course_details.csv")
