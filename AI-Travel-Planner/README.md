uv init AI_Travel_Planner
uv python install cpython-3.10.18-windows-x86_64-none
uv python list
uv python install cpython-3.10.18-windows-x86_64-none

uv venv env
env\Scripts\activate

uv pip list

uv pip install langchain

uv pip install -r requirements.txt

uv add pandas vs uv install pandas

streamlit run streamlit_app.py

uvicorn main:app --host 0.0.0.0 --port 8000 --reload


uv pip install ipykernal