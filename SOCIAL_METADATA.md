# Metadatos de Compartir en Redes Sociales

## 🎯 Configuración Implementada

Se han añadido metadatos completos y optimizados para compartir en redes sociales:

### ✅ Metadatos Open Graph (OG)
- `og:type`: website
- `og:locale`: es_ES
- `og:site_name`: Oculus Lab
- `og:url`: https://oculuslab.dev/
- `og:title`: Oculus Lab - Rompiendo Barreras, Creando Realidades
- `og:description`: Descripción profesional
- `og:image`: Imagen de Cloudinary (1200x630px, optimizada)
- `og:image:secure_url`: URL segura para HTTPS
- `og:image:type`: image/png
- `og:image:alt`: Texto alternativo descriptivo

### ✅ Metadatos Twitter/X
- `twitter:card`: summary_large_image (para mostrar miniatura grande)
- `twitter:site`: @oculuslab
- `twitter:creator`: @oculuslab
- `twitter:url`: URL canónica
- `twitter:title`, `twitter:description`, `twitter:image`: Mismos que OG
- `twitter:image:alt`: Descripción de la imagen

### ✅ JSON-LD Schema.org
Estructura JSON-LD para mejor indexación por buscadores:
- Tipo: Organization
- Datos de contacto
- URLs de redes sociales
- Logo y descripción

### ✅ HTML Namespace
Se añadió `prefix="og: http://ogp.me/ns#"` en el tag `<html>` para validación correcta de OG tags

## 🔧 Por qué WhatsApp podría no mostrar la miniatura

### Razones comunes:
1. **Sitio no está deployado**: WhatsApp necesita acceder a la URL pública para hacer scraping
2. **URL no es accesible**: Verifica que `https://oculuslab.dev/` responda correctamente
3. **Cache de WhatsApp**: Limpia el caché de la aplicación
4. **Imagen bloqueada**: La imagen de Cloudinary es accesible (verificado con curl)

## 📋 Cómo testear

### Opción 1: Facebook Sharing Debugger
```
https://developers.facebook.com/tools/debug/sharing/
```
- Pegauna la URL y haz clic en "Scrape Again"
- Verá exactamente qué ve WhatsApp/Facebook

### Opción 2: Twitter Card Validator
```
https://cards-dev.twitter.com/validator
```
- Valida los metadatos de Twitter

### Opción 3: Verificar metadatos locales
```bash
npm run dev
# Luego inspecciona el HTML en la pestaña <head>
```

## 🚀 Para Deployar en Producción

Cuando despliegues el sitio:

1. **Actualiza la URL** en `index.html`:
   - Reemplaza `https://oculuslab.dev/` con tu dominio final
   - En TODOS los tags: `og:url`, `twitter:url`, JSON-LD `"url"`

2. **Verifica que HTTPS esté activo** en tu servidor

3. **Limpia los cachés** en redes sociales:
   - Facebook: Facebook Sharing Debugger → "Scrape Again"
   - Twitter: Card Validator → Re-validar
   - WhatsApp: Reenvía el enlace

## 📊 Información de la Imagen

- **URL**: https://res.cloudinary.com/dzzvj8b6j/image/upload/v1763594200/image_feftyn.png
- **Dimensiones**: 1200x630 (proporción correcta para OG)
- **Formato**: PNG
- **Tamaño**: ~691KB
- **Estado**: ✅ Accesible públicamente
- **Cache**: 30 días

## 💡 Recomendaciones Adicionales

Para mejorar aún más el compartir:

1. **Añadir Open Graph Image Altura**: ✅ Ya incluido
2. **Usar HTTPS**: ✅ Configurado
3. **Título y descripción atractivos**: ✅ Ya tienen
4. **Imagen de alta calidad**: ✅ 1200x630px óptima
5. **JSON-LD Schema**: ✅ Ya incluido

## ⚠️ Notas Importantes

- Los metadatos están **completamente configurados** y listos para producción
- La imagen está **hosteada en Cloudinary** (CDN segura y rápida)
- Una vez que despliegues el sitio en su dominio final, todo debería funcionar perfectamente
- WhatsApp cachea los metadatos, así que después de deployar pueden pasar **5-10 minutos** antes de ver cambios
