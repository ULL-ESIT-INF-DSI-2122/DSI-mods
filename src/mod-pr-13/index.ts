import * as mongoose from 'mongoose';
import {Athlete} from './models/interface';

mongoose.connect('mongodb://localhost:27017/athletes', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
}).then(() => {
  console.log('Connected to the database');
}).catch(() => {
  console.log('Something went wrong when conecting to the database');
});

const athlete = new Athlete({
  dni: '567',
  nombre: 'Jeff',
  apellidos: 'Perez',
  edad: 23,
  deporte: 'natacion',
  marca: 20,
});

athlete.save().then((result) => {
  console.log(result);
}).catch((error) => {
  console.log(error);
});
