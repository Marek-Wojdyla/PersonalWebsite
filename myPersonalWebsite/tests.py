from django.test import TestCase

import time
from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.chrome.options import Options
from webdriver_manager.chrome import ChromeDriverManager
from selenium.webdriver.common.by import By

chrom_options = Options()
# dodaje opcję aby wykonywany test uruchomił się w pełnym rozmiarze przegladarki
chrom_options.add_argument("--start-maximized")

# Tworzymy obiekt WebDriver z użyciem opcji
driver = webdriver.Chrome(options=chrom_options, service=Service(ChromeDriverManager().install()))
#Otwieramy stronę
driver.get(url="http://127.0.0.1:8000/admin/login/?next=/admin/")



def element_is_clickable():
    driver.find_element(By.XPATH, '//*[@id="id_username"]').send_keys('marek')
    driver.find_element(By.XPATH, '//*[@id="id_password"]').send_keys('marek')
    time.sleep(2)
    driver.find_element(By.XPATH, '// *[ @ id = "login-form"] / div[3] / input').click()
    time.sleep(2)
    driver.find_element(By.XPATH, '//*[@id="user-tools"]/a[1]').click()

element_is_clickable()

