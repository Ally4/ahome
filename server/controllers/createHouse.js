import sequelize from 'sequelize';
import houseRec from '../src/database/models/houses';

const createHouse = async (req, res) => {
  try {
    const house = await houseRec.create(req.body.image, req.body.description, req.body.location, req.body.numberofbedrooms,req.body.numberofbathrooms,req.body.status, req.body.houseId);
    return res.status(201).json({
      house,
    });
    
  } catch (error)  {console.log(`This is the error ${error}`)
    return res.status(500).json({
        error: error.message
    }
    )
    
}
}

export default createHouse;
