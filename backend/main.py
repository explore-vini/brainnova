from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
import json
from openai import OpenAI
import time
from typing import Dict, Any
import yaml
from pydantic import BaseModel
import pandas as pd
import os
import uvicorn

# Definimos el modelo para el request
class AnalysisRequest(BaseModel):
    pregunta: str
    
class IAUsageData(BaseModel):
    technology: str
    total: float
    
with open('config.yml', 'r') as file:
    config = yaml.safe_load(file)
    
app = FastAPI()

# Configurar CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Cargar datos
try:
    comunidades2024 = json.load(open('comunidades2024.json', 'r', encoding='utf-8'))
    comunidades_in = json.load(open('comunidades_in.json', 'r', encoding='utf-8'))
    df_madurez = pd.read_csv('c3.csv')  # Cargar el CSV de madurez digital
    df_ia = pd.read_csv('INEusoIA2023.csv')  # Cargar el CSV de uso de IA
except Exception as e:
    print(f"Error cargando archivos: {e}")
    comunidades2024 = {}
    comunidades_in = {}
    df_madurez = None
    df_ia = None

def unificar_jsons_simple(json1: Dict[str, Any], json2: Dict[str, Any]) -> Dict[str, Any]:
    return {
        "Comunidades": json1,
        "ComunidadesAutonomas2024": json2
    }

def procesarGpt(datos: Dict[str, Any], pregunta: str) -> str:
    """Procesa la consulta a GPT"""
    client = OpenAI(api_key=config['api']['openai_key'])
    
    # Convertir datos a formato legible
    contexto = "Datos para analizar:\n" + json.dumps(datos, indent=2)
    
    fecha_actual = time.strftime("%d/%m/%Y")
    
    messages = [
        {
            "role": "system",
            "content": """Eres un experto en análisis de datos y generación de informes. 
            Genera un informe profesional y detallado que incluya:
            1. Resumen ejecutivo
            2. Análisis detallado de los datos
            3. Conclusiones y recomendaciones"""
        },
        {
            "role": "user",
            "content": f"""Fecha: {fecha_actual}
            Pregunta a analizar: {pregunta}
            {contexto}
            Por favor, genera un informe completo basado en estos datos."""
        }
    ]
    
    try:
        respuesta = client.chat.completions.create(
            model="gpt-4",
            messages=messages,
            temperature=0.3
        )
        return respuesta.choices[0].message.content
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Error en GPT: {str(e)}")

def procesarGptMadurez(datos: pd.DataFrame, pregunta: str) -> str:
    """Procesa la consulta a GPT para análisis de madurez digital"""
    client = OpenAI(api_key=config['api']['openai_key'])
    
    # Preparar resumen de los datos
    tech_sectors = [
        'J. Información y comunicaciones',
        'M. Actividades profesionales, científicas y técnicas'
    ]
    
    df_filtered = datos[
        (datos['SECTOR'].isin(tech_sectors)) & 
        (datos['UBICACIÓN'] == 'Comunitat Valenciana')
    ].copy()
    
    # Crear resumen estadístico
    contexto = df_filtered.groupby('SECTOR')['CANTIDAD'].describe().to_string()
    
    fecha_actual = time.strftime("%d/%m/%Y")
    
    messages = [
        {
            "role": "system",
            "content": """Como experto en análisis de madurez digital, genera un informe que incluya:
            1. Resumen ejecutivo sobre el estado de madurez digital
            2. Análisis por sectores tecnológicos
            3. Tendencias y patrones identificados
            4. Recomendaciones estratégicas"""
        },
        {
            "role": "user",
            "content": f"""Fecha: {fecha_actual}
            Análisis solicitado: {pregunta}
            
            Datos estadísticos:
            {contexto}
            
            Por favor, genera un análisis completo de la madurez digital."""
        }
    ]
    
    try:
        respuesta = client.chat.completions.create(
            model="gpt-4",
            messages=messages,
            temperature=0.3
        )
        return respuesta.choices[0].message.content
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Error en GPT: {str(e)}")

def procesarGptIA(datos: pd.DataFrame, pregunta: str) -> str:
    """Procesa la consulta a GPT para análisis de uso de IA"""
    client = OpenAI(api_key=config['api']['openai_key'])
    
    # Filtrar y procesar datos de IA
    datos_ia = datos[datos['Empresas con 10 o más empleados'].str.contains('G.1.[A-G]', na=False)].copy()
    
    # Convertir columnas numéricas
    columnas_numericas = ['Unnamed: 1', 'Unnamed: 2', 'Unnamed: 3', 'Unnamed: 4']
    for col in columnas_numericas:
        datos_ia[col] = pd.to_numeric(datos_ia[col].str.replace(',', '.'), errors='coerce')
    
    # Crear resumen estadístico
    contexto = "Uso de IA por tamaño de empresa:\n"
    for _, row in datos_ia.iterrows():
        tech = row['Empresas con 10 o más empleados'].split('% de empresas con tecnología IA ')[1].split('(2)')[0].strip()
        contexto += f"\n{tech}:\n"
        contexto += f"Total: {row['Unnamed: 1']}%\n"
        contexto += f"Pequeñas (10-49): {row['Unnamed: 2']}%\n"
        contexto += f"Medianas (50-249): {row['Unnamed: 3']}%\n"
        contexto += f"Grandes (250+): {row['Unnamed: 4']}%\n"
    
    fecha_actual = time.strftime("%d/%m/%Y")
    
    messages = [
        {
            "role": "system",
            "content": """Como experto en análisis de adopción de IA, genera un informe que incluya:
            1. Resumen ejecutivo sobre el uso de IA en empresas
            2. Análisis por tipo de tecnología y tamaño de empresa
            3. Tendencias y patrones en la adopción
            4. Recomendaciones para inversión en IA"""
        },
        {
            "role": "user",
            "content": f"""Fecha: {fecha_actual}
            Análisis solicitado: {pregunta}
            
            Datos estadísticos:
            {contexto}
            
            Por favor, genera un análisis completo del uso de IA y recomendaciones de inversión."""
        }
    ]
    
    try:
        respuesta = client.chat.completions.create(
            model="gpt-4",
            messages=messages,
            temperature=0.3
        )
        return respuesta.choices[0].message.content
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Error en GPT: {str(e)}")

@app.post("/api/analyze")
async def analyze(request: AnalysisRequest):
    """Endpoint para análisis"""
    try:
        if "¿Cuál es la madurez digital en la Comunidad Valenciana?" == request.pregunta:
            # Procesar pregunta sobre madurez digital
            if df_madurez is not None:
                resultado = procesarGptMadurez(df_madurez, request.pregunta)
            else:
                raise HTTPException(status_code=500, detail="Datos de madurez digital no disponibles")
        elif "¿Cuáles son las IA más utilizadas por las empresas?" == request.pregunta:
            # Procesar pregunta sobre uso de IA
            if df_ia is not None:
                resultado = procesarGptIA(df_ia, request.pregunta)
            else:
                raise HTTPException(status_code=500, detail="Datos de uso de IA no disponibles")
        else:
            # Procesar otras preguntas
            datos = unificar_jsons_simple(comunidades_in, comunidades2024)
            resultado = procesarGpt(datos, request.pregunta)
        
        return {"status": "success", "data": resultado}
        
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
    
    
@app.get("/api/ia-usage")
async def get_ia_usage():
    try:
        # Leer el CSV de uso de IA
        df = pd.read_csv('INEusoIA2023.csv', encoding='utf-8')
        
        # Filtrar solo las filas que contienen datos de uso de IA (G.1.A hasta G.1.G)
        ia_rows = df[df['Empresas con 10 o más empleados'].str.contains('G.1.[A-G]', na=False)]
        
        # Limpiar y preparar los datos
        ia_data = []
        for _, row in ia_rows.iterrows():
            technology = row['Empresas con 10 o más empleados'].split('% de empresas con tecnología IA ')[1].split('(2)')[0].strip()
            total = float(str(row['Unnamed: 1']).replace(',', '.'))
            ia_data.append({"technology": technology, "total": total})
        
        return {"status": "success", "data": ia_data}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
    

# if __name__ == "__main__":
#     uvicorn.run(app, host="0.0.0.0", port=8507)
    
if __name__ == "__main__":
    uvicorn.run(
        app,
        host="0.0.0.0",
        port=7543,
        ssl_keyfile=os.getenv('SSL_KEY'),
        ssl_certfile=os.getenv('SSL_CERT'),
        log_level="info"
    )
    
    