const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcrypt');
const prisma = new PrismaClient();

const create = (req, res) => {
    // Verificando se req.body está definido
    if (!req.body || !req.body.username || !req.body.password) {
      return res.status(400).json({ error: "Dados de entrada inválidos" });
    }
  
    const { username, password } = req.body;
    bcrypt.hash(password, 10, (hashError, hashedPassword) => {
      if (hashError) {
        return res.status(500).json({ error: "Erro ao criar usuário" });
      }
      
      prisma.user.create({
        data: {
          username,
          password: hashedPassword,
        },
      })
      .then(newUser => {
        res.status(201).json(newUser);
      })
      .catch(createError => {
        res.status(500).json({ error: "Erro ao criar usuário" });
      });
    });
  };
  
  
  

  const login = (prisma, bcrypt) => {
    return async (req, res) => {
      const { username, password } = req.body;
  
      try {
        const user = await prisma.user.findUnique({
          where: {
            username,
          },
        });
  
        if (!user) {
          throw new Error('Usuário não encontrado');
        }
  
        const passwordMatch = await bcrypt.compare(password, user.password);
  
        if (!passwordMatch) {
          throw new Error('Senha incorreta');
        }
  
        res.status(200).json(user);
      } catch (error) {
        res.status(401).json({ error: error.message });
      }
    };
  };
  
  // Para usar esta função em um contexto de servidor HTTP:
  // app.post('/login', loginHandler(prisma, bcrypt));
  


module.exports = {
    create,
    login
}
