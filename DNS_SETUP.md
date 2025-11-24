# Configuración de DNS para Dominio Personalizado

## 🌐 Tu Dominio: www.jovenesambientalistas.shop

Ya he configurado tu aplicación para usar tu dominio personalizado. Ahora necesitas configurar los DNS en Hostinger.

---

## ⚙️ Cambios Realizados

### 1. Actualizado GitHub Actions Workflow
- ✅ Cambiado `npm ci` a `npm install --legacy-peer-deps` para resolver conflicto de React 19

### 2. Removido basePath
- ✅ Eliminado `/guiapptour-github.io` de `next.config.mjs`
- ✅ Ahora el sitio funcionará directamente en tu dominio sin prefijos

### 3. Archivo CNAME Configurado
- ✅ Creado `public/CNAME` con `www.jovenesambientalistas.shop`

---

## 📝 Pasos para Completar la Configuración

### Paso 1: Haz Push de los Cambios

```bash
git add .
git commit -m "Fix GitHub Actions and configure custom domain"
git push origin main
```

### Paso 2: Configurar DNS en Hostinger

#### Opción A: Para www.jovenesambientalistas.shop (Recomendado)

1. Ve a tu panel de Hostinger
2. Selecciona el dominio **jovenesambientalistas.shop**
3. Ve a **DNS / Zona DNS**
4. **Agrega este registro CNAME**:

| Tipo | Nombre | Valor | TTL |
|------|--------|-------|-----|
| CNAME | www | BORUTO641.github.io | 14400 |

#### Opción B: Para Apex Domain (jovenesambientalistas.shop sin www)

Si quieres que **jovenesambientalistas.shop** (sin www) también funcione:

1. **Agrega estos registros A**:

| Tipo | Nombre | Valor | TTL |
|------|--------|-------|-----|
| A | @ | 185.199.108.153 | 14400 |
| A | @ | 185.199.109.153 | 14400 |
| A | @ | 185.199.110.153 | 14400 |
| A | @ | 185.199.111.153 | 14400 |

> [!TIP]
> **Recomendado**: Configura ambas opciones (CNAME + registros A) para que tanto `www.jovenesambientalistas.shop` como `jovenesambientalistas.shop` funcionen.

---

### Paso 3: Configurar en GitHub Pages

1. Ve a: https://github.com/BORUTO641/guiapptour-github.io/settings/pages
2. Espera a que el workflow termine (2-5 minutos)
3. En **Custom domain**, debería aparecer `www.jovenesambientalistas.shop`
4. Si no aparece, escríbelo manualmente y haz clic en **Save**
5. **Marca la casilla "Enforce HTTPS"** (puede tardar unos minutos en estar disponible)

---

### Paso 4: Verificar

Una vez que los DNS se propaguen (puede tardar de 10 minutos a 48 horas, pero normalmente es 1-4 horas):

1. Visita: **http://www.jovenesambientalistas.shop**
2. El sitio debería cargar completamente con todos los estilos
3. Verifica que HTTPS funcione: **https://www.jovenesambientalistas.shop**

Puedes verificar la propagación DNS en: https://www.whatsmydns.net

---

## 🔧 Solución al Problema de Estilos

El problema de que "no salía nada del diseño" era porque:

1. **basePath incorrecto**: El sitio buscaba los archivos CSS/JS en `/guiapptour-github.io/_next/...`
2. **Solución**: Al usar dominio personalizado, el basePath no es necesario
3. **Ahora**: Los archivos se cargarán correctamente desde la raíz del dominio

---

## ⏱️ Timeline Esperado

| Tiempo | Evento |
|--------|--------|
| Ahora | Push de cambios |
| 2-5 min | GitHub Actions termina el build |
| 5-10 min | Sitio desplegado en `boruto641.github.io` |
| 1-4 horas | DNS propagado (puede ser más rápido) |
| 1-4 horas | Dominio personalizado funcionando |
| +10 min | HTTPS habilitado automáticamente |

---

## 🎯 Resultado Final

Una vez completado, tu sitio estará en:
- ✅ **https://www.jovenesambientalistas.shop** (con estilos y todo funcionando)
- ✅ **https://jovenesambientalistas.shop** (si configuraste los registros A)
- ✅ HTTPS automático y seguro
- ✅ Despliegue automático cada vez que hagas push a main

---

## ❓ Si Algo No Funciona

### El workflow sigue fallando
- Revisa los logs en: https://github.com/BORUTO641/guiapptour-github.io/actions
- El error debería estar resuelto con `--legacy-peer-deps`

### El dominio no resuelve
- Verifica los DNS en Hostinger
- Espera más tiempo (hasta 48 horas en casos extremos)
- Usa https://www.whatsmydns.net para verificar propagación

### Los estilos aún no cargan
- Asegúrate de que el archivo `CNAME` esté en la carpeta `public`
- Verifica que `basePath` NO esté en `next.config.mjs`
- Limpia caché del navegador (Ctrl + Shift + R)

---

## 🚀 Próximo Push

Los archivos que debes subir:
- `.github/workflows/deploy.yml` (actualizado)
- `next.config.mjs` (sin basePath)  
- `public/CNAME` (con tu dominio)

Comando:
```bash
git add .github/workflows/deploy.yml next.config.mjs public/CNAME
git commit -m "Fix GitHub Actions and configure custom domain"
git push origin main
```
