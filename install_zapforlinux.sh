#!/bin/bash

# Nome do usuário
USER_NAME=$(whoami)

# Caminho da pasta release-build e do destino na pasta pessoal
SOURCE_DIR="release-build/zapforlinux-webview-linux-x64"
DEST_DIR="/home/$USER_NAME/.zapforlinux"

# Verifica se a pasta de destino existe, caso contrário, cria
if [ ! -d "$DEST_DIR" ]; then
  mkdir -p "$DEST_DIR"
fi

# Copia o conteúdo da release-build para a pasta pessoal
cp -r "$SOURCE_DIR"/* "$DEST_DIR/"

# Caminho do arquivo .desktop
DESKTOP_FILE="/home/$USER_NAME/.local/share/applications/zapforlinux.desktop"

# Cria o arquivo .desktop
echo "[Desktop Entry]
Name=Zap Linux
Exec=$DEST_DIR/zapforlinux-webview
Icon=whatsapp
Terminal=false
Type=Application
Categories=Education;Language;
StartupWMClass=zapforlinux
X-GNOME-StartupWMClass=zapforlinux" > "$DESKTOP_FILE"

# Torna o arquivo .desktop executável
chmod +x "$DESKTOP_FILE"
sudo chown root:root /home/neurodancer/.zapforlinux/chrome-sandbox
sudo chmod 4755 /home/neurodancer/.zapforlinux/chrome-sandbox
echo "O aplicativo Zapforlinux foi instalado com sucesso."
