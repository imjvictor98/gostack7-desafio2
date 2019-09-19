// Carregamento com o banco de dados e dos models, para que a aplicação
// conheça esses models
import Sequelize from 'sequelize';
import databaseConfing from '../config/database';

import User from '../app/models/User';

const models = [User];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(databaseConfing);

    models.map(model => model.init(this.connection));
  }
}

export default new Database();
