from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.common.by import By
from selenium.webdriver.chrome.options import Options
from bs4 import BeautifulSoup
import time
import csv

# chrome driver
def init_driver():
    options = Options()
    options.add_argument('--headless')  
    service = Service()  
    driver = webdriver.Chrome(service=service, options=options)
    return driver

# all course links from listing page
def get_course_links(driver, url="https://www.dicoding.com/academies/list"):
    print("[INFO] Collecting course links...")
    driver.get(url)
    time.sleep(3)

    soup = BeautifulSoup(driver.page_source, 'html.parser')
    course_cards = soup.select('a.course-card')

    course_links = [
        card['href'] if card['href'].startswith("http")
        else "https://www.dicoding.com" + card['href']
        for card in course_cards if card.get('href')
    ]
    print(f"[DEBUG] Found {len(course_links)} course links.")
    return course_links

# extract course detail from a single course page
def extract_course_details(driver, course_url):
    driver.get(course_url)
    time.sleep(2)

    soup = BeautifulSoup(driver.page_source, 'html.parser')

    try:
        title = soup.find('h1').text.strip()
    except:
        title = ''

    try:
        level = soup.select_one('[data-testid="academy-level"]').text.strip()
    except:
        level = ''

    try:
        duration = soup.select_one('[data-testid="academy-duration"]').text.strip()
    except:
        duration = ''

    try:
        description = soup.select_one('[data-testid="academy-desc"]').text.strip()
    except:
        description = ''

    return {
        'url': course_url,
        'title': title,
        'level': level,
        'duration': duration,
        'description': description,
    }

# main scraper function
def scrape_dicoding_courses():
    driver = init_driver()
    course_data = []

    try:
        links = get_course_links(driver)
        for link in links:
            try:
                details = extract_course_details(driver, link)
                course_data.append(details)
                print(f"[INFO] Scraped: {details['title']}")
            except Exception as e:
                print(f"[ERROR] Failed to scrape {link}: {type(e).__name__}: {e}")
    except Exception as e:
        print("[FATAL] Error during scraping:", e)
    finally:
        driver.quit()

    keys = course_data[0].keys() if course_data else ['url', 'title', 'level', 'duration', 'description']
    with open("dicoding_courses.csv", "w", newline="", encoding='utf-8') as f:
        writer = csv.DictWriter(f, fieldnames=keys)
        writer.writeheader()
        writer.writerows(course_data)

    print(f"\nDone! Saved {len(course_data)} courses to dicoding_courses.csv")

if __name__ == "__main__":
    scrape_dicoding_courses()
