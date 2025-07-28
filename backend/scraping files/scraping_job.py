import time
import pandas as pd
from bs4 import BeautifulSoup
from selenium import webdriver
from selenium.webdriver.chrome.service import Service as ChromeService
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from webdriver_manager.chrome import ChromeDriverManager


TARGET_URL_JOBS = "https://id.jobstreet.com/id/jobs?classification=6076%2C6281&daterange=31"
OUTPUT_SCRAPED_FILE = "jobstreet_techjobs_Jul2025.csv"

def setup_driver():
    options = webdriver.ChromeOptions()
    options.add_argument('--headless')
    options.add_argument('--no-sandbox')
    options.add_argument('--disable-dev-shm-usage')
    options.add_argument("start-maximized")
    driver = webdriver.Chrome(service=ChromeService(ChromeDriverManager().install()), options=options)
    return driver


def get_job_details(url, driver):
    driver.execute_script("window.open('');")
    driver.switch_to.window(driver.window_handles[1])
    
    job_data = {
        'job_title': 'N/A',
        'category': 'N/A',
        'job_details': 'N/A',
    }

    try:
        driver.get(url)
        WebDriverWait(driver, 15).until(
            EC.presence_of_element_located((By.CSS_SELECTOR, "h1[data-automation='job-detail-title']"))
        )
        time.sleep(2)
        
        detail_soup = BeautifulSoup(driver.page_source, 'html.parser')

        # Extract visible data
        title_el = detail_soup.find('h1', {'data-automation': 'job-detail-title'})
        if title_el: job_data['job_title'] = title_el.get_text(strip=True)

        category_el = detail_soup.find('span', {'data-automation': 'job-detail-classifications'})
        if category_el: job_data['category'] = category_el.get_text(strip=True)

        details_container = detail_soup.find('div', {'data-automation': 'jobAdDetails'})
        if details_container: job_data['job_details'] = details_container.get_text(strip=True, separator='\n')
    except Exception as e:
        print(f"  > Gagal mengambil detail dari {url}: {type(e).__name__}")
    finally:
        driver.close()
        driver.switch_to.window(driver.window_handles[0])

    return job_data


def parse_job_card_link(card):
    """
    PERBAIKAN: Fungsi ini sekarang hanya bertugas mengambil link detail.
    """
    link_element = card.find('a', href=lambda href: href and '/id/job/' in href)
    if link_element:
        return "https://id.jobstreet.com" + link_element['href']
    return None


def scrape_jobstreet(url, max_pages=1, filename='default_output.csv'):
    driver = setup_driver()
    all_jobs_data = []
    
    try:
        for page in range(1, max_pages + 1):
            page_url = f"{url}?page={page}"
            print(f"\n--- Scraping Halaman {page}: {page_url} ---")
            
            driver.get(page_url)
        
            WebDriverWait(driver, 20).until(
                EC.visibility_of_element_located((By.CSS_SELECTOR, "div[data-automation='searchResults']"))
            )
            
            soup = BeautifulSoup(driver.page_source, 'html.parser')
            job_cards = soup.find_all('article', attrs={'data-job-id': True})

            if not job_cards:
                print("Tidak ada pekerjaan yang ditemukan di halaman ini. Berhenti.")
                break

            print(f"Menemukan {len(job_cards)} pekerjaan di halaman {page}.")

            for card in job_cards:
                detail_link = parse_job_card_link(card)
                
                if not detail_link:
                    print("  > Link pekerjaan tidak ditemukan, dilewati.")
                    continue
                
                full_job_data = get_job_details(detail_link, driver)
                
                if full_job_data['job_title'] != 'N/A':
                    print(f"  > Mengambil data untuk: {full_job_data['job_title']}")
                    all_jobs_data.append(full_job_data)
                else:
                    print(f"  > Gagal mengambil judul dari link, dilewati.")
                

    except Exception as e:
        print(f"Terjadi error fatal: {e}")
    finally:
        driver.quit()

    if all_jobs_data:
        df = pd.DataFrame(all_jobs_data)
        df.to_csv(filename, index=False, encoding='utf-8')
        print(f"\nProses scraping selesai. {len(all_jobs_data)} data disimpan di '{filename}'")
    else:
        print("\nTidak ada data yang berhasil di-scrape.")



if __name__ == "__main__":
    scrape_jobstreet(TARGET_URL_JOBS, max_pages=5, filename=OUTPUT_SCRAPED_FILE)
