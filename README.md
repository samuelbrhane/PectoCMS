# PectoCMS

A simple Content Management System (CMS) for managing words and phrases, built with a **Django REST API** and a **React + Vite** frontend.

It supports **CRUD operations**, **search**, **filtering**, and **pagination** for content management.

---

## Project Structure

```
PectoCMS/
├── backend/              # Django REST API for managing data
│   ├── manage.py
│   ├── requirements.txt  # Python dependencies
│   └── ...
├── frontend/             # React + Vite frontend for user interaction
│   ├── package.json      # Frontend dependencies
│   └── ...
├── .gitignore            # Git ignored files
└── README.md             # Project documentation (this file)
```

---

## Getting Started

### 1️⃣ **Clone the Repository**

```bash
git clone <https://github.com/samuelbrhane/PectoCMS.git>
cd PectoCMS
```

---

## **Backend Setup (Django)**

1. Navigate to the backend folder:

```bash
cd backend
```

2. Create and activate a virtual environment:

```bash
python -m venv venv
# Activate (Windows)
venv\Scripts\activate

# Activate (Linux/MacOS)
source venv/bin/activate
```

3. Install backend dependencies:

```bash
pip install -r requirements.txt
```

**Note:**

- If your Python version is **3.9 or higher**, uninstall `backports.zoneinfo` as it is built into Python 3.9+:

  ```bash
  pip uninstall backports.zoneinfo
  ```

- For Python versions **lower than 3.9**, this package is required.
- The backend's **`SECRET_KEY`** should typically be stored in an environment variable, but for this sample project, it was left as it is in the settings.

4. Apply migrations:

```bash
python manage.py makemigrations
python manage.py migrate
```

5. Load the initial JSON data into the database:

```bash
python manage.py load_data
```

> **Note:** Running `python manage.py load_data` only needs to be done **once after migrations**. You do **not** need to run `makemigrations` or `migrate` again unless you change the models.

6. Run the Django server:

```bash
python manage.py runserver
```

> Backend will be running at **`http://127.0.0.1:8000/`**

---

## **Frontend Setup (React + Vite)**

1. Navigate to the frontend folder:

```bash
cd frontend
```

2. Install frontend dependencies:

```bash
npm install
```

> **Note:** The frontend base URL for the API should typically be stored in an environment variable, but for this sample project, it is hardcoded.

3. Run the React development server:

```bash
npm run dev
```

> Frontend will be running at **`http://localhost:5173/`**

---

## **API Endpoints**

| Method | Endpoint       | Description              |
| ------ | -------------- | ------------------------ |
| GET    | `/words/`      | List all words           |
| POST   | `/words/`      | Add a new word           |
| GET    | `/words/<id>/` | Retrieve a specific word |
| PUT    | `/words/<id>/` | Update a specific word   |
| DELETE | `/words/<id>/` | Delete a specific word   |

---

## **Features**

- **View Words and Phrases:**

  - Paginated list of words and phrases stored in the database.
  - Includes word, translation, and example sentences.

- **Edit Words and Phrases:**

  - Edit words, translations, and example sentences via an editable form.

- **Search and Filter:**

  - Search bar to filter words and phrases by keyword.

- **Pagination:**

  - Dynamic pagination (5, 10, 25, 50, 100 items per page).

- **Responsive UI:**
  - User-friendly interface styled with **Tailwind CSS**.

---

## 🛠️ **Tech Stack**

- **Backend:** Django REST Framework (DRF), SQLite
- **Frontend:** React, Vite, TypeScript, Tailwind CSS
- **API Testing:** Axios

---
