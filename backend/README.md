# Proyek Certification Reccomendation System 📚

Proyek ini bertujuan untuk memberikan rekomendasi pekerjaan dan kursus online yang relevan berdasarkan minat dan tingkat keahlian pengguna.

## Struktur Folder 🗺️
```
FINAL PROJECT/
├── api/                  # Semua kode untuk membuat API (server).
│   ├── __init__.py
│   ├── dependencies.py   # Untuk me-load data saat server pertama kali jalan.
│   ├── schemas.py        # Menentukan bentuk data input dan output API.
│   └── routes/           # Berisi file-file untuk setiap endpoint API.
│       ├── __init__.py
│       └── recc.py       # Logika untuk endpoint /recommend.
│
├── mlops/                # Folder untuk virtual environment Python.
│
├── preprocessing/        # Skrip untuk membersihkan dan menyiapkan data awal.
│
├── scraping files/       # Kode yang digunakan untuk mengambil data dari web.
│
├── vektorisasi_dan_mapping/ # Logika inti dari sistem rekomendasi.
│   ├── __init__.py
│   ├── recc_engine.py  # Fungsi utama untuk memberi rekomendasi.
│   ├── create_jobProfile.py  # Untuk mengelompokkan data pekerjaan.
│   └── text_representation.py    # Untuk mencari kemiripan antara kursus dan pekerjaan.
│
├── main.py               # Titik masuk utama untuk menjalankan server API.
│
└── requirements.txt      # Daftar semua library Python yang dibutuhkan.
```

## Cara Menjalankan Proyek 🚂

Langkah-langkah untuk menjalankan proyek.

### 1. Setup Lingkungan Virtual

Lingkungan virtual (virtual environment) digunakan agar library yang kita install tidak tercampur dengan proyek lain.

```bash
# Buat lingkungan virtual bernama 'mlops'
python -m venv mlops

# Aktifkan lingkungan tersebut (untuk Windows)
.\mlops\Scripts\activate
```
Setelah diaktifkan, nama terminal Anda akan diawali dengan `(mlops)`.

### 2. Install Library yang Dibutuhkan

Install semua library yang ada di file `requirements.txt` dengan satu perintah.

```bash
pip install -r requirements.txt
```

### 3. Jalankan Pipeline Data

Sebelum server bisa dijalankan, kita perlu memproses data terlebih dahulu. Pastikan Anda sudah memiliki data mentah di folder yang sesuai, lalu jalankan skrip berikut secara berurutan dari dalam folder `vektorisasi_dan_mapping`:

1.  **`text_representation.py`**: Untuk membuat file `job_course_recommendations.json`.
2.  **`create_job_profile_v2.py`**: Untuk membuat file `job_role_profiles_v2.json` dari hasil langkah sebelumnya.

*Catatan: Pastikan path file di dalam skrip sudah benar.*

### 4. Jalankan Server API

Setelah data siap, jalankan server API dari direktori utama **`FINAL PROJECT`**.

```bash
uvicorn main:app --reload
```
* `main`: merujuk ke file `main.py`.
* `app`: merujuk ke objek `app = FastAPI()` di dalam `main.py`.
* `--reload`: membuat server otomatis restart jika ada perubahan kode.

Jika berhasil, Anda akan melihat pesan seperti ini di terminal:
```
INFO:     Uvicorn running on [http://127.0.0.1:8000](http://127.0.0.1:8000) (Press CTRL+C to quit)
```

### 5. Akses dan Uji Coba API

Buka browser Anda dan kunjungi alamat berikut:

**http://127.0.0.1:8000/docs**

Anda akan melihat halaman dokumentasi interaktif (Swagger UI) di mana Anda bisa menguji coba endpoint `/api/v1/recommend` secara langsung.

- Klik pada endpoint `/recommend`.
- Klik "Try it out".
- Masukkan input dalam format JSON seperti contoh di bawah, lalu klik "Execute".

**Contoh JSON Input:**
```json
{
  "topic_tags": [
    "Back End",
    "Data"
  ],
  "learning_path": [
    "Back-End",
    "Data Scientist"
  ],
  "proficiency_level": "Level: Dasar"
}
```

Server akan memberikan balasan berisi rekomendasi pekerjaan dan kursus yang sesuai. Selamat mencoba!
