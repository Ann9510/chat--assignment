from fastapi import FastAPI
from fastapi.staticfiles import StaticFiles
from pydantic import BaseModel

class Chat(BaseModel):
    content:str

chats = []

app = FastAPI()

@app.post("/chat")
def creat_chat(chat:Chat):
    chats.append(chat)

@app.get("/chat")
def read_chat():
    return chats

app.mount("/", StaticFiles(directory='static', html=True), name='static')