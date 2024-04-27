Beta no probado
```
npm i @bot-whatsapp-extensions/chatwoot
```

## Buscar y editar webhook

```bash
sudo nano src/wrapper.class.js

# Buscar la linea 
this.startServer(_options.port || 8002);    # Cambiar puerto si se usan otros whatsapp

# Se puede modificar el webhook buscando la linea:
app.post("/webhook-endpoint", (req, res) => {   # El apartado /webhook-endpoint es lo que deben colocar en el chatwoot

```
