import { Car, PersonCar } from "./model/Car";
import { Certificate } from "./model/Certificate";
import { DriverLicense } from "./model/DriverLicense";
import { Person } from "./model/Person";

async function test() {
  await Car.sync({ alter: true });
  await Person.sync({ alter: true });
  await PersonCar.sync({ alter: true });
  await DriverLicense.sync({ alter: true });
  await Certificate.sync({ alter: true });

  const driverLicense = await DriverLicense.create({
    classes: "A, B, C",
  } as any);

  const person = await Person.create({
    firstname: "Stacey",
    lastname: "Starfish",
  } as any);

  person.setDriverLicense(driverLicense); // needs to be mapped to "driveLicense", as Sequelize creates a singular of the "driver" name, probably because of the 1 to 1 relation

  let certificate = await Certificate.create({ title: "Sequelize" } as any);
  person.addCertificate(certificate);
  certificate = await Certificate.create({ title: "Stoic" } as any);
  person.addCertificate(certificate);

  const car = await Car.create({ brand: "BWM" } as any);
  person.addCar(car);
}

async function load() {
  const data = await Person.findByPk(2, {
    include: [{ model: DriverLicense, as: "driverLicense" }, Certificate, Car], // as the foreign key for the relation between Person and DriverLicense has a separate alias, we have to provide the alias here
  });
  const person = data?.toJSON();
  console.log(person?.id);
}

// test();
load();
