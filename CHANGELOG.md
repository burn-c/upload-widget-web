# Changelog

Todas as mudanças notáveis deste projeto serão documentadas neste arquivo.

## [1.0.0] - 2026-07-02
### Adicionado
- Widget de upload principal com UI de arrastar e soltar
- Seleção de arquivos via diálogo nativo
- Compressão de imagens antes do envio (`src/utils/compress-image.ts`)
- Upload para storage via client HTTP (`src/http/upload-file-to-storage.ts`)
- Lista de uploads com itens individuais e estados (`src/components/upload-widget-upload-list.tsx`, `src/components/upload-widget-upload-item.tsx`)
- Barra de progresso circular customizada (`src/components/ui/circular-progress-bar.tsx`)
- Botão para minimizar/restaurar (`src/components/upload-widget-minimized-button.tsx`)
- Cabeçalho e título do widget (`src/components/upload-widget-header.tsx`, `src/components/upload-widget-title.tsx`)
- Store reativo para gerenciar a fila de uploads (`src/store/uploads.ts`)
- Utilitários: `download-url.ts`, `format-bytes.ts`
- Componentes UI básicos (`src/components/ui/button.tsx`)
- Integração com Tailwind CSS e configuração de build via Vite

### Observações
- Esta é a primeira versão funcional. Pontos a considerar para próximas versões: suporte a upload em paralelo configurável, integração de autenticação e testes automatizados.
