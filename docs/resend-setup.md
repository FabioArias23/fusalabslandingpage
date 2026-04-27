# Guía de Configuración: Resend + Fusa Labs

Esta guía detalla los pasos necesarios para habilitar el envío de correos electrónicos desde la landing page de Fusa Labs utilizando **Resend** como proveedor de infraestructura de emails.

---

## 1. Creación de Cuenta
1. Acceder a [resend.com](https://resend.com).
2. Crear una cuenta utilizando un correo institucional o el de administración de la agencia.
3. Confirmar el correo electrónico de registro.

## 2. Configuración del Dominio en Resend
Para garantizar que los correos no lleguen a la carpeta de SPAM y tengan alta fiabilidad:

1. En el dashboard de Resend, navegar a la sección **Domains**.
2. Hacer clic en **Add Domain**.
3. Ingresar el dominio: `fusalabs.com` (o el dominio raíz correspondiente).
4. Seleccionar la región (usualmente `us-east-1`).

## 3. Configuración de DNS (Acción requerida para el Administrador del Dominio)
Resend generará una serie de registros DNS (generalmente registros TXT) que deben añadirse al panel de control del dominio (`fusalabs.com`).

### Registros a añadir:
*   **DKIM (DomainKeys Identified Mail):** Resend proporcionará 2 o 3 registros tipo `TXT` o `CNAME`. Estos sirven para firmar digitalmente los correos.
*   **SPF (Sender Policy Framework):** Un registro `TXT` que autoriza a los servidores de Resend a enviar correos en nombre de `fusalabs.com`.

> [!IMPORTANT]
> Una vez añadidos los registros en el panel DNS, hacer clic en **Verify** en el dashboard de Resend. La propagación puede tardar de unos minutos a un par de horas.

## 4. Generación de API Key
Una vez que el dominio figure como **Verified**:

1. Ir a la sección **API Keys** en Resend.
2. Hacer clic en **Create API Key**.
3. **Nombre:** `Fusa Landing Production`.
4. **Permiso:** `Full Access` (o restringido a `Sending` si se prefiere).
5. **Dominio:** Seleccionar `fusalabs.com`.

## 5. Entrega de Credenciales
Copia la API Key generada (comienza con `re_...`) y proporciónala al equipo de desarrollo para integrarla en el archivo `.env` del proyecto.

---

*Guía generada para el equipo de Fusa Labs.*
