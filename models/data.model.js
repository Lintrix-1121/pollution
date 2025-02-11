module.exports = (sequelize_config, Sequelize) => {
    const data = sequelize_config.define('data', {
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },
        ammonia: {
          type: Sequelize.FLOAT,
          allowNull: false,
        },
        co: {
          type: Sequelize.FLOAT,
          allowNull: false,
        },
        pm25: {
          type: Sequelize.FLOAT,
          allowNull: false,
        },
        pm10: {
          type: Sequelize.FLOAT,
          allowNull: false,
        },
        timestamp: {
          type: Sequelize.DATE,
          defaultValue: Sequelize.NOW,
        },
      });
      return data;

};

