import pandas as pd
import re
import string
import nltk
from nltk.corpus import stopwords
from nltk.tokenize import word_tokenize
from nltk.stem import WordNetLemmatizer
from nltk.util import ngrams
from collections import Counter
from Sastrawi.Stemmer.StemmerFactory import StemmerFactory
import os

lemmatizer = WordNetLemmatizer()

try:
    indo_factory = StemmerFactory()
    indo_lemmatizer = indo_factory.create_stemmer()
except ImportError:
    indo_lemmatizer = None

def get_all_stopwords():
    """
    Initializes and returns a comprehensive set of stopwords.
    
    Combines English and Indonesian stopwords from NLTK with a custom
    list of common job description and boilerplate terms.
    """
    stop_words = set(stopwords.words('english')).union(set(stopwords.words('indonesian')))
    
    # custom stopwords 
    custom_stopwords = set([
        # company
        'pt', 'cv', 'tbk', 'persero', 'dkk', 'dll', 'dst',
        
        # bahasa info loker (eng & indo)
        'required', 'requirement', 'requirements', 'qualifications', 'qualification', 'kualifikasi',
        'job description', 'responsibility', 'responsibilities', 'tanggung jawab', 'tugas', 'utama',
        'benefits', 'benefit', 'seeking', 'looking', 'join', 'welcome', 'apply', 'apply now',
        'experience', 'skill', 'skills', 'skilled', 'proficient', 'proficiency', 'familiarity',
        
        # salaries & benefits
        'gaji', 'pokok', 'bulanan', 'tahunan', 'per', 'jam', 'hari', 'bulan', 'tahun',
        'uang', 'makan', 'transport', 'lembur', 'bonus', 'tunjangan', 'raya', 'thr',
        
        # Empty string that might result from cleaning
        ''
    ])
    
    return stop_words.union(custom_stopwords)

def clean_and_normalize_text(text):
    """
    Applies basic cleaning and normalization to a text string.
    - Converts to lowercase.
    - Removes emojis, URLs, punctuation, and numbers.
    - Removes extra whitespace.
    """
    if not isinstance(text, str):
        return ""
    
    # Convert to lowercase
    text = text.lower()
    
    # Remove emojis
    emoji_pattern = re.compile(
        "["
        u"\U0001F600-\U0001F64F"  # emoticons
        u"\U0001F300-\U0001F5FF"  # symbols & pictographs
        u"\U0001F680-\U0001F6FF"  # transport & map symbols
        u"\U0001F1E0-\U0001F1FF"  # flags (iOS)
        u"\U00002702-\U000027B0"
        u"\U000024C2-\U0001F251"
        "]+",
        flags=re.UNICODE,
    )
    text = emoji_pattern.sub(r'', text)
    
    text = re.sub(r'http\S+|www\S+|https\S+', '', text, flags=re.MULTILINE)
    
    text = text.translate(str.maketrans('', '', string.punctuation))
    
    text = re.sub(r'\d+', '', text)
    
    text = re.sub(r'\s+', ' ', text).strip()
    
    return text

def generate_ngrams_from_tokens(tokens, n=2):
    """
    Generates n-grams from a list of tokens.
    Returns n-grams as underscore-separated strings (e.g., 'data_science').
    """
    _ngrams = list(ngrams(tokens, n))
    return ["_".join(gram) for gram in _ngrams]


def full_preprocessing_pipeline(text, stopwords_set, create_ngrams=True):
    """
    Args:
        text (str): The input text string 
        stopwords_set (set): The set of stopwords to remove.
        create_ngrams (bool): If True, generates and includes bigrams.

    Returns:
        list: A list of processed tokens and n-grams.
    """
    # 1. Clean and Normalize
    cleaned_text = clean_and_normalize_text(text)
    
    # 2. Tokenize
    tokens = word_tokenize(cleaned_text)
    
    # 3. Remove Stopwords
    tokens_no_stopwords = [word for word in tokens if word not in stopwords_set]
    
    # 4. Lemmatize
    lemmatized_tokens = []
    for word in tokens_no_stopwords:
        if indo_lemmatizer is not None and re.match(r'^[a-zA-Z]+$', word):
            indo_lemma = indo_lemmatizer.stem(word)
            if indo_lemma != word:
                lemmatized_tokens.append(indo_lemma)
            else:
                lemmatized_tokens.append(lemmatizer.lemmatize(word))
        else:
            lemmatized_tokens.append(lemmatizer.lemmatize(word))
    
    final_terms = lemmatized_tokens
    if create_ngrams:
        bigrams = generate_ngrams_from_tokens(lemmatized_tokens, n=2)
        final_terms.extend(bigrams)
        
    return final_terms



if __name__ == "__main__":
    # --- Setup ---
    BASE_DIR = os.path.dirname(__file__)
    FILE_PATH = os.path.join(BASE_DIR, '../scraping files/dicoding_course_details.csv')
    OUTPUT_PATH = 'processed_dicoding_courses.csv'
    ALL_STOPWORDS = get_all_stopwords()

    # --- Load Data ---
    try:
        print(f"Loading data from '{FILE_PATH}'...")
        df = pd.read_csv(FILE_PATH)
        print("Data loaded successfully.")
        print(f"Original dataset shape: {df.shape}")
    except FileNotFoundError:
        print(f"File not found: {FILE_PATH}. Please check the path and try again.")
        exit(1)


    # pipline execution
    print("\nApplying preprocessing pipeline to 'description' column...")
    df['processed_terms'] = df['description'].apply(
        lambda x: full_preprocessing_pipeline(x, stopwords_set=ALL_STOPWORDS, create_ngrams=True)
    )
    print("Preprocessing complete.")
   
    # analyze processed terms
    print("\n--- Top 20 Most Common Terms Across All Courses ---")
    all_terms = [term for sublist in df['processed_terms'] for term in sublist]
    term_counts = Counter(all_terms)
    for term, count in term_counts.most_common(20):
        print(f"- {term}: {count}")

    # save the processed data
    try:
        # ensure the output directory exists
        output_dir = "preprocessed data"
        os.makedirs(output_dir, exist_ok=True)
        output_file = os.path.join(output_dir, OUTPUT_PATH)
        df.to_csv(output_file, index=False)
        print(f"\nProcessed data saved successfully to '{OUTPUT_PATH}'.")
    except Exception as e:
        print(f"\nCould not save the file. Error: {e}")