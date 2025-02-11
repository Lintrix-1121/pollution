const db = require('../models');
const Data = db.data;



exports.PostSensor = async (req, res) => {
    try {
      const { ammonia, co, pm25, pm10 } = req.body;
  
      // Creating sensor record
      const newSensorData = await Data.create({
        ammonia,
        co,
        pm25,
        pm10,
      });
      res.status(201).json({ message: 'Sensor data saved successfully!', data: newSensorData });
        } catch (error) {
            console.error('Error saving sensor data:', error);
            res.status(500).json({ error: 'An error occurred while saving the sensor data.' });
        }
  
 }

 exports.GetSensorData = async (req, res) => {
  try {
    // Fetching sensor data from the database
    const sensorData = await Data.findAll({
      order: [['timestamp', 'DESC']], //Sorting by timestamp in descending order
    });

    res.status(200).json({ message: 'Sensor data retrieved successfully!', data: sensorData });
  } catch (error) {
    console.error('Error retrieving sensor data:', error);
    res.status(500).json({ error: 'An error occurred while retrieving the sensor data.' });
  }
};