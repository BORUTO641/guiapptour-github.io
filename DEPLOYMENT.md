# Guía de Despliegue en GitHub Pages con Dominio Personalizado

Esta guía te ayudará a desplegar tu aplicación Next.js en GitHub Pages y conectarla con un dominio personalizado de Hostinger.

## 📋 Requisitos Previos

- Tener una cuenta de GitHub
- Tener un dominio en Hostinger
- Git instalado en tu computadora

---

## Parte 1: Subir el Código a GitHub

### 1. Inicializar Git (si no lo has hecho)

Si aún no tienes un repositorio Git en tu proyecto, abre la terminal en la carpeta del proyecto y ejecuta:

```bash
git init
git add .
git commit -m "Initial commit"
```

### 2. Conectar con el Repositorio de GitHub

```bash
git remote add origin https://github.com/BORUTO641/guiapptour-github.io.git
git branch -M main
git push -u origin main
```

> [!TIP]
> Si ya tenías un repositorio Git configurado, solo necesitas hacer `git push origin main` para subir tus cambios.

---

## Parte 2: Habilitar GitHub Pages

### 1. Ir a la Configuración del Repositorio

1. Ve a tu repositorio: https://github.com/BORUTO641/guiapptour-github.io
2. Haz clic en **Settings** (Configuración)
3. En el menú lateral izquierdo, haz clic en **Pages**

### 2. Configurar la Fuente de Despliegue

1. En **Source** (Fuente), selecciona **Deploy from a branch**
2. En **Branch**, selecciona `gh-pages` y la carpeta `/ (root)`
3. Haz clic en **Save**

### 3. Esperar el Despliegue

El primer despliegue puede tardar unos minutos. GitHub Actions automáticamente:
- Instalará las dependencias
- Compilará tu aplicación
- Desplegará los archivos en la rama `gh-pages`

### 4. Verificar el Despliegue

1. Ve a la pestaña **Actions** en tu repositorio
2. Verifica que el workflow "Deploy to GitHub Pages" se haya completado exitosamente
3. Tu sitio estará disponible en: `https://boruto641.github.io/guiapptour-github.io/`

> [!IMPORTANT]
> Si ves errores en el workflow de GitHub Actions, revisa los logs para identificar el problema.

---

## Parte 3: Configurar Dominio Personalizado en Hostinger

### 1. Acceder al Panel de Control

1. Inicia sesión en [Hostinger](https://www.hostinger.com)
2. Ve a **Dominios** en el menú principal
3. Selecciona el dominio que quieres usar

### 2. Configurar Registros DNS

Para conectar tu dominio con GitHub Pages, necesitas agregar registros DNS. Hay dos opciones:

#### Opción A: Dominio Principal (recomendado)
Para usar `tudominio.com`:

1. Ve a **Administrar** → **DNS / Nameservers** → **DNS Zone**
2. **Elimina** cualquier registro A existente que apunte a otra IP
3. **Agrega** los siguientes registros A (GitHub Pages IPs):

| Tipo | Nombre | Valor | TTL |
|------|--------|-------|-----|
| A | @ | 185.199.108.153 | 14400 |
| A | @ | 185.199.109.153 | 14400 |
| A | @ | 185.199.110.153 | 14400 |
| A | @ | 185.199.111.153 | 14400 |

#### Opción B: Subdominio www
Para usar `www.tudominio.com`:

1. **Agrega** un registro CNAME:

| Tipo | Nombre | Valor | TTL |
|------|--------|-------|-----|
| CNAME | www | BORUTO641.github.io | 14400 |

> [!NOTE]
> **Recomendación**: Configura ambas opciones (registros A + CNAME) para que tanto `tudominio.com` como `www.tudominio.com` funcionen.

### 3. Guardar Cambios

1. Haz clic en **Save** o **Guardar cambios**
2. **Espera 24-48 horas** para que los cambios DNS se propaguen (normalmente toma 1-4 horas)

> [!TIP]
> Puedes verificar la propagación DNS en sitios como [whatsmydns.net](https://www.whatsmydns.net)

---

## Parte 4: Configurar Dominio Personalizado en GitHub

### 1. Agregar el Dominio en GitHub

1. Ve a tu repositorio: https://github.com/BORUTO641/guiapptour-github.io
2. Ve a **Settings** → **Pages**
3. En **Custom domain**, escribe tu dominio (ej: `tudominio.com` o `www.tudominio.com`)
4. Haz clic en **Save**

GitHub verificará automáticamente la configuración DNS.

### 2. Habilitar HTTPS

1. En la misma página de **Pages**
2. Marca la casilla **Enforce HTTPS**

> [!WARNING]
> Puede que tengas que esperar unos minutos después de agregar el dominio antes de poder habilitar HTTPS. GitHub necesita generar un certificado SSL.

### 3. Crear Archivo CNAME

Para que el dominio personalizado persista después de cada despliegue, crea un archivo CNAME en la carpeta `public`:

1. Crea el archivo `public/CNAME` en tu proyecto
2. Escribe tu dominio dentro del archivo (sin http/https):
   ```
   tudominio.com
   ```
   o
   ```
   www.tudominio.com
   ```
3. Haz commit y push:
   ```bash
   git add public/CNAME
   git commit -m "Add custom domain"
   git push origin main
   ```

---

## Parte 5: Verificación

### ✅ Checklist de Verificación

- [ ] El workflow de GitHub Actions se ejecuta sin errores
- [ ] La rama `gh-pages` se creó automáticamente
- [ ] El sitio funciona en `https://boruto641.github.io/guiapptour-github.io/`
- [ ] La configuración DNS está correcta en Hostinger
- [ ] El dominio personalizado está verificado en GitHub
- [ ] HTTPS está habilitado
- [ ] El sitio funciona en tu dominio personalizado
- [ ] Todas las páginas y el mapa cargan correctamente

### 🔍 Verificar Funcionalidad

1. **Navegación**: Prueba todas las rutas de tu aplicación
2. **Mapa**: Verifica que el mapa de Leaflet carga correctamente
3. **Imágenes**: Confirma que todas las imágenes se muestran
4. **Rutas**: Verifica que las rutas dinámicas funcionan

---

## 🐛 Solución de Problemas Comunes

### El sitio muestra error 404

**Causa**: El workflow de GitHub Actions no se ha ejecutado o falló.

**Solución**:
1. Ve a la pestaña **Actions** en tu repositorio
2. Revisa los logs del workflow
3. Si hay errores, corrígelos y haz push de nuevo

### Las imágenes no cargan

**Causa**: Las rutas de las imágenes no están usando el basePath correcto.

**Solución**: Asegúrate de usar rutas relativas o el helper de Next.js para imágenes. Las imágenes en la carpeta `public` deben referirse con `/guiapptour-github.io/nombre-imagen.jpg`.

### El mapa de Leaflet no funciona

**Causa**: CSS o JavaScript de Leaflet no se carga correctamente.

**Solución**: Verifica que los estilos de Leaflet estén importados correctamente en tu componente.

### El dominio personalizado no funciona

**Causas posibles**:
1. **DNS no propagado**: Espera más tiempo (hasta 48 horas)
2. **Configuración DNS incorrecta**: Verifica los registros en Hostinger
3. **Archivo CNAME faltante**: Asegúrate de tener el archivo `public/CNAME`

**Solución**:
```bash
# Verificar DNS desde terminal
nslookup tudominio.com
```

Los registros A deben apuntar a las IPs de GitHub Pages (185.199.108-111.153).

### Error "Mixed Content" en HTTPS

**Causa**: Algunos recursos se cargan a través de HTTP en lugar de HTTPS.

**Solución**: Asegúrate de que todos los recursos externos (CDNs, APIs) usen HTTPS.

---

## 🔄 Despliegues Futuros

Una vez configurado, cada vez que hagas cambios:

1. Haz commit de tus cambios:
   ```bash
   git add .
   git commit -m "Descripción de cambios"
   git push origin main
   ```

2. GitHub Actions automáticamente:
   - Compilará tu aplicación
   - Desplegará los cambios
   - El sitio se actualizará en 2-5 minutos

---

## 📚 Recursos Adicionales

- [Documentación de GitHub Pages](https://docs.github.com/en/pages)
- [Configurar dominio personalizado en GitHub Pages](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site)
- [Next.js Static Export](https://nextjs.org/docs/app/building-your-application/deploying/static-exports)
- [Soporte de Hostinger](https://www.hostinger.com/tutorials/dns)

---

## ❓ Preguntas Frecuentes

### ¿Puedo usar un dominio diferente después?

Sí, simplemente cambia el dominio en GitHub Settings → Pages y actualiza el archivo `public/CNAME`.

### ¿Cuánto tarda en desplegarse un cambio?

Normalmente 2-5 minutos después de hacer push a la rama `main`.

### ¿Puedo usar un subdominio?

Sí, configura un registro CNAME en Hostinger apuntando a `BORUTO641.github.io`.

### ¿GitHub Pages es gratis?

Sí, GitHub Pages es completamente gratis para repositorios públicos.
