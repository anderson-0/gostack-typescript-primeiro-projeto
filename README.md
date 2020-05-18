# Recuperacao de Senha

**RF**

- O Usuario deve poder recuperar a senha ao informar seu email
- O Usuario deve receber um email com instrucoes para recuperar a senha ao informar seu email
- O Usuario deve poder definir uma nova senha

**RNF**

- Utilizar MailTrap para testar envio de emails em ambiente de dev
- Utilizar o Amazon SES para envios em producao
- O Envio de emails deve acontecer em segundo plano (background job)
**RN**

- O link enviado por email para resetar a senha deve expirar em 2h

# Atualizacao de Perfil

**RF**

- O usuario deve poder atualizar seu perfil

**RNF**

-

**RN**

- O usuario nao pode alterar seu email para um email ja utilizado
- Para atualizar sua senha, o usuario precisa informar a senha antiga
- Para atualizar sua senha, o usuario precisa confirmar a nova senha

# Painel do Prestador

**RF**

- O usuario deve poder listar os agendamentos de um dia especifico

- O usuario deve receber uma notificacao sempre que houver um novo agendamento

- O prestador deve poder visualizar as notificacoes nao lidas

**RNF**

- Os agendamentos do prestador no dia devem ser armazenados em cache

- As notificacoes do prestador devem ser armazenadas no MongoDB

**RN**

- A notificacao deve ter um status de lida/nao-lida para que o prestador possa controlar


# Agendamento de Servicos

**RF**

- O usuario deve poder listar todos os prestadores de servico cadastrados

- O usuario deve poder listas os dias de um mes com pelo menos 1 horario disponivel de um prestador

- O usuario deve poder listar horarios disponiveis em um dia especifico de um prestador

- O usuario deve poder realizar um novo agendamento com um prestador

**RNF**

- A listagem de prestadors de servicos deve ser armazenada em cache

**RN**
- Cada agendamento deve durar 1h exatamente
- Os agendamentos devem estar disponiveis de segunda a sexta das 8h as 18h
- O usuario nao pode agendar em um horario ja ocupado
- O usuario nao pode agendar em um horario que ja passou
- O usuario nao pode agendar servicos consigo mesmo
