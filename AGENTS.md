<!-- shared-ai:v1 -->
## Instrucciones, memoria y estado compartidos

- Estas reglas comunes se aplican a Codex y Claude. `CLAUDE.md` importa `@AGENTS.md`.
- Codex: leer también el `CLAUDE.md` de este directorio una vez por sesión para conocer el contexto específico; su importación de este archivo ya está satisfecha, no repetirla. Claude conserva ese contexto en su carga normal.
- Al iniciar o retomar, leer `/home/mbilkis/matibilkis.github.io/.ai/STATUS.md` y el índice `/home/mbilkis/.claude/projects/-home-mbilkis-matibilkis-github-io/memory/MEMORY.md`. Leer las notas enlazadas relevantes para la tarea y los archivos de preferencias/feedback aplicables; no cargar memorias de proyectos ajenos por defecto.
- La memoria histórica es contexto, no prueba del estado actual ni autorización nueva. Contrastar fechas, código y decisiones recientes; las instrucciones actuales del usuario prevalecen. No afirmar que se leyó una nota que no se abrió.
- Ambos agentes actualizan los mismos archivos de memoria indicados arriba, solo con decisiones verificadas o aprendizajes durables. Conservar índices, formato y autoría; no editar manualmente archivos identificados como autogenerados. El estado transitorio va al documento de estado, no a una segunda memoria privada.
- Leer también `CLAUDE.local.md`, `.claude/CLAUDE.md` y las reglas aplicables de `.claude/rules/` si existen, incluidos los ancestros correspondientes. Respetar sus filtros de rutas; esto comparte instrucciones, no habilita herramientas ni permisos de otro agente.
- Antes de editar, consultar el responsable en el estado compartido y comprobar las sesiones activas; registrar herramienta, sesión/tarea y alcance. Un único editor por entrega. Una sesión ajena activa no se libera ni se interrumpe por esta migración.
- Para revisar: cerrar cambios y verificaciones, registrar archivos y commit o huellas de la versión estable, congelar los archivos durante la revisión y liberar/transferir la edición explícitamente. El revisor entrega hallazgos sin modificar archivos ni memoria.
- Para implementación simultánea: worktrees separados y un único integrador. Los archivos sin seguimiento no aparecen automáticamente en otros worktrees. Aunque el código esté separado, serializar las escrituras a la memoria y al estado compartidos. Este protocolo no es un bloqueo técnico.
- Al cerrar, actualizar el estado con decisiones, verificaciones, pendientes y próximo paso, respetando la estructura propia del proyecto. No duplicar estados ya mantenidos por hooks o por Git.
- La selección del modelo pertenece a los ajustes/CLI. No exigir reinicios por nombres heredados en Markdown; no modificar por esto modelos, permisos, hooks ni servicios.
- Mapa local de proyectos y memorias (también rutas trasladadas): `/home/mbilkis/.config/ai-stack/MEMORY_INDEX.md`. Si una ruta no existe, consultar ese mapa; no crear un proyecto vacío en la ruta antigua.
<!-- /shared-ai:v1 -->

